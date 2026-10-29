/* Motor de regras independente da interface. Todas as operações são atômicas:
   atualizar a página retoma a última decisão, sem reaplicar pontos ou cartas. */
(function (root) {
  'use strict';
  const Challenges = root.Desafios || (typeof require==='function'?require('./desafios.js'):null);
  const COLORS = ['#f4827e', '#73b9f4', '#83d6b1', '#f2cc74', '#c6a0f5', '#f59bc4'];
  const AVATARS = ['🧭', '🔭', '🎒', '🦉', '🦊', '🦋', '🌿', '👑'];
  const RULES = Object.freeze({facil:10, medio:20, dificil:30, reward:2, penalty:2});
  const CARDS = {
    7:{id:'restauracao',title:'Mãos à obra',label:'Carta de restauração',text:'Você ajudou a restaurar um patrimônio histórico.',points:20,steps:0,icon:'temple'},
    16:{id:'descoberta',title:'Uma grande descoberta',label:'Carta de descoberta',text:'Documentos antigos encontrados por você revelam uma nova história.',points:15,steps:0,icon:'book'},
    24:{id:'conservacao',title:'Caminho preservado',label:'Carta de conservação',text:'Seu projeto de preservação recebeu apoio. Avance mais duas casas.',points:0,steps:2,icon:'leaf'},
    33:{id:'imprevisto',title:'Pausa para cuidar',label:'Carta de imprevisto',text:'Um monumento precisa de manutenção emergencial. Volte uma casa.',points:0,steps:-1,icon:'tools'},
    42:{id:'protecao',title:'Guardiões da memória',label:'Carta de proteção',text:'Sua campanha de preservação mobilizou a comunidade.',points:10,steps:0,icon:'shield'},
    49:{id:'restauracao',title:'História recuperada',label:'Carta de restauração',text:'A restauração de um edifício histórico foi concluída com a sua ajuda.',points:20,steps:0,icon:'temple'}
  };
  function makeRoute(base,length='long'){
    if(!['quick','long'].includes(length))throw new Error('Escolha o percurso rápido ou longo.');
    if(length==='long')return base.map(p=>({...p}));
    const seen=new Set();return base.filter((p,i)=>{if(seen.has(p.uf))return false;seen.add(p.uf);return true;}).map((p,i,a)=>({...p,...(i===a.length-1?base[base.length-1]:{})}));
  }
  function routeCards(length){return length==='quick'?Object.fromEntries(Object.entries(CARDS).map(([n,c])=>[Math.ceil(+n/2),c])):CARDS;}
  function randomInt(max, random) {
    if (random) return Math.floor(random()*max);
    // Rejeição remove o pequeno viés da operação módulo.
    if(root.crypto && root.crypto.getRandomValues){
      const limit = Math.floor(4294967296/max)*max, a = new Uint32Array(1);
      do {root.crypto.getRandomValues(a);} while(a[0]>=limit);
      return a[0]%max;
    }
    return Math.floor(Math.random()*max);
  }
  function rank(players) {
    return [...players].sort((a,b)=>b.score-a.score || b.correct-a.correct || a.wrong-b.wrong || (a.arrival||Infinity)-(b.arrival||Infinity) || a.id-b.id);
  }
  function shuffle(items, random) {
    const a=[...items]; for(let i=a.length-1;i>0;i--){const j=randomInt(i+1,random);[a[i],a[j]]=[a[j],a[i]];} return a;
  }
  class Game {
    constructor({route,questions,state,random}={}){
      this.baseRoute=route;this.route=makeRoute(route,state?.length||'long');this.cards=routeCards(state?.length||'long');this.questions=questions; this.random=random; this.state=state||null;
      if(state) this.validate(state);
    }
    create(config,{mode='mixed',length='long'}={}) {
      if(!Array.isArray(config)||![2,3,4].includes(config.length))throw new Error('Escolha 2, 3 ou 4 jogadores.');
      if(!['mixed','quiz'].includes(mode))throw new Error('Modo de partida inválido.');
      if(new Set(config.map(p=>p.color)).size!==config.length)throw new Error('Escolha uma cor diferente para cada jogador.');
      this.route=makeRoute(this.baseRoute,length);this.cards=routeCards(length);
      const now=new Date().toISOString();
      this.state={version:3,mode,length,introSeen:false,review:[],reviewStartedAtTurn:0,id:'exp-'+Date.now()+'-'+randomInt(100000),createdAt:now,updatedAt:now,turn:0,round:1,phase:'ready',arrivalCounter:0,turns:0,used:[],pending:null,log:[],players:config.map((p,i)=>({id:i,name:(p.name.trim()||'Jogador '+(i+1)).slice(0,24),color:p.color,avatar:p.avatar,position:0,score:0,correct:0,wrong:0,arrival:null,discoveries:{[this.route[0].uf]:now}}))};
      this.log('A expedição começou. Boa viagem!'); return this.state;
    }
    get player(){return this.state.players[this.state.turn];}
    clamp(n){return Math.max(0,Math.min(this.route.length-1,n));}
    need(phase){if(!this.state||this.state.phase!==phase)throw new Error('Aguarde a etapa atual terminar.');}
    log(text){this.state.log.unshift({text,at:new Date().toISOString()});this.state.log=this.state.log.slice(0,30);this.touch();}
    touch(){this.state.updatedAt=new Date().toISOString();}
    discover(player,uf){if(!player.discoveries[uf])player.discoveries[uf]=new Date().toISOString();}
    discoverPath(player,from,to){
      for(let i=Math.min(from,to);i<=Math.max(from,to);i++)this.discover(player,this.route[i].uf);
    }
    pick(uf){
      let deck=this.questions.filter(q=>q.uf===uf&&!this.state.used.includes(q.id));
      if(!deck.length){this.state.used=this.state.used.filter(id=>!this.questions.some(q=>q.id===id&&q.uf===uf));deck=this.questions.filter(q=>q.uf===uf);}
      if(!deck.length)throw new Error('Não há perguntas para '+uf);
      const q=deck[randomInt(deck.length,this.random)]; this.state.used.push(q.id);return q;
    }
    nextChallengeType(){
      const p=this.player;
      return this.state.mode==='quiz'?'quiz':Challenges.TYPES[(p.correct+p.wrong+p.id)%Challenges.TYPES.length];
    }
    roll(){
      this.need('ready');const p=this.player;if(p.arrival)throw new Error('Este jogador já concluiu.');
      const die=randomInt(6,this.random)+1,from=p.position,landing=this.clamp(from+die),uf=this.route[landing].uf,type=this.nextChallengeType();
      const q=type==='quiz'?this.pick(uf):null;
      const challenge=Challenges.create(type,{uf,ufs:[...new Set(this.route.map(x=>x.uf))],shuffle:items=>shuffle(items,this.random)});
      p.position=landing;this.discoverPath(p,from,landing);
      this.state.pending={die,from,landing,uf,questionId:q?.id||null,order:q?shuffle([0,1,2,3],this.random):[],challenge,presented:false,opened:false,selected:null,correct:null,bonusFrom:null,bonusTo:null,card:this.cards[landing+1]||null,cardFrom:null,cardTo:null};
      this.state.phase='question';this.log(p.name+' tirou '+die+' e chegou a '+uf+'.');return this.state.pending;
    }
    markPresented(){this.need('question');this.state.pending.presented=true;this.touch();}
    openChallenge(){this.need('question');if(!this.state.pending.presented)throw new Error('Aguarde a chegada do peão.');this.state.pending.opened=true;this.touch();}
    answer(option){
      this.need('question');const t=this.state.pending;
      if(t.challenge?.type&&t.challenge.type!=='quiz')throw new Error('Conclua o minijogo desta rodada.');
      if(!Number.isInteger(option)||option<0||option>3)throw new Error('Resposta inválida.');
      const q=this.questions.find(q=>q.id===t.questionId);t.selected=option;return this.resolve(option===q.answer);
    }
    interact(value){
      this.need('question');const t=this.state.pending;
      if(t.challenge.type==='map'&&!this.route.some(p=>p.uf===value))throw new Error('Estado inválido.');
      const result=Challenges.act(t.challenge,value);this.touch();
      if(result.done)this.resolve(result.success);
      return result;
    }
    clearMemory(){this.need('question');if(Challenges.clearMismatch(this.state.pending.challenge))this.touch();}
    resolve(success,{skipped=false}={}){
      this.need('question');const s=this.state,p=this.player,t=s.pending,q=this.questions.find(q=>q.id===t.questionId);
      t.correct=success;t.rewardPoints=t.challenge?.type!=='quiz'&&t.challenge?20:RULES[q.difficulty];
      if(t.challenge)t.challenge.status=success?'won':'lost';
      if(success){p.score+=t.rewardPoints;p.correct++;}else p.wrong++;
      t.bonusFrom=p.position;t.bonusTo=this.clamp(p.position+(success?RULES.reward:-RULES.penalty));p.position=t.bonusTo;
      this.discoverPath(p,t.bonusFrom,t.bonusTo);s.phase='feedback';
      s.review.push({id:s.id+':'+s.turns,playerId:p.id,round:s.round,uf:t.uf,house:t.landing+1,type:t.challenge.type,success:!!success,points:success?t.rewardPoints:0,questionId:t.questionId,selected:t.selected,challenge:JSON.parse(JSON.stringify(t.challenge)),skipped,at:new Date().toISOString()});
      this.log(p.name+(success?' concluiu o desafio: +'+t.rewardPoints+' pontos.':' não concluiu o desafio e recuou duas casas.'));return t;
    }
    continueFeedback(){
      this.need('feedback');const t=this.state.pending;
      if(t.card){const p=this.player;t.cardFrom=p.position;p.score+=t.card.points;t.cardTo=this.clamp(p.position+t.card.steps);p.position=t.cardTo;this.discoverPath(p,t.cardFrom,t.cardTo);this.state.phase='card';this.log(p.name+': '+t.card.label+'.');return 'card';}
      return this.completeTurn();
    }
    continueCard(){this.need('card');return this.completeTurn();}
    completeTurn(){
      const s=this.state,p=this.player;
      if(p.position===this.route.length-1&&!p.arrival){p.arrival=++s.arrivalCounter;this.log(p.name+' concluiu a expedição em '+p.arrival+'º lugar de chegada.');}
      s.turns++;
      if(s.players.every(p=>p.arrival)){s.phase='finished';this.log('Expedição concluída! '+rank(s.players)[0].name+' é o campeão por pontos.');return 'finished';}
      let next=s.turn;
      do{next=(next+1)%s.players.length;if(next===0)s.round++;}while(s.players[next].arrival);
      s.turn=next;s.pending=null;s.phase='ready';this.touch();return 'ready';
    }
    validate(s){
      if(![1,2,3].includes(s.version)||!Array.isArray(s.players)||![2,3,4].includes(s.players.length)||!Number.isInteger(s.turn)||s.turn<0||s.turn>=s.players.length||!['ready','question','feedback','card','finished'].includes(s.phase)||!Array.isArray(s.used)||!Array.isArray(s.log))throw new Error('Este salvamento não é compatível.');
      const ufs=[...new Set(this.route.map(p=>p.uf))];
      for(const [i,p] of s.players.entries())if(p.id!==i||!Number.isInteger(p.position)||p.position<0||p.position>=this.route.length||!Number.isFinite(p.score)||p.score<0||typeof p.name!=='string'||!p.discoveries||!COLORS.includes(p.color)||!AVATARS.includes(p.avatar)||!Number.isInteger(p.correct)||p.correct<0||!Number.isInteger(p.wrong)||p.wrong<0)throw new Error('Os dados da partida estão incompletos.');
      if(new Set(s.players.map(p=>p.color)).size!==s.players.length)throw new Error('As cores dos jogadores devem ser diferentes.');
      s.mode=s.mode||'mixed';if(!['mixed','quiz'].includes(s.mode))throw new Error('Modo de partida inválido.');
      s.length=s.length||'long';s.introSeen=s.introSeen===undefined?true:!!s.introSeen;
      if(s.review===undefined){s.review=[];s.reviewStartedAtTurn=s.turns;}
      if(!Array.isArray(s.review)||s.review.length>5000||!Number.isInteger(s.reviewStartedAtTurn)||s.reviewStartedAtTurn<0)throw new Error('A revisão salva está inválida.');
      for(const r of s.review){
        if(!r||!s.players[r.playerId]||!ufs.includes(r.uf)||!Challenges.TYPES.includes(r.type)||typeof r.success!=='boolean'||!Number.isFinite(r.points)||!Number.isInteger(r.house)||r.house<1||r.house>this.route.length)throw new Error('Um registro da revisão está inválido.');
        if(r.type==='quiz'&&!this.questions.some(q=>q.id===r.questionId&&q.uf===r.uf))throw new Error('Uma pergunta da revisão está inválida.');
        Challenges.validate(r.challenge,r.uf,ufs);
      }
      if(s.phase!=='ready'&&s.phase!=='finished'){
        const t=s.pending;
        if(!t||!Number.isInteger(t.landing)||t.landing<0||t.landing>=this.route.length||t.uf!==this.route[t.landing].uf)throw new Error('O destino salvo é inválido.');
        // Salvos da primeira edição mantêm sua pergunta e o gabarito originais.
        if(!t.challenge)t.challenge={type:'quiz',uf:t.uf,attempts:0,status:s.phase==='question'?'active':t.correct?'won':'lost'};
        Challenges.validate(t.challenge,t.uf,ufs);
        if(t.challenge.type==='quiz'&&(!this.questions.some(q=>q.id===t.questionId&&q.uf===t.uf)||!Array.isArray(t.order)||t.order.length!==4||new Set(t.order).size!==4||t.order.some(i=>![0,1,2,3].includes(i))))throw new Error('A pergunta salva está inválida.');
        if(t.presented===undefined)t.presented=true;
        if(t.opened===undefined)t.opened=true;
        t.card=this.cards[t.landing+1]||null;
      }
      s.version=3;
    }

  }
  const api={Game,RULES,CARDS,COLORS,AVATARS,rank,randomInt,shuffle,makeRoute,routeCards};root.Jogadores=api;
  if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

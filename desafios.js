/* Minijogos locais e determinísticos. O estado inteiro é serializável para
   retomar peças trocadas e pares abertos sem perder a jogada. */
(function(root){
  'use strict';
  const TYPES=['quiz','puzzle','memory','map','mission','regions','sequence'];
  const REGIONS={Norte:'AC AP AM PA RO RR TO',Nordeste:'MA PI CE RN PB PE AL SE BA',Sudeste:'MG ES RJ SP',Sul:'PR SC RS','Centro-Oeste':'MS MT GO DF'};
  const regionOf=uf=>Object.keys(REGIONS).find(r=>REGIONS[r].split(' ').includes(uf));
  const MISSIONS=[
    {id:'ouvir',title:'Ouvir os moradores',text:'Reunir relatos e memórias de quem vive perto do patrimônio.',kind:'protect',why:'A participação da comunidade ajuda a reconhecer diferentes memórias e referências culturais.'},
    {id:'pesquisar',title:'Pesquisar e compartilhar',text:'Preparar uma visita educativa com fontes e histórias locais.',kind:'protect',why:'Pesquisar e compartilhar conhecimento aproxima as pessoas de seu patrimônio.'},
    {id:'registrar',title:'Registrar e comunicar',text:'Fotografar um dano sem tocar no bem e avisar os responsáveis.',kind:'protect',why:'O registro ajuda a comunicar o problema e permite que os responsáveis avaliem o cuidado necessário.'},
    {id:'orientar',title:'Buscar orientação',text:'Consultar a equipe responsável antes de propor uma intervenção.',kind:'protect',why:'Intervenções precisam de avaliação adequada. Em bens tombados pelo Iphan, obras exigem autorização prévia.'},
    {id:'riscar',title:'Deixar sua marca',text:'Riscar suas iniciais numa parede histórica para guardar uma lembrança.',kind:'risk',why:'Riscos alteram o bem físico. A lembrança pode ficar numa fotografia permitida, sem danificar o lugar.'},
    {id:'retirar',title:'Levar um pedacinho',text:'Retirar uma peça antiga do local para montar uma coleção particular.',kind:'risk',why:'Retirar uma peça pode causar perda material e separar o objeto de seu contexto.'},
    {id:'pintar',title:'Reformar por conta própria',text:'Cobrir uma pintura antiga sem consultar a equipe responsável.',kind:'risk',why:'Uma intervenção sem avaliação pode apagar características e vestígios importantes.'},
    {id:'excluir',title:'Decidir sem a comunidade',text:'Criar a exposição sem ouvir as pessoas ligadas à história do lugar.',kind:'risk',why:'Excluir a comunidade empobrece a construção coletiva das memórias e dos significados do patrimônio.'}
  ];
  const INFO={
    quiz:{name:'Quiz do patrimônio',icon:'book',subtitle:'Conhecimento que faz você avançar.',points:null},
    puzzle:{name:'Restaure a fotografia',icon:'temple',subtitle:'Troque as peças e revele um patrimônio.',points:20},
    memory:{name:'Memórias do Brasil',icon:'compass',subtitle:'Encontre os quatro pares de fotografias.',points:20},
    map:{name:'Cartógrafo por um dia',icon:'locate',subtitle:'Mostre que você conhece o nosso território.',points:20},
    mission:{name:'Guardiões do patrimônio',icon:'shield',subtitle:'Separe atitudes de cuidado e de risco.',points:20},
    regions:{name:'Conexões do Brasil',icon:'route',subtitle:'Conecte fotografias às regiões brasileiras.',points:20},
    sequence:{name:'Rota da memória',icon:'flag',subtitle:'Observe quatro destinos e refaça a sequência.',points:20}
  };
  function create(type,{uf,ufs,shuffle}){
    if(!TYPES.includes(type))throw new Error('Tipo de desafio inválido.');
    const c={type,uf,status:'active',attempts:0};
    if(type==='puzzle'){
      c.tiles=shuffle([0,1,2,3,4,5]);
      if(c.tiles.every((x,i)=>x===i))[c.tiles[0],c.tiles[1]]=[c.tiles[1],c.tiles[0]];
      c.selected=null;c.limit=12;
    }
    if(type==='memory'){
      const chosen=[uf,...shuffle(ufs.filter(x=>x!==uf)).slice(0,3)];
      c.tiles=shuffle([...chosen,...chosen]);c.flipped=[];c.matched=[];c.limit=9;
    }
    if(type==='map'){c.limit=2;c.guesses=[];}
    if(type==='mission'){c.deck=shuffle(['protect','risk'].flatMap(k=>shuffle(MISSIONS.filter(m=>m.kind===k).map(m=>m.id)).slice(0,3)));c.answers=[];c.hits=0;c.limit=6;}
    if(type==='regions'){
      const otherRegions=shuffle(Object.keys(REGIONS).filter(r=>r!==regionOf(uf))).slice(0,2);
      c.tiles=shuffle([uf,...otherRegions.map(r=>shuffle(ufs.filter(x=>regionOf(x)===r))[0])]);
      c.regions=shuffle(c.tiles.map(regionOf));c.matched=[];c.selected=null;c.last=null;c.limit=6;
    }
    if(type==='sequence'){c.sequence=shuffle([uf,...shuffle(ufs.filter(x=>x!==uf)).slice(0,3)]);c.choices=shuffle(c.sequence);c.entered=[];c.stage='observe';c.errors=0;c.limit=2;}
    return c;
  }
  function act(c,value){
    if(c.status!=='active')throw new Error('Este desafio já terminou.');
    let win=false,lose=false;
    if(c.type==='puzzle'){
      if(!Number.isInteger(value)||value<0||value>5)throw new Error('Peça inválida.');
      if(c.selected===null)c.selected=value;
      else if(c.selected===value)c.selected=null;
      else{[c.tiles[c.selected],c.tiles[value]]=[c.tiles[value],c.tiles[c.selected]];c.selected=null;c.attempts++;win=c.tiles.every((x,i)=>x===i);lose=!win&&c.attempts>=c.limit;}
    }else if(c.type==='memory'){
      if(!Number.isInteger(value)||value<0||value>7)throw new Error('Carta inválida.');
      if(c.flipped.length===2)throw new Error('Aguarde as duas cartas voltarem.');
      if(c.matched.includes(value)||c.flipped.includes(value))throw new Error('Esta carta já está aberta.');
      c.flipped.push(value);
      if(c.flipped.length===2){c.attempts++;const [a,b]=c.flipped;if(c.tiles[a]===c.tiles[b]){c.matched.push(a,b);c.flipped=[];}win=c.matched.length===8;lose=!win&&c.attempts>=c.limit;}
    }else if(c.type==='map'){
      if(typeof value!=='string'||!/^[A-Z]{2}$/.test(value))throw new Error('Selecione um estado no mapa.');
      if(c.guesses.includes(value))throw new Error('Você já tentou esse estado. Escolha outro.');
      c.guesses.push(value);c.attempts++;win=value===c.uf;lose=!win&&c.attempts>=c.limit;
    }else if(c.type==='mission'){
      if(!['protect','risk'].includes(value))throw new Error('Escolha uma das duas atitudes.');
      const card=MISSIONS.find(m=>m.id===c.deck[c.answers.length]);
      c.answers.push(value);c.attempts++;if(value===card.kind)c.hits++;
      if(c.answers.length===6){win=c.hits>=4;lose=!win;}
    }else if(c.type==='regions'){
      if(typeof value!=='string')throw new Error('Escolha uma fotografia e depois uma região.');
      if(value.startsWith('photo:')){
        const i=Number(value.slice(6));if(!Number.isInteger(i)||i<0||i>2||c.matched.includes(i))throw new Error('Escolha uma fotografia disponível.');
        c.selected=c.selected===i?null:i;c.last=null;
      }else if(value.startsWith('region:')){
        const region=value.slice(7);if(c.selected===null||!c.regions.includes(region)||c.matched.some(i=>regionOf(c.tiles[i])===region))throw new Error('Selecione uma fotografia antes de conectar.');
        const good=region===regionOf(c.tiles[c.selected]);c.attempts++;c.last={index:c.selected,region,good};
        if(good){c.matched.push(c.selected);c.selected=null;}
        win=c.matched.length===3;lose=!win&&c.attempts>=c.limit;
      }else throw new Error('Conexão inválida.');
    }else if(c.type==='sequence'){
      if(value==='recall'&&c.stage==='observe'){c.stage='recall';}
      else{
        if(c.stage!=='recall'||!c.choices.includes(value))throw new Error('Observe a rota antes de começar.');
        c.attempts++;
        if(value===c.sequence[c.entered.length])c.entered.push(value);else c.errors++;
        win=c.entered.length===4;lose=!win&&c.errors>=c.limit;
      }
    }else throw new Error('Responda ao quiz pelas alternativas.');
    if(win)c.status='won';else if(lose)c.status='lost';
    return {done:win||lose,success:win};
  }
  function clearMismatch(c){
    if(c.type==='memory'&&c.status==='active'&&c.flipped.length===2){c.flipped=[];return true;}return false;
  }
  function validate(c,uf,ufs){
    if(!c||!TYPES.includes(c.type)||c.uf!==uf||!['active','won','lost'].includes(c.status)||!Number.isInteger(c.attempts)||c.attempts<0)throw new Error('O desafio salvo está incompleto.');
    if(c.type==='puzzle'&&(!Array.isArray(c.tiles)||c.tiles.length!==6||new Set(c.tiles).size!==6||c.tiles.some(n=>!Number.isInteger(n)||n<0||n>5)||c.limit!==12||!(c.selected===null||(Number.isInteger(c.selected)&&c.selected>=0&&c.selected<6))))throw new Error('As peças salvas são inválidas.');
    if(c.type==='memory'){
      if(!Array.isArray(c.tiles)||c.tiles.length!==8||c.tiles.some(uf=>!ufs.includes(uf))||new Set(c.tiles).size!==4||!c.tiles.includes(uf)||[...new Set(c.tiles)].some(uf=>c.tiles.filter(x=>x===uf).length!==2)||c.limit!==9)throw new Error('As cartas salvas são inválidas.');
      for(const a of [c.matched,c.flipped])if(!Array.isArray(a)||new Set(a).size!==a.length||a.some(n=>!Number.isInteger(n)||n<0||n>7))throw new Error('Os pares salvos são inválidos.');
      if(c.flipped.length>2||c.matched.length%2||c.flipped.some(n=>c.matched.includes(n)))throw new Error('Os pares salvos estão incompletos.');
    }
    if(c.type==='map'&&(!Array.isArray(c.guesses)||c.guesses.some(g=>!ufs.includes(g))||new Set(c.guesses).size!==c.guesses.length||c.guesses.length!==c.attempts||c.limit!==2))throw new Error('As tentativas salvas são inválidas.');
    if(c.type==='mission'&&(!Array.isArray(c.deck)||c.deck.length!==6||new Set(c.deck).size!==6||c.deck.some(id=>!MISSIONS.some(m=>m.id===id))||!Array.isArray(c.answers)||c.answers.length>6||c.answers.some(a=>!['protect','risk'].includes(a))||c.answers.length!==c.attempts||c.hits!==c.answers.filter((a,i)=>a===MISSIONS.find(m=>m.id===c.deck[i]).kind).length||c.limit!==6))throw new Error('A missão salva está inválida.');
    if(c.type==='regions'&&(!Array.isArray(c.tiles)||c.tiles.length!==3||c.tiles.some(x=>!ufs.includes(x))||!c.tiles.includes(uf)||new Set(c.tiles.map(regionOf)).size!==3||!Array.isArray(c.regions)||c.regions.length!==3||new Set(c.regions).size!==3||c.regions.some(r=>!c.tiles.some(x=>regionOf(x)===r))||!Array.isArray(c.matched)||new Set(c.matched).size!==c.matched.length||c.matched.some(i=>!Number.isInteger(i)||i<0||i>2)||!(c.selected===null||(Number.isInteger(c.selected)&&c.selected>=0&&c.selected<3&&!c.matched.includes(c.selected)))||c.limit!==6))throw new Error('As conexões salvas são inválidas.');
    if(c.type==='sequence'&&(!Array.isArray(c.sequence)||c.sequence.length!==4||new Set(c.sequence).size!==4||c.sequence.some(x=>!ufs.includes(x))||!c.sequence.includes(uf)||!Array.isArray(c.choices)||c.choices.length!==4||new Set(c.choices).size!==4||c.choices.some(x=>!c.sequence.includes(x))||!Array.isArray(c.entered)||c.entered.length>4||c.entered.some((x,i)=>x!==c.sequence[i])||!['observe','recall'].includes(c.stage)||!Number.isInteger(c.errors)||c.errors<0||c.errors>2||c.attempts!==c.entered.length+c.errors||c.limit!==2))throw new Error('A rota da memória salva está inválida.');
  }
  const api={TYPES,INFO,REGIONS,regionOf,MISSIONS,create,act,clearMismatch,validate};root.Desafios=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

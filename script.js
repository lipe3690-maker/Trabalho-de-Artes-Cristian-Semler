/* Interface do jogo. Não exige bibliotecas, rede, servidor ou conta. */
(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const iconPaths={
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    compass:'<circle cx="12" cy="12" r="9.5"/><path d="m16.5 7.5-2.8 6.2-6.2 2.8 2.8-6.2Z"/><path d="m10.3 10.3 3.4 3.4"/>',
    arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>', 'arrow-left':'<path d="M20 12H5m5-5-5 5 5 5"/>',
    dice:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r=".7"/><circle cx="16" cy="8" r=".7"/><circle cx="12" cy="12" r=".7"/><circle cx="8" cy="16" r=".7"/><circle cx="16" cy="16" r=".7"/>',
    trophy:'<path d="M7 3h10v5a5 5 0 0 1-10 0V3Zm5 10v6m-5 2h10m-9-2h8M7 5H3v3a5 5 0 0 0 5 5m9-8h4v3a5 5 0 0 1-5 5"/>',
    sound:'<path d="m11 4-5 4H3v8h3l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    muted:'<path d="m11 4-5 4H3v8h3l5 4V4Zm5 5 6 6m0-6-6 6"/>',
    settings:'<path d="m9 3 1-1h4l1 3 3 1 3 1v4l-2 2-1 3-1 3h-4l-2-2-3-1-3-1v-4l2-2 1-3Z" transform="translate(0 1)"/><circle cx="12" cy="12" r="3"/>',
    external:'<path d="M14 3h7v7m0-7L10 14m-3-9H3v16h16v-5"/>',
    route:'<circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M8 5h6a4 4 0 0 1 0 8h-4a3 3 0 0 0 0 6h6"/>',
    play:'<path d="m8 4 12 8-12 8Z"/>', pause:'<path d="M8 5v14m8-14v14"/>',
    book:'<path d="M12 5v16M3 3l9 2 9-2v16l-9 2-9-2V3Z"/>',
    flag:'<path d="M5 22V3m0 1c4-5 9 5 14 0v11c-5 5-10-5-14 0"/>',
    save:'<path d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1ZM7 3v6h9V3M7 21v-8h10v8"/>',
    expand:'<path d="M3 9V3h6m6 0h6v6m0 6v6h-6m-6 0H3v-6"/>',
    locate:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
    search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',
    temple:'<path d="m2 9 10-6 10 6H2Zm2 11h16M6 9v8m6-8v8m6-8v8M2 22h20"/>',
    leaf:'<path d="M20 3C7 1 2 9 6 16S22 18 20 3ZM4 21 16 9"/>',
    tools:'<path d="m3 21 10-10m2 2a6 6 0 0 0 6-8l-4 4-3-3 4-4a6 6 0 0 0-8 6m-6 6 6 6"/>',
    shield:'<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
    check:'<circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/>',
    cross:'<circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/>',
    lock:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 6v2"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M3 17v4h18v-4"/>',
    refresh:'<path d="M20 8a9 9 0 1 0 1 8m-1-8V2m0 6h-6"/>'
  };
  function icon(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||iconPaths.compass}</svg>`;}
  function icons(root=document){$$('[data-icon]',root).forEach(el=>{if(el.getAttribute('class')){el.innerHTML=icon(el.dataset.icon);el.removeAttribute('data-icon');}else el.outerHTML=icon(el.dataset.icon);});}
  const heritage=uf=>window.PATRIMONIOS.find(s=>s.uf===uf);
  const diff={facil:'FÁCIL',medio:'MÉDIO',dificil:'DIFÍCIL'};
  const TEAM=['Cristian Semler','Davi Dario','Kauan','Hiago','Ana Laura'];
  const baseRoute=window.ROTA;
  const educationSource='https://www.gov.br/iphan/pt-br/patrimonio-cultural/educacao-patrimonial';
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  const time=iso=>new Date(iso).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  const date=iso=>new Date(iso).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'});
  let settings=Salvar.settings(),engine=null,board=null,screen='home',backScreen='home',busy=false,modalKind='',returnFocus=null,albumPlayer=0,confettiFrame=0;
  const modal=$('#modal'),modalContent=$('#modal-content');
  let playerCount=4,setupMode='mixed',setupLength='long',miniMap=null,memoryTimer=null,introTimer=null;
  let reviewPlayer='all',reviewFilter='all',reviewLimit=12;
  const setupPlayers=Jogadores.COLORS.slice(0,4).map((color,i)=>({name:'',avatar:Jogadores.AVATARS[i],color}));

  // Sons originais sintetizados: não há arquivos de áudio externos nem autoplay.
  const audio={
    context:null,musicTimer:null,unlocked:false,
    unlock(){if(!settings.sound&&!settings.music)return;try{if(!this.context)this.context=new(window.AudioContext||window.webkitAudioContext)();this.context.resume().catch(()=>{});this.unlocked=true;if(settings.music&&!this.musicTimer)this.startMusic();}catch(e){}},
    tone(f,t=.15,type='sine',gain=.06,delay=0){if(!this.context||this.context.state!=='running')return;const ctx=this.context,o=ctx.createOscillator(),g=ctx.createGain(),now=ctx.currentTime+delay;o.type=type;o.frequency.value=f;g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(gain,now+.012);g.gain.exponentialRampToValueAtTime(.0001,now+t);o.connect(g);g.connect(ctx.destination);o.start(now);o.stop(now+t+.04);},
    play(name){if(!settings.sound)return;this.unlock();const tunes={click:[[440,.07]],step:[[330,.065]],dice:[[190,.08],[240,.08],[300,.08],[360,.1]],correct:[[523,.15],[659,.17],[784,.25]],wrong:[[262,.2],[196,.25]],card:[[392,.15],[523,.2],[659,.3]],turn:[[392,.13],[523,.22]],win:[[523,.17],[659,.17],[784,.17],[1047,.5]]};(tunes[name]||tunes.click).forEach((n,i)=>this.tone(n[0],n[1],'sine',name==='step'?.018:.05,i*.12));},
    startMusic(){if(!this.unlocked||!settings.music||this.musicTimer)return;const phrase=()=>{[130.81,196,261.63,293.66,329.63,261.63,196,164.81].forEach((f,i)=>{this.tone(f,2,'sine',.013,i*.9);if(i%2===0)this.tone(f*2,2.6,'sine',.008,i*.9);});};phrase();this.musicTimer=setInterval(phrase,8000);},
    stopMusic(){if(this.musicTimer)clearInterval(this.musicTimer);this.musicTimer=null;},
    update(){if(settings.music&&this.unlocked){this.startMusic();}else this.stopMusic();}
  };
  document.addEventListener('pointerdown',()=>audio.unlock(),{once:true});
  document.addEventListener('keydown',()=>audio.unlock(),{once:true});
  window.addEventListener('trilha-step',()=>audio.play('step'));
  document.addEventListener('visibilitychange',()=>{if(document.hidden){audio.stopMusic();audio.context?.suspend();}else if(audio.unlocked){audio.context?.resume().catch(()=>{});audio.startMusic();}});

  function toast(message,error=false){const el=document.createElement('div');el.className='toast'+(error?' error':'');el.textContent=message;$('#toasts').append(el);setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),250);},3800);}
  function applySettings(){document.body.classList.toggle('reduce-motion',settings.reduced);const b=$('#sound-toggle');b.innerHTML=icon(settings.sound?'sound':'muted');b.setAttribute('aria-label',settings.sound?'Desativar sons':'Ativar sons');b.title=settings.sound?'Desativar sons':'Ativar sons';audio.update();}
  function persist(manual=false){if(!engine?.state)return false;const ok=Salvar.write('game',engine.state);updateResume();if(manual)toast(ok?'Partida salva neste navegador.':'O navegador bloqueou o salvamento. Exporte sua partida pelo menu de pausa.',!ok);return ok;}
  function updateResume(){const s=engine?.state||Salvar.read('game'),b=$('#resume-home');b.hidden=!s;b.innerHTML=icon(s?.phase==='finished'?'trophy':'play')+(s?.phase==='finished'?' Ver resultado':' Continuar partida');}
  function loadGame(){const s=Salvar.read('game');if(!s)return false;try{engine=new Jogadores.Game({route:baseRoute,questions:PERGUNTAS,state:s});return true;}catch(e){toast('Não foi possível retomar este salvamento. Você pode iniciar uma nova partida.',true);return false;}}
  function showScreen(name,{restore=true}={}){
    if(busy)return;
    if(engine?.state&&screen==='game')persist();
    closeModal();$$('.screen').forEach(el=>el.classList.toggle('active',el.id===name));screen=name;document.body.dataset.screen=name;
    window.scrollTo({top:0,behavior:'instant'});$('#main').focus({preventScroll:true});
    $$('.site-header button,.site-footer button').forEach(b=>b.disabled=name==='intro'&&b.dataset.action!=='sound');
    if(name==='home'){updateResume();stopConfetti();}
    if(name==='game'){if(!engine.state.introSeen){playIntro();return;}ensureBoard();renderBoard();if(restore)restorePhase();}
    if(name==='victory')renderVictory();
  }
  function openModal(html,kind='normal'){
    if(!modal.open)returnFocus=document.activeElement;
    if(miniMap){miniMap.destroy();miniMap=null;}clearTimeout(memoryTimer);
    modalContent.innerHTML=html;modalKind=kind;icons(modalContent);if(!modal.open)modal.showModal();modal.scrollTop=0;
    requestAnimationFrame(()=>{const focus=modalContent.querySelector('[autofocus]')||modalContent.querySelector('button:not([disabled]),a,input,select');focus?.focus({preventScroll:true});});
  }
  function closeModal(){if(modal.open)modal.close();modalKind='';if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});}
  function modalHeader(kicker,title){return `<div class="modal-header"><div><span class="eyebrow">${kicker}</span><h2 id="modal-title">${title}</h2></div><button class="modal-close" data-action="close-modal" aria-label="Fechar janela" title="Fechar">×</button></div>`;}
  modal.addEventListener('cancel',e=>{if(['question','mini','feedback','card'].includes(modalKind)||busy)e.preventDefault();else modalKind='';});
  modal.addEventListener('click',e=>{if(e.target===modal&&!['question','mini','feedback','card'].includes(modalKind)&&!busy)closeModal();});

  function renderSetup(){
    $('#player-setup').dataset.count=playerCount;
    $$('[data-action="player-count"]').forEach(b=>{const selected=+b.dataset.count===playerCount;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',selected);});
    $('#play-style').value=setupMode;
    $$('[name="route-length"]').forEach(el=>el.checked=el.value===setupLength);
    $('.challenge-lineup').hidden=setupMode==='quiz';
    $('#player-setup').innerHTML=setupPlayers.slice(0,playerCount).map((p,i)=>`<article class="setup-card" style="--player:${p.color}"><div class="explorer-id"><span>EXPLORADOR 0${i+1}</span>${icon('compass')}</div><div class="setup-avatar" id="setup-avatar-${i}">${p.avatar}</div><label class="field-label" for="player-name-${i}">SEU NOME</label><input id="player-name-${i}" data-player-name="${i}" maxlength="24" placeholder="Jogador ${i+1}" value="${esc(p.name)}" autocomplete="off"><span class="field-label">SEU COMPANHEIRO DE VIAGEM</span><div class="avatar-options" role="group" aria-label="Avatar do jogador ${i+1}">${Jogadores.AVATARS.map(a=>`<button type="button" class="avatar-choice ${p.avatar===a?'selected':''}" data-action="choose-avatar" data-player="${i}" data-avatar="${a}" aria-label="Avatar ${a}" aria-pressed="${p.avatar===a}">${a}</button>`).join('')}</div><span class="field-label">COR DO PEÃO</span><div class="color-options" role="group" aria-label="Cor do jogador ${i+1}">${Jogadores.COLORS.map((c,j)=>`<button type="button" class="color-choice ${p.color===c?'selected':''}" style="--swatch:${c}" data-action="choose-color" data-player="${i}" data-color="${c}" aria-label="${['Vermelho','Azul','Verde','Amarelo','Roxo','Rosa'][j]}" aria-pressed="${p.color===c}"></button>`).join('')}</div></article>`).join('');
  }
  $('#setup-form').addEventListener('submit',async e=>{
    e.preventDefault();if(busy)return;
    try{
      engine=new Jogadores.Game({route:baseRoute,questions:PERGUNTAS});engine.create(setupPlayers.slice(0,playerCount),{mode:setupMode,length:setupLength});persist();
      $('#setup-error').textContent='';playIntro();
    }catch(err){$('#setup-error').textContent=err.message;}
  });
  $('#setup-form').addEventListener('input',e=>{if(e.target.dataset.playerName!==undefined)setupPlayers[+e.target.dataset.playerName].name=e.target.value;});

  function playIntro(){
    clearTimeout(introTimer);showScreen('intro');stopConfetti();
    $('#intro-members').innerHTML=TEAM.map((name,i)=>`<span style="--i:${i}"><small>0${i+1}</small>${esc(name)}</span>`).join('');
    $('#intro-greeting').textContent=engine.state.players.map(p=>p.name).join(', ')+': o próximo capítulo começa com vocês.';
    $('#intro-route').textContent=(engine.state.length==='quick'?'JOGO RÁPIDO':'JOGO LONGO')+' · '+engine.route.length+' CASAS · '+engine.state.players.length+' EXPLORADORES';
    // Um novo nó reinicia a barra mesmo quando a abertura já foi vista antes.
    const progress=$('.intro-progress i');progress.replaceWith(progress.cloneNode());
    introTimer=setTimeout(()=>finishIntro(),8500);$('#intro-title').focus({preventScroll:true});
  }
  async function finishIntro(){
    if(screen!=='intro')return;clearTimeout(introTimer);engine.state.introSeen=true;engine.touch();persist();
    showScreen('game',{restore:false});board.reset();await announceTurn();
  }
  function ensureBoard(){
    if(board?.route===engine.route)return;if(board)board.destroy();
    board=new MapBoard($('#board-map'),{route:engine.route,cards:engine.cards,onState:uf=>{if(!busy)showHeritage(uf);},onHouse:n=>{if(!busy)showHeritage(engine.route[n].uf,`CASA ${n+1} DA TRILHA${engine.cards[n+1]?' · '+engine.cards[n+1].label.toUpperCase():''}`);}});
  }
  function renderBoard(mapPlayers=null){
    if(!engine?.state)return;
    const s=engine.state,p=engine.player,display=mapPlayers?.find(x=>x.id===p.id)||p,uf=engine.route[display.position].uf,state=heritage(uf);
    document.documentElement.style.setProperty('--active',p.color);
    $$('.site-header button,.game-toolbar button,.map-controls button,[data-action="focus"]').forEach(button=>{if(!['sound','save'].includes(button.dataset.action))button.disabled=busy;});
    $('#board-map').setAttribute('aria-busy',String(busy));
    $('#round-number').textContent=String(s.round).padStart(2,'0');
    $('#game-mode-badge').textContent=(s.length==='quick'?'RÁPIDO':'LONGO')+' · '+engine.route.length+' CASAS';
    $('#current-state').textContent=state.nome;
    $('#progress-label').textContent='CASA '+String(display.position+1).padStart(2,'0')+' / '+engine.route.length;
    const remaining=engine.route.length-1-display.position;$('#remaining-label').textContent=remaining+' casa'+(remaining===1?'':'s')+' restante'+(remaining===1?'':'s');
    $('#progress-bar').style.width=(display.position/(engine.route.length-1)*100)+'%';
    $('#active-player').innerHTML=`<span class="avatar-circle">${p.avatar}</span><div><h3>${esc(p.name)}</h3><p>EXPLORADOR 0${p.id+1} · ${p.score} PONTOS</p></div>`;
    $('#player-panels').innerHTML=s.players.map(player=>`<article class="player-panel ${s.turn===player.id?'current':''} ${player.arrival?'finished':''}" style="--player:${player.color}"><span class="avatar-circle">${player.avatar}</span><div class="player-info"><h4>${esc(player.name)} <span>${player.arrival?'CONCLUIU':s.turn===player.id?'SUA VEZ':''}</span></h4><p><span>${player.arrival?player.arrival+'º a chegar':'Casa '+(player.position+1)}</span><span class="correct-stat">✓ ${player.correct}</span><span class="wrong-stat">× ${player.wrong}</span></p></div><div class="player-score">${player.score}<small>PONTOS</small></div></article>`).join('');
    $('#last-log').textContent=s.log[0]?.text||'A expedição começou.';
    $('#album-summary').textContent=Object.keys(p.discoveries).length+' de 27 unidades federativas descobertas';
    const ready=s.phase==='ready'&&!busy,canStart=s.phase==='question'&&s.pending.presented&&!busy&&!modal.open;
    const info=Desafios.INFO[s.pending?.challenge?.type||engine.nextChallengeType()];
    $('#activity-preview').innerHTML=icon(info.icon)+'<span>'+esc(info.name)+'</span>';
    $('#player-panels').dataset.count=s.players.length;
    $('#roll-btn').disabled=!(ready||canStart);$('#roll-btn').dataset.action=canStart?'start-challenge':'roll';
    $('#roll-btn').innerHTML=icon(canStart?info.icon:'dice')+(ready?' LANÇAR DADO ':canStart?(s.pending.opened?' RETOMAR DESAFIO ':' INICIAR DESAFIO '):busy?' EXPLORANDO… ':' DESAFIO EM ANDAMENTO ')+(ready?'<kbd>↵</kbd>':'');
    $('#dice-hint').textContent=s.pending?'Dado '+s.pending.die+' · '+(canStart?'Seu peão chegou! Inicie o desafio.':s.phase==='question'?'Siga a expedição pelo mapa.':'Conhecimento e habilidade fazem parte da viagem.'):'Lance o dado e acompanhe cada casa do caminho.';
    const arrival=$('#arrival-panel');arrival.hidden=!canStart;
    if(canStart){const st=heritage(s.pending.uf);arrival.innerHTML=`<div class="arrival-seal">${icon('flag')}</div><div><small>CHEGOU! CASA ${s.pending.landing+1} · ${st.uf}</small><strong>${esc(st.nome)}</strong><span>${esc(info.name)} · ${esc(st.heritage.name)}</span></div><button class="btn btn-gold" data-action="start-challenge">Iniciar desafio ${icon('arrow')}</button>`;}
    if(board){board.renderPlayers(mapPlayers||s.players,s.turn);board.highlight(uf,Object.keys(p.discoveries));}
    if(s.pending&&!$('#dice').classList.contains('rolling'))setDice(s.pending.die);
  }
  const rotations={1:[0,0],2:[-90,0],3:[0,-90],4:[0,90],5:[90,0],6:[0,180]};
  function setDice(value){const d=$('#dice');const [x,y]=rotations[value];d.style.transform=`rotateX(${x}deg) rotateY(${y}deg)`;d.setAttribute('aria-label','Resultado do dado: '+value);}
  function snapshotPlayers(){return JSON.parse(JSON.stringify(engine.state.players));}
  function journeyMessage(title,detail){const hud=$('#journey-hud');hud.hidden=false;hud.innerHTML=`${icon('route')}<div><strong>${esc(title)}</strong><span>${esc(detail)}</span></div>`;}
  function updateWalk(house,count,total){
    const uf=engine.route[house].uf;$('#current-state').textContent=heritage(uf).nome;
    $('#progress-label').textContent='CASA '+String(house+1).padStart(2,'0')+' / '+engine.route.length;
    $('#remaining-label').textContent=(engine.route.length-1-house)+' casas restantes';
    $('#progress-bar').style.width=house/(engine.route.length-1)*100+'%';
    journeyMessage('PASSO '+count+' DE '+total,'Casa '+(house+1)+' · '+heritage(uf).nome);
  }
  async function playJourney(t,old){
    busy=true;renderBoard(old);$('#arrival-panel').hidden=true;
    try{
      const dice=$('#dice');dice.classList.remove('rolling');dice.style.removeProperty('transform');
      journeyMessage('O DESTINO ESTÁ NO DADO…',engine.player.name+', prepare seu peão.');
      if(!settings.reduced){audio.play('dice');dice.classList.add('rolling');await wait(settings.fast?650:1700);}
      dice.classList.remove('rolling');setDice(t.die);
      journeyMessage('TIROU '+t.die+'!','Agora acompanhe o peão andando pelo mapa.');
      if(!settings.reduced)await wait(settings.fast?350:750);
      $('#board-map').scrollIntoView({behavior:settings.reduced?'instant':'smooth',block:'center'});
      await board.fitJourney(t.from,t.landing);
      await board.move(engine.player.id,t.from,t.landing,{onStep:updateWalk});
      board.highlight(t.uf,Object.keys(engine.player.discoveries));
      journeyMessage('BEM-VINDO A '+heritage(t.uf).nome.toUpperCase(),'Seu desafio está esperando na casa '+(t.landing+1)+'.');
      if(!settings.reduced)await wait(settings.fast?300:700);
      engine.markPresented();persist();
    }catch(e){toast(e.message,true);engine.markPresented();persist();}
    finally{busy=false;$('#journey-hud').hidden=true;renderBoard();}
    // O desafio só abre após um clique. Assim ninguém perde a animação do trajeto.
    $('#arrival-panel button')?.focus({preventScroll:true});
  }
  async function roll(){
    if(busy||!engine||screen!=='game'||engine.state.phase!=='ready'||modal.open)return;
    const old=snapshotPlayers(),t=engine.roll();persist();await playJourney(t,old);
  }
  function startChallenge(){
    if(busy||engine.state.phase!=='question'||!engine.state.pending.presented)return;
    engine.openChallenge();persist();$('#arrival-panel').hidden=true;showChallenge();
  }
  function showChallenge(){
    const type=engine.state.pending.challenge?.type||'quiz';
    if(type==='quiz')showQuestion();else if(engine.state.phase==='feedback')showMiniFeedback();else showMini();
  }
  function showQuestion(){
    const s=engine.state,t=s.pending,p=engine.player,q=PERGUNTAS.find(q=>q.id===t.questionId),st=heritage(t.uf),h=st.heritage,isFeedback=s.phase==='feedback';
    const headline=isFeedback?`<div class="feedback-banner ${t.correct?'':'wrong'}">${icon(t.correct?'check':'cross')}<div><b>${t.correct?'RESPOSTA CORRETA! +2 CASAS':'RESPOSTA INCORRETA! −2 CASAS'}</b><small>${t.correct?'+'+(t.rewardPoints||Jogadores.RULES[q.difficulty])+' pontos para '+esc(p.name):'A próxima descoberta está logo adiante.'}${t.bonusFrom===t.bonusTo?' · Limite da trilha respeitado.':''}</small></div></div>`:'';
    openModal(`<div class="question-layout"><div class="question-visual"><img src="${h.photo}" alt="${esc(h.name)}"><span class="photo-license">© ${esc(h.photoCredit.credit)} · ${esc(h.photoCredit.license)}</span><div class="question-location"><span class="state-stamp">${st.uf}</span><small>${esc(st.nome)} · CASA ${t.landing+1}</small><h3>${esc(h.name)}</h3></div></div><div class="question-content"><div class="question-topline"><span class="question-player"><span>${p.avatar}</span> ${esc(p.name)}</span><span class="difficulty">${diff[q.difficulty]} · ${Jogadores.RULES[q.difficulty]} PONTOS</span></div>${headline}<h2 id="modal-title">${esc(q.prompt)}</h2><div class="question-options">${t.order.map((n,i)=>`<button class="answer-option ${isFeedback?(n===q.answer?'correct':n===t.selected?'wrong':''):''}" data-action="answer" data-option="${n}" ${isFeedback?'disabled':''}><span>${'ABCD'[i]}</span>${esc(q.options[n])}${isFeedback&&n===q.answer?' '+icon('check'):''}</button>`).join('')}</div>${isFeedback?`<p class="explanation">${esc(q.explanation)}</p><a class="source-link" href="${esc(q.sourceUrl)}" target="_blank" rel="noopener noreferrer">Fonte: ${esc(q.sourceTitle)} ${icon('external')}</a><div class="modal-actions"><button class="btn btn-gold" data-action="continue-feedback" ${busy?'disabled':''}>${busy?'Movimentando peão…':'Continuar'} ${icon('arrow')}</button></div>`:`<p class="question-hint">${icon('info')} Uma resposta por turno. Escolha com atenção.</p>`}</div></div>`,isFeedback?'feedback':'question');
  }
  function miniPhoto(st){const h=st.heritage;return `<div class="question-visual mini-visual"><img src="${h.photo}" alt="${esc(h.name)}"><span class="photo-license">${esc(h.photoCredit.credit)} · ${esc(h.photoCredit.license)}</span><div class="question-location"><span class="state-stamp">${st.uf}</span><small>${esc(st.nome)} · CASA ${engine.state.pending.landing+1}</small><h3>${esc(h.name)}</h3></div></div>`;}
  function extraMini(c,st,done){
    if(c.type==='mission'){
      const card=Desafios.MISSIONS.find(m=>m.id===c.deck[c.answers.length]);
      const prev=c.answers.length?Desafios.MISSIONS.find(m=>m.id===c.deck[c.answers.length-1]):null;
      const good=prev&&c.answers[c.answers.length-1]===prev.kind;
      return {
        instruction:'Situação fictícia: a turma vai cuidar de um patrimônio. Classifique seis atitudes como cuidado ou risco. Acerte pelo menos quatro.',
        status:`${c.answers.length} / 6 atitudes · ${c.hits} classificações corretas`,
        game:`<p class="simulation-label">OFICINA DE PRESERVAÇÃO · SIMULAÇÃO EDUCATIVA</p>${prev?`<div class="mission-consequence ${good?'good':'bad'}" role="status"><b>${good?'✓ Boa leitura da situação.':'Vamos rever essa atitude.'}</b><p>${esc(prev.why)}</p></div>`:''}${card?`<div class="mission-card"><span>ATITUDE 0${c.answers.length+1}</span>${icon('shield')}<h3>${esc(card.title)}</h3><p>${esc(card.text)}</p></div><div class="mission-bins"><button data-action="mini-act" data-value="protect" ${done?'disabled':''}>${icon('shield')} Ajuda a preservar</button><button data-action="mini-act" data-value="risk" ${done?'disabled':''}>${icon('tools')} Coloca em risco</button></div>`:`<div class="mini-completion">${icon(c.hits>=4?'shield':'book')}<b>${c.hits} de 6 atitudes bem classificadas.</b><p>Cada escolha ajuda a pensar sobre o cuidado com a nossa memória.</p></div>`}<p class="mini-tip">Preservar também envolve pesquisar, ouvir a comunidade e buscar orientação.</p>`
      };
    }
    if(c.type==='regions'){
      return {
        instruction:'Toque numa fotografia e depois na região correspondente. Complete as três conexões em até seis tentativas.',
        status:`${c.matched.length} / 3 conexões · ${c.attempts} / 6 tentativas${c.last&&!c.last.good?' · Reveja a região e tente outra conexão.':''}`,
        game:`<div class="connection-photos">${c.tiles.map((uf,i)=>{const h=heritage(uf);return `<button class="connection-photo ${c.selected===i?'selected':''} ${c.matched.includes(i)?'matched':''}" data-action="mini-act" data-value="photo:${i}" aria-label="Selecionar ${esc(h.heritage.name)}, ${esc(h.nome)}" aria-pressed="${c.selected===i}" ${done||c.matched.includes(i)?'disabled':''}><img src="${h.heritage.photo}" alt="${esc(h.heritage.name)}"><span><b>${esc(h.heritage.name)}</b><small>${esc(h.nome)} · ${uf}</small>${c.matched.includes(i)?`<em>✓ ${esc(Desafios.regionOf(uf))}</em>`:''}</span></button>`;}).join('')}</div><div class="connection-link" aria-hidden="true">${icon('route')} CONECTE A FOTOGRAFIA À SUA REGIÃO</div><div class="region-targets">${c.regions.map(r=>`<button data-action="mini-act" data-value="region:${esc(r)}" ${done||c.selected===null||c.matched.some(i=>Desafios.regionOf(c.tiles[i])===r)?'disabled':''}>${icon('locate')}${esc(r)}${c.matched.some(i=>Desafios.regionOf(c.tiles[i])===r)?' ✓':''}</button>`).join('')}</div>`
      };
    }
    if(c.type==='sequence'){
      const observe=c.stage==='observe';
      return {
        instruction:observe?'Observe os quatro destinos na ordem indicada. Quando estiver pronto, esconda a rota e reconstrua a sequência pelas fotografias.':'Refaça a sequência, tocando nas fotografias na ordem em que apareceram. Você pode cometer um erro; o segundo encerra o desafio.',
        status:observe?'OBSERVE → MEMORIZE → REFAÇA A ROTA':`${c.entered.length} / 4 destinos · ${c.errors} / 2 erros`,
        game:observe?`<div class="sequence-observe">${c.sequence.map((uf,i)=>{const h=heritage(uf);return `<article style="--i:${i}"><b>0${i+1}</b><img src="${h.heritage.photo}" alt="${esc(h.heritage.name)}"><span>${esc(h.nome)}</span></article>`;}).join('')}</div><p class="mini-tip">Dica: crie uma pequena história ligando os quatro destinos. Você decide quando está pronto.</p><button class="btn btn-gold sequence-ready" data-action="mini-act" data-value="recall" ${done?'disabled':''}>Memorizei! Esconder a rota ${icon('arrow')}</button>`:`<div class="sequence-slots" aria-label="Destinos lembrados">${Array.from({length:4},(_,i)=>`<span class="${c.entered[i]?'filled':''}"><small>0${i+1}</small>${c.entered[i]?esc(heritage(c.entered[i]).nome):'?'}</span>`).join('')}</div><div class="sequence-choices">${c.choices.map(uf=>{const h=heritage(uf);return `<button data-action="mini-act" data-value="${uf}" ${done||c.entered.includes(uf)?'disabled':''}><img src="${h.heritage.photo}" alt="${esc(h.heritage.name)}"><span>${esc(h.nome)}${c.entered.includes(uf)?' ✓':''}</span></button>`;}).join('')}</div>`
      };
    }
    return null;
  }
  function showMini(){
    const t=engine.state.pending,c=t.challenge,p=engine.player,st=heritage(t.uf),info=Desafios.INFO[c.type],done=c.status!=='active';
    let game='',instruction='',status='';
    if(c.type==='puzzle'){
      instruction='Toque em duas peças para trocar de lugar. Complete a fotografia em até 12 trocas.';
      status=`${c.attempts} / ${c.limit} trocas · ${c.tiles.filter((x,i)=>x===i).length} de 6 peças no lugar`;
      game=`<details class="puzzle-reference"><summary>Ver fotografia de referência</summary><img src="${st.heritage.photo}" alt="${esc(st.heritage.name)}"></details><div class="puzzle-board">${c.tiles.map((piece,i)=>`<button class="puzzle-tile ${c.selected===i?'selected':''} ${done&&c.status==='won'?'solved':''}" data-action="mini-act" data-value="${i}" aria-label="Selecionar peça da posição ${i+1}" aria-pressed="${c.selected===i}" ${done?'disabled':''}><img src="${st.heritage.photo}" alt="" style="left:${-(piece%3)*100}%;top:${-Math.floor(piece/3)*100}%"><span class="puzzle-select">${c.selected===i?'✓':''}</span></button>`).join('')}</div><p class="mini-tip">Abra a fotografia de referência se precisar. Toque em duas peças para trocar qualquer posição.</p>`;
    }
    if(c.type==='memory'){
      instruction='Vire duas cartas por vez e encontre os quatro pares de patrimônios em até 9 tentativas.';
      status=`${c.matched.length/2} / 4 pares · ${c.attempts} / ${c.limit} tentativas`;
      game=`<div class="memory-board">${c.tiles.map((uf,i)=>{const h=heritage(uf),matched=c.matched.includes(i),open=matched||c.flipped.includes(i);return `<button class="memory-tile ${open?'revealed':''} ${matched?'matched':''}" data-action="mini-act" data-value="${i}" aria-label="${open?(matched?'Par encontrado: ':'Carta aberta: ')+h.heritage.name:'Virar carta '+(i+1)}" ${done||open||c.flipped.length===2?'disabled':''}><span class="memory-back" aria-hidden="${open}">${icon('compass')}<small>EXPEDIÇÃO BRASIL</small></span><span class="memory-front" aria-hidden="${!open}"><img src="${h.heritage.photo}" alt="${open?esc(h.heritage.name):''}"><small>${esc(h.nome)}</small>${matched?'<b>✓</b>':''}</span></button>`;}).join('')}</div><p class="mini-tip">Cada par revela uma fotografia real do nosso patrimônio cultural.</p>`;
    }
    if(c.type==='map'){
      instruction='Encontre a unidade federativa no mapa e clique no seu território. Você tem duas chances.';
      status=`${c.attempts} / ${c.limit} tentativas${c.guesses.length&&!done?' · Ainda não! Escolha outro território.':''}`;
      game=`<div class="map-target">${icon('locate')}<div><small>SEU DESTINO</small><strong>${esc(st.nome)}</strong></div></div><div class="mini-map-shell"><div class="challenge-map" id="challenge-map"></div><div class="mini-map-controls"><button class="icon-btn" data-action="mini-zoom-in" aria-label="Aproximar mapa do desafio">+</button><button class="icon-btn" data-action="mini-zoom-out" aria-label="Afastar mapa do desafio">−</button><button class="icon-btn" data-action="mini-zoom-reset" aria-label="Ver mapa inteiro do desafio">${icon('expand')}</button></div></div><p class="mini-tip">Arraste e amplie se precisar. O Distrito Federal é pequeno: use o zoom.</p>`;
    }
    const extra=extraMini(c,st,done);if(extra){game=extra.game;instruction=extra.instruction;status=extra.status;}
    const titles={puzzle:'Uma imagem. Muitas histórias.',memory:'A memória também é patrimônio.',map:'Onde fica esse destino?',mission:'Cuidar começa com uma escolha.',regions:'Histórias que conectam o Brasil.',sequence:'Quatro destinos. Uma rota.'};
    openModal(`<div class="question-layout mini-layout">${miniPhoto(st)}<div class="question-content mini-content"><div class="question-topline"><span>${p.avatar} ${esc(p.name)}</span><span class="difficulty">MINIJOGO · 20 PONTOS</span></div><span class="eyebrow">${esc(info.name.toUpperCase())}</span><h2 id="modal-title">${titles[c.type]}</h2><p class="mini-instruction">${instruction}</p><div class="mini-status" role="status" aria-live="polite">${done?(c.status==='won'?'✓ DESAFIO CONCLUÍDO!':'A próxima descoberta está esperando.'):status}</div>${game}<div class="mini-bottom"><span>Concluiu: +20 pontos e +2 casas.</span><button class="text-button mini-give-up" data-action="mini-skip" ${done?'disabled':''}>Encerrar desafio (−2 casas)</button></div></div></div>`,'mini');
    $('#arrival-panel').hidden=true;
    if(c.type==='map'){
      miniMap=new MapBoard($('#challenge-map'),{onState:uf=>{if(!busy&&!done)miniAct(uf);}});
      miniMap.svg.querySelectorAll('.route,.houses,.state-labels,.pawns').forEach(el=>el.remove());
      miniMap.svg.setAttribute('aria-label','Escolha um território no mapa dos estados brasileiros');
      miniMap.svg.querySelectorAll('[data-uf]').forEach(el=>el.setAttribute('aria-label','Escolher '+heritage(el.dataset.uf).nome));
      c.guesses.forEach(uf=>miniMap.svg.querySelector(`[data-uf="${uf}"]`)?.classList.add(uf===c.uf?'map-correct':'map-wrong'));
      if(done)miniMap.svg.querySelector(`[data-uf="${c.uf}"]`)?.classList.add('map-correct');
    }
    if(c.type==='memory'&&c.flipped.length===2&&!done){
      busy=true;
      memoryTimer=setTimeout(()=>{if(engine.state.phase==='question'&&engine.state.pending===t){engine.clearMemory();persist();busy=false;renderBoard();showMini();}},settings.reduced?800:1150);
    }
  }
  async function miniAct(raw){
    if(busy||engine.state.phase!=='question')return;
    const old=snapshotPlayers(),c=engine.state.pending.challenge;
    try{
      const result=engine.interact(['map','mission','regions','sequence'].includes(c.type)?raw:+raw);persist();
      if(result.done)await animateOutcome(old,{mini:true});
      else{audio.play(c.type==='memory'&&c.matched.length?'card':'click');showMini();}
    }catch(e){toast(e.message,true);}
  }
  function showMiniFeedback(){
    const t=engine.state.pending,c=t.challenge,st=heritage(t.uf),h=st.heritage,info=Desafios.INFO[c.type];
    let explanation=c.type==='puzzle'?'Você explorou os detalhes da fotografia de '+h.name+'.':c.type==='memory'?'Os pares mostraram quatro patrimônios reais do Brasil.':c.type==='mission'?`Você classificou corretamente ${c.hits} de 6 atitudes. Conhecer, ouvir a comunidade e buscar orientação ajudam a cuidar do patrimônio.`:c.type==='regions'?c.tiles.map(uf=>heritage(uf).nome+' pertence à região '+Desafios.regionOf(uf)).join('; ')+'.':c.type==='sequence'?'A sequência era: '+c.sequence.map(uf=>heritage(uf).nome).join(' → ')+'.':'O destino correto era '+st.nome+' ('+st.uf+').';
    openModal(`<div class="question-layout mini-result">${miniPhoto(st)}<div class="question-content"><span class="eyebrow">${esc(info.name.toUpperCase())}</span><div class="feedback-banner ${t.correct?'':'wrong'}">${icon(t.correct?'check':'cross')}<div><b>${t.correct?'DESAFIO CONCLUÍDO! +2 CASAS':'NÃO FOI DESTA VEZ! −2 CASAS'}</b><small>${t.correct?'+20 pontos. Muito bem, explorador!':'Você já está no caminho da próxima descoberta.'}</small></div></div><h2 id="modal-title">${t.correct?'Mais uma história para o seu álbum.':'Aprender também faz parte da viagem.'}</h2><img class="mini-result-photo" src="${h.photo}" alt="${esc(h.name)}"><p class="explanation">${esc(explanation)} ${esc(h.curiosity)}</p><a class="source-link" href="${esc(h.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(h.sourceTitle)} ${icon('external')}</a><div class="modal-actions"><button class="btn btn-gold" data-action="continue-feedback">Continuar ${icon('arrow')}</button></div></div></div>`,'feedback');
  }

  async function animateOutcome(old,{mini=false}={}){
    const t=engine.state.pending;busy=true;persist();renderBoard(old);audio.play(t.correct?'correct':'wrong');
    if(mini)showMini();else showQuestion();
    if(!settings.reduced)await wait(settings.fast?300:650);
    closeModal();$('#arrival-panel').hidden=true;
    try{
      $('#board-map').scrollIntoView({behavior:settings.reduced?'instant':'smooth',block:'center'});
      journeyMessage(t.correct?'DESAFIO CONCLUÍDO! +2 CASAS':'NÃO FOI DESTA VEZ! −2 CASAS',t.correct?'+'+t.rewardPoints+' pontos · acompanhe o bônus.':'Acompanhe o recuo do peão.');
      await board.fitJourney(t.bonusFrom,t.bonusTo);
      await board.move(engine.player.id,t.bonusFrom,t.bonusTo,{onStep:updateWalk});
      if(!settings.reduced)await wait(settings.fast?220:550);
    }finally{busy=false;$('#journey-hud').hidden=true;renderBoard();showChallenge();}
  }
  async function answer(option){
    if(busy||!engine||engine.state.phase!=='question')return;
    const old=snapshotPlayers();try{engine.answer(option);await animateOutcome(old);}catch(e){busy=false;toast(e.message,true);}
  }
  async function continueFeedback(){
    if(busy||engine.state.phase!=='feedback')return;
    busy=true;const old=snapshotPlayers(),t=engine.state.pending,phase=engine.continueFeedback();persist();closeModal();renderBoard(phase==='card'?old:null);
    if(phase==='card'){
      try{audio.play('card');if(t.cardFrom!==t.cardTo){journeyMessage(t.card.title,t.card.text);$('#board-map').scrollIntoView({behavior:settings.reduced?'instant':'smooth',block:'center'});await board.fitJourney(t.cardFrom,t.cardTo);await board.move(engine.player.id,t.cardFrom,t.cardTo,{onStep:updateWalk});}}
      finally{busy=false;$('#journey-hud').hidden=true;renderBoard();showCard();}
    }else{busy=false;await afterTurn(phase);}
  }
  function showCard(){const t=engine.state.pending,c=t.card,p=engine.player;openModal(`<div class="special-modal"><div class="eyebrow">${esc(c.label.toUpperCase())} · CASA ${t.landing+1}</div><div class="special-icon">${icon(c.icon)}</div><h2 id="modal-title">${esc(c.title)}</h2><p>${esc(c.text)}</p><strong class="card-effect">${c.points?'+'+c.points+' pontos':(c.steps>0?'+':'−')+Math.abs(c.steps)+' casa'+(Math.abs(c.steps)>1?'s':'')}</strong><p>${esc(p.name)}, sua contribuição faz parte desta história.</p><button class="btn btn-gold" data-action="continue-card" ${busy?'disabled':''}>${busy?'Movimentando peão…':'Concluir jogada'} ${icon('arrow')}</button><p class="tie-note">Carta da casa original, aplicada uma única vez após o desafio.<br>O efeito respeita os limites da trilha e não abre outra pergunta.</p></div>`,'card');}
  async function afterTurn(phase){
    if(phase==='finished'){Ranking.record(engine.state);showScreen('victory');return;}
    renderBoard();await announceTurn();
  }
  async function announceTurn(){
    busy=true;renderBoard();const p=engine.player,b=$('#turn-banner');b.innerHTML=`<span class="turn-avatar">${p.avatar}</span><small>PREPARE-SE, EXPLORADOR 0${p.id+1}</small><strong>${esc(p.name)}</strong><span>É SUA VEZ DE DESCOBRIR O BRASIL.</span>`;b.classList.add('visible');audio.play('turn');
    if(!settings.reduced)await wait(settings.fast?350:1150);b.classList.remove('visible');busy=false;renderBoard();$('#roll-btn').focus({preventScroll:true});
  }
  function restorePhase(){
    const phase=engine.state.phase,t=engine.state.pending;
    if(phase==='question'){
      if(!t.presented){const old=snapshotPlayers();old[engine.player.id].position=t.from;playJourney(t,old);}
      else if(t.opened)showChallenge();
    }else if(phase==='feedback')showChallenge();else if(phase==='card')showCard();else if(phase==='finished')showScreen('victory');
  }

  function showInstructions(){
    const items=[['Reúna os exploradores','Escolha 2, 3 ou 4 pessoas no mesmo computador. Quatro é o padrão. Cada uma escolhe nome, avatar e cor do peão.'],['Lance o dado','Na sua vez, lance uma vez e percorra a trilha, casa por casa.'],['Descubra uma história','Veja o dado, acompanhe cada passo e clique em Iniciar desafio. Sete tipos se alternam: quiz, quebra-cabeça, memória, cartógrafo, guardiões, conexões e rota da memória.'],['Acerte e avance','Quiz vale 10, 20 ou 30 pontos. Minijogos valem 20. Concluiu? +2 casas. Não conseguiu? −2 casas.'],['Encontre cartas e colecione','A carta da casa sorteada aparece depois do desafio e do bônus. Estados percorridos entram no álbum.'],['Escolha o seu percurso','Rápido: 27 casas. Longo: 54 casas. Os dois visitam os 26 estados e o DF.'],['Complete e revise','Quem chega ao fim aguarda. Quando todos terminam, vence a maior pontuação. A revisão final mostra respostas, explicações e os desafios de cada jogador.']];
    openModal(`<div class="modal-inner">${modalHeader('MANUAL DO EXPLORADOR','Como jogar')}<div class="instructions-list">${items.map((x,i)=>`<div class="instruction-item"><span>0${i+1}</span><div><b>${x[0]}</b><p>${x[1]}</p></div></div>`).join('')}</div><div class="rule-demo"><p>Experimente: você tirou 4 e saiu da casa 1 para a casa 5.</p><div class="demo-track">${Array.from({length:9},(_,i)=>`<span class="${i===4?'on':''}" data-demo-house="${i+1}">${i+1}</span>`).join('')}</div><div class="demo-buttons"><button data-action="demo-correct">✓ Acertei a pergunta</button><button data-action="demo-wrong">× Errei a pergunta</button></div><p id="demo-result">O que acontece com o seu peão?</p></div><p class="tie-note">O dado pode chegar à última casa sem número exato. A chegada só é confirmada ao concluir desafio, bônus e eventual carta. Jogadores que terminaram são pulados. Empates: mais acertos, menos erros e ordem de chegada. Os integrantes do trabalho aparecem numa abertura antes de cada nova partida. As opções mudam de ordem; as perguntas de cada UF se repetem só depois de esgotar seu banco.</p><div class="modal-actions"><button class="btn btn-gold" data-action="close-modal">Entendi. Vamos explorar! ${icon('arrow')}</button></div></div>`);
  }
  function showSettings(){openModal(`<div class="modal-inner">${modalHeader('DEIXE A VIAGEM DO SEU JEITO','Configurações')}<label class="setting-row"><span><b>Efeitos sonoros</b><small>Dado, passos, respostas e pequenas comemorações.</small></span><input class="switch" type="checkbox" data-setting="sound" ${settings.sound?'checked':''}></label><label class="setting-row"><span><b>Música ambiente</b><small>Uma trilha suave, original e gerada no navegador. Começa após uma interação.</small></span><input class="switch" type="checkbox" data-setting="music" ${settings.music?'checked':''}></label><label class="setting-row"><span><b>Movimento reduzido</b><small>Desativa giros, confetes e deslocamentos animados.</small></span><input class="switch" type="checkbox" data-setting="reduced" ${settings.reduced?'checked':''}></label><label class="setting-row"><span><b>Partida com animações rápidas</b><small>Encurta as animações, mantendo cada passo visível no mapa.</small></span><input class="switch" type="checkbox" data-setting="fast" ${settings.fast?'checked':''}></label><p class="tie-note">Preferências salvas apenas neste navegador. Para jogar sem internet, extraia o ZIP e abra index.html. A versão hospedada precisa de conexão para carregar seus arquivos.</p><div class="modal-actions"><button class="btn btn-gold" data-action="close-modal">Tudo pronto ${icon('check')}</button></div></div>`);}
  document.addEventListener('change',e=>{if(e.target.name==='route-length')setupLength=e.target.value;if(e.target.id==='play-style'){setupMode=e.target.value;$('.challenge-lineup').hidden=setupMode==='quiz';}if(e.target.dataset.setting){settings[e.target.dataset.setting]=e.target.checked;Salvar.write('settings',settings);applySettings();}});
  function showHeritage(uf,kicker='FICHA DO PATRIMÔNIO'){
    const s=heritage(uf),h=s.heritage,f=h.photoCredit;
    openModal(`<div class="heritage-detail"><button class="modal-close detail-close" data-action="close-modal" aria-label="Fechar ficha">×</button><img class="detail-photo" src="${h.photo}" alt="${esc(h.name)}"><div class="detail-content"><div class="eyebrow">${esc(kicker)}</div><p class="detail-location">${esc(s.regiao.toUpperCase())} · ${esc(s.nome.toUpperCase())} (${s.uf}) · ${esc(h.city.toUpperCase())}</p><h2 id="modal-title">${esc(h.name)}</h2><div class="detail-grid">${[['História',h.summary],['Construção e formação',h.year],['Por que importa',h.importance],['Você sabia?',h.curiosity],['Proteção patrimonial',h.protection]].map(([title,text])=>`<div><h3>${title}</h3><p>${esc(text)}</p></div>`).join('')}<div><h3>Fonte de pesquisa</h3><a class="source-link" href="${esc(h.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(h.sourceTitle)} ${icon('external')}</a>${(h.additionalSources||[]).map(s=>`<br><a class="source-link" href="${esc(s.url||s.sourceUrl||s)}" target="_blank" rel="noopener noreferrer">${esc(s.title||s.sourceTitle||'Fonte complementar')} ${icon('external')}</a>`).join('')}</div></div><p class="photo-credit">Fotografia: ${esc(f.credit)} · <a href="${esc(f.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(f.license)}</a>. ${esc(f.modification)} <a href="${esc(f.sourceUrl)}" target="_blank" rel="noopener noreferrer">Arquivo original.</a></p><div class="modal-actions"><button class="btn btn-ghost" data-action="close-modal">Continuar explorando ${icon('arrow')}</button></div></div></div>`);
  }
  function renderGallery(){
    const term=$('#gallery-search').value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(),region=$('#region-filter').value,uf=$('#state-filter').value;
    const results=PATRIMONIOS.filter(s=>(!region||s.regiao===region)&&(!uf||s.uf===uf)&&[s.nome,s.uf,s.heritage.name,s.heritage.city].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(term));
    $('#gallery-count').textContent=String(results.length).padStart(2,'0')+' PATRIMÔNIO'+(results.length===1?'':'S')+' ENCONTRADO'+(results.length===1?'':'S');
    $('#gallery-grid').innerHTML=results.length?results.map(s=>{const h=s.heritage;return `<article class="heritage-card"><div class="card-image"><img loading="lazy" src="${h.photo}" alt="${esc(h.name)}"><span class="card-region">${esc(s.regiao.toUpperCase())} · ${s.uf}</span></div><div class="card-body"><span class="card-location">${esc(h.city)} · ${esc(s.nome)}</span><h3>${esc(h.name)}</h3><p>${esc(h.summary)}</p><button class="card-link" data-action="heritage" data-uf="${s.uf}">Saiba mais ${icon('arrow')}</button></div></article>`;}).join(''):'<p class="empty-state">Nenhum patrimônio encontrado. Experimente outro nome ou filtro.</p>';
  }
  $('#gallery-search').addEventListener('input',renderGallery);$('#region-filter').addEventListener('change',renderGallery);$('#state-filter').addEventListener('change',renderGallery);
  function table(players){return `<table class="rank-table"><thead><tr><th>POS.</th><th>EXPLORADOR</th><th>PONTOS</th><th>ACERTOS</th><th>ERROS</th><th>CHEGADA</th></tr></thead><tbody>${Ranking.sort(players).map((p,i)=>`<tr><td>${i+1}º</td><td><span class="rank-player"><span>${p.avatar}</span><b style="color:${p.color}">${esc(p.name)}</b></span></td><td>${p.score}</td><td>${p.correct}</td><td>${p.wrong}</td><td>${p.arrival?p.arrival+'º':'Em viagem'}</td></tr>`).join('')}</tbody></table>`;}
  function showRanking(live=false){
    const history=Ranking.all();let body='';
    if(engine?.state)body+=`<div class="history-item"><h3>${engine.state.phase==='finished'?'Última expedição':'Expedição atual'}</h3><p>Iniciada em ${date(engine.state.createdAt)} · ${engine.state.length==='quick'?'Rápido · 27 casas':'Longo · 54 casas'} · Rodada ${engine.state.round}</p>${table(engine.state.players)}</div>`;
    if(!live){const saved=history.filter(g=>g.id!==engine?.state?.id);body+=saved.map(g=>`<div class="history-item"><h3>${date(g.date)} · ${esc(g.players[0].name)} venceu</h3><p>${g.length==='quick'?'Rápido · 27 casas':'Longo · 54 casas'} · ${g.rounds} rodadas · ${g.turns} jogadas</p>${table(g.players)}</div>`).join('');if(!history.length&&!engine?.state)body='<p class="modal-copy">A primeira história ainda vai ser escrita. Termine uma partida para registrar os exploradores aqui.</p>';}
    openModal(`<div class="modal-inner">${modalHeader('CADA DESCOBERTA VALE PONTOS',live?'Ranking da expedição':'Histórias de campeões')}<p class="modal-copy">${live?'A classificação muda a cada resposta.':'Até 30 partidas concluídas ficam registradas neste navegador.'}</p>${body}<p class="tie-note">Critérios: mais pontos → mais acertos → menos erros → ordem de chegada. Enquanto a partida está em andamento, empates completos mantêm a ordem dos jogadores.</p><div class="modal-actions"><button class="btn btn-ghost" data-action="close-modal">Voltar à aventura ${icon('arrow')}</button></div></div>`);
  }
  function showAlbum(id=engine?.state?.turn||0){
    if(!engine)return;albumPlayer=id;const p=engine.state.players[id],seen=Object.keys(p.discoveries);
    openModal(`<div class="modal-inner">${modalHeader('MEMÓRIAS DA EXPEDIÇÃO','Álbum de descobertas')}<div class="album-tabs" role="group" aria-label="Escolher álbum">${engine.state.players.map(x=>`<button class="${x.id===id?'selected':''}" data-action="album-player" data-player="${x.id}">${x.avatar} ${esc(x.name)}</button>`).join('')}</div><div class="album-progress"><span>${esc(p.name)} já descobriu <b>${seen.length} / 27</b> unidades federativas.</span><span>${Math.round(seen.length/27*100)}%</span></div><div class="progress-track" style="margin-bottom:22px"><i style="width:${seen.length/27*100}%"></i></div><div class="album-grid">${PATRIMONIOS.map(s=>seen.includes(s.uf)?`<button class="album-card" data-action="album-heritage" data-uf="${s.uf}"><img loading="lazy" src="${s.heritage.photo}" alt="${esc(s.heritage.name)}"><div><small>${s.uf} · ${esc(s.nome.toUpperCase())}</small><b>${esc(s.heritage.name)}</b><time datetime="${p.discoveries[s.uf]}">Descoberto em ${date(p.discoveries[s.uf])} às ${time(p.discoveries[s.uf])}</time></div></button>`:`<div class="album-card locked">${icon('lock')}<small>${s.uf}</small><b>${esc(s.nome)}</b><time>Uma história esperando por você</time></div>`).join('')}</div><p class="tie-note">Passar por uma casa também conta como visita. Perguntas aparecem apenas na casa onde o dado parar. Fotografias, curiosidades e fontes ficam nas fichas desbloqueadas.</p></div>`,'album');
  }
  function showLog(){openModal(`<div class="modal-inner">${modalHeader('OS PASSOS DA SUA HISTÓRIA','Diário de bordo')}<p class="modal-copy">Os últimos 30 acontecimentos desta expedição.</p><ol class="log-list">${engine.state.log.map(l=>`<li><time>${time(l.at)}</time><span>${esc(l.text)}</span></li>`).join('')}</ol></div>`);}
  function showGameMenu(){if(!engine)return;persist();openModal(`<div class="modal-inner">${modalHeader('A HISTÓRIA PODE ESPERAR UM POUCO','Pausa na viagem')}<div class="menu-options"><button class="btn btn-gold" data-action="close-modal">${icon('play')} Retomar expedição ${icon('arrow')}</button><button class="btn btn-ghost" data-action="save">${icon('save')} Salvar partida</button><button class="btn btn-ghost" data-action="export">${icon('download')} Exportar salvamento (.json)</button><button class="btn btn-ghost" data-action="import">${icon('book')} Importar salvamento</button><button class="btn btn-ghost" data-action="instructions">${icon('info')} Como jogar</button><button class="btn btn-ghost danger-button" data-action="restart">${icon('refresh')} Reiniciar partida</button><button class="btn btn-ghost" data-action="menu">${icon('arrow-left')} Voltar ao menu</button></div><p class="tie-note">A partida é salva automaticamente. Exportar permite levá-la para outro navegador ou computador. No menu principal, use “Continuar partida” para retomar.</p></div>`);}
  function showRestart(){openModal(`<div class="modal-inner">${modalHeader('UMA NOVA HISTÓRIA','Reiniciar a expedição?')}<p class="modal-copy">Todos os exploradores desta partida voltam à casa 1 com zero pontos. O progresso da partida atual será substituído. O histórico de partidas concluídas continua salvo.</p><div class="modal-actions"><button class="btn btn-ghost" data-action="close-modal">Continuar esta partida</button><button class="btn btn-gold" data-action="confirm-restart">Reiniciar ${icon('refresh')}</button></div></div>`);}
  function exportGame(){const blob=new Blob([JSON.stringify(engine.state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='expedicao-brasil-salvamento.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Salvamento exportado. Guarde o arquivo para importar depois.');}
  function importGame(){const i=document.createElement('input');i.type='file';i.accept='.json,application/json';i.addEventListener('change',async()=>{try{const f=i.files[0];if(!f)return;if(f.size>2000000)throw new Error('Arquivo muito grande. Selecione um salvamento do jogo.');const s=JSON.parse(await f.text());const g=new Jogadores.Game({route:baseRoute,questions:PERGUNTAS,state:s});engine=g;persist();closeModal();showScreen('game');toast('Expedição importada. Boa viagem!');}catch(e){toast('Não foi possível importar: '+e.message,true);}});i.click();}

  function showAbout(){openModal(`<div class="modal-inner">${modalHeader('UM PAÍS INTEIRO PARA CONHECER','Sobre o projeto')}<div class="modal-copy"><p><b>Trilha do Patrimônio — Expedição Brasil</b> é um jogo de tabuleiro educativo sobre o patrimônio cultural material dos 26 estados e do Distrito Federal, criado para jogar com a turma.</p><h3>Integrantes do trabalho</h3><p>${TEAM.map(esc).join(' · ')}</p><h3>O que é patrimônio material?</h3><p>É o patrimônio que tem presença física: edifícios, igrejas, pontes, conjuntos urbanos, objetos e vestígios arqueológicos. Ele guarda memórias, técnicas e histórias de diferentes grupos da sociedade.</p><h3>Conhecer também é preservar</h3><p>O acervo inclui arquitetura colonial, modernista, estruturas de ferro e sítios arqueológicos. Cada ficha distingue a proteção patrimonial documentada. Tombamento municipal, estadual ou federal e reconhecimento da UNESCO têm âmbitos diferentes.</p><h3>Feito para a sala de aula</h3><p>De 2 a 4 jogadores, percursos de 27 ou 54 casas, sete tipos de desafio e 135 perguntas com fontes e fotografias reais. Todo o jogo usa HTML, CSS, JavaScript e um mapa SVG de dados reais do IBGE. Nomes e partidas ficam no navegador, sem contas ou coleta de dados.</p><p>O professor pode abrir as fontes, conversar sobre as explicações e usar a galeria como apoio à apresentação. O código e o README mostram como adaptar o conteúdo.</p></div><div class="modal-actions"><button class="btn btn-ghost" data-action="credits">Fontes e créditos ${icon('external')}</button><button class="btn btn-gold" data-action="close-modal">Vamos descobrir ${icon('arrow')}</button></div></div>`);}
  function showCredits(){openModal(`<div class="modal-inner">${modalHeader('PESQUISA, IMAGENS E GEOGRAFIA','Fontes e créditos')}<div class="modal-copy"><p>Base cartográfica: IBGE, Malha de Unidades da Federação 2022, simplificada e projetada para uso educativo. As divisas não foram desenhadas à mão. Uma casa interior por unidade federativa no percurso rápido, duas no longo.</p><p>Integrantes do trabalho: ${TEAM.map(esc).join(' · ')}.</p><p>Textos educativos elaborados a partir de fontes primárias. Links consultados durante a preparação do jogo em 23/10/2026. Sons originais sintetizados com Web Audio. Ícones vetoriais do projeto.</p><p>Fotos reais distribuídas sob as licenças abaixo. As imagens foram redimensionadas e convertidas para JPEG; as licenças originais continuam aplicáveis. As atribuições completas estão também no arquivo assets/imagens/CREDITOS.md.</p></div><div class="credits-list">${PATRIMONIOS.map(s=>{const h=s.heritage,f=h.photoCredit;const sources=[{sourceUrl:h.sourceUrl,sourceTitle:h.sourceTitle},...PERGUNTAS.filter(q=>q.uf===s.uf)].filter((x,i,a)=>a.findIndex(y=>y.sourceUrl===x.sourceUrl)===i);return `<div><h3>${s.uf} · ${esc(h.name)}</h3><p>Foto: ${esc(f.credit)} · <a href="${esc(f.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(f.license)}</a> · <a href="${esc(f.sourceUrl)}" target="_blank" rel="noopener noreferrer">Arquivo original</a></p>${sources.map(x=>`<p><a href="${esc(x.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(x.sourceTitle)}</a></p>`).join('')}</div>`;}).join('')}<div><h3>Oficina Guardiões do patrimônio</h3><p>As situações são fictícias, inspiradas na educação patrimonial e no cuidado com os bens culturais.</p><a href="${educationSource}" target="_blank" rel="noopener noreferrer">Iphan — Educação Patrimonial</a><br><a href="https://www.gov.br/iphan/pt-br/servicos/autorizacoes-e-fiscalizacoes/fiscalizacoes" target="_blank" rel="noopener noreferrer">Iphan — Fiscalizações e intervenções</a></div><div><h3>IBGE — Malhas territoriais</h3><a href="https://www.ibge.gov.br/geociencias/todos-os-produtos-geociencias/15774-malhas.html" target="_blank" rel="noopener noreferrer">Página da base cartográfica oficial</a></div></div><div class="modal-actions"><button class="btn btn-gold" data-action="close-modal">Continuar explorando ${icon('arrow')}</button></div></div>`);}

  function renderLearningReview(){
    const s=engine.state,all=s.review||[],summary=Revisao.summary({...s,review:all.filter(r=>reviewPlayer==='all'||r.playerId===+reviewPlayer)});
    const rows=all.filter(r=>(reviewPlayer==='all'||r.playerId===+reviewPlayer)&&(reviewFilter==='all'||!r.success));
    $('#learning-review').innerHTML=`<div class="review-heading"><div><span class="eyebrow">O QUE FICA DEPOIS DA VIAGEM</span><h3>As descobertas viram <em>aprendizado.</em></h3><p>Relembre as jogadas, confira as explicações e leve uma nova história com você.</p></div>${icon('book')}</div>${summary.partial?'<p class="review-legacy">Esta partida começou numa versão anterior. A revisão detalhada inclui apenas os desafios respondidos depois da atualização.</p>':''}<p class="review-scope">DESEMPENHO · ${reviewPlayer==='all'?'TODA A TURMA':esc(s.players[+reviewPlayer].name.toUpperCase())}</p><div class="review-type-grid">${summary.types.map(t=>`<div>${icon(Desafios.INFO[t.type].icon)}<span>${esc(Desafios.INFO[t.type].name)}</span><b>${t.successes} <small>/ ${t.total}</small></b><em>CONCLUÍDOS</em></div>`).join('')}</div><div class="review-toolbar"><label>EXPLORADOR<select id="review-player"><option value="all">Toda a turma</option>${s.players.map(p=>`<option value="${p.id}" ${reviewPlayer===String(p.id)?'selected':''}>${esc(p.name)}</option>`).join('')}</select></label><label>O QUE REVER?<select id="review-filter"><option value="all">Todos os desafios</option><option value="errors" ${reviewFilter==='errors'?'selected':''}>Dificuldades e desafios encerrados</option></select></label><span role="status">${rows.length} registro${rows.length===1?'':'s'} · ${rows.filter(r=>r.success).length} concluído${rows.filter(r=>r.success).length===1?'':'s'}</span></div><div class="review-list">${rows.slice(0,reviewLimit).map(r=>{
      const p=s.players[r.playerId],st=heritage(r.uf),d=Revisao.detail(r,{questions:PERGUNTAS,places:PATRIMONIOS});
      return `<details class="review-entry ${r.success?'success':'review-difficulty'}"><summary><span class="review-entry-icon">${icon(r.success?'check':'book')}</span><span><small>${esc(p.name)} · RODADA ${r.round} · ${esc(st.nome)}</small><b>${esc(d.title)}</b><em>${esc(Desafios.INFO[r.type].name)} · ${r.skipped?'Encerrado pelo jogador':r.success?'Concluído':'Para rever'}</em></span><strong>${r.points?'+':''}${r.points}<small>PTS</small></strong><i aria-hidden="true">+</i></summary><div class="review-detail"><img loading="lazy" src="${st.heritage.photo}" alt="${esc(st.heritage.name)}"><div>${d.chosen?`<p class="review-answer"><small>RESPOSTA OU SEQUÊNCIA REGISTRADA</small>${esc(d.chosen)}</p>`:''}<p class="review-answer correct"><small>${r.type==='quiz'?'RESPOSTA CORRETA':'SOLUÇÃO DO DESAFIO'}</small>${esc(d.answer)}</p><p>${esc(d.explanation)}</p>${d.items.length?`<ul class="review-solutions">${d.items.map(item=>`<li>${item.success===undefined?'':item.success?'✓ ':'↗ '}${esc(item.text)}${item.chosen?`<small>Sua classificação: ${esc(item.chosen)}</small>`:''}</li>`).join('')}</ul>`:''}<a class="source-link" href="${esc(d.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(d.sourceTitle)} ${icon('external')}</a>${r.type==='mission'?'<br><a class="source-link" href="https://www.gov.br/iphan/pt-br/servicos/autorizacoes-e-fiscalizacoes/fiscalizacoes" target="_blank" rel="noopener noreferrer">Iphan — Orientações sobre intervenções</a>':''}</div></div></details>`;
    }).join('')||`<p class="review-empty">${all.length?'Nenhum desafio com este filtro. Explore os outros resultados da turma.':'Não há respostas detalhadas registradas nesta partida antiga. Novas partidas já incluem a revisão completa.'}</p>`}</div>${rows.length>reviewLimit?`<button class="btn btn-ghost review-more" data-action="review-more">Mostrar mais desafios (${rows.length-reviewLimit} restantes) ${icon('arrow')}</button>`:''}<div class="review-reflection">${icon('leaf')}<p><b>Para conversar com a turma</b>Qual patrimônio vocês gostariam de visitar? Que atitude ajudaria a preservar a história da sua cidade?</p></div>`;
  }
  document.addEventListener('change',e=>{
    if(e.target.id==='review-player'||e.target.id==='review-filter'){
      reviewPlayer=$('#review-player').value;reviewFilter=$('#review-filter').value;reviewLimit=12;renderLearningReview();
      $('#'+e.target.id).focus({preventScroll:true});
    }
  });
  function renderVictory(){
    if(!engine?.state)return;const s=engine.state,rank=Ranking.sort(s.players);Ranking.record(s);persist();
    $('#champion-name').innerHTML=`${rank[0].avatar} <strong>${esc(rank[0].name)}</strong> é o campeão, com <strong>${rank[0].score} pontos.</strong>`;
    $('#podium').dataset.count=s.players.length;
    $('#podium').innerHTML=rank.map((p,i)=>`<article class="podium-player place-${i+1}" style="--player:${p.color}"><div class="podium-avatar">${p.avatar}</div><span class="place-label">${['🥇 CAMPEÃO','🥈 VICE-CAMPEÃO','🥉 3º LUGAR','🏅 4º LUGAR'][i]}</span><h3>${esc(p.name)}</h3><strong>${p.score} <small>PONTOS</small></strong><p>✓ ${p.correct} acertos · × ${p.wrong} erros<br>${p.arrival}º na ordem de chegada</p></article>`).join('');
    const total=s.players.reduce((n,p)=>n+p.correct+p.wrong,0),correct=s.players.reduce((n,p)=>n+p.correct,0),seen=new Set(s.players.flatMap(p=>Object.keys(p.discoveries))).size;
    $('#victory-stats').innerHTML=`<div><b>${s.round}</b>RODADAS DE HISTÓRIA</div><div><b>${total}</b>DESAFIOS JOGADOS</div><div><b>${total?Math.round(correct/total*100):0}%</b>DE SUCESSO DA TURMA</div><div><b>${seen}</b>UFS DESCOBERTAS</div>`;
    reviewPlayer='all';reviewFilter='all';reviewLimit=12;renderLearningReview();
    audio.play('win');startConfetti();
  }
  function stopConfetti(){cancelAnimationFrame(confettiFrame);confettiFrame=0;const c=$('#confetti');c.getContext('2d').clearRect(0,0,c.width,c.height);}
  function startConfetti(){stopConfetti();if(settings.reduced)return;const c=$('#confetti'),ctx=c.getContext('2d'),dpr=Math.min(window.devicePixelRatio||1,2),w=innerWidth,h=innerHeight;c.width=w*dpr;c.height=h*dpr;ctx.scale(dpr,dpr);const dots=Array.from({length:140},()=>({x:Math.random()*w,y:-Math.random()*h,v:1.3+Math.random()*3,s:3+Math.random()*4,r:Math.random()*6,c:[...Jogadores.COLORS,'#dec28a'][Math.floor(Math.random()*7)]})),start=performance.now();const frame=t=>{ctx.clearRect(0,0,w,h);for(const p of dots){p.y+=p.v;p.x+=Math.sin(p.r+=.025)*.8;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.5);ctx.restore();}if(t-start<6500)confettiFrame=requestAnimationFrame(frame);else stopConfetti();};confettiFrame=requestAnimationFrame(frame);}

  document.addEventListener('click',async e=>{
    const el=e.target.closest('[data-action]');if(!el||el.disabled)return;const a=el.dataset.action;
    if(busy&&!['sound','save'].includes(a))return;
    if(a!=='sound'&&a!=='roll')audio.play('click');
    switch(a){
      case 'finish-intro':await finishIntro();break;
      case 'review-more':reviewLimit+=12;renderLearningReview();break;
      case 'menu':if(engine?.state)persist();showScreen('home');break;
      case 'setup':renderSetup();showScreen('setup');break;
      case 'replay':renderSetup();showScreen('setup');break;
      case 'resume':if(engine?.state||loadGame())showScreen('game');break;
      case 'back':showScreen(backScreen);break;
      case 'close-modal':closeModal();break;
      case 'instructions':showInstructions();break;
      case 'settings':showSettings();break;
      case 'open-menu':openModal(`<div class="modal-inner">${modalHeader('EXPEDIÇÃO BRASIL','Sua próxima descoberta')}<div class="menu-options"><button class="btn btn-gold" data-action="setup">${icon('dice')} Iniciar partida</button>${engine?.state&&engine.state.phase!=='finished'?'<button class="btn btn-ghost" data-action="resume">Continuar partida</button>':''}<button class="btn btn-ghost" data-action="instructions">${icon('info')} Como jogar</button><button class="btn btn-ghost" data-action="gallery">${icon('temple')} Galeria de patrimônios</button><button class="btn btn-ghost" data-action="ranking">${icon('trophy')} Ranking</button><button class="btn btn-ghost" data-action="settings">${icon('settings')} Configurações</button><button class="btn btn-ghost" data-action="about">${icon('book')} Sobre o projeto</button></div></div>`);break;
      case 'sound':settings.sound=!settings.sound;Salvar.write('settings',settings);applySettings();if(settings.sound)audio.play('click');toast(settings.sound?'Sons ativados.':'Sons desativados.');break;
      case 'gallery':backScreen=screen==='game'?'game':'home';showScreen('gallery');renderGallery();break;
      case 'heritage':showHeritage(el.dataset.uf);break;
      case 'ranking':showRanking();break;
      case 'live-ranking':showRanking(true);break;
      case 'player-count':playerCount=+el.dataset.count;renderSetup();$('#setup-error').textContent='';break;
      case 'start-challenge':startChallenge();break;
      case 'mini-act':await miniAct(el.dataset.value);break;
      case 'mini-skip':if(engine.state.phase==='question'){const old=snapshotPlayers();engine.resolve(false,{skipped:true});await animateOutcome(old,{mini:true});}break;
      case 'mini-zoom-in':miniMap?.zoom(1.3);break;
      case 'mini-zoom-out':miniMap?.zoom(1/1.3);break;
      case 'mini-zoom-reset':miniMap?.reset();break;
      case 'choose-avatar':setupPlayers[+el.dataset.player].avatar=el.dataset.avatar;renderSetup();break;
      case 'choose-color':setupPlayers[+el.dataset.player].color=el.dataset.color;renderSetup();break;
      case 'roll':await roll();break;
      case 'answer':await answer(+el.dataset.option);break;
      case 'continue-feedback':await continueFeedback();break;
      case 'continue-card':if(engine.state.phase==='card'){const phase=engine.continueCard();persist();closeModal();await afterTurn(phase);}break;
      case 'save':persist(true);break;
      case 'game-menu':showGameMenu();break;
      case 'restart':showRestart();break;
      case 'confirm-restart':{const p=engine.state.players.map(x=>({name:x.name,color:x.color,avatar:x.avatar}));engine.create(p,{mode:engine.state.mode,length:engine.state.length});persist();closeModal();playIntro();break;}
      case 'fullscreen':try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(e){toast('Seu navegador não permite tela cheia neste modo.',true);}break;
      case 'zoom-in':board?.zoom(1.3);break;
      case 'zoom-out':board?.zoom(1/1.3);break;
      case 'zoom-reset':board?.reset();break;
      case 'focus':if(engine)board?.focus(engine.route[engine.player.position].uf);break;
      case 'album':showAlbum();break;
      case 'album-player':showAlbum(+el.dataset.player);break;
      case 'album-heritage':showHeritage(el.dataset.uf);modalContent.insertAdjacentHTML('beforeend',`<div class="album-detail-back"><button class="btn btn-ghost" data-action="album-player" data-player="${albumPlayer}">${icon('arrow-left')} Voltar ao álbum</button></div>`);break;
      case 'log':showLog();break;
      case 'about':showAbout();break;
      case 'credits':showCredits();break;
      case 'export':exportGame();break;
      case 'import':importGame();break;
      case 'demo-correct':case 'demo-wrong':{const n=a==='demo-correct'?7:3;$$('[data-demo-house]').forEach(x=>x.classList.toggle('on',+x.dataset.demoHouse===n));$('#demo-result').textContent=n===7?'Acertou! +2 casas. Você chegou à casa 7 e ganhou os pontos da pergunta.':'Errou! −2 casas. Você voltou à casa 3, sem pontos pela pergunta.';audio.play(n===7?'correct':'wrong');break;}
    }
  });
  document.addEventListener('keydown',e=>{if(e.key==='Enter'&&screen==='game'&&!modal.open&&!busy&&!['BUTTON','INPUT','SELECT','A'].includes(e.target.tagName)){e.preventDefault();if(engine.state.phase==='question')startChallenge();else roll();}});
  window.addEventListener('beforeunload',()=>persist());
  // Faces reais do dado: a face visível corresponde ao resultado sorteado.
  const pips={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};
  $$('.die-face').forEach(face=>{face.innerHTML=pips[+face.dataset.face].map(n=>`<i style="grid-area:${Math.ceil(n/3)} / ${(n-1)%3+1}"></i>`).join('');});
  icons();applySettings();new MapBoard($('#hero-map'),{interactive:false,decorative:true});
  $('#state-filter').insertAdjacentHTML('beforeend',PATRIMONIOS.map(s=>`<option value="${s.uf}">${esc(s.nome)} (${s.uf})</option>`).join(''));
  loadGame();updateResume();
})();

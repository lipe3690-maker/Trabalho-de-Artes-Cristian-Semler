/* A revisão deriva dos resultados registrados; não inventa respostas antigas. */
(function(root){
  'use strict';
  const D=root.Desafios||(typeof require==='function'?require('./desafios.js'):null);
  function summary(state){
    const rows=state.review||[];
    return {total:rows.length,successes:rows.filter(r=>r.success).length,
      partial:(state.reviewStartedAtTurn||0)>0,
      types:D.TYPES.map(type=>({type,total:rows.filter(r=>r.type===type).length,successes:rows.filter(r=>r.type===type&&r.success).length})).filter(x=>x.total),
      players:state.players.map(p=>({id:p.id,total:rows.filter(r=>r.playerId===p.id).length,successes:rows.filter(r=>r.playerId===p.id&&r.success).length}))};
  }
  function detail(r,{questions,places}){
    const place=uf=>places.find(p=>p.uf===uf),st=place(r.uf),h=st.heritage,c=r.challenge;
    const result={title:D.INFO[r.type].name,chosen:'',answer:'',explanation:'',items:[],sourceUrl:h.sourceUrl,sourceTitle:h.sourceTitle};
    if(r.type==='quiz'){
      const q=questions.find(q=>q.id===r.questionId);
      return {...result,title:q.prompt,chosen:Number.isInteger(r.selected)?q.options[r.selected]:'Sem resposta registrada',answer:q.options[q.answer],explanation:q.explanation,sourceUrl:q.sourceUrl,sourceTitle:q.sourceTitle};
    }
    if(r.type==='puzzle'){
      result.answer='A fotografia completa de '+h.name;
      result.explanation=`${c.attempts} de 12 trocas usadas. As seis peças precisam ocupar suas posições originais.`;
    }
    if(r.type==='memory'){
      result.answer='Quatro pares de fotografias iguais';
      result.explanation=`${c.matched.length/2} de 4 pares encontrados em ${c.attempts} de 9 tentativas.`;
      result.items=[...new Set(c.tiles)].map(uf=>({text:place(uf).heritage.name+' — '+place(uf).nome}));
    }
    if(r.type==='map'){
      result.answer=st.nome+' ('+st.uf+')';
      result.chosen=c.guesses.length?c.guesses.map(uf=>place(uf).nome).join(' → '):'Nenhum território selecionado';
      result.explanation='O mapa mostra os limites das unidades federativas. O destino pedido era '+st.nome+'.';
    }
    if(r.type==='mission'){
      result.answer='Reconhecer pelo menos quatro das seis atitudes';
      result.explanation=`${c.hits} de 6 classificações corretas. A situação é uma simulação educativa, sem representar um incidente real nesse patrimônio.`;
      result.items=c.deck.map((id,i)=>{const m=D.MISSIONS.find(m=>m.id===id);return {text:m.title+' — '+(m.kind==='protect'?'ajuda a preservar':'coloca em risco')+'. '+m.why,chosen:c.answers[i]?(c.answers[i]==='protect'?'Ajuda a preservar':'Coloca em risco'):'Não classificada',success:c.answers[i]===m.kind};});
      result.sourceUrl='https://www.gov.br/iphan/pt-br/patrimonio-cultural/educacao-patrimonial';result.sourceTitle='Iphan — Educação Patrimonial';
    }
    if(r.type==='regions'){
      result.answer='Conectar as três fotografias às regiões correspondentes';
      result.explanation=`${c.matched.length} de 3 conexões em ${c.attempts} de 6 tentativas.`;
      result.items=c.tiles.map((uf,i)=>({text:place(uf).heritage.name+' — '+place(uf).nome+' — '+D.regionOf(uf),success:c.matched.includes(i)}));
    }
    if(r.type==='sequence'){
      result.answer=c.sequence.map(uf=>place(uf).nome).join(' → ');
      result.chosen=c.entered.length?c.entered.map(uf=>place(uf).nome).join(' → '):'Nenhum destino lembrado';
      result.explanation=`${c.entered.length} de 4 destinos na ordem correta; ${c.errors} erro(s). Criar uma história ligando as imagens pode ajudar a lembrar a sequência.`;
    }
    return result;
  }
  const api={summary,detail};root.Revisao=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

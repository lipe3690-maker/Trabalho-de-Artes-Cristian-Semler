(function(root){
  root.Ranking={
    sort:root.Jogadores.rank,
    all:()=>{const x=root.Salvar.read('history',[]);return Array.isArray(x)?x:[];},
    record(state){
      const all=this.all(),entry={id:state.id,date:new Date().toISOString(),length:state.length||'long',mode:state.mode||'mixed',rounds:state.round,turns:state.turns,players:JSON.parse(JSON.stringify(this.sort(state.players)))};
      const at=all.findIndex(g=>g.id===entry.id);if(at>=0)all[at]=entry;else all.unshift(entry);
      return root.Salvar.write('history',all.slice(0,30));
    }
  };
})(window);

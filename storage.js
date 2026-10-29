/* Todos os dados pessoais ficam somente neste navegador. Sem conta ou servidor. */
(function(root){
  const PREFIX='trilha-patrimonio-v1:';
  let available=true;
  function read(key,fallback=null){try{const v=localStorage.getItem(PREFIX+key);return v?JSON.parse(v):fallback;}catch(e){available=false;return fallback;}}
  function write(key,value){try{localStorage.setItem(PREFIX+key,JSON.stringify(value));return true;}catch(e){available=false;return false;}}
  function remove(key){try{localStorage.removeItem(PREFIX+key);return true;}catch(e){available=false;return false;}}
  const defaults={sound:true,music:false,reduced:root.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false,fast:false};
  root.Salvar={read,write,remove,defaults,settings:()=>({...defaults,...read('settings',{})}),get available(){return available;}};
})(window);

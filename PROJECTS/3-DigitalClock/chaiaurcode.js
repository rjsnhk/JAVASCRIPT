const clo=document.getElementById('clock');
setInterval(function(){
  let d=new Date();
  clo.innerHTML=d.toLocaleTimeString();
},1000)
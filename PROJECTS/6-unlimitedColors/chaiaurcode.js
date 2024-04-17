//for create random color

let randomcolor=()=>{
  const hex="0123456789ABCDEF";
  let color='#';
  // console.log(Math.floor(Math.random()*16));
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}


let val;
document.querySelector('#start').addEventListener('click',function(){
  val=setInterval(function(){
    document.body.style.backgroundColor=randomcolor();
  },1000);
})
document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(val);
})
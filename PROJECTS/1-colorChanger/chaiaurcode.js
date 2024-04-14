
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach((item)=>{
item.addEventListener('click',(e)=>{console.log(e);
console.log(e.target)//e.target means jab uspe click hoga
if(e.target.id==='grey'){
  body.style.backgroundColor=e.target.id
}
else if(e.target.id==='blue'){
  body.style.backgroundColor=e.target.id
}
else  if(e.target.id==='white'){
  body.style.backgroundColor=e.target.id
}
else if(e.target.id==='yellow'){
  body.style.backgroundColor=e.target.id
}
else if(e.target.id==='purple'){
  body.style.backgroundColor=e.target.id  //id ka name color ka name se he so it gives the color to it
}

  })
});

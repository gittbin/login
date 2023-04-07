var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)
var label=$$('label')
var input=$$('input')
var error=$$('.error')
var a=$$('a')

var button=$('.button')

input.forEach(function(element,index){
  element.onclick=function(){
error[index].style.display="none"
  label[index].style.transform="translateY(0px)"
  label[index].style.color="rgb(0, 255, 242)"
element.style.borderBottom="4px solid rgb(0, 255, 242)"
}
  element.onblur=function(){
    if(element.value){}
    else{
    label[index].style.transform="translateY(25px)"
    label[index].style.color="rgb(247, 247, 247,0.5)"
    element.style.borderBottom="2px solid rgb(247, 247, 247)"}
}});

button.onclick=function(e){
e.preventDefault();
  input.forEach(function(element,index){
    if(element.value){}
    else{
      console.log(9)
    error[index].style.display="block"
    }
  })
}
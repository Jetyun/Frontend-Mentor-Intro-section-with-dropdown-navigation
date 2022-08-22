const container=document.getElementsByClassName('container')[0];
const menu_content=document.getElementsByClassName('menu_content')[0];
const greyed=document.getElementsByClassName('greyed')[0];
const rowupone=document.getElementById('arrowupone');
const arrowdownone=document.getElementById('arrowdownone');
const rowuptwo=document.getElementById('arrowuptwo');
const arrowdowntwo=document.getElementById('arrowdowntwo');

function arrowone(){
if (arrowdownone.style.display==="none"){
  rowupone.style.display="none";
  arrowdownone.style.display='inline';
  
}else{
  rowupone.style.display="inline";
  arrowdownone.style.display='none';
}
}
function arrowtwo(){
  if (arrowdowntwo.style.display==="none"){
    rowuptwo.style.display="none";
    arrowdowntwo.style.display='inline';
    
  }else{
    rowuptwo.style.display="inline";
    arrowdowntwo.style.display='none';
  }
  }

function on(){
menu_content.style.display='block';
greyed.style.display='block';

}
function off(){
  menu_content.style.display='none';
  greyed.style.display='none';
}
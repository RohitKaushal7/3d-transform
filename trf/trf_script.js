var box = document.querySelector('.box');
var scene = document.querySelector('.scene');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

var tx=0,ty=0,tz=0,
    sx=1,sy=1,sz=1,
    skx=0,sky=0,
    rx=0,ry=0,rz=0,
    p=400;



// set initial side
changeSide();
box.style.background = "transparent";

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    box.classList.remove( currentClass );
    box.style.transform = "";
  }
  box.classList.add( showClass );
  currentClass = showClass;
}
radioGroup.addEventListener( 'change', changeSide );



// sets the transform css property

function transform(){
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  scene.style.perspective = p !='0' ? p + "px": "none";
  box.style.transform = `translate3d(${tx}px,${ty}px,${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale3d(${sx},${sy},${sz}) skew(${skx}deg,${sky}deg)`;
  console.log(`translate3d(${tx}px,${ty}px,${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale3d(${sx},${sy},${sz}) skew(${skx}deg,${sky}deg)`);
  
}


//perspective changes
function perspective(){
    let val = document.querySelector('[name=perspective]').value;
    p = val;
    transform();
    
    
}
document.querySelector('[name=perspective]').addEventListener("change",perspective);

//perspective changes
function rotate(o){
    var val = document.querySelector('[name=rotate'+o+']').value;
    switch(o){
      case 'X': rx = val; break;
      case 'Y': ry = val; break;
      case 'Z': rz = val; break;
    }
    transform();
}

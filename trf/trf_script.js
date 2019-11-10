var box = document.querySelector('.box');
var scene = document.querySelector('.scene');
var radioGroup = document.querySelector('.radio-group');
tabs = document.querySelectorAll('.tab');

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
  switch(checkedRadio.value){
    case 'front': tz=-50; ry=0; rx=rz=0; break;
    case 'back': tz=-50; ry=-180; rx=rz=0; break;
    case 'right': tz=-150; ry=-90; rx=rz=0; break;
    case 'left': tz=-150; ry=90; rx=rz=0; break;
    case 'top': tz=-100; rx=-90; ry=rz=0; break;
    case 'bottom': tz=-100; rx=90; ry=rz=0; break;
  }
  tx=ty=rz=skx=sky=0;
  p=400;
  sx=sy=sz=1;
  transform();
}
radioGroup.addEventListener( 'change', changeSide );


function changeTab(x){
	for(let i=0;i<tabs.length;++i){
		tabs[i].style.display = "none";
	}
	tabs[x].style.display = "grid"; 
}
tabs[1].style.display = "none";

// sets the transform css property

function transform(){
  scene.style.perspective = p !='0' ? p + "px": "none";
  box.style.transform = `translate3d(${tx}px,${ty}px,${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale3d(${sx},${sy},${sz}) skew(${skx}deg,${sky}deg)`;
  // console.log(`translate3d(${tx}px,${ty}px,${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale3d(${sx},${sy},${sz}) skew(${skx}deg,${sky}deg)`); 
  setAll();
}

function setAll(){
  document.querySelector("#perspective").value=p;
  document.querySelector("#translateX").value=tx;
  document.querySelector("#translateY").value=ty;
  document.querySelector("#translateZ").value=tz;
  document.querySelector("#rotateX").value=rx;
  document.querySelector("#rotateY").value=ry;
  document.querySelector("#rotateZ").value=rz;
  document.querySelector("#scaleX").value=sx;
  document.querySelector("#scaleY").value=sy;
  document.querySelector("#scaleZ").value=sz;
  document.querySelector("#scaleA").value=sx;
  document.querySelector("#skewX").value=skx;
  document.querySelector("#skewY").value=sky;
}
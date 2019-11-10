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
//   p=400;
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

var a00,a01,a02,a03,
	a10,a11,a12,a13,
	a20,a21,a22,a23,
	a30,a31,a32,a33;

function matrix_transform(){
	a00 = document.querySelector("#a00").value;
	a01 = document.querySelector("#a01").value;
	a02 = document.querySelector("#a02").value;
	a03 = document.querySelector("#a03").value;
	
	a10 = document.querySelector("#a10").value;
	a11 = document.querySelector("#a11").value;
	a12 = document.querySelector("#a12").value;
	a13 = document.querySelector("#a13").value;
	
	a20 = document.querySelector("#a20").value;
	a21 = document.querySelector("#a21").value;
	a22 = document.querySelector("#a22").value;
	a23 = document.querySelector("#a23").value;
	
	a30 = document.querySelector("#a30").value;
	a31 = document.querySelector("#a31").value;
	a32 = document.querySelector("#a32").value;
	a33 = document.querySelector("#a33").value;

	box.style.transform = `matrix3d(
		${a00},${a01},${a02},${a03},
		${a10},${a11},${a12},${a13},
		${a20},${a21},${a22},${a23},
		${a30},${a31},${a32},${a33})`;
	
	console.log(`matrix3d(
		${a00},${a01},${a02},${a03},
		${a10},${a11},${a12},${a13},
		${a20},${a21},${a22},${a23},
		${a30},${a31},${a32},${a33})`);
	
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
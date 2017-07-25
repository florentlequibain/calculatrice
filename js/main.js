var touche = document.getElementsByClassName('smallcase');
var ecran = document.getElementById('ecran');
var egal = document.getElementById('egal');
var efface = document.getElementById('efface');




for(let i=0 ; i< touche.length ; i++){
touche[i].onclick = function(){
  ecran.innerHTML += touche[i].innerHTML;
}
}

efface.onclick = function(){
  ecran.innerHTML = "";
}

egal.onclick = function(){
  ecran.innerHTML = eval(ecran.innerHTML);
}

console.log("test");

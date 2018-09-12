var obj2 = document.getElementsByClassName('menu2');

function menu (e, index) {
  if (e == 1){
    for(var i = 0; i <= 4;i++){
      obj2[i + index].style.display = 'block';
    }
  } else if (e == 0){
    for(var i = 0; i <= 4;i++){
      obj2[i + index].style.display = 'none';
    }
  }
}

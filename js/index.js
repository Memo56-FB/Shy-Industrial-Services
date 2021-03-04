// CODIGO PARA QUE EL FONDO CAMBIE SOLO CADA 5 SEGUNDOS


const shy = document.getElementById('shy');

cambioImagen = ()=>{
        if(shy.classList.contains('f1')){
            shy.classList.replace('f1','f2');
        }
        else if(shy.classList.contains('f2')){
            shy.classList.replace('f2','f3');
        }
        else if(shy.classList.contains('f3')){
            shy.classList.replace('f3','f4');
        }else{
            shy.classList.replace('f4','f1');
        }
}

document.onload = setInterval(() => {
    cambioImagen() 
}, 5000);




let ubicationTop = window.pageYOffset;
window.onscroll = ()=>{
    let displacement = window.pageYOffset;
    if(ubicationTop >= displacement){
        document.getElementById('navbar').classList.replace('animation-hide','animation-visible')
    }
    else{
        document.getElementById('navbar').classList.add('animation-hide')
        document.getElementById('navbar').classList.remove('animation-visible')
    }
    ubicationTop = displacement
} 


// SCRIPT PARA QUE PRUEBEN CUAL FONDO LES GUSTA MAS 

const btn = document.getElementById('btn');
const shy = document.getElementById('shy')

btn.onclick = ()=>{
        if(shy.classList.contains('f1')){
            shy.classList.replace('f1','f2')
        }
        else if(shy.classList.contains('f2')){
            shy.classList.replace('f2','f3')
        }else{
            shy.classList.replace('f3','f1')
        }
}
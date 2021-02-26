let ubicationTop = window.pageYOffset;
window.onscroll = ()=>{
    let displacement = window.pageYOffset;
    if(ubicationTop >= displacement){
        document.getElementById('navbar').classList.replace('animation-visible')
    }else{
        document.getElementById('navbar').classList.replace('animation-hide')
    }
    ubicationTop = displacement
} 
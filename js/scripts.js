let ubicationTop = window.pageYOffset;
window.onscroll = ()=>{
    let displacement = window.pageYOffset;
    if(ubicationTop >= displacement){
        document.getElementById('navbar').classList.add('animation-visible')
        document.getElementById('navbar').classList.remove('animation-hide')
    }else{
        document.getElementById('navbar').classList.add('animation-hide')
        document.getElementById('navbar').classList.remove('animation-visible')
    }
    ubicationTop = displacement

} 
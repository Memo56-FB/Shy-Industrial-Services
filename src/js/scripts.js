// CODIGO PARA QUE EL NAVBAR SE ESCONDA AL BAJAR Y SE MUESTRE AL SUBIR 
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





// CODIGO PARA EL BOTON FLOTANTE DE REDES SOCIALES
// const contact = document.getElementById('contact')
// const socialMedia = document.getElementById('socialMedia')
// const svg = document.getElementById('svg')
// svg.onclick = ()=>{
//     if(contact.classList.contains('animation-down-contact') && socialMedia.classList.contains('animation-down-contact')){
//         contact.classList.replace('animation-down-contact' , 'animation-up-contact')
//         socialMedia.classList.replace('animation-down-contact' , 'animation-up-contact')
//         svg.classList.replace('initial' , 'rotate')

//     }else{
//         contact.classList.replace('animation-up-contact' , 'animation-down-contact')
//         socialMedia.classList.replace('animation-up-contact' , 'animation-down-contact')
//         svg.classList.replace('rotate' , 'initial' )
//     }
// }

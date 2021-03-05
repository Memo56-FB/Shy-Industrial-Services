const btn = document.getElementById('btn') 
const article = document.getElementById('article__description')

btn.onclick = () => {
    if(article.classList.contains('soldadura__article-up')){
        article.classList.replace('soldadura__article-up','soldadura__article-down')
        btn.classList.replace('btn-animation-off','btn-animation-on')
    }else{
        article.classList.replace('soldadura__article-down','soldadura__article-up')
        btn.classList.replace('btn-animation-on','btn-animation-off')
    }
}


const btn2 = document.getElementById('btn2') 
const article2 = document.getElementById('article__description2')

btn2.onclick = () => {
    if(article2.classList.contains('soldadura__article-up')){
        article2.classList.replace('soldadura__article-up','soldadura__article-down')
        btn2.classList.replace('btn-animation-off','btn-animation-on')
    }else{
        article2.classList.replace('soldadura__article-down','soldadura__article-up')
        btn2.classList.replace('btn-animation-on','btn-animation-off')
    }
}

const btn3 = document.getElementById('btn3') 
const article3 = document.getElementById('article__description3')

// 
btn3.onclick = () => {
    if(article3.classList.contains('soldadura__article-up')){
        article3.classList.replace('soldadura__article-up','soldadura__article-down')
        btn3.classList.replace('btn-animation-off','btn-animation-on')
    }else{
        article3.classList.replace('soldadura__article-down','soldadura__article-up')
        btn3.classList.replace('btn-animation-on','btn-animation-off')
    }
}
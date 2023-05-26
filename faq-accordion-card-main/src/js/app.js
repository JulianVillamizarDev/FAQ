document.addEventListener('DOMContentLoaded', ()=>{

    const arrows = document.querySelectorAll('.card__title');

    arrows.forEach((arrow)=>{
        arrow.addEventListener('click', showCardContent)
    });

})

function showCardContent(e){
    const cardTitle = e.target.parentElement;
    const arrow = cardTitle.querySelector('.card__arrow');
    const card = e.target.parentElement.parentElement;
    const content = card.querySelector('.card__content');

    content.classList.toggle('show__content')
    arrow.classList.toggle('rotate');
}
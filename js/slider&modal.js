let slideToShow=0;

const modalBtns =document.querySelectorAll('.gallery-modal-btn');

modalBtns.forEach(function(button) {

    button.addEventListener('click', function() {
        const slideNumbeToShow = button.getAttribute('data-index');
        slideToShow = Number(slideNumbeToShow);

        console.log(slideToShow);
        });
    
});
//Zapusk biblioteky modalnogo wikna
MicroModal.init({
    onShow: function(){
        slider.go(slideToShow);
    }
});

//Zapusk biblioteky slideru
const sliderContainer= document.querySelector('.splide');
const slider=new Splide(sliderContainer).mount();
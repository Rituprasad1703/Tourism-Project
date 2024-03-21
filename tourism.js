const searchBox=document.querySelector('.search-box');
const searchBtn=document.querySelector('.search-btn');
const search=document.querySelector('.search');
const closeBtn=document.querySelector('.close-btn');
searchBtn.addEventListener('click',function () {
	//search.classList.contains('active'); //checks if any of the classes in search class has active class
	if(search.classList.contains('active'))
		searchBox.value="";
	else{
		search.classList.add('active');
		searchBox.focus(); //so that the cursor automatically comes inside search box
	}
})
closeBtn.addEventListener('click',function(){
	search.classList.remove('active');
	searchBox.value=''; //after closing, search box will become empty
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween:90,
    centeredSlides: true,
    fade:true,
    loop:true,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 1,
            slidesPerGroup:1,
        },
      950: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
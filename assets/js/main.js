/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header');
    
    // when the scroll is higher than 50 viewport height, add the show-scroll class to the a tag with the scroll-header class
    this.scrollY>=50 ? header.classList.add('scroll-header'): header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/*=============== SWIPER POPULAR ===============*/
let swiperPopular = new Swiper(".popular__container", {
  // Optional parameters
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView:'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*=============== VALUE ACCORDION ===============*/
const accordionItem=document.querySelectorAll('.value__accordion-item');

accordionItem.forEach((item)=>{
    const accordionHeader=item.querySelector('.value__accordion-header');

    accordionHeader.addEventListener('click',()=>{
        const openItem=document.querySelector('.accordion-open');
        toogleItem(item);
        if(openItem && openItem !=item){
            toogleItem(openItem);
        }
    })
})

const toogleItem=(item)=>{
    const accordionContent=item.querySelector('.value__accordion-contnet');
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open')
    } else{
        accordionContent.style.height=accordionContent.scrollHeight+'px'
        item.classList.add('accordion-open');
    }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');

const scrollActive=()=>{
    const scrollY=window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute('id'),
            sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']');

            if (scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
                sectionClass.classList.add('active-link');
            }else{
                sectionClass.classList.remove('active-link');   
            }
    })
}
window.addEventListener('scroll',scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');
    this.scrollY>=350? scrollUp.classList.add('scroll-show')
    :scrollUp.classList.remove('scroll-show');
}
window.addEventListener('scroll',scrollUp);


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previous selected theme (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-sun" : "bx-moon";

// Apply previously selected theme (if any)
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);

  themeButton.classList.remove("bx", "bx-moon", "bx-sun"); 
  themeButton.classList.add("bx",selectedIcon === "bx-sun" ? "bx-sun" : "bx-moon" 
  );
}

// Toggle theme on button click
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);

  if (document.body.classList.contains(darkTheme)) {
    themeButton.classList.remove("bx", "bx-moon"); 
    themeButton.classList.add("bx", "bx-sun");
  } else {
    themeButton.classList.remove("bx", "bx-sun");
    themeButton.classList.add("bx", "bx-moon");
  }

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true, // animation repaet
});
sr.reveal(`.home__title,.popular__container,.subscribe__container,.footer__container,.section__title`)
sr.reveal(`.home__description`,{delay:500})
sr.reveal(`.home__search`,{delay:600})
sr.reveal(`.home__value`,{delay:700})
sr.reveal(`.home__images,.footer__info`,{delay:800, origin:'bottom'})
sr.reveal(`.logos__img`,{interval:100})
sr.reveal(`.value__images,.contact__content`,{delay:900,origin:'left'})
sr.reveal(`.value__content,.contact__images`,{delay:1000,origin:'right'})
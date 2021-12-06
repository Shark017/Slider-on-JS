function initSlider() {
    let imageWindow = document.querySelector(".image-window");
    let projectSelector01 = document.querySelector(".project-selector01");
    let projectSelector02 = document.querySelector(".project-selector02");
    let projectSelector03 = document.querySelector(".project-selector03");
    let linkOne = document.querySelector(".link01");
    let linkTwo = document.querySelector(".link02");
    let linkThree = document.querySelector(".link03");
    let leftArrow = document.querySelector(".left-arrow");
    let rightArrow = document.querySelector(".right-arrow");

    let images = [
        {src: "./img/Slider-main-picture-01.jpg", link: ".link02", link01: ".link03"},
        {src: "./img/Slider-main-picture-02.jpg", link: ".link03", link01: ".link01"},
        {src: "./img/Slider-main-picture-03.jpg", link: ".link01", link01: ".link02"},
    ];

    function removeActive() {
        linkOne.classList.remove("active-link");
        linkTwo.classList.remove("active-link");
        linkThree.classList.remove("active-link");
    }

    function initArrows(){

    i = 0;

    linkOne.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[0].src}">`;
        removeActive();
        linkOne.classList.add("active-link");
        i = 0;
    });

    linkTwo.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[1].src}">`;
        removeActive();
        linkTwo.classList.add("active-link");
        i = 1;
    });

    linkThree.addEventListener('click', () => {
        imageWindow.innerHTML =`<img src="${images[2].src}">`;
        removeActive();
        linkThree.classList.add("active-link");
        i = 2;
    })

    projectSelector01.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[0].src}">`;
        removeActive();
        linkOne.classList.add("active-link");
        i = 0;
    });

    projectSelector02.addEventListener('click', () => {
        imageWindow.innerHTML = `<img src="${images[1].src}">`;
        removeActive();
        linkTwo.classList.add("active-link");     
        i = 1;
    });

    projectSelector03.addEventListener('click', () => {
        imageWindow.innerHTML =`<img src="${images[2].src}">`;
        removeActive();
        linkThree.classList.add("active-link");
        i = 2;
    })
    
    rightArrow.addEventListener("click", () => {
        if (i!==2) {
            removeActive();
            linkActive = document.querySelector(`${images[i].link}`);
            linkActive.classList.add("active-link");
            i++;
            imageWindow.innerHTML = `<img src="${images[i].src}">`; 
        } else {
            removeActive();
            linkActive = document.querySelector(`${images[i].link}`);
            linkActive.classList.add("active-link");
            i = 0;
            imageWindow.innerHTML = `<img src="${images[0].src}">`;
        }
    });
    
    leftArrow.addEventListener("click", () => { 
        if (!i==0) {
            removeActive();
            linkActive = document.querySelector(`${images[i].link01}`);
            linkActive.classList.add("active-link");
            i--;
            imageWindow.innerHTML = `<img src="${images[i].src}">`;
    } else {
            removeActive();
            linkActive = document.querySelector(`${images[i].link01}`);
            linkActive.classList.add("active-link");
            imageWindow.innerHTML = `<img src="${images[2].src}">`
            i = 2;
    }});
    };
    
    initArrows();
};

document.addEventListener("DOMContentLoaded", initSlider)
// Responsive navigation menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

//  Video slider navigation
const sliderBtns = document.querySelectorAll('.nav-btn');
const videos = document.querySelectorAll('.video');
const contents = document.querySelectorAll('.content');

const sliderNav = (index) => {
    sliderBtns.forEach((btn) => {
        btn.classList.remove('active');
    });

    videos.forEach((video) => {
        video.classList.remove('active');
    })

    contents.forEach((content) => {
        content.classList.remove('active');
    })

    sliderBtns[index].classList.add('active');
    videos[index].classList.add('active');
    contents[index].classList.add('active');
}


sliderBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => sliderNav(index))
});

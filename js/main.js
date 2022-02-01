var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween : 5,
    autoHeight: true,
    coverflowEffect: {
    rotate: 5,
    stretch: 30,
    depth: 65,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

//document.onload(animateValue("value", 10000000, 50000000, 5000));

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}

//slide automatic
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 3000); // Change image every 2 seconds
}



// read more button
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Voire plus"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Voire mois"; 
        moreText.style.display = "inline";
    }
    }

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () => {
    navbar.classList.toggle("active");
}

document.querySelector("#close").onclick = () => {
    navbar.classList.remove("active");
}

window.onscroll = () => {

    navbar.classList.remove("active");

    if(window.scrollY > 100){
        document.querySelector("header").classList.add("active");
    }else{
        document.querySelector("header").classList.remove("active");
    }
}

/* let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
    themeToggler.classList.toggle("fa-sun");

    if(themeToggler.classList.contains("fa-sun")){
        document.querySelector("body").classList.add("active");
    }else {
        document.querySelector("body").classList.remove("active");
    }
} */

    let themeToggler = document.querySelector("#theme-toggler");

    themeToggler.onclick = () => {
        if (themeToggler.classList.contains("fa-moon")) {
            themeToggler.classList.remove("fa-moon");
            themeToggler.classList.add("fa-sun");
        } else {
            themeToggler.classList.remove("fa-sun");
            themeToggler.classList.add("fa-moon");
        }
        document.body.classList.toggle("active");
    }

    document.querySelectorAll(".small-image-1").forEach(images => {
        images.onclick = () => {
            document.querySelector(".big-image-1").src = images.getAttribute('src');
        }
    })

    document.querySelectorAll(".small-image-2").forEach(images => {
        images.onclick = () => {
            document.querySelector(".big-image-2").src = images.getAttribute('src');
        }
    })

    document.querySelectorAll(".small-image-3").forEach(images => {
        images.onclick = () => {
            document.querySelector(".big-image-3").src = images.getAttribute('src');
        }
    })

    let countDate = new Date("aug, 2024 00:00:00").getTime();

    function countDown() {
        let now = new Date().getTime();
        gap = now - countDate;

        let seconds = 1000;
        let minutes = seconds * 60;
        let hours = minutes * 60;
        let day = hours * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hours));
        let m = Math.floor((gap % (hours)) / (minutes));
        let s = Math.floor((gap % (minutes)) / (seconds));

        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;

    }

    setInterval(function(){
        countDown();
    }, 1000)


let swiper = new Swiper(".product-slider", {
    slidesPreView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        0: {
            slidesPreView: 1,
        },
        550: {
            slidesPreView: 2,
        },
        800: {
            slidesPreView: 3,
        },
        1000: {
            slidesPreView: 4
        },
    },
  }); 


  let swiper2 = new Swiper(".review-slider", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4
        },
    },
  });

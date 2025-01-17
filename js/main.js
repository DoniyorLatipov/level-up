(function () {
    const header = document.querySelector(".header");

    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        header.classList.add("header__active");
      } else {
        header.classList.remove("header__active");
      }
    };
})();


function navLinks(navLinks) {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
  
    };
  
    const scrollTo = function () {
        const links = document.querySelectorAll(navLinks);
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
};

(function () {
    const burger = document.querySelector(".burger");
    const l1 = document.getElementById("burger__line-1");
    const l2 = document.getElementById("burger__line-2");
    const l3 = document.getElementById("burger__line-3");
    const content = document.querySelector(".burger__content");
    const links = document.querySelectorAll(".brg__nav-link");
    const header = document.querySelector(".header")
    const bg = document.querySelector(".brg__overflow")

    burger.addEventListener("click", () => {
        l1.classList.toggle("burger__line-1-active")
        l2.classList.toggle("burger__line-2-active")
        l3.classList.toggle("burger__line-3-active")
        content.classList.toggle("burger__content-active")
        bg.classList.toggle("brg__overflow-active")
    });

    for (var i = 0; i < links.length; ++i) {
        links[i].addEventListener("click", () => {
            l1.classList.remove("burger__line-1-active")
            l2.classList.remove("burger__line-2-active")
            l3.classList.remove("burger__line-3-active")
            content.classList.remove("burger__content-active")
            bg.classList.remove("brg__overflow-active")
        });
    };

    document.addEventListener('mouseup', function(e) {
        if (!content.contains(e.target) && !header.contains(e.target)) {
            l1.classList.remove("burger__line-1-active")
            l2.classList.remove("burger__line-2-active")
            l3.classList.remove("burger__line-3-active")
            content.classList.remove("burger__content-active")
            bg.classList.remove("brg__overflow-active")
        }
    });
})();

function popupFn(button, wrapper, closer, content) {
    const modal = document.querySelectorAll(button);
    const popup = document.querySelector(wrapper);
    const close = document.querySelector(closer);
    const card = document.querySelector(content);

    for (var i = 0; i < modal.length; ++i) {
        modal[i].addEventListener('click', () => {
            popup.classList.add("popup-open")
            card.classList.add("pop-content-open")
        });
    }   

    close.addEventListener("click", () => {
        popup.classList.remove("popup-open")
        card.classList.remove("pop-content-open")
    });

    document.addEventListener('mouseup', function(e) {
        if (!card.contains(e.target)) {
            popup.classList.remove("popup-open")
            card.classList.remove("pop-content-open")
        }
    });
};

navLinks('.hdr__nav-link');
navLinks('.brg__nav-link');
navLinks('.ftr__sec-link');



popupFn (".modal__app",".app__popup", ".a__pop-close", ".a__pop-content");

popupFn ("#modal__tch1","#tch__popup1", "#t__pop-close1","#t__pop-content1");
popupFn ("#modal__tch2","#tch__popup2", "#t__pop-close2","#t__pop-content2");
popupFn ("#modal__tch3","#tch__popup3", "#t__pop-close3","#t__pop-content3");

popupFn ("#crs__general","#crs__popup-general", "#c__pop-close-general","#c__pop-content-general");
popupFn ("#crs__grammar","#crs__popup-grammar", "#c__pop-close-grammar","#c__pop-content-grammar");
popupFn ("#crs__business","#crs__popup-business", "#c__pop-close-business","#c__pop-content-business");
popupFn ("#crs__ielts","#crs__popup-ielts", "#c__pop-close-ielts","#c__pop-content-ielts");

function popupFn(button, wrapper, closer, content) {
    const modal = document.querySelector(button);
    const popup = document.querySelector(wrapper);
    const close = document.querySelector(closer);
    const card = document.querySelector(content);

    modal.addEventListener('click', () => {
        popup.classList.add("popup-open")
        card.classList.add("pop-content-open")
    });  

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

popupFn ("#crs__general","#crs__popup-general", "#c__pop-close-general","#c__pop-content-general");
popupFn ("#crs__grammar","#crs__popup-grammar", "#c__pop-close-grammar","#c__pop-content-grammar");
popupFn ("#crs__business","#crs__popup-business", "#c__pop-close-business","#c__pop-content-business");
popupFn ("#crs__ielts","#crs__popup-ielts", "#c__pop-close-ielts","#c__pop-content-ielts");


function maskFn(input, button, active) {
    const phoneInput = document.querySelector(input);
    const btn = document.querySelector(button);

    const mask = new IMask(phoneInput, {
        mask: "+{998} (00) 000-00-00",
        lazy: false
    });
    
    phoneInput.addEventListener("input", phoneInputHadler);
    
    function phoneInputHadler() {
        if(mask.masked.isComplete) {
            btn.classList.add(active);
        } else {
            btn.classList.remove(active);
        }
    }
};


maskFn ("#c__pop-phone-business", "#c__pop-submite-business", "c__pop-submite-active");
maskFn ("#c__pop-phone-ielts", "#c__pop-submite-ielts", "c__pop-submite-active");
maskFn ("#c__pop-phone-grammar", "#c__pop-submite-grammar", "c__pop-submite-active");
maskFn ("#c__pop-phone-general", "#c__pop-submite-general", "c__pop-submite-active");
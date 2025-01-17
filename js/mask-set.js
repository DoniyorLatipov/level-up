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
maskFn (".a__pop-input", ".a__pop-submit", "a__pop-submit-active");
maskFn (".clt__phone", ".clt__submit","clt__submit-active");


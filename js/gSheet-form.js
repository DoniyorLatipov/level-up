function dataForm(formName) {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbxZnxR9wESs2wq5Okms5KxH4LSiO_iM6ghmwSc68FmSP8iIzAxveVTko4GvH5iQ06QJbA/exec';
  const form = document.forms[formName];
  console.log(form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => console.log('Success!', response))
      .then(() => {
        form.reset();
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error!', error.message);
        window.location.reload();
      });
  });
}

dataForm('clt-google-sheet');
dataForm('a-google-sheet');
dataForm('c-pop-google-sheet-general');
dataForm('c-pop-google-sheet-grammar');
dataForm('c-pop-google-sheet-ielts');
dataForm('c-pop-google-sheet-business');

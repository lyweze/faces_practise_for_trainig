/* -------------------------- Рассылка -------------------------- */
/* Переменные для работы Попапа рассылки */
const formPopUp = document.getElementById('PopUp');
const formError = document.getElementById('FormError');
/* ------------------------------------- */

/* Появление Попапа при нажатии Enter */
document.getElementById('formname').onkeydown = function(e) {
    if(e.keyCode == 13){
        toggleFormPopUp();
    }
}
document.getElementById('formtel').onkeydown = function(e) {
    if(e.keyCode == 13){
        toggleFormPopUp();
    }
}
document.getElementById('formmail').onkeydown = function(e) {
    if(e.keyCode == 13){
        toggleFormPopUp();
    }
}
/* ------------------------------------- */


/* ----------- Функции для работы Попапа */
/* Попап формы (появление) */
function toggleFormPopUp() {
    let valid = false;
    if ((document.getElementById('formname').value != '')) {
        if (document.getElementById('formmail').value != '') {
            if (document.getElementById('formtel').value != ''){
                valid = true;
                formPopUp.className = 'form-popup-screen';
                document.body.style.overflow = "hidden";
            
                document.getElementById('formname').value = '';
                document.getElementById('formmail').value = '';
                document.getElementById('formtel').value = '';
            }
        }
    }
    if (valid == false) {
        formError.className = 'formError';
        setTimeout(ErrorTimeOut, 4000);
    }
    function ErrorTimeOut() {
        formError.className = 'formErrorhidden';
    }
}
/* ------------------------------------------ */

/* Попап формы (закрытие) */
function closeFormPopUp() {
    document.body.style.overflow = "";
    formPopUp.className = 'form-popup-screenhidden';
}
/* ------------------------------------------ */

/* ------- Выход из формы при нажатии Esc ------- */
document.addEventListener('keydown', event => {
    if (event.key === "Escape" || event.keyCode === 27) {
        if (formPopUp.className = 'form-popup-screen'){
            closeFormPopUp();
        }
    }
});
/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------------------------------- */
const open_header = document.getElementById('open_header');
const open_contact = document.getElementById('open_contact');
const modal_box = document.getElementById('modal-box');
const close = document.getElementById('close');
const send = document.getElementById('send');

open_header.addEventListener('click', () => {
    modal_box.classList.add('show');
});

open_contact.addEventListener('click', () => {
    modal_box.classList.add('show');
});

close.addEventListener('click', () => {
    modal_box.classList.remove('show');
    document.getElementById("info_pessoa_name").value = "";
    document.getElementById("info_pessoa_email").value = "";
    document.getElementById("info_pessoa_phone").value = "";
});

send.addEventListener('click', () => {
    modal_box.classList.remove('show');
    document.getElementById("info_pessoa_name").value = "";
    document.getElementById("info_pessoa_email").value = "";
    document.getElementById("info_pessoa_phone").value = "";
});
const where = document.querySelector('#btn-div');
console.log(where);

const here = document.querySelector('.Modal-class');
console.log(here);

const close = document.querySelector('.close');
console.log(close);

const modalContainer = document.querySelector('.modalContainer');
console.log(modalContainer);

function UnHide() {
  here.style.display = 'block';
    modalContainer.style.display = 'block';
}
where.addEventListener('click', UnHide);

function Hide() {
  here.style.display = 'none';
  modalContainer.style.display = 'none';
}
close.addEventListener('click', Hide);

function windoCloseModal(e){
console.log(e.target)
if(e.target === modalContainer){
here.style.display = 'none';
  modalContainer.style.display = 'none';

}

}


window.addEventListener('click', windoCloseModal);

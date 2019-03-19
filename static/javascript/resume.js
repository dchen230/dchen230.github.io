const modalContainer = document.querySelector('.modal_container');
const img_Resume = document.getElementById('myResume');
const body_scrollbar = document.getElementsByTagName("BODY")[0];
if(body_scrollbar === null){
  console.log("null");
}

img_Resume.onclick = function(){
  modalContainer.style.display = "flex";
  modalContainer.style.justifyContent = "center";
  body_scrollbar.style.overflow = "hidden";
}

const close_span = document.getElementById('close');

close_span.onclick = function(){
  modalContainer.style.display = "none";
  body_scrollbar.style.overflow = "auto";
}

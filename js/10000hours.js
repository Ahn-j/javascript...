// js file
const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  const timeValue = document.querySelector("#time_value");
  const timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if(fieldValue.value == "") {
      alert('どの分野か入力してください！');
      fieldValue.focus();
      return false;
  } else if (timeValue.value == "") {
      alert('時間を入力してください！');
      timeValue.focus();
      return false;
  } else if (timeValue_int > 24) {
      alert('間違い値です。24以下の値を入力してください');
      return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function() {
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt((10000/timeValue_int), 10);
    loading.style.display = "none";
    result.style.display = "flex";
  }, 1800);   
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  console.log("event :", event.target)
  if(event.target == modal) {
      closeModal();
  }
};

function copyUrl() {
  // let url = window.location.href;
  // console.log("url : ", url)
  // let tmp = document.createElement('input');
  

  // document.body.appendChild(tmp);
  // tmp.value = url;
  // tmp.select();
  // document.execCommand("copy");
  // document.body.removeChild(tmp);
  
  // alert("URL이 복사되었습니다"); 
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
      alert("URL이 복사되었습니다"); 
  });
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
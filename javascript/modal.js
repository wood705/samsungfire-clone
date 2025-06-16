const wrap = document.querySelector(".wrap");
const modalWrap = document.querySelector(".modal-wrap");
const modalInner = document.querySelector(".modal-inner");
const modalHeader = document.querySelector(".modal-header");
const modalMenuBtn = document.querySelector(".modal-menu-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");

modalMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 모달 팝업 시 html, body 스크롤 막기
  document.documentElement.style.overflowY = "hidden";
  modalWrap.style.right = 0;
});

// 모달에서 스크롤 시 모달헤더 고정
modalInner.addEventListener("scroll", () => {
  if (modalInner.scrollTop <= 0) {
    modalHeader.style.position = "absolute";
    modalCloseBtn.style.position = "absolute";
  } else {
    modalHeader.style.position = "fixed";
    modalCloseBtn.style.position = "fixed";
  }
});

// 모달 닫기 버튼 기능
modalCloseBtn.addEventListener("click", () => {
  modalHeader.style.position = "absolute";
  modalCloseBtn.style.position = "absolute";
  modalWrap.style.right = "-100%";
  document.documentElement.style.overflowY = "auto";
});

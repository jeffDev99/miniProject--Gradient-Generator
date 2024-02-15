let $ = document;
let colorA = $.querySelector("#color-a");
let colorB = $.querySelector("#color-b");
let buttonEls = $.querySelector(".buttons");
let submitEl = $.querySelector("#submit");
let outputCode = $.querySelector("#code");
let copyBtn = $.querySelector("#copy");
let colorAval = colorA.value,
  colorBval = colorB.value,
  direction = "to bottom";

//if use  let buttonEls = $.querySelector(".buttons")

// buttonEls.addEventListener("click",(e)=>{
//     // if (e.target.children[0]) {
//     //     console.log(e.target);
//     // }
//     // if (e.target.tagName === "I") {
//     //     e.stopPropagation()
//     // } else{

//     // }
// })

//---------------------------------------------------------------
//if use  let buttonEls = $.querySelectorAll(".buttons")

// buttonEls.forEach(buttonEl => {
//     buttonEl.addEventListener("click",(e)=>{
//         e.stopPropagation()
//         console.log(e.currentTarget);
//         // if(e.target===e.currentTarget){
//         //     console.log(e)
//         //   }
//         //   else{
//         //     console.log(e)
//         //   }
//     })
// });
//---------------------------------------------------------------

//if use  let buttonEls = $.querySelector(".buttons") - recommended
buttonEls.addEventListener("click", (e) => {
  if (e.target.closest(".buttons__btn")) {
    Array.from(buttonEls.children).forEach((buttonEl) => {
      buttonEl.classList.remove("active");
    });
    direction = e.target.closest(".buttons__btn").dataset.direction;
    e.target.closest(".buttons__btn").classList.add("active");
  }
});
colorA.addEventListener("change", (e) => {
  colorAval = e.target.value;
});
colorB.addEventListener("change", (e) => {
  colorBval = e.target.value;
});

copyBtn.addEventListener("click", () => {
    outputCode.innerHTML
});

function addGradient() {
  let mainGradient = `background-image: linear-gradient(${direction}, ${colorAval}, ${colorBval});`;
  console.log(mainGradient);
  document.body.style = mainGradient;
  outputCode.innerHTML = mainGradient;
}

submitEl.addEventListener("click", addGradient);
window.addEventListener("load", addGradient);

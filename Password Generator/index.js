const input_Range = document.querySelector(".input-range");
const range_Value = document.querySelector(".length");
const checkboxes = document.querySelectorAll(".checkbox");
const generate = document.querySelector(".generate-button");
const Strength = document.querySelectorAll(".password-strength");
const Strength_result=document.querySelector('.generate-strength')
const color = ["green", "darkgreen", "#F6BE00", "red"];
const Strength_arr = ["Weak", "Good", "Strength", "Very Strong"];
input_Range.addEventListener("input", () => {
  range_Value.textContent = input_Range.value;
});
function Genereate_Strength(X) {
  Strength.forEach((ele) => {
    ele.style.background = "none";
    ele.style.borderColor = "white";
    ele.style.height='18px'
  });
  for (let i = 0; i < X; i++) {
    Strength[i].style.backgroundColor = color[X - 1];
    Strength[i].style.borderColor = color[X - 1];
    Strength[i].style.height='18px'
}
Strength_result.textContent=Strength_arr[X-1]
}
generate.addEventListener("click", () => {
  let checkedCount = 0;
  checkboxes.forEach((item) => {
    if (item.checked) {
      checkedCount += 1;
    }
  });
  Genereate_Strength(checkedCount);
});

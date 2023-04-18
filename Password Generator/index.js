const input_Range = document.querySelector(".input-range");
const range_Value = document.querySelector(".length");
const checkboxes = document.querySelectorAll(".checkbox");
const generate = document.querySelector(".generate-button");
const Strength = document.querySelectorAll(".password-strength");
const Strength_result = document.querySelector(".generate-strength");
const color = ["green", "darkgreen", "#F6BE00", "red"];
const Strength_arr = ["Weak", "Good", "Strength", "Very Strong"];
const password_Display=document.querySelector('.password');
const copy=document.querySelector('.copy')
copy.addEventListener('click',()=>{
  navigator.clipboard.writeText(password_Display.textContent);
  alert("Copied the text: " + password_Display.textContent)
})
input_Range.addEventListener("input", () => {
  range_Value.textContent = input_Range.value;
});
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "123456789".split("");
const specialCharacters = ';,./[]-=*:<>?"}{|'.split("");

function GenerateResult(Y, length) {
  length = Number(length);
  let Result_String = "";
  let Some_var = 0;
  let Result;
  let values = ["UpperCase", "lowerCase", "Numbers", "specialCharacters"];
  values = values.filter((item, index) => Y.includes(index));

  for (i = 0; i < length; i++) {
    Some_var += 1;
    if (i === 0) {
      Some_var = 0;
    }
    if (Some_var > values.length - 1) {
      Some_var = 0;
      Some_var = Math.ceil(Math.random() * values.length - 1);
    }
    switch (values[Some_var]) {
      case "UpperCase":
        Result = Math.ceil(Math.random() * lowercase.length - 1);
        Result_String += uppercase[Result];

        break;
      case "lowerCase":
        Result = Math.ceil(Math.random() * uppercase.length - 1);
        Result_String += lowercase[Result];

        break;
      case "Numbers":
        Result = Math.ceil(Math.random() * numbers.length - 1);
        Result_String += numbers[Result];

        break;
      case "specialCharacters":
        Result = Math.ceil(Math.random() * specialCharacters.length - 1);
        Result_String += specialCharacters[Result];
        break;
    }
  }
  return Result_String
}
function Genereate_Strength(X) {
  Strength.forEach((ele) => {
    ele.style.background = "none";
    ele.style.borderColor = "white";
  });
  for (let i = 0; i < X; i++) {
    Strength[i].style.backgroundColor = color[X - 1];
    Strength[i].style.borderColor = color[X - 1];
    Strength[i].style.height = "18px";
  }
  Strength_result.textContent = Strength_arr[X - 1];
}
let arr = [];
generate.addEventListener("click", () => {
  let checkedCount = 0;
  checkboxes.forEach((item) => {
    if (item.checked) {
      checkedCount += 1;
    }
  });
  Genereate_Strength(checkedCount);
  checkboxes.forEach((item, index) => {
    if (item.checked) {
      arr.push(index);
    }
  });
  const Result=GenerateResult(arr, input_Range.value);
  password_Display.textContent=Result
  arr = [];
});

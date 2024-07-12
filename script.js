const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (number) => {
    const num = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const res = [];

    num.forEach(function (el) {
        while (number >= el[1]) {
            res.push(el[0]);
            number -= el[1];
        }
    });
    return res.join("")
}

const validNumber = (number) => {
    let error = ""
    if (!number) {
        error = "Please enter a valid number";
    } else if (number < 1) {
        error = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        error = "Please enter a number less than or equal to 3999";
    } else {
        return true
    }
    output.innerText = error;
    output.classList.add("alert");
    return false;
}

const clearOutput = () => {
  output.innerText = "";
  output.classList.remove("alert");
}

form.addEventListener("submit", e => {
    e.preventDefault();
    update();
})

convertBtn.addEventListener("click", () => {
    update();
})

const update = () => {
  const num = document.getElementById("number").value;
  const int = parseInt(num, 10);
  output.classList.remove("hidden");
  clearOutput();
  if (validNumber(num, int)) {
      output.innerText = convertToRoman(int);
  }
}
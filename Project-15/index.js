const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  const summary = document.querySelector(".summary");

  if (height === "" || height < 0 || isNaN(height)) {
    result.textContent = "Please Enter Valid Input!";
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = "Please Enter Valid Input!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.textContent = `Your Bmi is ${bmi}`;
    if (bmi < 18.6) {
      summary.textContent = `You Are UnderWeight☹️`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      summary.textContent = `You Weight is Perfect😏`;
    }
    if (bmi > 24.9) {
      summary.textContent = `You Are OverWeight😥`;
    }
  }
});

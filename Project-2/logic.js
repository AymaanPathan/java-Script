//   bmi = weight / (height ** 2)

const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", (e) => {
  const userHeight = parseInt(document.querySelector(".user-height").value);
  const userWeight = parseInt(document.querySelector(".user-weight").value);
  const detail = document.querySelector("p");

  e.preventDefault();
  const bmi = (userWeight / userHeight ** 2) * 10000;
  console.log(bmi);

  bmiResult = Math.floor(bmi);

  if (userHeight === 0 || userWeight === 0) {
    detail.textContent = "Please enter valid height and weight values.";
  }
  if (bmiResult <= 18.7) {
    detail.textContent = `Your Bmi is:${bmiResult} & its UnderWeight😒`;
  }
  if (bmiResult > 18.7 && bmiResult < 24.9) {
    detail.textContent = `Your Bmi is:${bmiResult} & its All Fine😉`;
  }
  if (bmiResult > 24.9) {
    detail.textContent = `Your Bmi is:${bmiResult} & its OverWeight🥲`;
  }
});

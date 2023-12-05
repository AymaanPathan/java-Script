const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const generateBtn = document.querySelector(".generateBtn");

const generateQrCode = () => {
  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.add("error");
    }, 1000);
  }
};

generateBtn.addEventListener("click", () => {
  generateQrCode();
});

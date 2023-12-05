const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const generateBtn = document.querySelector(".generateBtn");

const generateQrCode = () => {
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
};

generateBtn.addEventListener("click", () => {
  generateQrCode();
});

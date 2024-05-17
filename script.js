const signaturePad = new SignaturePad(
  document.getElementById("signature-pad"),
  {
    backgroundColor: "rgba(255, 255, 255, 0)",
    penColor: "rgb(0, 0, 0)",
  }
);

const clearButton = document.getElementById("clear-button");
const fontColorSelect = document.getElementById("font-color");
const penColorSelect = document.getElementById("pen-color");

clearButton.addEventListener("click", () => {
  signaturePad.clear();
});

fontColorSelect.addEventListener("change", () => {
  const fontColor = fontColorSelect.value;
  document.getElementById("signature-data").value = `#${fontColor}`;
});

penColorSelect.addEventListener("change", () => {
  const penColor = penColorSelect.value;
  signaturePad.penColor = penColor;
});
const mergePdfBtn = document.getElementById("merge-pdf-btn");
const mergePdfForm = document.getElementById("merge-pdf-form");

mergePdfBtn.addEventListener("click", () => {
  mergePdfForm.style.display = "block";
  splitPdfForm.style.display = "none";
  mergePdfBtn.classList.add("btn-primary");
  mergePdfBtn.classList.remove("btn-secondary");
  splitPdfBtn.classList.add("btn-secondary");
  splitPdfBtn.classList.remove("btn-primary");
});

document.getElementById("esign-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const signatureData = signaturePad.toDataURL();
  document.getElementById("signature-data").value = signatureData;

  document.getElementById("esign-form").submit();
});

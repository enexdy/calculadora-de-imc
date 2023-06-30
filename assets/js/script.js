function sendForm() {
  const form = document.querySelector(".form");
  const resultform = document.querySelector(".resultform");

  function receiveForm(event) {
    event.preventDefault();
    const peso = form.querySelector("#peso1");
    const altura = form.querySelector("#altura1");
    const result = peso.value / Math.pow(altura.value, 2);

    if (result >= 0 && result <= 18.5) {
      resultform.innerHTML = `<p class="result-box" style="background: rgb(89, 229, 136)"><strong>Seu IMC e de ${result.toFixed(
        1
      )} (Abaixo do peso)</strong></p>`;
    } else if (result > 18.5 && result <= 24.9) {
      resultform.innerHTML = `<p class="result-box" style="background: rgb(129, 229, 89)"><strong>Seu IMC e de ${result.toFixed(
        1
      )} (Peso normal)</strong></p>`;
    } else if (result > 24.9 && result <= 29.9) {
      resultform.innerHTML = `<p class="result-box" style="background: rgb(215, 229, 89)"><strong>Seu IMC e de ${result.toFixed(
        1
      )} (Sobrepeso)</strong></p>`;
    } else if (result > 29.9 && result <= 34.9) {
      resultform.innerHTML = `<p class="result-box" style="background: rgb(229, 152, 89)"><strong>Seu IMC e de ${result.toFixed(
        1
      )} (Obesidade grau 1)</strong></p>`;
    } else if (result > 34.9 && result <= 39.9) {
      resultform.innerHTML = `<p class="result-box" style="background: rgb(229, 98, 89)"><strong>Seu IMC e de ${result.toFixed(
        1
      )} (Obesidade grau 2)</strong></p>`;
    } else if (result > 39.9) {
      resultform.innerHTML = `<p class="result-box" style="background: rgb(255, 55, 55)"><strong>Seu IMC e de ${result.toFixed(
        1
      )} (Obesidade grau 3)</strong></p>`;
    } else {
      resultform.innerHTML = `<p class="result-box"  style="background: red"><strong>Altura Invalida</strong></p>`;
    }
  }
  form.addEventListener("submit", receiveForm);
}

sendForm();

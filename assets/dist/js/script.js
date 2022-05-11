const whatNumber = document.getElementById("whats");
const text = document.getElementById("text");
const btnSubmint = document.querySelector("form button");
const inputInfoWhats = document.getElementById("input-info-whats");
const toogle = document.querySelector('.toogle')


whatNumber.addEventListener("input", handleInput, false);

function handleInput(e) {
  e.target.value = phoneMask(e.target.value);
}

function phoneMask(phone) {
  return phone
    .replace(/\D/g, "")
    .replace(/^(\d)/, "($1")
    .replace(/^(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
}

function limparNumber(number) {
  return number
    .replace("(", "")
    .replace(")", "")
    .replace(" ", "")
    .replace("-", "");
}

function gerarLink() {
  const number = limparNumber(whatNumber.value);
  const textInfo = text.value.replaceAll(" ", "+");
  let infoWhats = document.querySelector(".info-whats");
  infoWhats.classList.remove("hidden");
  inputInfoWhats.value = `https://wa.me/55${number}?text=${textInfo}`;
}

inputInfoWhats.addEventListener("click", (e) => {
  let copyText = document.getElementById("input-info-whats");
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(copyText.value);
  toogle.innerHTML = 'Texto Copiado';
});


inputInfoWhats.addEventListener('mouseenter', function(){
    toogle.style.visibility= 'visible'
})

inputInfoWhats.addEventListener('mouseout', function(){
    toogle.style.visibility= 'hidden'
})

btnSubmint.addEventListener("click", (e) => {
  e.preventDefault();
  gerarLink();
});

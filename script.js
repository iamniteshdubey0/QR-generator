const qrForm = document.querySelector('.qr-input');
const api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&";
const qrImage = document.querySelector('.qr-result img');

qrForm.addEventListener("submit", (event) => {
    event.preventDefault();
    qrImage.src = api_url + `data=${event.target.qrString.value}`;
    qrImage.parentElement.classList.add("show-img");
})

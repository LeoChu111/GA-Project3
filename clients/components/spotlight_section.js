const randomAddress = document.querySelector('#random-address');
const randomName = document.querySelector('#random-name');

fetchRandomStation().then(res => {
    randomName.innerText = res.name;
    randomAddress.innerText = res.address
})
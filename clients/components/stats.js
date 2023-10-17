const totalOwners = document.querySelector('.owners')


fetchOwners().then(res => totalOwners.innerHTML = res)


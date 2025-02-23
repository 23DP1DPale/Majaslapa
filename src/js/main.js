const sutitButton = document.getElementById('pasutit')
sutitButton.addEventListener('click', () => {
    sutitButton.innerHTML = 'Pasūtīts!'
})

const jaunsPas = document.getElementById('jauns-pasut')
const selectors = document.querySelectorAll('.select')

jaunsPas.addEventListener('click', () => {
    selectors.forEach(function(select) {
        select.value = '-'
    })
    sutitButton.innerHTML = 'Pasūtīt'
})
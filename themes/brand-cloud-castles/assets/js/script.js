const contactSection__inputTextarea = document.querySelector(
    '.contact-section__input--textarea'
)

contactSection__inputTextarea.addEventListener('input', (e) => {
    const contactSection__textareaCounter__value = document.querySelector(
        '.contact-section__textarea-counter--value'
    )
    const textLength = e.target.value.length

    contactSection__textareaCounter__value.textContent = textLength

    if (textLength > 100) {
        contactSection__textareaCounter__value.style.color = 'red'
    } else if (textLength > 80) {
        contactSection__textareaCounter__value.style.color = 'yellow'
    } else if (textLength > 50) {
        contactSection__textareaCounter__value.style.color = 'green'
    } else {
        contactSection__textareaCounter__value.style.color = 'white'
    }
})

const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const setSuccess = (input) => {
    const inputContainer = input.parentNode

    if(inputContainer.classList.contains('error')) {
        inputContainer.classList.remove('error')
    }

    inputContainer.classList.add('success')
}

const setError = (input) => {
    const inputContainer = input.parentNode

    if(inputContainer.classList.contains('success')) {
        inputContainer.classList.remove('success')
    }
    
    inputContainer.classList.add('error')
}

const checkInputs = () => {
    const nameValue = name.value
    const emailValue = email.value
    const passwordValue = password.value

    if(nameValue === '') {
        setError(name)
    } else {
        setSuccess(name)
    }

    if(emailValue === '') {
        setError(email)
    } else {
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password)
    } else {
        setSuccess(password)
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

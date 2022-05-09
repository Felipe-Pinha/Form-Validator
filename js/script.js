const inputs = document.querySelectorAll('input')
const submitBtn = document.querySelector('.btn')


const validation = {
    inputsValidation: (input) => {

        for(const input of inputs) {
            if(input.value === ''.trim()) {
                input.classList.add('error')

            }
        }
    },
    emailValidation: () => {
        if(!checkEmail(inputs[1].value)) {
            inputs[1].classList.add('error')
        }
    }
}

for (const input of inputs) {
    input.addEventListener('focus', () => {
        if(input.classList.contains('error')) {
            input.classList.remove('error')
        }
    })
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    validation.inputsValidation()
    validation.emailValidation()

})




function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

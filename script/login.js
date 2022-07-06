const form = document.getElementById('login')
console.log(form)

form.addEventListener('submit', event => {
    event.preventDefault()

    const formObject = new FormData(form)
    let email = formObject.get('email')
    let password = formObject.get('password')

    if(email === 'dude@gmail.com' && password === 'pipoca'){
        window.location.href = 'food.html'
    }else {
        alert("Email ou senha estão incorretos")
    } 
    
})
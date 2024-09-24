let datas = [];
const togglePassword = document.getElementById('toggle');
const passwordInput = document.getElementById('jelszo');

togglePassword.addEventListener('click', function () {
    if (this.classList.contains('checked')) {
        passwordInput.type = 'password';
        this.classList.remove('checked');
        this.src = './kepek/eyeclosed.svg';
    } else {
        passwordInput.type = 'text';
        this.classList.add('checked');
        this.src = './kepek/eyeopen.svg';
    }
});

function generatePassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("jelszo").value = password;
}

function Send(){
    const currentUrl = window.location.href.split('?')[1].split('&');
    const data = currentUrl.map(x => x.split('='));
    datas.push(data);
}
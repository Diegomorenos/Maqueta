function publicar() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let date = document.getElementById("date")
    let text = document.getElementById("text")
    let valemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (name.value=="") {
        alert("El nombre no es valido")
        exit()
    }
    if (!valemail.test(email.value)){
        alert("El correo no es valido")
        exit()
    }
    if (date.value=="") {
        alert("La fecha no es valida")
        exit()
    }
    if (text.value==""){
        alert("Debe hacer algún comentario")
        exit()
    }
    else{
        alert("Mensaje guardado, en espera de validación")
    }
}
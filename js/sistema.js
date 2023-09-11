function seleccionar(link){

    let links = document.querySelectorAll("header nav a");

    links[0].className="";
    links[1].className="";
    links[2].className="";
    links[3].className="";
    links[4].className="";
    links[5].className="";

    link = className="selected";
}

function contactar() {
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let text = document.getElementById("text");
    let valemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;

    if (name.value=="") {
        alert("El nombre no es valido");
        exit();
    }
    if (lastname.value=="") {
        alert("El apellido no es valido");
        exit();
    }
    if (!valemail.test(email.value)) {
        alert("El email no es valido");
        exit();
    }
    if (text.value.length < 8) {
        alert("Olvidaste escribir un mensaje para nosotros!");
        exit();
    }
    else{
        alert("Mensaje enviado")
    }
}

function registrar() {
    let name = document.getElementById("nameReg")
    let lastname = document.getElementById("lastnameReg")
    let email = document.getElementById("emailReg")
    let typeID = document.getElementById("typeID")
    let doc = document.getElementById("doc")
    let check = document.getElementById("check").checked
    let valemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (name.value=="") {
        alert("El nombre no es valido")
        exit()
    }
    if (lastname.value=="") {
        alert("El apellido no es valido")
        exit()
    }
    if (!valemail.test(email.value)) {
        alert("El email no es valido")
        exit()
    }
    if (typeID.value=="") {
        alert("El tipo de documento no es valido")
        exit()
    }
    if (doc.value.length<7) {
        alert("El numero de documento no es valido")
        exit()
    }
    if (!check) {
        alert("Favor aceptar terminos y condiciones")
        exit()
    }
    else{
        alert("Usuario registrado con exito")
    }
}
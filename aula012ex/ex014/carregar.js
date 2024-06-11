function carregar() {
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById("img");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = (`Agora são ${hora} horas`);
}

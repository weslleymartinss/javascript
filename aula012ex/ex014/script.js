var msg = window.document.getElementById('imsg')
var img = window.document.getElementById('iimg')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = (`Agora são ${hora} horas.`)

if (hora >=0 && hora <12) {
    img.innerHTML = '<img src="foto-manha.jpg" alt="Foto ">'
    document.body.style.background = '#6c5f35'
} else if (hora >=12 && hora <18) {
    img.innerHTML =  '<img src="foto-tarde.jpg" alt=""></img>'
    document.body.style.background = '#ef984b'
} else {
      img.innerHTML = '<img src="foto-noite.jpg" alt=""></img>'
    document.body.style.background = '#1e1d1d'
}
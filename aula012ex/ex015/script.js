function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('icaixa')
    var res = window.document.getElementById('res')
if (fano.value ==0 || Number(fano.value) > ano){
    window.alert ('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <10) {
            img.setAttribute('src','homem-bb.jpg')
        } else if (idade <21) {
            img.setAttribute('src','homem-jovem.jpg')
        } else if (idade <50) {
            img.setAttribute('src', 'homem-adulto.jpg')
        } else {
            img.setAttribute('src', 'homem-idoso.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <10) {
            img.setAttribute('src', 'mulher-bb.jpg')
        } else if (idade <21) {
            img.setAttribute('src', 'mulher-jovem.jpg')
        } else if (idade <50) {
            img.setAttribute('src', 'mulher-adulta.jpg')
        } else {
            img.setAttribute('src', 'mulher-idosa.jpg')
        }
    }
}
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
  res.appendChild(img)
  res.style.textAlign = 'center'
}


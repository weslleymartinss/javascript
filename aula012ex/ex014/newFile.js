if (hora >= 0 && hora < 12) {
    foto.src = "foto-manha.jpg";
    body;
} else if (hora >= 12 && hora < 18) {
    foto.src = "foto-tarde.jpg";
} else {
    foto.src = "foto-noite.jpg";
}

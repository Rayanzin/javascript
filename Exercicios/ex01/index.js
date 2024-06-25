let horario = new Date()
let hours = horario.getHours()
hora.innerHTML = `Agora são ${hours} Horas`
if (hours >= 12 && hours <= 17) {
    cor.style.backgroundColor = 'lightblue'
    img.style.backgroundColor = 'lightblue'
} else if (hours >= 18 && hours <= 5) {
    cor.style.backgroundColor = 'rgb(4, 4, 75)'
    img.style.backgroundColor = 'rgb(4, 4, 75)'
} else if (hours >= 6 && hours <= 11) {
    cor.style.backgroundColor = 'rgb(218, 218, 111)'
    img.style.backgroundColor = 'rgb(218, 218, 111)'
} else {
    cor.style.backgroundColor = 'black'
}


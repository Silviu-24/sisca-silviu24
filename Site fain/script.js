var button = document.getElementById("button")
var img = document.getElementById("img")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var asteptari = document.getElementById("asteptari")
var an_nastere = document.getElementById("an_nastere")

const d = new Date()
var year = d.getFullYear()
button.addEventListener("click", TimeMachine)
an_nastere.addEventListener("mouseover", Age)

function TimeMachine()
{
    nume.innerHTML = "Functie: Sefu' la bani"
    prenume.innerHTML = "Locul de munca: Tokyo"
    asteptari.innerHTML = "Experiente: internship, licenta"

    img.src = "V.jpg"
    img.style.width="400px"
    img.style.opacity="95%"
    img.style.filter=" drop-shadow(8px 8px 10px white)"

    body.style.backgroundImage = "linear-gradient(to bottom left, yellow , green)"
} 

function Age()
{
    an_nastere.innerHTML = year - an_nastere.innerHTML
}
import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// carregar a data atual
selectedDate.value = inputToday

// definir data mínima
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Enviado!")
}
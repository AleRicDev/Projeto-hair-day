import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// carregar a data atual
selectedDate.value = inputToday

// definir data mínima
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()
    
    try {
        // Recuperando o nome do cliente.
        const name = clientName.value.trim()
        

        if (!name) {
            return alert("Informe o nome do cliente!")
        }
     //recuperar somente a hora
     const hourSelected = document.querySelector(".hour-selected")
    
     if (!hourSelected) {
        return alert("Selecione a hora.")
     }
     const [hour] = hourSelected.innerText.split(":")
     console.log(hour)
     
     //Insere a data na hora
     const when = dayjs(selectedDate.value).add(hour,"hour")
     console.log(when)
     
     //Gera um ID
     const id = new Date().getTime()

     //Faz o agendamento
     await scheduleNew({
        id,
        name,
        when,
     })
     
     //Recarrega os agendamento do dia
        await schedulesDay()

     // Limpa o imput de nome do cliente.
        clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}
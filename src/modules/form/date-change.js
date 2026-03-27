import {schedulesDay} from "../schedules/load"


//Seleciona o input de data
const selected = document.getElementById("date")

//Recarrega a lista de horários quando o input muda a data
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()

import { hoursLoad } from "../form/hours-load.js"

//Seleciona o input de data.
const selectedDate = document.getElementById("date")


export async function schedulesDay(){
    //obtém a data do input
    const date = selectedDate.value
    

    //Renderiza as horas disponíveis.
    hoursLoad({ date })

}
import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"


const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {

    //Limpa a lista de horários.
    hours.innerHTML = ""
    
    //Obém a lista de horários ocupados.
    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("HH:mm")
    )

    

    const opening = openingHours.map((hour) => {
        
     //Recupera somente a hora
    const [schedulesHour] = hour.split(":")

    //Verifica se a hora da ta no passado ou não.
    const isHourPast = dayjs(date)
            .add(Number(schedulesHour), "hour")
            .isBefore(dayjs())

       const available = !isHourPast && !unavailableHours.includes(hour)
            return {
            hour,
            available,
        }
    })

    //Renderiza os horários.
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(
            available ? "hour-available" : "hour-unavailable"
        )

        li.textContent = hour
        
        //Separa os horarios
        if (hour === "9:00") {
            hourHeaderAdd("Manha")    
        }
        else if(hour === "13:00") {
            hourHeaderAdd("Tarde")
        }
        else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    //Adiciona o evento de clique nos horário disponíveis.
    hoursClick()
} 
    function hourHeaderAdd(title) {
        const header = document.createElement("li")
        header.classList.add("hour-period")
        header.textContent = title
        
        hours.append(header)
    }

import dayjs from "dayjs"
import{openingHours} from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        const [schedulesHour] = hour.split(":")

        const isHourPast = dayjs(date)
            .add(Number(schedulesHour), "hour")
            .isBefore(dayjs())

        return {
            hour: schedulesHour,
            available: !isHourPast
        }
    })

    console.log(opening)
}
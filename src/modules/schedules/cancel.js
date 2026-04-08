import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

// Seleciona todos os períodos de agendamento (manhã, tarde e noite)
const periods = document.querySelectorAll(".period")

// Adiciona evento de clique para cada período
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {

    // Verifica se o elemento clicado é o ícone de cancelamento
    if (event.target.classList.contains("cancel-icon")) {

      // Obtém o elemento pai (li) do ícone clicado
      const item = event.target.closest("li")

      // Recupera o id do agendamento
      const { id } = item.dataset

      // Verifica se existe um id válido
      if (id) {

        // Confirma se o usuário realmente deseja cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar este agendamento?"
        )

       
        if (isConfirm) {

          // Faz a requisição para cancelar o agendamento
          await scheduleCancel({ id })

          // Recarrega os agendamentos do dia
          await schedulesDay()
        }
      }
    }
  })
})
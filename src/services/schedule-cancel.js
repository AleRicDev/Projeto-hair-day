import { apiConfig } from "./api-config"

export async function scheduleCancel({ id }) {
  try {
    // Envia requisição para remover o agendamento pelo ID
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    // Exibe mensagem de sucesso
    alert("Agendamento cancelado com sucesso!")
    
  } catch (error) {
    // Exibe erro caso a requisição falhe
    console.error("Erro ao cancelar o agendamento:", error)
    throw error
  }
}
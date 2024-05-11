import { PRISMA } from '$lib/server/prisma'
import { fail } from '@sveltejs/kit'

export const load = async ({ params }) => {
  try {
    const taskToEdit = await PRISMA.task.findUnique({ where: { id: Number(params.taskid) } })
    return taskToEdit
  } catch (error) {
    fail(404, { message: "Hubo un error :(" })
  }
}

export const actions = {
  updateTask: async ({ request, params }) => {
    const data = await request.formData()

    let title = data.get("title")
    let content = data.get("content")
    console.log("Hola",title);
    try {
      await PRISMA.task.update({
        where: { id: Number(params.taskid) },
        data: { title, content }
      })
    } catch (error) {
      return fail(500, {message: "No se pudo actualizar la tarea"})
    }
  } 
}
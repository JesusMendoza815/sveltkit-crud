import { PRISMA } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	return {
		tasks: await PRISMA.task.findMany()
	};
};

export const actions = {
	createPost: async ({ request }) => {
		const data = await request.formData();

		let title = data.get('title');
		let content = data.get('content');

		try {
			await PRISMA.task.create({
				data: { title, content }
			});
		} catch (error) {
			fail(500, { message: 'No se pudo crear la tarea' });
		}
	},
	deletePost: async ({ url }) => {
    const id = url.searchParams.get("id")
		try {
			await PRISMA.task.delete({ where: { id: Number(id) } });
		} catch (error) {
			fail(500, { message: 'No se pudo eliminar la tarea' });
		}
	}
};

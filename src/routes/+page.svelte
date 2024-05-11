<script>
  export let data
</script>

<main class="d-flex justify-content-evenly align-items-top my-5">
  <article class="p-3 rounded bg-dark border-top border-5 border-success">
    <h3 class="text-white">Crear tarea</h3>
    <form action="?/createPost" method="POST">
      <div class="mb-3">
        <label for="title" class="form-label text-white">Título:</label>
        <input type="text" id="title" name="title" class="form-control">
      </div>

      <div class="mb-3">
        <label for="content" class="form-label text-white">Detalles:</label>
        <input type="text" id="content" name="content" class="form-control">
      </div>

      <button type="submit" class="btn btn-success w-100">Crear</button>
    </form>
  </article>
  <article>
    {#each data.tasks as task }
    <div class="card rounded bg-dark shadow-lg mb-3" style="width: 18rem;">
      <div class="card-body border-top border-5 border-info">
        <h3 class="text-white">{task.title}</h3>
        <p class="text-white">{task.content}</p>
        <small class="text-white">Publicado {new Date(task.createdAt).toLocaleString()}</small>
        <div class="d-flex justify-content-between py-3">
          <form action={`?/deletePost&id=${task.id}`} method="POST">
            <button type="submit" class="btn btn-danger">Eliminar</button>
          </form>
          <a href="/{task.id}" class="btn btn-primary">Editar tarea</a>
        </div>
      </div>
    </div>
    {/each}
  </article>
</main>
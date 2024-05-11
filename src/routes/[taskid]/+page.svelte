<script>
  export let data
</script>

<main class="d-flex justify-content-evenly align-items-center">
  <section class="mt-5 p-3 rounded bg-dark bg-gradient">
    <form action="?/updateTask" method="POST">
      <h3 class="text-white">Actualizar tarea</h3>

      <div class="mb-3">
        <label for="title" class="form-label text-white">Título</label>
        <input type="text" id="title" name="title" value={data.title} class="form-control"/>
      </div>

      <div class="mb-3">
        <label for="content" class="form-label text-white">Detalles</label>
        <input type="text" id="content" name="content" value={data.content} class="form-control"/>
      </div>

      <button type="submit" class="btn btn-success w-100">Actualizar</button>
    </form>
  </section>

</main>
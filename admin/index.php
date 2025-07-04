<?php
// admin/index.php
// Ejemplo de panel de administración simple (solo visual, sin base de datos)
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Admin AlekStore</title>
  <style>
    body { font-family: Arial, sans-serif; background: #fdf6fa; }
    .container { max-width: 500px; margin: 2rem auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px #e7b6d6; padding: 2rem; }
    h1 { color: #a14d7c; }
    label { display: block; margin-top: 1rem; }
    input, textarea { width: 100%; padding: 0.5rem; margin-top: 0.3rem; border-radius: 5px; border: 1px solid #e7b6d6; }
    button { background: #a14d7c; color: #fff; border: none; padding: 0.7rem 1.5rem; border-radius: 5px; margin-top: 1rem; cursor: pointer; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Panel de Administración</h1>
    <form method="post">
      <label>Nombre del producto
        <input type="text" name="nombre" required />
      </label>
      <label>Descripción
        <textarea name="descripcion" required></textarea>
      </label>
      <label>Precio
        <input type="number" name="precio" step="0.01" required />
      </label>
      <button type="submit">Agregar producto</button>
    </form>
    <p style="margin-top:2rem; color:#888;">(Este panel es solo un ejemplo visual. Para hacerlo funcional, conecta con una base de datos.)</p>
  </div>
</body>
</html>

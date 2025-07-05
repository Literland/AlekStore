<?php
// admin/index.php
// Ejemplo de panel de administración simple (con conexión a base de datos)
require_once 'db.php';

// Procesar formulario para agregar producto
$mensaje = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'] ?? '';
  $descripcion = $_POST['descripcion'] ?? '';
  $precio = $_POST['precio'] ?? 0;
  $imagen = '';
  if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
    $ext = pathinfo($_FILES['imagen']['name'], PATHINFO_EXTENSION);
    $nombreArchivo = uniqid('prod_') . '.' . $ext;
    $rutaDestino = __DIR__ . '/../public/img/' . $nombreArchivo;
    if (move_uploaded_file($_FILES['imagen']['tmp_name'], $rutaDestino)) {
      $imagen = 'public/img/' . $nombreArchivo;
    }
  }
  if ($nombre && $descripcion && $precio) {
    $stmt = $conn->prepare("INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssds", $nombre, $descripcion, $precio, $imagen);
    if ($stmt->execute()) {
      $mensaje = 'Producto agregado correctamente.';
    } else {
      $mensaje = 'Error al agregar producto: ' . $conn->error;
    }
    $stmt->close();
  }
}

// Obtener productos existentes
$productos = [];
$result = $conn->query("SELECT id, nombre, descripcion, precio, imagen FROM productos ORDER BY id DESC");
if ($result) {
  while ($row = $result->fetch_assoc()) {
    $productos[] = $row;
  }
}
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
    .prod-img { width: 80px; height: 80px; object-fit: cover; border-radius: 8px; border: 1px solid #e7b6d6; margin-bottom: 0.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Panel de Administración</h1>
    <?php if ($mensaje): ?>
      <div style="background:#e7f9e7; color:#2d7a2d; padding:0.7rem; border-radius:5px; margin-bottom:1rem;">
        <?= htmlspecialchars($mensaje) ?>
      </div>
    <?php endif; ?>
    <form method="post" enctype="multipart/form-data">
      <label>Nombre del producto
        <input type="text" name="nombre" required />
      </label>
      <label>Descripción
        <textarea name="descripcion" required></textarea>
      </label>
      <label>Precio
        <input type="number" name="precio" step="0.01" required />
      </label>
      <label>Imagen
        <input type="file" name="imagen" accept="image/*" />
      </label>
      <button type="submit">Agregar producto</button>
    </form>
    <h2 style="margin-top:2rem; color:#a14d7c;">Productos guardados</h2>
    <ul style="list-style:none; padding:0;">
      <?php foreach ($productos as $prod): ?>
        <li style="background:#f7e6f0; margin-bottom:1rem; padding:1rem; border-radius:8px; display:flex; align-items:center; gap:1rem;">
          <?php if (!empty($prod['imagen'])): ?>
            <img src="/<?= htmlspecialchars($prod['imagen']) ?>" alt="Imagen" class="prod-img" />
          <?php endif; ?>
          <div>
            <strong><?= htmlspecialchars($prod['nombre']) ?></strong><br>
            <span><?= htmlspecialchars($prod['descripcion']) ?></span><br>
            <span style="color:#a14d7c; font-weight:bold;">$<?= number_format($prod['precio'],2) ?></span>
          </div>
        </li>
      <?php endforeach; ?>
      <?php if (empty($productos)): ?>
        <li style="color:#888;">No hay productos aún.</li>
      <?php endif; ?>
    </ul>
  </div>
</body>
</html>

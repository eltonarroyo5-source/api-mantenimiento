CREATE DATABASE IF NOT EXISTS mantenimiento_ml;
USE mantenimiento_ml;

CREATE TABLE equipos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  ubicacion VARCHAR(100),
  estado ENUM('operativo', 'en_mantenimiento', 'inactivo') NOT NULL DEFAULT 'operativo',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tecnicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefono VARCHAR(20),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE mantenimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  equipo_id INT NOT NULL,
  tecnico_id INT NOT NULL,
  fecha DATE NOT NULL,
  tipo ENUM('preventivo', 'correctivo') NOT NULL,
  descripcion TEXT,
  estado ENUM('pendiente', 'en_proceso', 'completado') NOT NULL DEFAULT 'pendiente',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (equipo_id) REFERENCES equipos(id),
  FOREIGN KEY (tecnico_id) REFERENCES tecnicos(id)
);

INSERT INTO equipos (nombre, tipo, ubicacion) VALUES
  ('Laptop Dell 01', 'Computadora', 'Laboratorio 1'),
  ('Impresora HP 02', 'Impresora', 'Secretaría'),
  ('Proyector Epson 03', 'Proyector', 'Aula 5');

INSERT INTO tecnicos (nombre, email, telefono) VALUES
  ('Carlos Ramírez', 'carlos@ejemplo.com', '987654321'),
  ('Ana Torres', 'ana@ejemplo.com', '912345678');

INSERT INTO mantenimientos (equipo_id, tecnico_id, fecha, tipo, descripcion, estado) VALUES
  (1, 1, '2026-10-20', 'preventivo', 'Limpieza interna y actualización de software', 'completado'),
  (2, 2, '2026-10-25', 'correctivo', 'Cambio de rodillo de papel', 'pendiente');
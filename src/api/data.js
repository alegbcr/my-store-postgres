// Faker Dependecy
// const { faker } = require('@faker-js/faker');

/* const productsData = [
  {
    "name": "Margarita",
    "description": "La clásica pizza Margarita",
    "image": "https://i.postimg.cc/766TMRhg/Margarita.png",
    "price": 10
  },
  {
    "name": "Pepperoni",
    "description": "Deliciosa pizza de pepperoni",
    "image": "https://i.postimg.cc/K8DN0dGV/Pepperoni.png",
    "price": 12
  },
  {
    "name": "Hawaiana",
    "description": "Combinación tropical",
    "image": "https://i.postimg.cc/wx1w9f2y/Hawaiana.png",
    "price": 11
  },
  {
    "name": "Vegetariana",
    "description": "Pizza saludable",
    "image": "https://i.postimg.cc/1tfr5XGh/Vegetariana.png",
    "price": 9
  },
  {
    "name": "Carnes Mixtas",
    "description": "Una pizza cargada con una variedad de carnes",
    "image": "https://i.postimg.cc/G25TMjT6/carnes-mixtas.png",
    "price": 14
  },
  {
    "name": "Marinara",
    "description": "Pizza simple y clásica sin queso",
    "image": "https://i.postimg.cc/RZBdQMBK/Marinara.png",
    "price": 8
  },
  {
    "name": "Carnívora",
    "description": "Una explosión de sabores de carne",
    "image": "https://i.postimg.cc/L4GN5tQy/Carnivora.png",
    "price": 15
  },
  {
    "name": "Caprese",
    "description": "Una pizza ligera y fresca con sabores mediterráneos",
    "image": "https://i.postimg.cc/90wRsqG0/Caprese.png",
    "price": 11
  },
  {
    "name": "Mexicana",
    "description": "Una pizza picante con toques mexicanos",
    "image": "https://i.postimg.cc/F1tdvsZZ/Mexicana.png",
    "price": 12
  },
  {
    "name": "Napolitana",
    "description": "Inspirada en la tradición napolitana",
    "image": "https://i.postimg.cc/vm8vk3Dm/Napolitana.png",
    "price": 10
  },
  {
    "name": "Mediterranean",
    "description": "Una pizza inspirada en los sabores del Mediterráneo",
    "image": "https://i.postimg.cc/7Y7X25pq/Mediterranean.png",
    "price": 12
  },
  {
    "name": "Primavera",
    "description": "Una pizza llena de ingredientes frescos y coloridos",
    "image": "https://i.postimg.cc/d0W9YrTj/Primavera.png",
    "price": 11
  }
] */

/* const categoriesData = [
  {
    "name": "pizzas",
    "image": "https://example.com/pizzas.png"
  },
  {
    "name": "pollo",
    "image": "https://example.com/pollo.png"
  },
  {
    "name": "adicionales",
    "image": "https://example.com/adicionales.png"
  },
  {
    "name": "bebidas",
    "image": "https://example.com/bebidas.png"
  },
  {
    "name": "postres",
    "image": "https://example.com/postres.png"
  }
] */

/* const usersData = [
  {
    id: '12a0d8f3-7c84-4d0b-98e6-4c27e55a2d2e',
    nombre: 'Juan Pérez',
    apodo: 'juanito123',
    email: 'juan.perez@example.com',
    phone: '+1 555-1234',
    country: 'Estados Unidos',
    region: 'California',
    postal_zip: '12345',
    address: '1234 Elm Street, Apt 567',
  },
  {
    id: '245e17ec-99e7-4265-9142-1d9d2c442169',
    nombre: 'María García',
    apodo: 'maryg',
    email: 'maria.garcia@example.com',
    phone: '+44 1234 567890',
    country: 'Reino Unido',
    region: 'Londres',
    postal_zip: 'SW1A 1AA',
    address: '10 Downing Street',
  },
  {
    id: '36c1c4a2-8847-4cd2-bfb2-6da49a8bc0e6',
    nombre: 'Carlos Rodríguez',
    apodo: 'charlie',
    email: 'carlos.rodriguez@example.com',
    phone: '+52 55 1234 5678',
    country: 'México',
    region: 'Ciudad de México',
    postal_zip: '11560',
    address: 'Av. Reforma 1234, Col. Juárez',
  },
  {
    id: '4b89c5a5-5e5d-4765-8a5e-0f583d9f7bb2',
    nombre: 'Laura Fernández',
    apodo: 'laurita89',
    email: 'laura.fernandez@example.com',
    phone: '+61 2 1234 5678',
    country: 'Australia',
    region: 'Sídney',
    postal_zip: '2000',
    address: '1234 George Street, Apt 567',
  },
  {
    id: '58a1fc88-01fc-4dd7-8091-c76c80db67d0',
    nombre: 'Andrés Ramírez',
    apodo: 'andy81',
    email: 'andres.ramirez@example.com',
    phone: '+34 91 123 4567',
    country: 'España',
    region: 'Madrid',
    postal_zip: '28001',
    address: 'Calle Gran Vía, 123, 4A',
  },
]; */

/* module.exports = {
  productsData,
  categoriesData,
  usersData,
}; */

// sentencias en postGres
/*
INSERT INTO Pizzas (name, ingredients, description, image, price) VALUES
  ('Margarita', 'Queso, tomate', 'La clásica pizza Margarita', 'https://i.postimg.cc/766TMRhg/Margarita.png', 10),
  ('Pepperoni', 'Queso, pepperoni', 'Deliciosa pizza de pepperoni', 'https://i.postimg.cc/K8DN0dGV/Pepperoni.png', 12),
  ('Hawaiana', 'Queso, jamón, piña', 'Combinación tropical', 'https://i.postimg.cc/wx1w9f2y/Hawaiana.png', 11),
  ('Vegetariana', 'Queso, vegetales', 'Pizza saludable', 'https://i.postimg.cc/1tfr5XGh/Vegetariana.png', 9),
  ('Carnes Mixtas', 'Queso, pepperoni, salchicha italiana, jamón, carne de res', 'Una pizza cargada con una variedad de carnes', 'https://i.postimg.cc/G25TMjT6/carnes-mixtas.png', 14),
  ('Marinara', 'Salsa de tomate, ajo, orégano', 'Pizza simple y clásica sin queso', 'https://i.postimg.cc/RZBdQMBK/Marinara.png', 8),
  ('Carnívora', 'Queso, pepperoni, salchicha, tocino', 'Una explosión de sabores de carne', 'https://i.postimg.cc/L4GN5tQy/Carnivora.png', 15),
  ('Caprese', 'Queso mozzarella, tomate, albahaca fresca', 'Una pizza ligera y fresca con sabores mediterráneos', 'https://i.postimg.cc/90wRsqG0/Caprese.png', 11),
  ('Mexicana', 'Queso, carne molida, jalapeños, guacamole', 'Una pizza picante con toques mexicanos', 'https://i.postimg.cc/F1tdvsZZ/Mexicana.png', 12),
  ('Napolitana', 'Queso mozzarella, anchoas, aceitunas', 'Inspirada en la tradición napolitana', 'https://i.postimg.cc/vm8vk3Dm/Napolitana.png', 10),
  ('Mediterranean', 'Queso feta, aceitunas, tomates secos, espinacas', 'Una pizza inspirada en los sabores del Mediterráneo', 'https://i.postimg.cc/7Y7X25pq/Mediterranean.png', 12),
  ('Primavera', 'Queso, espárragos, champiñones, cebolla roja', 'Una pizza llena de ingredientes frescos y coloridos', 'https://i.postimg.cc/d0W9YrTj/Primavera.png', 11); */

# api_prueba
Api Rest Pedidos

Clonar el repositorio, luego npm i

Iniciar con npm start

Se utilizan los siguientientes endpoint para las ordenes: /order
el enponint resive la siguiente estructura:
{
	"name": "Danilo",
	"lastname": "perez",
	"email": "fake@gmail.com",
	"phone": "22335",
	"address": "cra fake # 123",
	"date": "01-04-2020",
	"time": 4
}

Todos los datos son requeridos, el correo debe ser unico.


Para ver los pedidos que tiene un conductor, se utiliza el endpoint /driver?driver_id='id'&date='fecha_del_pedido'

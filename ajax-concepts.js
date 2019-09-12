//PASOS PARA ENVIAR PETICION AL SERVIDOR Y PROCESAR LA RESPUESTA 


// crear instancia de HMLHttpRequest()
var mi_var = new XMLHttpRequest();

//utilizar metodo open () bel objeto XHR para especificar que peticion se enviara al servidor y donde ira la peticion
//GET: informacion de la peticion se envia utilizando la URL del navegador como medio. Utilizado habitualmente para recibir y procesar respuesta del servidor
//POST: Utilizado habitualmente para actualizar informacion alojada en el servidor (actualizaciones en DB). Se debe utilizar le metodo send() del objeto XHR 
mi_var.open("GET", "tienda.php?ID_producto = 45");

//Crear una funcion JS que gestione la respuesta

//recibir la respuesta, xml de respuesta, html de respuesta, JSON de respuesta.


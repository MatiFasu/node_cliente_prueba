const listaClientes = () => 
  fetch("https://api-cliente.onrender.com/perfil").then((respuesta) => respuesta.json());
  

const crearCliente = (nombre, email) => {
  return fetch("https://api-cliente.onrender.com/perfil", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`https://api-cliente.onrender.com/perfil/${id}`, {
    method: "DELETE",
  })
}

const detalleCliente = (id) => {
  return fetch(`https://api-cliente.onrender.com/perfil/${id}`).then( respuesta => 
    respuesta.json()
  );
};

const actualizarCliente = (nombre,email,id) => {
  return fetch(`https://api-cliente.onrender.com/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})
  }).then( (respuesta) => respuesta).catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
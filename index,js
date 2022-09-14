// Plantilla para crear un usuario
class Usuario {
    constructor(nombre, apellido, cargo) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.cargo = cargo
    }
}
// Arreglo para registrar un usuario y fecha
let registros = []
updateTable();
const peopleTable = document.querySelector ('#peopleTable tbody');
const dataForm = document.querySelector ("#addPeople");

function saveData (){
  const newRegistro = new Usuario (
    dataForm.camponNombre.value, 
    dataForm.camponApellido.value,
    dataForm.selector.value
  );
  registros.push (newRegistro)
  updateTable();
  console.log(registros)
}

function updateTable (){
    registros.forEach(empleado => {
        const empleadoHTML = document.createElement('tr')
        empleadoHTML.innerHTML = `
        <td>${empleado.camponNombre}</td>
        <td>${empleado.camponApellido}</td>
        <td>${empleado.selector}</td>`;
        peopleTable.appendChild(empleadoHTML);
    });
}
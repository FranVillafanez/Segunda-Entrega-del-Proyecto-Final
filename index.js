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
  dataForm.campoNombre.value, 
  dataForm.campoApellido.value,
  dataForm.selector.value
);
registros.push (newRegistro)
updateTable();
console.log(registros)
}

function updateTable (){
const peopleTable = document.querySelector ('#peopleTable');
const empleadoHTML = document.createElement('tr')
  registros.map(empleado => {
      empleadoHTML.innerHTML = `
      <td>${empleado.nombre}</td>
      <td>${empleado.apellido}</td>
      <td>${empleado.cargo}</td>`;
      peopleTable.appendChild(empleadoHTML);
  });
}

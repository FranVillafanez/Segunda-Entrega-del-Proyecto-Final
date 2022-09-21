// Plantilla para crear un usuario
class Usuario {
  constructor(id, nombre, apellido, cargo, mes, horas) {
      this.id = id;
      this.nombre = nombre,
      this.apellido = apellido,
      this.cargo = cargo,
      this.mes = mes,
      this.horas = horas
  }
}
// Arreglo para registrar un usuario y fecha
let registros = []

updateTable();
const peopleTable = document.querySelector ('#peopleTable tbody');
const dataForm = document.querySelector ("#addPeople");

function saveData (){
const newRegistro = new Usuario (
  dataForm.campoId.value,
  dataForm.campoNombre.value, 
  dataForm.campoApellido.value,
  dataForm.selector.value,
  dataForm.month.value,
  dataForm.campoHoras.value
);
registros.push (newRegistro)
updateTable();
console.log(registros)
}

let fila;
// Botón editar
// $(document).on("click", "#editBtn", function(){
//   fila =  $(this).closest("tr");
//   id = parseInt(fila.find('td:eq(0)').text());
//   alert(id);
// });

function updateTable (){
const peopleTable = document.querySelector ('#peopleTable');
const empleadoHTML = document.createElement('tr')
  registros.map(empleado => {
      empleadoHTML.innerHTML = `
      <td>${empleado.id}</td>
      <td>${empleado.nombre}</td>
      <td>${empleado.apellido}</td>
      <td>${empleado.cargo}</td>
      <td>${empleado.mes}</td>
      <td>${empleado.horas}</td>
      <td><div><button
                id="editBtn"
                type="button"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                class="btn btn-warning"
                onclick="editEmpleado(event)"
                >
                Editar
                </button>
                <button
                id="deleteBtn_${empleado.id}"
                type="button"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                class="btn btn-danger"
                onclick="deleteEmpleado(event)">
                Borrar
                </button>
            </div></td>
        `;
      peopleTable.appendChild(empleadoHTML);
  });
}

function deleteEmpleado(event){
  const btn = event.taget;
  console.dir (btn);
  const id = btn.id.split("_")[1];
  registros = registros.filter ((empleado) => empleado.id != id)
  updateTable();
} 
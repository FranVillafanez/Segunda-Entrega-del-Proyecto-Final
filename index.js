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
  registros.length + 1,
  // dataForm.campoId.value,
  dataForm.campoNombre.value, 
  dataForm.campoApellido.value,
  dataForm.selector.value,
  dataForm.month.value,
  dataForm.campoHoras.value
);
registros.push (newRegistro)
updateTable();
console.log(registros)
Toastify({
  text: `Se agregó usuai ${dataForm.campoNombre.value}`,
  duration: 3000,
}).showToast();
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
      <th scope="col">${empleado.id}</th>
      <td>${empleado.nombre}</td>
      <td>${empleado.apellido}</td>
      <td>${empleado.cargo}</td>
      <td>${empleado.mes}</td>
      <td>${empleado.horas}</td>
      <td><div><button
                id="editBtn_${empleado.id}"
                type="button"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                class="btn btn-warning"
                onclick="editData(event)"
                >
                Editar
                </button>
                <button
                id="deleteBtn_${empleado.id}"
                type="button"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                class="btn btn-danger"
                onclick="deleteData(event)">
                Borrar
                </button>
            </div></td>
        `;
      peopleTable.appendChild(empleadoHTML);
  });
}

function deleteData(event){
  const btn = event.taget;
  console.log (btn);
  const id = btn.id.split("_")[1];
  registros = registros.filter ((empleado) => empleado.id != id)
  updateTable();
} 

function editData(event) {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  const empleado = registros.filter((empleado) => empleado.id == id)[0];
  dataForm.campoNombre.value = empleado.nombre;
  dataForm.campoApellido.value = empleado.apellido;
  dataForm.selector.value = empleado.cargo;
  dataForm.month.value = empleado.mes;
  dataForm.campoHoras.value = empleado.horas;
}
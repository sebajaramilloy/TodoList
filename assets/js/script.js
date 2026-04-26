// Arreglo inicial con al menos 3 tareas
const tareas = [
    { id: 16, descripcion: "Hacer mercado", completado: false },
    { id: 60, descripcion: "Estudiar para la prueba", completado: false },
    { id: 24, descripcion: "Sacar a pasear a Tobby", completado: false }
];

const inputTarea = document.querySelector("#nuevaTareaInput");
const btnAgregar = document.querySelector("#btnAgregar");
const listaTareas = document.querySelector("#listaTareas");
const totalTareas = document.querySelector("#totalTareas");
const tareasRealizadas = document.querySelector("#tareasRealizadas");

// Función para mostrar las tareas en el HTML
function renderizar() {
    let html = "";
    
    for (const tarea of tareas) {
        const tachado = tarea.completado ? "class='completada'" : "";
        const checked = tarea.completado ? "checked" : "";

        html += `
            <tr>
                <td>${tarea.id}</td>
                <td ${tachado}>${tarea.descripcion}</td>
                <td>
                    <input type="checkbox" ${checked} onclick="cambiarEstado(${tarea.id})">
                </td>
                <td>
                    <button class="btn-borrar" onclick="borrarTarea(${tarea.id})">x</button>
                </td>
            </tr>
        `;
    }
    
    listaTareas.innerHTML = html;
    actualizarResumen(); 
}

// Agregar nueva tarea al arreglo
btnAgregar.addEventListener("click", () => {
    const nuevaDescripcion = inputTarea.value;

    if (!nuevaDescripcion) {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = {
        id: Date.now(), // ID único basado en tiempo
        descripcion: nuevaDescripcion,
        completado: false // Iniciar con completado: false
    };

    tareas.push(nuevaTarea);
    inputTarea.value = "";
    renderizar();
});

// Eliminar tarea del arreglo
function borrarTarea(id) {
    const index = tareas.findIndex(ele => ele.id === id);
    tareas.splice(index, 1);
    renderizar();
}

// Cambiar el estado de completado
function cambiarEstado(id) {
    const index = tareas.findIndex(ele => ele.id === id);
    tareas[index].completado = !tareas[index].completado;
    renderizar();
}

// Actualizar contadores de total y realizadas
function actualizarResumen() {
    totalTareas.innerHTML = tareas.length;
    const conteoRealizadas = tareas.filter(t => t.completado).length;
    tareasRealizadas.innerHTML = conteoRealizadas;
}

// Carga inicial
renderizar();

[span_0](start_span)// Arreglo inicial con al menos 3 tareas[span_0](end_span)
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

[span_1](start_span)// Función para mostrar las tareas en el HTML[span_1](end_span)
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

[span_2](start_span)[span_3](start_span)// Agregar nueva tarea al arreglo[span_2](end_span)[span_3](end_span)
btnAgregar.addEventListener("click", () => {
    const nuevaDescripcion = inputTarea.value;

    if (!nuevaDescripcion) {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = {
        [span_4](start_span)id: Date.now(), // ID único basado en tiempo[span_4](end_span)
        descripcion: nuevaDescripcion,
        [span_5](start_span)completado: false // Iniciar con completado: false[span_5](end_span)
    };

    tareas.push(nuevaTarea);
    inputTarea.value = "";
    renderizar();
});

[span_6](start_span)[span_7](start_span)// Eliminar tarea del arreglo[span_6](end_span)[span_7](end_span)
function borrarTarea(id) {
    const index = tareas.findIndex(ele => ele.id === id);
    tareas.splice(index, 1);
    renderizar();
}

[span_8](start_span)[span_9](start_span)// Cambiar el estado de completado[span_8](end_span)[span_9](end_span)
function cambiarEstado(id) {
    const index = tareas.findIndex(ele => ele.id === id);
    tareas[index].completado = !tareas[index].completado;
    renderizar();
}

[span_10](start_span)[span_11](start_span)// Actualizar contadores de total y realizadas[span_10](end_span)[span_11](end_span)
function actualizarResumen() {
    totalTareas.innerHTML = tareas.length;
    const conteoRealizadas = tareas.filter(t => t.completado).length;
    tareasRealizadas.innerHTML = conteoRealizadas;
}

// Carga inicial
renderizar();

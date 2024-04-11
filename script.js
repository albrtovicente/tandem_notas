function getInfo(){
    // devuelve el texto
    console.log('texto ingresado')
    return 'texto ingresado'
}

function setLocalInfo(){
    //guardaría la info en localStorage
    return true;
}
function showInfo(){
    return true;
}
function cleanInfo(){
    
}
















// localStorage.setItem("tarea01","control")
// let tarea =localStorage.getItem("tarea02")
// console.log(tarea)
// console.log(localStorage.length)

// const tareas = localStorage
// for (let i = 0; i < tareas.length; i++) {
//     let key = localStorage.key(i) // Clave donde esta guardada la info del Est.
//     console.log(key)
//     tarea = localStorage.getItem(key) // Info del Est. en formato JSON
//     console.log(tarea)
// }

// function agregarNota() {
//     // Obtener los valores de los campos de texto y fecha
//     let nota = document.getElementById('notaInput').value;
//     let fecha = document.getElementById('fechaInput').value;

//     // Validar que la nota no esté vacía
//     if (nota.trim() === '') {
//         alert('Por favor, escribe una nota.');
//         return;
//     }

//     // Crear un nuevo elemento de lista y agregar la nota y la fecha
//     let nuevaNota = document.createElement('li');
//     nuevaNota.textContent = `${nota} - ${fecha}`;

//     // Agregar la nueva nota a la lista
//     let listaNotas = document.getElementById('listaNotas');
//     listaNotas.appendChild(nuevaNota);

//     // Guardar la nota en el localStorage
//     localStorage.setItem(Date.now(), JSON.stringify({ nota: nota, fecha: fecha }));

//     // Limpiar los campos de texto y fecha
//     document.getElementById('notaInput').value = '';
//     document.getElementById('fechaInput').value = '';
// }

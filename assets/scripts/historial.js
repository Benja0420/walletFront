function obtenerTransferencias() {
    let transferencias = JSON.parse(localStorage.getItem('transferencias')) || [];
    return transferencias;
}
obtenerTransferencias();

function mostrarTransferencias() {
    const transferencias = obtenerTransferencias();
    const historial = document.getElementById('main');
    historial.innerHTML = '';

    const tabla = document.createElement('table');
    tabla.className = 'table table-striped';

    const encabezado = document.createElement('thead');
    const filaEncabezado = document.createElement('tr');
    ['Nombre', 'Rut', 'Monto', 'Fecha'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    const cuerpoTabla = document.createElement('tbody');


    transferencias.reverse().forEach((transferencia, index) => {
        const fila = document.createElement('tr');
        [transferencia.nombre, transferencia.rut, transferencia.monto, transferencia.fecha].forEach(texto => {
            const td = document.createElement('td');
            td.textContent = texto;
            fila.appendChild(td);
        });
        cuerpoTabla.appendChild(fila);
    });

    tabla.appendChild(cuerpoTabla);
    historial.appendChild(tabla);
}
mostrarTransferencias();
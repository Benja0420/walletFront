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
    const encabezado = document.createElement('tr');
    ['Nombre', 'Rut', 'Monto', 'Fecha'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);



    transferencias.reverse().forEach((transferencia, index) => {
        const fila = document.createElement('tr');
        [transferencia.nombre, transferencia.rut, transferencia.monto, transferencia.fecha].forEach(texto => {
            const td = document.createElement('td');
            td.textContent = texto;
            fila.appendChild(td);
        });
        tabla.appendChild(fila);
    });

    historial.appendChild(tabla);
}
mostrarTransferencias();
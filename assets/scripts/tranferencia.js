function solicitarMonto() {
    const nombre_transferencia = document.getElementById('nombre_transferencia').value;
    const rut_transferencia = document.getElementById('rut_transferencia').value;
    let monto = prompt("Ingrese la cantidad que desea transferir:");

    if (monto !== null && monto !== "") {
        if (confirm(`¿Está seguro que desea transferir ${monto} a ${nombre_transferencia} y Rut ${rut_transferencia}?`)) {
            alert(`Transferencia a ${nombre_transferencia} realizada exitosamente.`);
            
            const transferencia = {
                nombre: nombre_transferencia,
                rut: rut_transferencia,
                monto: monto,
                fecha : new Date().toLocaleString()
            };
            let transferencias = JSON.parse(localStorage.getItem('transferencias')) || [];

            transferencias.push(transferencia);

            localStorage.setItem('transferencias', JSON.stringify(transferencias));
        } else {
            alert("Transferencia cancelada.");
        }
    } else {
        alert("Transferencia cancelada.");
    }
}
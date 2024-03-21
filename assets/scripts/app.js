function solicitarMonto() {
    let monto = prompt("Ingrese la cantidad que desea transferir:");
    
    if (monto !== null && monto !== "") {
        let confirmacion = confirm(`¿Está seguro que desea transferir ${monto}?`);

        if (confirmacion) {
            alert("Transferencia realizada exitosamente.");
        } else {
            alert("Transferencia cancelada.");
        }
    }
}

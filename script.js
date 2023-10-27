function CalculoEmpleado() {
    var numEmpleados = window.prompt("Ingrese el número de empleados");
    var empleados = [];
    numEmpleados = parseInt(numEmpleados);

    if (!isNaN(numEmpleados)) {
        for (var i = 1; i <= numEmpleados; i++) {
            var nombre = window.prompt("Ingrese el nombre del empleado " + i);
            var apellido = window.prompt("Ingrese el apellido del empleado " + i);
            var cargo = window.prompt("Ingrese el cargo del empleado " + i);
            var sueldo = parseFloat(window.prompt("Ingrese el sueldo del empleado " + i));
            var horasExtras = parseFloat(window.prompt("Ingrese las horas extras del empleado " + i));
            var valorHoraExtras = sueldo / 30 / 8 * 1.5;
            var igss = sueldo * 0.0483;
            var salarioTotal = sueldo + (horasExtras * valorHoraExtras);
            var boletoOrnato = "";

            if (sueldo > 500 && sueldo <= 1000) {
                boletoOrnato = 'PAGO DE BOLETO DE ORNATO:  Q.10 SIN MULTA Q.20 CON MULTA';
            } else if(sueldo > 1000 && sueldo <= 3000) {
                boletoOrnato = 'PAGO DE BOLETO DE ORNATO:  Q.15 SIN MULTA Q.30 CON MULTA';
            } else if(sueldo > 3000 && sueldo <= 6000){
                boletoOrnato = 'PAGO DE BOLETO DE ORNATO:  Q.50 SIN MULTA Q.100 CON MULTA';
            } else if(sueldo > 6000 && sueldo <= 9000){
                boletoOrnato = 'PAGO DE BOLETO DE ORNATO:  Q.75 SIN MULTA Q.150 CON MULTA';
            } else if(sueldo > 9000 && sueldo <= 12000){
                boletoOrnato = 'PAGO DE BOLETO DE ORNATO:  Q.100 SIN MULTA Q.200 CON MULTA';
            }else if(sueldo > 12000 ){
                boletoOrnato = 'PAGO DE BOLETO DE ORNATO:  Q.150 SIN MULTA Q.3000 CON MULTA';
            }

            var empleado = {
                nombre: nombre,
                apellido: apellido,
                cargo: cargo,
                sueldo: sueldo,
                horasExtras: horasExtras,
                valorHoraExtras: valorHoraExtras,
                igss: igss,
                salarioTotal: salarioTotal,
                boletoOrnato: boletoOrnato
            };
            empleados.push(empleado);
        }
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = '<h2>Resultados:</h2>';

        for (var j = 0; j < empleados.length; j++) {
            resultadoDiv.innerHTML += '<h3>EMPLEADO ' + (j + 1) + ': ' + empleados[j].nombre + ' ' + empleados[j].apellido + '</h3>';
            resultadoDiv.innerHTML += '<p>CARGO: ' + empleados[j].cargo + '</p>';
            resultadoDiv.innerHTML += '<p>SUELDO: ' + empleados[j].sueldo + '</p>';
            resultadoDiv.innerHTML += '<p>HORAS EXTRAS: ' + empleados[j].horasExtras + '</p>';
            resultadoDiv.innerHTML += '<p>VALOR HORA EXTRA: ' + empleados[j].valorHoraExtras + '</p>';
            resultadoDiv.innerHTML += '<p>DESCUENTO DE IGSS: ' + empleados[j].igss + '</p>';
            resultadoDiv.innerHTML += '<p>SALARIO TOTAL: ' + empleados[j].salarioTotal + '</p>';
            resultadoDiv.innerHTML += '<p>' + empleados[j].boletoOrnato + '</p>';
        }
    }
}


    
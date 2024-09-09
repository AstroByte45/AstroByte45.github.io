document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todas las tablas con la clase 'calculadora'
    const tables = document.querySelectorAll('.calculadora');

    tables.forEach(table => {
        // Seleccionar todos los botones de calcular dentro de la tabla
        const calculateButtons = table.querySelectorAll('.calcular-btn');

        // Función para manejar el clic del botón
        calculateButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Encontrar la fila correspondiente
                const row = this.closest('tr');

                // Recuperar los valores de entrada
                const averageInput = row.querySelector('input[type="number"]');
                const minRequiredCell = row.querySelector('td:nth-child(2)');
                const pointsCell = row.querySelector('td:nth-child(4)');

                // Obtener los valores de las celdas
                const average = parseFloat(averageInput.value);
                const minRequired = parseFloat(minRequiredCell.textContent.trim());

                // Validar los valores
                if (isNaN(average) || isNaN(minRequired)) {
                    alert('Por favor, ingrese valores válidos.');
                    return;
                }

                // Realizar las operaciones matemáticas
                const score = (average / 10) * 300;
                const finalResult = ((minRequired - score) / 700) * 80;

                // Redondear el resultado a entero
                const roundedResult = Math.round(finalResult);

                // Mostrar el resultado en la columna de puntos
                pointsCell.textContent = roundedResult;
            });
        });
    });
});

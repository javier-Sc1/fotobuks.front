document.addEventListener('DOMContentLoaded', () => {
    const clientes = [
        { nombre: 'Juan', apellidos: 'Pérez', telefono: '1234567890', evento: 'Boda' },
        { nombre: 'María', apellidos: 'López', telefono: '0987654321', evento: 'Cumpleaños' },
        { nombre: 'Carlos', apellidos: 'González', telefono: '1122334455', evento: 'Graduación' },
        { nombre: 'José', apellidos: 'Valenzuela', telefono: '6654321987', evento: 'Quinceañera' },
        { nombre: 'Ana', apellidos: 'Molina', telefono: '7775554321', evento: 'Boda' },
        { nombre: 'Miguel', apellidos: 'Montoya', telefono: '6612345678', evento: 'Bautizo' },
        { nombre: 'Lucía', apellidos: 'Salazar', telefono: '6647891234', evento: 'Concierto' },
        { nombre: 'Roberto', apellidos: 'Aguilar', telefono: '6529876543', evento: 'Conferencia' },
        { nombre: 'Laura', apellidos: 'Durazo', telefono: '6681234567', evento: 'Cumpleaños' },
        { nombre: 'César', apellidos: 'Galaz', telefono: '6331112233', evento: 'Graduación' },
        { nombre: 'Pedro', apellidos: 'Campa', telefono: '6629871234', evento: 'Evento Corporativo' },
        { nombre: 'Paula', apellidos: 'Escalante', telefono: '6627654321', evento: 'Fiesta de Aniversario' },
        { nombre: 'Alfredo', apellidos: 'Fimbres', telefono: '6411239876', evento: 'Boda' },
        
    ];
    const tableBody = document.getElementById('clientesTable');
    const buscador = document.getElementById('buscador');

    // Función para renderizar los clientes
    function renderClientes(filteredClientes) {
        tableBody.innerHTML = ''; // Limpiar tabla
        filteredClientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="border-t px-4 py-2">${cliente.nombre}</td>
                <td class="border-t px-4 py-2">${cliente.apellidos}</td>
                <td class="border-t px-4 py-2">${cliente.telefono}</td>
                <td class="border-t px-4 py-2">${cliente.evento}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Renderizar todos los clientes al cargar la página
    renderClientes(clientes);

    // Filtrar clientes cuando se escriba en el buscador
    buscador.addEventListener('input', () => {
        const textoBusqueda = buscador.value.toLowerCase();
        const clientesFiltrados = clientes.filter(cliente => {
            return cliente.nombre.toLowerCase().includes(textoBusqueda) || 
                   cliente.apellidos.toLowerCase().includes(textoBusqueda);
        });
        renderClientes(clientesFiltrados);
    });
});

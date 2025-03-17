// Função para pegar parâmetros da URL
function getParamsFromURL() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    const type = params.get('type') || 'bar'; // Tipo de gráfico padrão é 'bar'

    params.forEach((value, key) => {
        if (key !== 'type') {
            data[key] = parseFloat(value);
        }
    });

    return { data, type };
}

// Função para criar o gráfico
function createChart(data, type) {
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    const labels = Object.keys(data);
    const values = Object.values(data);

    new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: 'Valores',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Pegar parâmetros da URL e criar o gráfico
const { data, type } = getParamsFromURL();
createChart(data, type);
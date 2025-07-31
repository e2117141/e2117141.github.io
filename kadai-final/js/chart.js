const pieCtx = document.getElementById('weatherPieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: [
            '晴れ', '曇りのち雨', '曇り', '曇りのち晴れ', '晴れのち曇り',
            '雨のち曇り', '雨', '雨のち晴れ', '晴れのち雨', '雪のち晴れ',
            '曇りのち雪', '晴れのち雪'
        ],
        datasets: [{
            data: [92, 56, 49, 48, 40, 30, 23, 19, 5, 1, 1, 1],
            backgroundColor: [
                '#FDB813', '#A0C4FF', '#B0BEC5', '#FFE082', '#FFD54F',
                '#81D4FA', '#4FC3F7', '#64B5F6', '#BA68C8', '#90CAF9',
                '#A1887F', '#CE93D8'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});


const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['春', '夏', '秋', '冬'],
        datasets: [
            {
                label: '晴れ',
                data: [28, 40, 23, 6],
                backgroundColor: '#FFD700'
            },
            {
                label: '曇り',
                data: [26, 28, 28, 42],
                backgroundColor: '#C0C0C0'
            },
            {
                label: '雨',
                data: [14, 24, 20, 14],
                backgroundColor: '#1E90FF'
            },
            {
                label: '雪',
                data: [0, 0, 0, 5],
                backgroundColor: '#B0C4DE'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '出現数（日）'
                }
            },
            x: {
                title: {
                    display: true,
                    text: '季節'
                }
            }
        }
    }
});
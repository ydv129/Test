function search() {
    const query = document.getElementById('search-input').value;
    alert('Searching for: ' + query);
}

function showNotifications() {
    alert('Showing notifications...');
}

function showMessages() {
    alert('Showing messages...');
}

function showProfile() {
    alert('Showing profile...');
}

const ctx = document.getElementById('budgetChart').getContext('2d');
const budgetChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Technology', 'Administration'],
        datasets: [
            {
                label: 'Allocated Budget',
                data: [65, 59, 90, 81, 56, 55],
                backgroundColor: 'rgba(26, 115, 232, 0.2)',
                borderColor: 'rgba(26, 115, 232, 1)',
                pointBackgroundColor: 'rgba(26, 115, 232, 1)',
            },
            {
                label: 'Actual Spending',
                data: [28, 48, 40, 19, 96, 27],
                backgroundColor: 'rgba(139, 195, 74, 0.2)',
                borderColor: 'rgba(139, 195, 74, 1)',
                pointBackgroundColor: 'rgba(139, 195, 74, 1)',
            }
        ]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

const ctx2 = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
        datasets: [
            {
                label: 'Sales',
                data: [30, 40, 35, 50, 45, 70, 60],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'blue',
            },
            {
                label: 'Revenue',
                data: [20, 30, 40, 35, 50, 55, 45],
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'green',
            },
            {
                label: 'Customers',
                data: [10, 20, 15, 25, 20, 30, 25],
                borderColor: 'orange',
                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'orange',
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

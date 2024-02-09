// Data for the bar chart
const barData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
        label: 'Total Kilowatts',
        data: [13, 24, 33, 30, 48, 52, 66, 56, 77, 96],
        backgroundColor: 'rgba(0, 123, 255, 0.5)'
    }]
};

// Data for the pie chart
const pieData = {
    labels: ['Fossil', 'Potential', 'EV Savings'],
    datasets: [{
        label: 'Pie Dataset',
        data: [46, 14, 40],
        backgroundColor: [
            'red', 'orange', 'green'
        ]
    }]
};

// Options for the bar chart
const barOptions = {
    type: 'bar',
    data: barData,
    options: {
        maintainAspectRatio: false, // Add this line
        responsive: true  // Ensures chart is responsive
    }
};


// Options for the pie chart
const pieOptions = {
    type: 'pie',
    data: pieData,
    options: {
        maintainAspectRatio: false, // Add this line
        responsive: true  // Ensures chart is responsive
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Chart.js code goes here

    // Create the bar chart
    new Chart(document.getElementById('barChart'), barOptions);

    // Create the pie chart
    new Chart(document.getElementById('pieChart'), pieOptions);
});



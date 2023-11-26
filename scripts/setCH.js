let chart;

function removeAllData() {
    while (chart.data.labels.length > 0)
        chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        while (dataset.data.length > 0)
            dataset.data.pop()
    });
    chart.update();
}

function removeData() {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop()
    });
    chart.update();
}

function addData(label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}

function initChart() {
    const data = [
        {year: 2010, count: 10},
        {year: 2011, count: 20},
        {year: 2012, count: 15},
        {year: 2013, count: 25},
        {year: 2014, count: 22},
        {year: 2015, count: 30},
        {year: 2016, count: 28},
    ];

    chart = new Chart(
        document.getElementById('mainCanvas'),
        {
            responsive: true,
            maintainAspectRatio: false,
            type: 'line',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
}
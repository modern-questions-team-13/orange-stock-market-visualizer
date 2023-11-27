let chart;
let chart2;
let curr_comp = "none";

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

async function getCompanies() {
    //replace with fetch
    const companies = (await (await fetch('http://localhost:9000/companies')).json())

    let selection = document.getElementById('CompanyList');
    selection.innerHTML = "<option value=\"\" selected disabled hidden>Please choose company</option>\n"
    for (let comp of companies) {
        selection.innerHTML += "<option value='" + comp.id + "'>" + comp.name + "</option>";
    }

}

setInterval(async function refresh() {
    await changeChart(curr_comp)
}, 5000);

async function changeChart(company) {
    //replace with fetch
    curr_comp = company;

    let jsonData = (await (await fetch('http://localhost:8080/companies/' + curr_comp + '/0/50')).json())
    let jsonData2 = (await (await fetch('http://localhost:8080/companies/' + curr_comp + '/1/50')).json())

    let prices = []
    let datetimes = []
    for (const entry of jsonData) {
        prices.push(entry['price'])
        datetimes.push(new Date(entry['datetime']).toLocaleString())
    }
    newChart(chart, datetimes, prices)

    prices = []
    datetimes = []

    for (const entry of jsonData2) {
        prices.push(entry['price'])
        datetimes.push(new Date(entry['datetime']).toLocaleString())
    }

    newChart(chart2, datetimes, prices)
}

function newChart(chart, labels, data) {
    chart = new Chart(
        chart.ctx,
        {
            responsive: true,
            maintainAspectRatio: false,
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        lineTension: 0,
                        label: chart.data.datasets[0].label,
                        data: data,
                        backgroundColor: chart.data.datasets[0].backgroundColor,
                    }
                ]
            }
        }
    );
}

function initChart() {
    getCompanies();
    const data = [];

    chart = new Chart(
        document.getElementById('mainCanvas'),
        {
            responsive: true,
            maintainAspectRatio: false,
            type: 'line',
            data: {
                labels: data.map(row => row.time),
                datasets: [
                    {
                        lineTension: 0,
                        label: 'Buy price for period',
                        data: data.map(row => row.price),
                        backgroundColor: 'rgba(130,255,112,0.68)',
                    }
                ]
            }
        }
    );
    chart2 = new Chart(
        document.getElementById('mainCanvas2'),
        {
            responsive: true,
            maintainAspectRatio: false,
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        lineTension: 0,
                        label: 'Sell price for period',
                        data: [],
                        backgroundColor: 'rgba(255,0,0,0.56)',

                    }
                ]
            }
        }
    );
}
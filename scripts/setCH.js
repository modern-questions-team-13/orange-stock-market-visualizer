let chart;
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

function getCompanies(){
    //replace with fetch
    const companies = { "CompanyList": ["First", "Second", "Max Loh", "AnotherTest"] }

    let selection = document.getElementById('CompanyList');
    for (let comp of companies.CompanyList){
        selection.innerHTML+="<option value='"+comp.replace(/\s/g, '')+"'>"+comp+"</option>";
    }

}

setInterval(function refresh(){
    changeChart(curr_comp);
},5000);

function changeChart(company) {
    //replace with fetch
    const data_pool = {
        "First": [{time: "11:40", price: 100}, {time: "11:45", price: 95}, {time: "11:50", price: 103}, {time: "11:55", price:107}],
        "Second": [{time: "11:40", price: 55}, {time: "11:45", price: 65}, {time: "11:50", price: 75}, {time: "11:55", price:70}],
        "MaxLoh": [{time: "11:40", price: 1}, {time: "11:45", price: 5}, {time: "11:50", price: 3}, {time: "11:55", price:0}],
        "AnotherTest": [{time: "11:40", price: 24}, {time: "11:45", price: 10}, {time: "11:50", price: 50}, {time: "11:55", price: 12}]
    }
    console.log(company);
    curr_comp=company;
    if(company=="First"){
        newChart(data_pool.First);
    }
    else if(company=="Second"){
        newChart(data_pool.Second);
    }
    else if(company=="MaxLoh"){
        newChart(data_pool.MaxLoh);
    }
    else{
        newChart(data_pool.AnotherTest);
    }
}
function newChart(data){
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
                        label: 'Buy price for period',
                        data: data.map(row => row.price)
                    }
                ]
            }
        }
    );
}
function initChart() {
    getCompanies();
    const data = [
        {time: "11:40", price: 100},
        {time: "11:45", price: 95},
        {time: "11:50", price: 103},
        {time: "11:50", price:107}
    ];

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
                        label: 'Buy price for period',
                        data: data.map(row => row.price)
                    }
                ]
            }
        }
    );
}



(async function() {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    let chart = new Chart(
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

    // chart.resize(500, 500)
    // document.getElementById('chartjs-size-monitor').style.height = '200px'
    // chart.canvas.parentNode.style.height = '128px';
})();

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
// function drawLine(context, points, height) {
//     if (points.length === 0) {
//         return
//     }
//     context.beginPath();
//     context.translate(0.01, 0.01);
//     context.moveTo(points[0].x, height - points[0].y)
//
//     console.log(context)
//     for (let i = 1; i < points.length; i++) {
//         context.lineTo(points[i].x, height - points[i].y); // Draw a line to (150, 100)
//
//     }
//     // context.moveTo(30, 50); // Move the pen to (30, 50)
//     // context.lineTo(150, 100); // Draw a line to (150, 100)
//     context.lineWidth = 1;
//     context.stroke();
// }
//
//
// function draw() {
//     const canvas = document.getElementById("mainCanvas");
//     const myChart = new Chart(ctx, {...});
//
//     if (canvas.getContext) {
//         const context = canvas.getContext('2d');
//
//         // context.imageSmoothingEnabled = false;
//
//         let points = [new Point(10, 10), new Point(20, 50), new Point(30, 40), new Point(40, 80)]
//
//         drawLine(context, points, canvas.height)
//     }
// }
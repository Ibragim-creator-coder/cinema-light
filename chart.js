const ctx = document.getElementById('ratingChart');

const tooltipFontSize = window.innerWidth <= 425 ? 10 : 14;

new Chart(ctx, {
    type: 'line',

    data: {
        labels: [
            "1999",
            "2000",
            "2000.5",
            "2001",
            "2001.5",
            "2002",
            "2002.5",
            "2003",
            "2003.5",
            "2004",
            "2004.5",
            "2005",
            "2005.5",
            "2006"
        ],

        datasets: [{
            label: "Рейтинг",

            data: [
                5.2, 6.1, 5.0, 6.3,
                5.7, 7.0, 5.2,
                6.5, 5.4, 6.7,
                6.7, 6.1, 7.6,
                5.3,6.5,5.8,
                5.7,6.8,5.7,
                6.4,6.7,5.6,
                6.5
            ],

            borderColor: "#999",
            pointRadius: 0,

            pointBackgroundColor: [
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "yellow",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
                "#3459d1",
            ],

            pointRadius: 10,
            pointBorderColor: "#3459d1",
            pointBorderWidth: 0,
            tension: 0
        }]
    },


    options: {

        plugins: {

    legend: {
        display: false
    },


    tooltip: {

        backgroundColor: "#25345f",

        titleColor: "#ffffff",

        bodyColor: "#ffffff",


    bodyFont: {
        font: "Qanelas",
        weight:400,
        size: tooltipFontSize
    },

        callbacks: {

            title: function(context) {
                return context[0].label;
            },

            label: function(context) {
                return "Аватар " + context.raw;
            }

        }

    }

},


        scales: {

            x: {

                grid: {
                    color: "rgba(255,255,255,0.05)"
                }

            },


            y: {

                min: 4,
                max: 8,

                grid: {
                    color: "rgba(255,255,255,0.05)"
                }

            }

        }
    }
});
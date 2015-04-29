$(document).ready(function() {
    
    // update cell-history-morris-chart upon the type selection changes
    // morris chart
    var initData = prepareDemoCellData();
    
    var graph1 = new Morris.Line({
        element: 'voltage-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var graph2 = new Morris.Line({
        element: 'current-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var graph3 = new Morris.Bar({
        element: 'capacity-chart',
        data: [
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['即时电压']
    });

    var graph4 = new Morris.Bar({
        element: 'current',
        data: [
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
            { x: '1', y: 75 },
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['即时电压'],
        resize: true
    });

    function prepareDemoCellData() {
        var data = [];
        for(var startYear = 2007; startYear <= 2014; startYear ++){
            var currentYear = startYear;

            var max = 200;
            var min = 1;

            var value = Math.floor(Math.random()*max+min);
            var dataPoint = {
                year: currentYear.toString(),
                value: value
            };
            data.push(dataPoint);
        }
        return data;
    }
});

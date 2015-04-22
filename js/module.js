$(document).ready(function() {
    // pie chart
    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this).closest('.infobox');
        $(this).easyPieChart({
            barColor: function colorChange(percentage) {
                if (percentage < 50) {
                    return '#d4301d';
                } else if (percentage > 49 && percentage < 80){
                    return '#f6a509';
                } else {
                    return '#69aa46';
                }
            },
            trackColor: '#E2E2E2',
            lineWidth: 15,
            lineCap: 'butt',
            scaleColor: false,
            size: 120,
        });
    })

    // update cell-history-morris-chart upon the type selection changes
    // morris chart
    var initData = prepareDemoCellData();
    
    var graph = new Morris.Line({
        element: 'module-history-morris-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
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

    $("#module-chart-form").submit(function(event) {
        event.preventDefault();
        var chartType = $("#module-chart-type option:selected").val();
        if (chartType) {
            var cellData = prepareDemoCellData();
            graph.setData(cellData);
        }
    });

});

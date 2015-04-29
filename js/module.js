$(document).ready(function() {
    // date-range-picker
    $('input[name=date-range-picker]').daterangepicker({
        'applyClass': 'btn-sm btn-success',
        'cancelClass': 'btn-sm btn-default',
        locale: {
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel: '起始',
            toLabel: '结束',
            customRangeLabel: 'Custom',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    }).prev().on(ace.click_event, function() {
        $(this).next().focus();
    });

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

    $("#module-chart-form").submit(function(event) {
        event.preventDefault();
        var chartType = $("#module-chart-type option:selected").val();
        if (chartType) {
            var cellData = prepareDemoCellData();
            graph.setData(cellData);
        }
    });

});

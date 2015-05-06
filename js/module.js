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

    // morris chart
    var initData = prepareDemoCellData();
    
    var voltage = new Morris.Line({
        element: 'voltage-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var current = new Morris.Line({
        element: 'current-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var historyVoltage = new Morris.Line({
        element: 'history-voltage',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var historyCurrent = new Morris.Line({
        element: 'history-current',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var dischargeSingleVoltage = new Morris.Line({
        element: 'discharge-single-voltage',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var dischargeTotalVoltage = new Morris.Line({
        element: 'discharge-total-voltage',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    var currentVoltage = new Morris.Bar({
        element: 'current-voltage',
        data: [
            { x: '电池1', y: 75 },
            { x: '电池2', y: 75 },
            { x: '电池3', y: 75 },
            { x: '电池4', y: 75 },
            { x: '电池5', y: 75 },
            { x: '电池6', y: 75 },
            { x: '电池7', y: 75 },
            { x: '电池8', y: 75 },
            { x: '电池9', y: 75 },
            { x: '电池10', y: 75 },
            { x: '电池11', y: 75 },
            { x: '电池12', y: 75 },
            { x: '电池13', y: 75 },
            { x: '电池14', y: 75 },
            { x: '电池15', y: 75 },
            { x: '电池16', y: 75 },
            { x: '电池17', y: 75 },
            { x: '电池18', y: 75 },
            { x: '电池19', y: 75 },
            { x: '电池20', y: 75 },
            { x: '电池21', y: 75 },
            { x: '电池22', y: 75 },
            { x: '电池23', y: 75 },
            { x: '电池24', y: 75 },
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['即时电压']
    });

    var currentCapacity = new Morris.Bar({
        element: 'current-capacity',
        data: [
            { x: '电池1', y: 75 },
            { x: '电池2', y: 75 },
            { x: '电池3', y: 75 },
            { x: '电池4', y: 75 },
            { x: '电池5', y: 75 },
            { x: '电池6', y: 75 },
            { x: '电池7', y: 75 },
            { x: '电池8', y: 75 },
            { x: '电池9', y: 75 },
            { x: '电池10', y: 75 },
            { x: '电池11', y: 75 },
            { x: '电池12', y: 75 },
            { x: '电池13', y: 75 },
            { x: '电池14', y: 75 },
            { x: '电池15', y: 75 },
            { x: '电池16', y: 75 },
            { x: '电池17', y: 75 },
            { x: '电池18', y: 75 },
            { x: '电池19', y: 75 },
            { x: '电池20', y: 75 },
            { x: '电池21', y: 75 },
            { x: '电池22', y: 75 },
            { x: '电池23', y: 75 },
            { x: '电池24', y: 75 },
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['目前容量'],
        resize: true
    });

    var historyCapacity = new Morris.Bar({
        element: 'module-history-capacity',
        data: [
            { x: '电池1', y: 75 },
            { x: '电池2', y: 75 },
            { x: '电池3', y: 75 },
            { x: '电池4', y: 75 },
            { x: '电池5', y: 75 },
            { x: '电池6', y: 75 },
            { x: '电池7', y: 75 },
            { x: '电池8', y: 75 },
            { x: '电池9', y: 75 },
            { x: '电池10', y: 75 },
            { x: '电池11', y: 75 },
            { x: '电池12', y: 75 },
            { x: '电池13', y: 75 },
            { x: '电池14', y: 75 },
            { x: '电池15', y: 75 },
            { x: '电池16', y: 75 },
            { x: '电池17', y: 75 },
            { x: '电池18', y: 75 },
            { x: '电池19', y: 75 },
            { x: '电池20', y: 75 },
            { x: '电池21', y: 75 },
            { x: '电池22', y: 75 },
            { x: '电池23', y: 75 },
            { x: '电池24', y: 75 },
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['历史容量'],
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

    //dataTable
    $('#module-cell-info-table, #module-alarm-log-table').dataTable({
        lengthMenu: [ [10, 20, 30, 50, -1], [10, 20, 30, 50, "所有"] ],
        length: false,
        ordering: false,
        paging: true,
        info: true,
        filter: true,
        language: {
            lengthMenu: "显示 _MENU_ 项结果",
            zeroRecords: "没有匹配结果",
            info: "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            infoEmpty: "显示第 0 至 0 项结果，共 0 项",
            infoFiltered: "(由 _MAX_ 项结果过滤)",
            search: "搜索：",
            paginate: {
                previous: "上页",
                next: "下页",
                first: "首页",
                last: "末页"
            }
        }
    });

    // redraw the morris charts which are at hidden tabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        currentCapacity.redraw();
        historyCapacity.redraw();
        historyVoltage.redraw();
        historyCurrent.redraw();
        dischargeSingleVoltage.redraw();
        dischargeTotalVoltage.redraw();
    });
});

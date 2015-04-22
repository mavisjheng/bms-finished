$(document).ready(function() {
    // date-range-picker
    $('input[name=cell-history-range]').daterangepicker({
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

    // dataTable
    $('#cell-history').dataTable({
        lengthMenu: [5, 10, 20, 30, 50, "All"],
        length: false,
        ordering: true,
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

    // easy pie chart, 80% yellow, 50% red
    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this).closest('.infobox');
        $(this).easyPieChart({
            barColor: function colorChange(percentage) {
                if (percentage < 50) {
                    return '#d4301d';
                } else if (percentage > 49 && percentage < 80){
                    return '#f6a509';
                } else {
                    return '#87AA2A';
                }
            },
            trackColor: '#E2E2E2',
            lineWidth: 20,
            scaleColor: false,
            size: 160,
        });
    });

    // update cell capacity percentage automatically
    var percentStr = $('.easy-pie-chart.percentage span').text();
    var percentage = parseInt(percentStr);

    function updateStatus(percentage) {
        $('.easy-pie-chart.percentage span').text(percentage);
        $('.easy-pie-chart.percentage').data('easyPieChart').update(percentage);

    }

    setInterval(function() {
        // percentage decreases 1 every 5 seconds until reach to 0%
        percentage--;
        if (percentage < 0) {
            percentage = 100;
        }
        // update
        updateStatus(percentage);
    }, 5000);

    // update cell-history-morris-chart upon the type selection changes
    // morris chart
    var initData = prepareDemoCellData();

    var graph = new Morris.Line({
        element: 'cell-history-morris-chart',
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
        for (var startYear = 2007; startYear <= 2014; startYear++) {
            var currentYear = startYear;

            var max = 200;
            var min = 1;

            var value = Math.floor(Math.random() * max + min);
            var dataPoint = {
                year: currentYear.toString(),
                value: value
            };
            data.push(dataPoint);
        }
        return data;
    }

    $("#cell-history-chart-form").submit(function(event) {
        event.preventDefault();
        var chartType = $("#cell-chart-type option:selected").val();
        if (chartType) {
            var cellData = prepareDemoCellData(chartType);
            graph.setData(cellData);
        }
    });
});

$(document).ready(function() {
    // dataTable
    $('#index-discharge-date, #index-alarm-log').dataTable({
        length: false,
        paging: false,
        info: false,
        filter: false
    });

    // easy-pie-chart
    $('.easy-pie-chart.color-green3').each(function() {
        var $box = $(this).closest('.infobox');
        var barColor = $(this).css('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
        var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
        var size = parseInt($(this).data('size')) || 50;
        $(this).easyPieChart({
            barColor: function colorChange(percentage) {
                if (percentage < 50) {
                    return '#d4301d';
                } else if (percentage > 49 && percentage < 80){
                    return '#f6a509';
                } else {
                    return '#77ab59';
                }
            },
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'round',
            lineWidth: parseInt(size / 10),
            animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
            size: size
        });
    });

    $('.easy-pie-chart.color-green4').each(function() {
        var $box = $(this).closest('.infobox');
        var barColor = $(this).css('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
        var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
        var size = parseInt($(this).data('size')) || 50;
        $(this).easyPieChart({
            barColor: function colorChange(percentage) {
                if (percentage < 50) {
                    return '#d4301d';
                } else if (percentage > 49 && percentage < 80){
                    return '#f6a509';
                } else {
                    return '#77ab59';
                }
            },
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'round',
            lineWidth: parseInt(size / 10),
            animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
            size: size
        });
    });

    // update system main capacity percentage automatically
    var percentStr = $('.easy-pie-chart.percentage #main-percent').text();
    var percentInt = parseInt(percentStr);
    var percentage = percentInt;

    function updateStatus(percentage) {
        $('.easy-pie-chart.percentage #main-percent').text(percentage);
        $('.easy-pie-chart.percentage.color-green3').data('easyPieChart').update(percentage);
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

    //create random percentage when module-switch clicked
    $('.module-switch').click(function() {
        $('#module-widget .easy-pie-chart.percentage').each(function() {
            var cellPercent = Math.floor(Math.random() * 100 + 1);
            $(this).find('.percent').text(cellPercent);
            $(this).data('easyPieChart').update(cellPercent);
        });

        var systemTree = ['系统AA / 模组R', '系统AA / 模组S', '系统AA / 模组T', '系统AA / 模组U', '系统BB / 模组M', '系统BB / 模组N',
            '系统BB / 模组O', '系统BB / 模组P', '系统CC / 模组E', '系统CC / 模组F', '系统CC / 模组G', '系统CC / 模组H'
        ];
        var treeLength = systemTree.length;
        var treeIndex = Math.floor(Math.random() * treeLength);
        var moduleName = systemTree[treeIndex];
        $('#module-name').text(moduleName);
    });

    // update cell-history-morris-chart upon the type selection changes
    // morris chart
    var initData = prepareDemoCellData();

    var graph = new Morris.Line({
        element: 'history-morris-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['#7e6eb0']
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

    $("input[name=history-chart-type]:radio").change(function() {
        var chartType = $("input[type='radio']:checked").val();
        if (chartType) {
            var cellData = prepareDemoCellData(chartType);
            graph.setData(cellData);
        }
    });

    // update table content when discharge pagination button clicked
    var hideDate = $(".more-discharge");
    var showDate = $(".less-discharge");
    $("#next-discharge, #pre-discharge").click(function() {
        hideDate.toggle();
        showDate.toggle();
    });

    // update table content when error pagination button clicked
    var hideError = $(".more-alarm");
    var showError = $(".less-alarm");
    $("#next-alarm, #pre-alarm").click(function() {
        hideError.toggle();
        showError.toggle();
    });
});

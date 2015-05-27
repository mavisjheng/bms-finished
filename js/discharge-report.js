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

    //dataTable
    $('#finish-discharge-table').dataTable({
        lengthMenu: [ [10, 20, 30, 50, -1], [10, 20, 30, 50, "所有"] ],
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

    // morris chart
    var initData = prepareDemoCellData();
    var reportSingleVoltage = new Morris.Line({
        element: 'single-voltage-chart',
        data: [
            { x: '2015-05-15 10:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 11:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 12:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 13:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 14:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 15:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 16:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 17:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 18:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97},
            { x: '2015-05-15 19:00', v: 2.23, a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.14, n: 1.97}
        ],
        xkey: 'x',
        ykeys: ['v', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ymin: 1.8,
        ymax: 2.23,
        postUnits: 'V',
        labels: ['放电单体电压', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'],
        hoverCallback: function(index, options, content) {
            $("#row-content").html("<div>" + "Year: " + options.data[index].x + "<br />" + options.labels[0] + ": " + options.data[index].v + "<br />" + options.labels[1] + ": " + options.data[index].a + "</div>");
        }
    });

    var reportGroupVoltage = new Morris.Line({
        element: 'group-voltage-chart',
        data: [
            { x: '2015-05-15 15:00', v: 53.52 },
            { x: '2015-05-15 16:00', v: 52.3 },
            { x: '2015-05-15 17:00', v: 51 },
            { x: '2015-05-15 18:00', v: 50.5 },
            { x: '2015-05-15 19:00', v: 49 },
            { x: '2015-05-15 20:00', v: 48.3 },
            { x: '2015-05-15 21:00', v: 47.0 },
            { x: '2015-05-15 22:00', v: 45.8 },
            { x: '2015-05-15 23:00', v: 44.2 },
            { x: '2015-05-15 24:00', v: 43.2 }
        ],
        xkey: 'x',
        ykeys: ['v'],
        labels: ['放电组端电压'],
        postUnits: 'V',
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

    // redraw the morris charts which are at hidden tabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        reportSingleVoltage.redraw();
        reportGroupVoltage.redraw();
    });
});
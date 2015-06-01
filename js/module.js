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
    
    var groupVoltage = new Morris.Line({
        element: 'group-voltage-chart',
        data: [
            { x: '2015-05-15 15:00', v: 54.2 },
            { x: '2015-05-15 16:00', v: 53.9 },
            { x: '2015-05-15 17:00', v: 54.72 },
            { x: '2015-05-15 18:00', v: 53.65 },
            { x: '2015-05-15 19:00', v: 54.55 },
            { x: '2015-05-15 20:00', v: 54.1 },
            { x: '2015-05-15 21:00', v: 53.52 }
        ],
        xkey: 'x',
        ykeys: ['v'],
        labels: ['组端电压'],
        postUnits: 'V',
        lineColors: ['purple']
    });

    var groupCurrent = new Morris.Line({
        element: 'group-current-chart',
        data: [
            { x: '2015-05-15 15:00', a: 28 },
            { x: '2015-05-15 16:00', a: 29 },
            { x: '2015-05-15 17:00', a: 27 },
            { x: '2015-05-15 18:00', a: 30 },
            { x: '2015-05-15 19:00', a: 32 },
            { x: '2015-05-15 20:00', a: 30 },
            { x: '2015-05-15 21:00', a: 29 }
        ],
        xkey: 'x',
        ykeys: ['a'],
        ymax: 36,
        labels: ['组端电流'],
        postUnits: 'A',
        lineColors: ['purple']
    });

    var historyVoltage = new Morris.Line({
        element: 'history-voltage',
        data:  [
            { x: '2015-05-15', v: 54.2 },
            { x: '2015-05-16', v: 53.9 },
            { x: '2015-05-17', v: 54.72 },
            { x: '2015-05-18', v: 53.65 },
            { x: '2015-05-19', v: 54.55 },
            { x: '2015-05-20', v: 54.1 },
            { x: '2015-05-21', v: 53.52 }
        ],
        xkey: 'x',
        ykeys: ['v'],
        labels: ['历史电压'],
        postUnits: 'V',
        lineColors: ['purple']
    });

    var historyCurrent = new Morris.Line({
        element: 'history-current',
        data: [
            { x: '2015-05-15', a: 0.08 },
            { x: '2015-05-16', a: 0.09 },
            { x: '2015-05-17', a: 0.1 },
            { x: '2015-05-18', a: 0.08 },
            { x: '2015-05-19', a: 0.1 },
            { x: '2015-05-20', a: 0.07 },
            { x: '2015-05-21', a: 0.09 },
        ],
        xkey: 'x',
        ykeys: ['a'],
        labels: ['历史电流'],
        postUnits: 'A',
        lineColors: ['purple']
    });

    var dischargeSingleVoltage = new Morris.Line({
        element: 'discharge-single-voltage',
        data: [
            { z: '2015-05-15 10:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 11:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 12:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 13:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 14:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 15:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 16:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 17:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 18:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07},
            { z: '2015-05-15 19:00', a: 1.8, b: 1.9, c: 1.95, d: 1.85, e: 2, f: 2.05, g: 2.1, h:2.2, i: 2.15, j: 2.03, k: 1.88, l: 1.82, m: 2.13, n: 1.97, o: 2.23, p: 2.17, q: 2.08, r: 1.93, s: 2.19, t: 2.22, u: 2.11, v: 1.83, w: 1.92, x: 2.07}
        ],
        xkey: 'z',
        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
        ymin: 1.8,
        ymax: 2.23,
        postUnits: 'V',
        labels: ['电池1', '电池2', '电池3', '电池4', '电池5', '电池6', '电池7', '电池8', '电池9', '电池10', '电池11', '电池12', '电池13', '电池14', '电池15', '电池16', '电池17', '电池18', '电池19', '电池20', '电池21', '电池22', '电池23', '电池24'],
        hoverCallback: function(index, options, content) {
            $("#row-time").html("<div>" + "时间：" + options.data[index].z + "</div>");
            $("#row1-voltage").html("<div>" + options.labels[0] + ": " + options.data[index].a + " V<br />" + options.labels[1] + ": " + options.data[index].b + " V<br />" + options.labels[2] + ": " + options.data[index].c + " V<br />" + options.labels[3] + ": " + options.data[index].d + " V<br />" + options.labels[4] + ": " + options.data[index].e + " V<br />" + options.labels[5] + ": " + options.data[index].f + " V<br />" + options.labels[6] + ": " + options.data[index].g + " V<br />" + options.labels[7] + ": " + options.data[index].h + " V</div>");
            $("#row2-voltage").html("<div>" + options.labels[8] + ": " + options.data[index].i + " V<br />" + options.labels[9] + ": " + options.data[index].j + " V<br />" + options.labels[10] + ": " + options.data[index].k + " V<br />" + options.labels[11] + ": " + options.data[index].l + " V<br />" + options.labels[12] + ": " + options.data[index].m + " V<br />" + options.labels[13] + ": " + options.data[index].n + " V<br />" + options.labels[14] + ": " + options.data[index].o + " V<br />" + options.labels[15] + ": " + options.data[index].p + " V</div>");
            $("#row3-voltage").html("<div>" + options.labels[16] + ": " + options.data[index].q + " V<br />" + options.labels[17] + ": " + options.data[index].r + " V<br />" + options.labels[18] + ": " + options.data[index].s + " V<br />" + options.labels[19] + ": " + options.data[index].t + " V<br />" + options.labels[20] + ": " + options.data[index].u + " V<br />" + options.labels[21] + ": " + options.data[index].v + " V<br />" + options.labels[22] + ": " + options.data[index].w + " V<br />" + options.labels[23] + ": " + options.data[index].x + " V</div>");
        }
    });

    var dischargeGroupVoltage = new Morris.Line({
        element: 'discharge-group-voltage',
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
        postUnits: 'V',
        labels: ['组端电压'],
        lineColors: ['purple']
    });

    var currentVoltage = new Morris.Bar({
        element: 'current-voltage',
        data: [
            { x: '电池1', y: 2.23 },
            { x: '电池2', y: 2.24 },
            { x: '电池3', y: 2.25 },
            { x: '电池4', y: 2.26 },
            { x: '电池5', y: 2.27 },
            { x: '电池6', y: 2.28 },
            { x: '电池7', y: 2.23 },
            { x: '电池8', y: 2.25 },
            { x: '电池9', y: 2.27 },
            { x: '电池10', y: 2.28 },
            { x: '电池11', y: 2.24 },
            { x: '电池12', y: 2.27 },
            { x: '电池13', y: 2.23 },
            { x: '电池14', y: 2.26 },
            { x: '电池15', y: 2.24 },
            { x: '电池16', y: 2.28 },
            { x: '电池17', y: 2.26 },
            { x: '电池18', y: 2.23 },
            { x: '电池19', y: 2.27 },
            { x: '电池20', y: 2.24 },
            { x: '电池21', y: 2.27 },
            { x: '电池22', y: 2.26 },
            { x: '电池23', y: 2.28 },
            { x: '电池24', y: 2.25 },
        ],
        xkey: 'x',
        ykeys: ['y'],
        ymax: 2.28,
        postUnits: 'V',
        labels: ['即时电压'],
        barColors: ['#1c77bd']
    });

    var currentCapacity = new Morris.Bar({
        element: 'current-capacity',
        data: [
            { x: '电池1', c: 75 },
            { x: '电池2', c: 23 },
            { x: '电池3', c: 45 },
            { x: '电池4', c: 78 },
            { x: '电池5', c: 100 },
            { x: '电池6', c: 109 },
            { x: '电池7', c: 89 },
            { x: '电池8', c: 35 },
            { x: '电池9', c: 69 },
            { x: '电池10', c: 130 },
            { x: '电池11', c: 76 },
            { x: '电池12', c: 84 },
            { x: '电池13', c: 90 },
            { x: '电池14', c: 59 },
            { x: '电池15', c: 64 },
            { x: '电池16', c: 75 },
            { x: '电池17', c: 62 },
            { x: '电池18', c: 81 },
            { x: '电池19', c: 97 },
            { x: '电池20', c: 106 },
            { x: '电池21', c: 111 },
            { x: '电池22', c: 100 },
            { x: '电池23', c: 88 },
            { x: '电池24', c: 125 },
        ],
        xkey: 'x',
        ykeys: ['c'],
        ymax: 140,
        postUnits: '%',
        labels: ['当前容量'],
        barColors: ['#1c77bd']
    });

    var historyCapacity = new Morris.Bar({
        element: 'history-capacity-chart',
        data: [
            { x: '电池1', c: 75 },
            { x: '电池2', c: 23 },
            { x: '电池3', c: 45 },
            { x: '电池4', c: 78 },
            { x: '电池5', c: 100 },
            { x: '电池6', c: 109 },
            { x: '电池7', c: 89 },
            { x: '电池8', c: 35 },
            { x: '电池9', c: 69 },
            { x: '电池10', c: 130 },
            { x: '电池11', c: 76 },
            { x: '电池12', c: 84 },
            { x: '电池13', c: 90 },
            { x: '电池14', c: 59 },
            { x: '电池15', c: 64 },
            { x: '电池16', c: 75 },
            { x: '电池17', c: 62 },
            { x: '电池18', c: 81 },
            { x: '电池19', c: 97 },
            { x: '电池20', c: 106 },
            { x: '电池21', c: 111 },
            { x: '电池22', c: 100 },
            { x: '电池23', c: 88 },
            { x: '电池24', c: 125 },
        ],
        xkey: 'x',
        ykeys: ['c'],
        labels: ['历史容量'],
        postUnits: '%',
        ymax: 140,
        barColors: ['#1c77bd']
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
        currentCapacity.redraw();
        historyCapacity.redraw();
        historyVoltage.redraw();
        historyCurrent.redraw();
        dischargeSingleVoltage.redraw();
        dischargeGroupVoltage.redraw();
    });

    // dataTable initialization
    $('#module-cell-info-table, #module-history-alarm-table').dataTable({
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
});

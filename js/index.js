$(document).ready(function() {
    // pie chart
    var placeholder = $('#station-piechart').css({'width':'100%' , 'height':'200px'});
    var data = [
        { label: "浮充电状态",  data: 65, color: "#6B8E23"},
        { label: "均充电状态",  data: 17, color: "#778899"},
        { label: "核对性放电",  data: 10, color: "#DA5430"},
        { label: "供电状态",  data: 8, color: "#8B4513"}
    ]

    $.plot(placeholder, data, {
        series: {
            pie: {
                show: true,
            }
        },
        grid: {
            hoverable: true
        }
    });

    // pie chart tooltip and corresponding tables while hover on the chart
    var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');

    var noAllStation = $("#stable-station-list, #charge-station-list, #discharge-station-list, #supply-station-list");
    var noStableStation = $("#every-station-list, #charge-station-list, #discharge-station-list, #supply-station-list");
    var noChargeStation = $("#every-station-list, #stable-station-list, #discharge-station-list, #supply-station-list");
    var noDischargeStation = $("#every-station-list, #stable-station-list, #charge-station-list, #supply-station-list");
    var noSupplyStation = $("#every-station-list, #stable-station-list, #charge-station-list, #discharge-station-list");

    var lastIndex = null;
    $('#station-piechart').on('plothover', function (event, pos, item) {
        if(item) {
            if (lastIndex != item.seriesIndex) {
                lastIndex = item.seriesIndex;
                var tooltip_text = item.series['label'] + " : " + item.series['percent']+'%';
                $tooltip.show().children(0).text(tooltip_text);
                if(item.seriesIndex === 0) {
                    $("#stable-station-list").show();
                    noStableStation.hide();
                }
                else if(item.seriesIndex === 1) {
                    $("#charge-station-list").show();
                    noChargeStation.hide();
                }
                else if(item.seriesIndex === 2) {
                    $("#discharge-station-list").show();
                    noDischargeStation.hide();
                }
                else if(item.seriesIndex === 3) {
                    $("#supply-station-list").show();
                    noSupplyStation.hide();
                }
            }
            $tooltip.css({top:pos.pageY + 10, left:pos.pageX + 10});
        } 
        else {
            $tooltip.hide();
            lastIndex = null;
        }
    });
    

    // corresponding tables while hover on the station total infobox
    $("#total-station").mouseover(function(){
        $("#every-station-list").show();
        noAllStation.hide();
    });
    $("#total-stable").mouseover(function(){
        $("#stable-station-list").show();
        noStableStation.hide();
    });
    $("#total-charge").mouseover(function(){
        $("#charge-station-list").show();
        noChargeStation.hide();
    });
    $("#total-discharge").mouseover(function(){
        $("#discharge-station-list").show();
        noDischargeStation.hide();
    });
    $("#total-supply").mouseover(function(){
        $("#supply-station-list").show();
        noSupplyStation.hide();
    });

    // five tables
    $('#every-station-table, #stable-station-table, #chagre-station-table, #discharge-station-table, #supply-station-table').dataTable({
        lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "所有"] ],
        length: true,
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

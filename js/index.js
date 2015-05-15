$(document).ready(function() {
    // pie chart initialization
    var placeholder = $('#station-piechart').css({'width':'100%' , 'height':'200px'});
    var data = [
        {label: "浮充电状态", data: 65, color: "#6B8E23"},
        {label: "均充电状态", data: 17, color: "#778899"},
        {label: "核对性放电", data: 10, color: "#DA5430"},
        {label: "供电状态", data: 8, color: "#8B4513"}
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

    // pie chart tooltip and show corresponding tables while hover on the chart
    var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');

    var noAllStation = $("#stable-station-list, #charge-station-list, #discharge-station-list, #supply-station-list");
    var noStableStation = $("#total-station-list, #charge-station-list, #discharge-station-list, #supply-station-list");
    var noChargeStation = $("#total-station-list, #stable-station-list, #discharge-station-list, #supply-station-list");
    var noDischargeStation = $("#total-station-list, #stable-station-list, #charge-station-list, #supply-station-list");
    var noSupplyStation = $("#total-station-list, #stable-station-list, #charge-station-list, #discharge-station-list");

    var lastIndex = null;
    $('#station-piechart').on('plothover', function (event, pos, item) {
        if(item) {
            if (lastIndex != item.seriesIndex) {
                lastIndex = item.seriesIndex;
                var tooltip_text = item.series['label'] + " : " + item.series['percent']+'%';
                $tooltip.show().children(0).text(tooltip_text);
                // while hover to the pie area, show corresponding table and hide other else
                if(item.seriesIndex === 0) {
                    $("#stable-station-list").show();
                    noStableStation.hide();
                    $(".info-box").css({'font-size':'13px','color':'#393939'});
                    $("#stable-station-infobox").css({'font-size':'16px','color':'green'});
                }
                else if(item.seriesIndex === 1) {
                    $("#charge-station-list").show();
                    noChargeStation.hide();
                    $(".info-box").css({'font-size':'13px','color':'#393939'});
                    $("#charge-station-infobox").css({'font-size':'16px','color':'#58728C'});
                }
                else if(item.seriesIndex === 2) {
                    $("#discharge-station-list").show();
                    noDischargeStation.hide();
                    $(".info-box").css({'font-size':'13px','color':'#393939'});
                    $("#discharge-station-infobox").css({'font-size':'16px','color':'#EF3F0F'});
                }
                else if(item.seriesIndex === 3) {
                    $("#supply-station-list").show();
                    noSupplyStation.hide();
                    $(".info-box").css({'font-size':'13px','color':'#393939'});
                    $("#supply-station-infobox").css({'font-size':'16px','color':'brown'});
                }
            }
            $tooltip.css({top:pos.pageY + 10, left:pos.pageX + 10});
        } 
        else {
            $tooltip.hide();
            lastIndex = null;
            $(".info-box").css({'font-size':'13px','color':'#393939'});
        }
    });
    
    // show corresponding tables while hover on the station total infobox
    $("#all-station-infobox").mouseover(function(){
        $("#total-station-list").show();
        noAllStation.hide();
        $(".info-box").css({'font-size':'13px','color':'#393939'});
        $("#all-station-infobox").css({'font-size':'16px','color':'blue'});
    });
    $("#stable-station-infobox").mouseover(function(){
        $("#stable-station-list").show();
        noStableStation.hide();
        $(".info-box").css({'font-size':'13px','color':'#393939'});
        $("#stable-station-infobox").css({'font-size':'16px','color':'green'});
    });
    $("#charge-station-infobox").mouseover(function(){
        $("#charge-station-list").show();
        noChargeStation.hide();
        $(".info-box").css({'font-size':'13px','color':'#393939'});
        $("#charge-station-infobox").css({'font-size':'16px','color':'#58728C'});
    });
    $("#discharge-station-infobox").mouseover(function(){
        $("#discharge-station-list").show();
        noDischargeStation.hide();
        $(".info-box").css({'font-size':'13px','color':'#393939'});
        $("#discharge-station-infobox").css({'font-size':'16px','color':'#EF3F0F'});
    });
    $("#supply-station-infobox").mouseover(function(){
        $("#supply-station-list").show();
        noSupplyStation.hide();
        $(".info-box").css({'font-size':'13px','color':'#393939'});
        $("#supply-station-infobox").css({'font-size':'16px','color':'brown'});
    });


    // five tables initialization
    $('#total-station-table, #stable-station-table, #chagre-station-table, #discharge-station-table, #supply-station-table').dataTable({
        lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "所有"] ],
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

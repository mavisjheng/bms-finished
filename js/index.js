$(document).ready(function() {
    // pie chart initialization
    var placeholder = $('#station-piechart').css({'width':'100%' , 'height':'200px'});
    var data = [
        {label: "浮充电状态", data: 47, color: "#6B8E23"},
        {label: "均充电状态", data: 16, color: "#778899"},
        {label: "核对性放电状态", data: 8, color: "#CC9933"},
        {label: "供电状态", data: 11, color: "#8B4513"},
        {label: "报警状态", data: 18, color: "#DA5430"}
    ]

    $.plot(placeholder, data, {
        series: {
            pie: {
                show: true,
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    // pie chart tooltip and show corresponding tables while hover on the chart
    var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');

    function hideTable() {
        $("div[id$='list']").hide();
        $(".info-box").css({'font-size':'13px','color':'#393939'});
    }

    function showStable() {
        $("#stable-station-list").show();
        $("#stable-station-infobox").css({'font-size':'16px','color':'green'});
    }

    function showCharge() {
        $("#charge-station-list").show();
        $("#charge-station-infobox").css({'font-size':'16px','color':'#688097'});
    }

    function showDischarge() {
        $("#discharge-station-list").show();
        $("#discharge-station-infobox").css({'font-size':'16px','color':'#b38600'});
    }

    function showSupply() {
        $("#supply-station-list").show();
        $("#supply-station-infobox").css({'font-size':'16px','color':'brown'});
    }

    function showAlarm() {
        $("#alarm-distribution-list, #todo-discharge-list").show();
        $("#alarm-station-infobox").css({'font-size':'16px','color':'red'});
    }

    var lastIndex = null;
    $('#station-piechart')
        .on('plotclick', function (event, pos, item) {
            if(item) {
                if(item.seriesIndex === 0) {
                    hideTable();
                    showStable();
                }
                else if(item.seriesIndex === 1) {
                    hideTable();
                    showCharge();
                }
                else if(item.seriesIndex === 2) {
                    hideTable();
                    showDischarge();
                }
                else if(item.seriesIndex === 3) {
                    hideTable();
                    showSupply();
                }
                else if(item.seriesIndex === 4) {
                    hideTable();
                    showAlarm();
                }
            }
            else {
                $(".info-box").css({'font-size':'13px','color':'#393939'});
            }
        })
        .on('plothover', function (event, pos, item) {
            if(item) {
                if (lastIndex != item.seriesIndex) {
                    lastIndex = item.seriesIndex;
                    var tooltip_text = item.series['label'] + " : " + item.series['percent']+'%';
                    $tooltip.show().children(0).text(tooltip_text);
                    if(item.seriesIndex === 0) {
                        hideTable();
                        showStable();
                    }
                    else if(item.seriesIndex === 1) {
                        hideTable();
                        showCharge();
                    }
                    else if(item.seriesIndex === 2) {
                        hideTable();
                        showDischarge();
                    }
                    else if(item.seriesIndex === 3) {
                        hideTable();
                        showSupply();
                    }
                    else if(item.seriesIndex === 4) {
                        hideTable();
                        showAlarm();
                    }
                }
                $tooltip.css({top:pos.pageY + 10, left:pos.pageX + 10});
            } 
            else {
                $tooltip.hide();
                lastIndex = null;
            }
        });
    
    // show corresponding tables while hover on the station total infobox
    $("#all-station-infobox").click(function(){
        hideTable();
        $("#total-station-list").show();
        $("#all-station-infobox").css({'font-size':'16px','color':'blue'});
    });
    $("#stable-station-infobox").click(function(){
        hideTable();
        showStable();
    });
    $("#charge-station-infobox").click(function(){
        hideTable();
        showCharge();
    });
    $("#discharge-station-infobox").click(function(){
        hideTable();
        showDischarge();
    });
    $("#supply-station-infobox").click(function(){
        hideTable();
        showSupply();
    });
    $("#alarm-station-infobox").click(function(){
        hideTable();
        showAlarm();
    });
    $("#todo-discharge-infobox").click(function(){
        hideTable();
        $("#alarm-distribution-list, #todo-discharge-list").show();
        $("#todo-discharge-infobox").css({'font-size':'16px','color':'red'});
    });
    $("#connection-error-infobox").click(function(){
        hideTable();
        $("#alarm-distribution-list, #connection-error-list").show();
        $("#connection-error-infobox").css({'font-size':'16px','color':'red'});
    });
    $("#alarm-ing-infobox").click(function(){
        hideTable();
        $("#alarm-distribution-list, #alarm-ing-list").show();
        $("#alarm-ing-infobox").css({'font-size':'16px','color':'red'});
    });
    $("#alarm-solved-infobox").click(function(){
        hideTable();
        $("#alarm-distribution-list, #alarm-solved-list").show();
        $("#alarm-solved-infobox").css({'font-size':'16px','color':'red'});
    });

    // five tables initialization
    $('#total-station-table, #stable-station-table, #chagre-station-table, #discharge-station-table, #supply-station-table, #todo-discharge-table, #connection-error-table, #alarm-ing-table, #alarm-solved-table').dataTable({
        lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "所有"] ],
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
});

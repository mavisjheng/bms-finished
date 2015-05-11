$(document).ready(function() {
    // dataTable
    $('#search-result-table').dataTable({
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

    // write all staion here and once in order to reduce repetition of code
    var stationArray = [{'value':'zhongshan','text':'中山站'},
                        {'value':'xigang','text':'西岗站'},
                        {'value':'shahekou','text':'沙河口站'},
                        {'value':'ganjingzi','text':'甘井子站'},
                        {'value':'heping','text':'和平站'},
                        {'value':'shenhe','text':'沈河站'},
                        {'value':'huanggu','text':'皇姑站'},
                        {'value':'dadong','text':'大东站'},
                        {'value':'tiedong','text':'铁东站'},
                        {'value':'tiexi','text':'铁西站'},
                        {'value':'lishan','text':'立山站'},
                        {'value':'qianshan','text':'千山站'},
                        {'value':'xinfu','text':'新抚站'},
                        {'value':'dongzhou','text':'东洲站'},
                        {'value':'wanghua','text':'望花站'},
                        {'value':'shuncheng','text':'顺城站'}
    ];
    
    // change corresponding station options upon city options changed
    // write changeStationOption() in order to reduce repetition of code
    // j <= i + 3: each city has four stations
    function changeStationOption(i) {
        for (var j = i; j <= i + 3; j++) {
            $('#station').append($("<option></option>")
            .attr("value",stationArray[j]['value'])
            .text(stationArray[j]['text']));
        };
    }

    $("#city").change(function(){               
        // if city selection changes, get cityName and change to its corresponding stations
        // need to remove all existing options before append corresponding stations
        var cityName = $("#city").val();
        switch (cityName) {
            case "0":
                $("#station option").remove();
                $('#station').append('<option value="" disabled selected>通信站</option>');
                break;
            
            // i is the first index of city's corresponding station at stationArray[]
            case "dalian":
                $("#station option").remove();
                var i = 0;
                changeStationOption(i);
                break;

            case "shenyang":
                $("#station option").remove();
                var i = 4;
                changeStationOption(i);
                break;

            case "anshan":
                $("#station option").remove();
                var i = 8;
                changeStationOption(i);
                break;

            case "fushun":
                $("#station option").remove();
                var i = 12;
                changeStationOption(i);
                break;
        }
    });
});

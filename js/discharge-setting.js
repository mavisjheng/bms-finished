$(document).ready(function() {
    //dataTable
    $('#discharge-list-table').dataTable({
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

    // click discharge-list-table then apply setting to setting form
    $("#discharge-list-table tbody").delegate("tr", "click", function(){
        // remove current existing stations then append all posiible stations in order to match the .val()
        // if cannot match the station .val() then nothing will show
        $("#station option").remove();
        $.each(stationArray, function(i){
            $('#station').append($("<option></option>")
            .attr("value",stationArray[i]['value'])
            .text(stationArray[i]['text']));
        }); 

        // get city name
        var city = $("td:eq(1)", this).text();
        switch (city) {
            case "大连市":
                $("#city").val("dalian");
                break;
            case "沈阳市":
                $("#city").val("shenyang");
                break;
            case "鞍山市":
                $("#city").val("anshan");
                break;
            case "抚顺市":
                $("#city").val("fushun");
                break;
        }
        // get station name
        var station = $("td:eq(2)", this).text();
        switch (station) {
            case "中山站":
                $("#station").val("zhongshan");
                break;
            case "西岗站":
                $("#station").val("xigang");
                break;
            case "沙河口站":
                $("#station").val("shahekou");
                break;
            case "甘井子站":
                $("#station").val("ganjingzi");
                break;
            case "和平站":
                $("#station").val("heping");
                break;
            case "沈河站":
                $("#station").val("shenhe");
                break;
            case "皇姑站":
                $("#station").val("huanggu");
                break;
            case "大东站":
                $("#station").val("dadong");
                break;
            case "铁东站":
                $("#station").val("tiedong");
                break;
            case "铁西站":
                $("#station").val("tiexi");
                break;
            case "立山站":
                $("#station").val("lishan");
                break;
            case "千山站":
                $("#station").val("qianshan");
                break;
            case "新抚站":
                $("#station").val("xinfu");
                break;
            case "东洲站":
                $("#station").val("dongzhou");
                break;
            case "望花站":
                $("#station").val("wanghua");
                break;
            case "顺城站":
                $("#station").val("shuncheng");
                break;
        }
        // get module name
        var module = $("td:eq(3)", this).text();
        switch (module) {
            case "电池组一":
                $("#module").val("module1");
                break;
            case "电池组二":
                $("#module").val("module2");
                break;
            case "电池组三":
                $("#module").val("module3");
                break;
            case "电池组四":
                $("#module").val("module4");
                break;
        }
        // get discharge percentage
        var dischargePercent= $("td:eq(4)", this).text();
        $("#dischargePercent").val(dischargePercent);
    });
    
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

    // without this event the station select box won't be reset
    $("#reset-btn").click(function() {
        $("#station option").remove();
        $('#station').append('<option value="" disabled selected>通信站</option>');
    });

    // password window pop out when click discharge confirm btn 
    $("#discharge-confirm-btn").click(function() {
        $("#discharge-pwd-window").css('display','block');
    });
});
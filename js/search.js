$(document).ready(function() {
    // dataTable
    $('#search-result-table').dataTable({
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

    // advanced filter button event
    $("#more-filter-btn").click(function(){
        $("#filter-div").append('<select name="relation" class="form-control" id="relation">\
                                <option value="" disabled selected>关联</option>\
                                <option value="">且</option>\
                                <option value="">或</option>\
                                <option value="">不包含</option>\
                                </select>\
                                <select name="filter2" class="form-control" id="filter2">\
                                <option value="" disabled selected>筛选项目</option>\
                                <option value="">浮充电通信站</option>\
                                <option value="">均充电通信站</option>\
                                <option value="">核对性放电通信站</option>\
                                <option value="">供电通信站</option>\
                                <option value="">需核对性放电通信站</option>\
                                <option value="">通信故障通信站</option>\
                                <option value="">报警通信站</option>\
                                <option value="">报警处理中通信站</option>\
                                </select>');
        });

    $("#less-filter-btn").click(function(){
        $("#relation").remove();
        $("#filter2").remove();
    });
});

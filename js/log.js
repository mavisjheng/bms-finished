$(document).ready(function() {
    // date-range-picker for cell.html and log.html
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

    // dataTable
    $('#alarm-log-table, #user-log-table').DataTable({
        dom: 'lTftip', // length, tableTools, filter, table, information, pagination
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        ordering: true,
        paging: true,
        info: true,
        filter: true,
        tableTools: {
            sSwfPath: "js/ace/dataTables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
            aButtons: [{
                sExtends: "copy",
                sToolTip: "复制表格",
                sButtonClass: "btn btn-white btn-primary btn-bold",
                sButtonText: "<i class='fa fa-copy bigger-110 pink'></i>",
            }, {
                sExtends: "xls",
                sToolTip: "生成Excel档",
                sButtonClass: "btn btn-white btn-primary  btn-bold",
                sButtonText: "<i class='fa fa-file-excel-o bigger-110 green'></i>"
            }, {
                sExtends: "pdf",
                sToolTip: "生成PDF档",
                sButtonClass: "btn btn-white btn-primary  btn-bold",
                sButtonText: "<i class='fa fa-file-pdf-o bigger-110 red'></i>"
            }, {
                sExtends: "print",
                sToolTip: "打印",
                sButtonClass: "btn btn-white btn-primary  btn-bold",
                sButtonText: "<i class='fa fa-print bigger-110 grey'></i>",

                sMessage: "<div class='navbar navbar-default'><div class='navbar-header pull-left'><a class='navbar-brand' href='#'><small>Optional Navbar &amp; Text</small></a></div></div>",

                sInfo: "<h3 class='no-margin-top'>打印预览</h3>\
                                      <p>请利用浏览器上的打印功能来打印此表格\
                                      <br />结束时请按 <b>esc</b> 离开此页</p>",
            }]
        },
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

    // solve the problem of hidden tab's tableTools
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var jqTable = $('table.table', $(e.target).attr("href"));
        if (jqTable.length > 0) {
            var oTableTools = TableTools.fnGetInstance(jqTable[0]);
            if (oTableTools != null && oTableTools.fnResizeRequired()) {
                /* A resize of TableTools' buttons and DataTables' columns is only required on the
                 * first visible draw of the table
                 */
                jqTable.dataTable().fnAdjustColumnSizing();
                oTableTools.fnResizeButtons();
            }
        }
    });

});

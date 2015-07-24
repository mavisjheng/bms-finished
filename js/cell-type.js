$(document).ready(function() {
    // single-date-picker
    $('input[name=single-date-picker]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            customRangeLabel: 'Custom',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    }).prev().on(ace.click_event, function() {
        $(this).next().focus();
    });
});

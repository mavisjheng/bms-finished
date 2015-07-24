$(document).ready(function() {
    // sidebar edit action for every page
    var editBar = $(".edit-bar");
    var showBox = $(".show-box");
    $("#edit-btn").click(function() {
        editBar.toggle();
        showBox.toggle();
    });
    $('[data-rel=tooltip]').tooltip();

    // breadcrumbs
    /*$('ul.submenu li a').click(function() {
        var currentTabText = $(this).text();
        $('.breadcrumb li.active').text(currentTabText);
    });*/

    $(".city-setting").click(function() {
        window.location.href = "city-setting.html";
    });

    $(".station-setting").click(function() {
        window.location.href = "station-setting.html";
    });

});

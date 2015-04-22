$(document).ready(function() {
    // easy pie chart
    $('.easy-pie-chart.percentage').each(function() {
        $(this).easyPieChart({
            barColor: function colorChange(percentage) {
                if (percentage < 50) {
                    return '#d4301d';
                } else if (percentage > 49 && percentage < 80){
                    return '#f6a509';
                } else {
                    return '#2e8965';
                }
            },
            trackColor: '#E2E2E2',
            lineCap: 'butt',
            lineWidth: 6,
            scaleColor: false,
            size: 80
        });
    });

    //create random percentage when system-module click switched
    $('.system-switch').click(function() {
        $('.system-widget .easy-pie-chart.percentage').each(function() {
            var cellPercent = Math.floor(Math.random() * 100 + 1);
            $(this).find('.percent').text(cellPercent);
            $(this).data('easyPieChart').update(cellPercent);
        });

        var systemTree = ['系统AA', '系统BB', '系统CC'];
        var moduleTree = ['模组M', '模组N', '模组O', '模组P', '模组R', '模组S',
            '模组T', '模组U', '模组E', '模组F', '模组G', '模组H'
        ];

        var systemLength = systemTree.length;
        var systemIndex = Math.floor(Math.random() * systemLength);
        var systemName = systemTree[systemIndex];

        function preparemoduleName() {
            var moduleLength = moduleTree.length;
            var data = [];
            for (var i = 0; i <= 3; i++) {
                var moduleIndex = Math.floor(Math.random() * moduleLength);
                var moduleName = moduleTree[moduleIndex];
                data.push(moduleName);
            }
            return data;
        }
        var moduleNames = preparemoduleName();
        
        $('#system-name1').text(systemName + ' / ' + moduleNames[0]);
        $('#system-name2').text(systemName + ' / ' + moduleNames[1]);
        $('#system-name3').text(systemName + ' / ' + moduleNames[2]);
        $('#system-name4').text(systemName + ' / ' + moduleNames[3]);
    });
});

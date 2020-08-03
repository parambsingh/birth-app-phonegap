$(function () {

    if (localStorage.getItem("authUser") === null) {
        window.location.href = "welcome.html";
    }

    var dateType = 'period';

    $('#dateOfPeriod').change(function (e) {
        e.preventDefault();
        dateType = "period";
        calculateDueDate('no',);
    });

    $('#dateOfConception').change(function (e) {
        e.preventDefault();
        dateType = "conception";
        calculateDueDate('no');
    });

    setTimeout(function () {
        var minToday = new Date();
        var today = new Date();
        var minDate = new Date((minToday.setMonth(minToday.getMonth() + (-9))));
        $('#dateOfPeriod, #dateOfConception').attr('min', minDate.toJSON().split('T')[0]);
        $('#dateOfPeriod, #dateOfConception').attr('max', today.toJSON().split('T')[0]);
        $('#dateOfPeriod, #dateOfConception').val(today.toJSON().split('T')[0]);
        getDueDate();
    }, 300);

    function getDueDate() {

        $.ajax({
            type: "POST",
            url: SITE_URL + 'users/getDueDate',
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {

                if (resp.data.date_of_period != null) {
                    var dateOfPeriod = getDateF(resp.data.date_of_period);

                    $('#dateOfPeriod').val(dateOfPeriod.toJSON().split('T')[0]);
                }

                if (resp.data.date_of_conception != null) {
                    var dateOfConception = getDateF(resp.data.date_of_conception);
                    $('#dateOfConception').val(dateOfConception.toJSON().split('T')[0]);
                    //$('#dateOfConception').val((new Date(resp.data.date_of_conception)).toDateInputValue());
                }

                if (resp.data.due_date != null) {
                    $('#setDueDate').html(resp.data.due_date);
                    $('#dueDateBox').fadeIn();

                    var localKeys = [
                        'dashboardData',
                        'dashboardArticles',
                        'localArticles',
                        'localChecklists',
                        'currentChecklist',
                    ];

                    $.each(localKeys, function (ind, localKey) {
                        if (localStorage.getItem(localKey) != null) {
                            localStorage.removeItem(localKey);
                        }
                    });


                }
            }
        });
    }

    function getDateF(newDate) {
        var dateA = newDate.split('-');
        return new Date(parseInt(dateA[0]), (parseInt(dateA[1]) - 1), (parseInt(dateA[2]) + 1));
    }

    function calculateDueDate(move) {

        DATA['date_of_period'] = $('#dateOfPeriod').val();
        DATA['date_of_conception'] = $('#dateOfConception').val();

        DATA['date_type'] = dateType;

        console.log(DATA);

        $.ajax({
            type: "POST",
            url: SITE_URL + 'users/calculateDueDate',
            crossDomain: true,
            data: DATA,
            dataType: "json",
            success: function (resp) {
                //$('#calculating').hide();
                $('#dueDateBox').fadeIn();
                $('#setDueDate').html(resp.data.due_date);
                if (move == "yes") {
                    window.location.href = "dashboard.html";
                }
            }
        });
    }

    $('#saveDueDate').click(function (e) {
        e.preventDefault();

        $('#dueDateError').hide();

        var dateOfPeriod = $('#dateOfPeriod').val();
        var dateOfConception = $('#dateOfConception').val();

        if (dateOfPeriod.length > 0 || dateOfConception > 0) {
            calculateDueDate('yes');
        } else {
            $('#dueDateError').show();
        }

    });

});

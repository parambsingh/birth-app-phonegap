var CONTRACTIONS = [];
var CONTRACTION = {};
var LAST_CONTRACTION_TIME = [];
var INTENSITY = "Mild";
$(document).ready(function () {
    (function ($) {

        if (localStorage.getItem("authUser") === null && !isChrome) {
            window.location.href = "welcome.html";
        }

        $.extend({
            APP: {
                formatTimer: function (a) {
                    if (a < 10) {
                        a = '0' + a;
                    }
                    return a;
                },
                startTimer: function (dir) {
                    var a;
                    // save type
                    $.APP.dir = dir;

                    // get current date
                    $.APP.d1 = new Date();
                    switch ($.APP.state) {
                        case 'pause' :

                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;

                            break;

                        default :

                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime();

                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val()) * 1000;
                            }
                            break;
                    }

                    // reset state
                    $.APP.state = 'alive';
                    $('#' + $.APP.dir + '_status').html('Running');

                    // start loop
                    $.APP.loopTimer();

                },

                pauseTimer: function () {

                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();

                    // save elapsed time (until pause)
                    $.APP.td = $.APP.tp - $.APP.t1;

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Resume');

                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Paused');

                },

                stopTimer: function () {

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Restart');

                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Stopped');

                },

                resetTimer: function () {

                    // reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Start');

                    // set state
                    $.APP.state = 'reset';
                    $('#' + $.APP.dir + '_status').html('Reset & Idle again');

                },

                endTimer: function (callback) {

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Restart');

                    // set state
                    $.APP.state = 'end';

                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
                    }

                },

                loopTimer: function () {

                    var td;
                    var d2, t2;

                    var ms = 0;
                    var s = 0;
                    var m = 0;
                    var h = 0;

                    if ($.APP.state === 'alive') {

                        // get current date and convert it into
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();

                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                            // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function () {
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ended & Reset');
                                });
                            }
                        }

                        // calculate milliseconds
                        ms = td % 1000;
                        if (ms < 1) {
                            ms = 0;
                        } else {
                            // calculate seconds
                            s = (td - ms) / 1000;
                            if (s < 1) {
                                s = 0;
                            } else {
                                // calculate minutes
                                var m = (s - (s % 60)) / 60;
                                if (m < 1) {
                                    m = 0;
                                } else {
                                    // calculate hours
                                    var h = (m - (m % 60)) / 60;
                                    if (h < 1) {
                                        h = 0;
                                    }
                                }
                            }
                        }

                        // substract elapsed minutes & hours
                        ms = Math.round(ms / 100);
                        s = s - (m * 60);
                        m = m - (h * 60);

                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                        $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));

                        if (m >= 6 && s >= 45) {
                            alert('Please CALL Midwife :)');
                        }

                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer, 1);

                    } else {

                        // kill loop
                        clearTimeout($.APP.t);
                        return true;

                    }

                }

            }

        });

        $('#contractionTimerBtn').on('click', function () {
            if ($(this).attr('data-value') == "Start") {

                CONTRACTION = {};
                var t = getDateTime('time');
                $.APP.startTimer('sw');
                $(this).attr('data-value', 'Stop');
                $(this).html('&nbsp;Stop&nbsp;');
                CONTRACTION['start_at'] = t.join(' : '); //getDateTime('date').join('-')+' '+
                CONTRACTION['start_time'] = t;
                CONTRACTION['intensity'] = INTENSITY;
            } else {
                var t = getDateTime('time');
                $(this).attr('data-value', 'Start');
                $(this).html('&nbsp;Start&nbsp;');
                $.APP.stopTimer();

                CONTRACTION['end_at'] = getDateTime('date').join('-') + ' ' + t.join(':');
                CONTRACTION['end_time'] = t;
                CONTRACTION['length'] = getTimeDiffrence(CONTRACTION['start_time'], CONTRACTION['end_time']);

                $('#duration').html(CONTRACTION['length']);

                CONTRACTION['rest_time'] = (LAST_CONTRACTION_TIME.length <= 0) ? "00:00" : getTimeDiffrence(LAST_CONTRACTION_TIME, CONTRACTION['start_time']);
                $('#restTime').html(CONTRACTION['rest_time']);
                //renderRow(CONTRACTION);

                CONTRACTIONS.push(CONTRACTION);

                $('#noOfContractions').html(CONTRACTIONS.length)

                //Calculate Rest Time
                LAST_CONTRACTION_TIME = t;
                $('#lowerBox').show();

                saveContraction(CONTRACTION);
            }
        });

        $('.set-intensity').click(function (e) {
            e.preventDefault();

            INTENSITY = $(this).attr('id');

            $('.set-intensity').each(function () {
                $(this).html($(this).attr('id'));
            });

            $(this).html('<i class="fa fa-check" style="font-size: 12px;"></i> ' + INTENSITY);

        });
        
        $('#resetContractionTimerBtn').click(function () {
            $.ajax({
                type: "POST",
                url: SITE_URL + 'contractions/resetContractions',
                crossDomain: true,
                dataType: "json",
                data: DATA,
                success: function (resp) {
                    if (resp.code == 200) {
                        //getContractions()
                        $('#lowerBox').hide();
                    }
                }
            });
        });

        function saveContraction(c) {
            DATA['intensity'] = c.intensity;
            DATA['start_at'] = getDateTime('date').join('-') + ' ' + c.start_time.join(":");
            DATA['end_at'] = getDateTime('date').join('-') + ' ' + c.end_time.join(":");

            $.ajax({
                type: "POST",
                url: SITE_URL + 'contractions/add',
                crossDomain: true,
                dataType: "json",
                data: DATA,
                success: function (resp) {
                    if (resp.code == 200) {
                        getContractions()
                    }
                }
            });
        }

        function getContractions() {
            $.ajax({
                type: "POST",
                url: SITE_URL + 'contractions/getContractions',
                crossDomain: true,
                dataType: "json",
                data: DATA,
                success: function (resp) {
                    if (resp.code == 200) {

                        $('#contractionRows').html("");

                        var maxCons = resp.data.contractions.length
                        CONTRACTIONS = [];
                        $.each(resp.data.contractions, function (ind, dateGroup) {
                            renderDate(ind);
                            $.each(dateGroup, function (dind, c) {
                                CONTRACTION = {};

                                var st = getDateTimeFromDate('time', c.start_at);


                                CONTRACTION['start_at'] = st.join(' : '); //getDateTime('date').join('-')+' '+
                                CONTRACTION['start_time'] = st;
                                CONTRACTION['intensity'] = c.intensity;


                                var et = getDateTimeFromDate('time', c.end_at);


                                CONTRACTION['end_at'] = getDateTimeFromDate('date', c.end_at).join('-') + ' ' + et.join(':');
                                CONTRACTION['end_time'] = et;
                                CONTRACTION['length'] = getTimeDiffrence(CONTRACTION['start_time'], CONTRACTION['end_time']);


                                CONTRACTION['rest_time'] = (LAST_CONTRACTION_TIME.length <= 0) ? "00:00" : getTimeDiffrence(LAST_CONTRACTION_TIME, CONTRACTION['start_time']);


                                if (ind == (maxCons - 1)) {
                                    $('#restTime').html(CONTRACTION['rest_time']);

                                    $('#duration').html(CONTRACTION['length']);
                                }

                                renderRow(CONTRACTION);

                                CONTRACTIONS.push(CONTRACTION);


                                //Calculate Rest Time
                                LAST_CONTRACTION_TIME = et;
                            });

                        });

                        $('#noOfContractions').html(CONTRACTIONS.length);

                        $('#lowerBox').show();

                    }
                }
            });
        }


        setTimeout(function () {
            getContractions();
        }, 500);

    })(jQuery);

    function getDateTime(type) {
        var today = new Date();
        var date = [today.getFullYear(), (today.getMonth() + 1), today.getDate()];
        var time = [today.getHours(), today.getMinutes(), today.getSeconds()];
        return type == "date" ? date : time;
    }

    function getDateTimeFromDate(type, date) {
        cl(date);
        var today = new Date(date);
        cl(today);
        var date = [today.getFullYear(), (today.getMonth() + 1), today.getDate()];
        var time = [today.getHours(), today.getMinutes(), today.getSeconds()];
        return type == "date" ? date : time;
    }

    function getTimeDiffrence(startTime, endTime) {
        var dh = parseInt(endTime[0]) - parseInt(startTime[0]);
        var dm = parseInt(endTime[1]) - parseInt(startTime[1]);
        var ds = parseInt(endTime[2]) - parseInt(startTime[2]);

        if (dm < 0) {
            dm = -dm;
        }

        if (ds < 0) {
            ds = -ds;
        }

        if (dh > 0) {
            dm = dm + (dh * 60);
        }
        if (dm <= 9) {
            dm = "0" + dm;
        }
        if (ds <= 9) {
            ds = "0" + ds;
        }
        return dm + ":" + ds;
    }

    function renderRow(c) {
        var r = `<tr><td>${c.start_at}</td><td>${c.length}</td><td>${c.rest_time}</td><td>${c.intensity}</td></tr>`;
        $('#contractionRows').append(r);
    }

    function renderDate(date) {
        var r = `<tr><td colspan="4" class="color-pink text-left">${date}</td></tr>`;
        $('#contractionRows').append(r);
    }

});
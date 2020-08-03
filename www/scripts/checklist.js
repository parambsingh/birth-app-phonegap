$(function () {
    if (localStorage.getItem("authUser") === null  && !isChrome) {
        window.location.href = "welcome.html";
    }

    setTimeout(function () {
        $('#checklistId').val(localStorage.getItem('currentChecklist'));
        getChecklist();
    }, 500);


    function getChecklist() {
        $('#checklistsSection').html('');
        var id = $(this).attr('data-id');

        $.ajax({
            type: "POST",
            url: SITE_URL + 'checklists/getChecklist/' + localStorage.getItem('currentChecklist'),
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {
                if (resp.code == 200) {
                    $.each(resp.data.checklist.checklist_questions, function (ind, question) {
                        $('#checklistSection').append(renderQuestion(question.question));
                    });

                    getAnswer();
                }
            }
        });
    }

    $('#checklistSection').on('click', '.choose-one-option', function () {
        var qId = $(this).attr('data-question');
        var oId = $(this).attr('data-option');
        $('.question-' + qId).attr('data-selected', 'no');
        $(this).attr('data-selected', 'yes');
        $('.question-' + qId + '.nna i').removeClass('fa-heart');
        $('.question-' + qId + '.nna i').addClass('fa-heart-o');
        $('.question-' + qId + '.na i').removeClass('fa-times-circle');
        $('.question-' + qId + '.na i').addClass('fa-times-circle-o');


        var newClsss = $(this).hasClass('na') ? 'fa-times-circle' : 'fa-heart';

        $(this).children('i').removeClass(newClsss + '-o');
        $(this).children('i').addClass(newClsss);

        postAnswer(qId, oId, 'yes');

    });

    $('#checklistSection').on('click', '.choose-multiple-option', function () {
        var qId = $(this).attr('data-question');
        var oId = $(this).attr('data-option');
        var ans = 'no';

        if ($(this).attr('data-selected') == 'no') {
            $(this).attr('data-selected', 'yes');
            $('.option-' + oId + ' i').removeClass('fa-square-o');
            $('.option-' + oId + ' i').addClass('fa-check-square');
            ans = 'yes';
        } else {
            $(this).attr('data-selected', 'no');
            $('.option-' + oId + ' i').removeClass('fa-check-square');
            $('.option-' + oId + ' i').addClass('fa-square-o');
        }

        postAnswer(qId, oId, ans);
    });


    function renderQuestion(question) {
        return `<div class="content-boxed bg-light mb-2 pb-4" id="Question_${question.id}">
                <h5 class="pb-1 mb-1">
                    ${question.question}
                </h5>
                 ${question.question_options.map(function (option) {

            if (question.question_type == "Choose One") {
                if ($.trim(option.option_name.toLowerCase()) == "not applicable") {
                    return '<span class="w-100 px-3 choose-one-option na question-' + option.question_id + ' option-' + option.id + '" data-selected="no" data-question="' + option.question_id + '" data-option="' + option.id + '"><i class="fa fa-times-circle-o font-100 color2theme" ></i> Not Applicable</span><br />'
                } else {
                    return '<span class="px-3 w-100 choose-one-option nna question-' + option.question_id + ' option-' + option.id + '" data-selected="no" data-question="' + option.question_id + '" data-option="' + option.id + '"><i class="fa fa-heart-o font-100 color-pink"></i> ' + option.option_name + '</span><br />';
                }
            } else {
                return '<span class="px-3 w-100 choose-multiple-option question-' + option.question_id + ' option-' + option.id + '" data-selected="no" data-question="' + option.question_id + '" data-option="' + option.id + '"><i class="fa fa-square-o font-100 color-pink"></i> ' + option.option_name + '</span><br />';
            }
        }).join("")}
            </div>`;
    }

    function postAnswer(qId, oId, ans) {
        DATA['question_id'] = qId;
        DATA['question_option_id'] = oId;
        DATA['answer'] = ans;
        $.ajax({
            type: "POST",
            url: SITE_URL + 'checklists/answer/' + localStorage.getItem('currentChecklist'),
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {
                if (resp.code == 200) {
                    //Do Something Here
                    $('#completePercentageRange').val(resp.data.complete_percentage);
                    $('#completePercentage, #completePercentage2').html(resp.data.complete_percentage + "%");
                }
            }
        });
    }

    function getAnswer() {
        $.ajax({
            type: "POST",
            url: SITE_URL + 'checklists/getAnswers/' + localStorage.getItem('currentChecklist'),
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {
                if (resp.code == 200) {
                    //Do Something Here
                    $('#completePercentageRange').val(resp.data.complete_percentage);
                    $('#completePercentage, #completePercentage2').html(resp.data.complete_percentage + "%");

                    $.each(resp.data.answers, function (ind, answer) {
                        $('.option-' + answer.question_option_id).click();
                    });
                }
            }
        });
    }


});
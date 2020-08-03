$(function () {
    if (localStorage.getItem("authUser") === null && !isChrome) {
        window.location.href = "welcome.html";
    }

    if (localStorage.getItem('localChecklists') !== null) {

        if (localStorage.getItem('localChecklists') !== null) {
            var localChecklists = localStorage.getItem('localChecklists');
            var checklists = JSON.parse(localChecklists);
            if (checklists.length > 0) {
                var cls = [];
                $.each(checklists, function (ind, checklist) {
                    cls.push(renderChecklist(checklist));
                });

                $('#checklistsSection').html(cls.join(""));
            }
        }

    } else {
        setTimeout(function () {
            getChecklists();
        }, 500);
    }


    function getChecklists() {
        $('#checklistsSection').html('');

        $.ajax({
            type: "POST",
            url: SITE_URL + 'checklists/index',
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {
                if (resp.code == 200) {
                    if (resp.data.checklists.length > 0) {
                        localStorage.setItem('localChecklists', JSON.stringify(resp.data.checklists));
                        var cls = [];
                        $.each(resp.data.checklists, function (ind, checklist) {
                            cls.push(renderChecklist(checklist));
                        });

                        $('#checklistsSection').html(cls.join(""));
                    }
                }
            }
        });
    }

    $('#checklistsSection').on('click', '.open-checklist', function (e) {
        e.preventDefault();
        localStorage.setItem('currentChecklist', $(this).attr('data-id'));
        window.location.href = "checklist.html";
    });

    function renderChecklist(checklist) {
        return `<a href="javascript:void(0);" class="col-6 pl-0 open-checklist" data-id="${checklist.id}">
                    <div class="ml-2 p-3 rounded" style="background: #ffffff">
                        <i class="fa fa-check-circle color-highlight fa-3x mt-4"></i>
                        <h2 class="pt-4 color-pink">${checklist.name}</h2>
                    </div>
                </a>`;
    }
});
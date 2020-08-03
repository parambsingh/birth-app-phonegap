$(function () {
    if (localStorage.getItem("authUser") === null  && !isChrome) {
        window.location.href = "welcome.html";
    }

    getArticle();

    function getArticle() {
        $.ajax({
            type: "POST",
            url: SITE_URL + 'articles/view/' + localStorage.getItem('currentArticle'),
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {

                if (resp.code == 200) {

                    $('#articleSection').html(renderArticle(resp.data.article));

                }
            }
        });
    }


    function renderArticle(article) {
        var image = "graphics/week7.png";
        if (article.image != null) {
            image = FILE_URL + article.image.medium_thumb;
        }

        return `<div class="content mb-0" style="border-bottom: 1px solid #ededed;">
                <div class="row">
                <div class="col-12">
                        <h2>${article.title}</h2>
                        <br />
                   </div>
                    <div class="col-12">
                        <img id="weeklyImage" src="${image}" style=" float: left; width: 100%;">
                    </div>
                    <div class="col-12">
                        <br />
                        <div>${article.content}</div>
                    </div>
                </div>
            </div>`;
    }
});
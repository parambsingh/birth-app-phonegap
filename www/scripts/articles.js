$(function () {
    if (localStorage.getItem("authUser") === null  && !isChrome) {
        window.location.href = "welcome.html";
    }



    if (localStorage.getItem('localArticles') !== null) {
        var localArticles = localStorage.getItem('localArticles');
        var articles = JSON.parse(localArticles);

        var as = [];
        $.each(articles, function (ind, article) {
            as.push(renderArticle(article));
        });

        $('#articlesSection').html(as.join(""));
    } else {
        setTimeout(function () {
            getArticles();
        }, 100);
    }

    function getArticles() {
        DATA['page'] = "articles";
        $.ajax({
            type: "POST",
            url: SITE_URL + 'articles/index',
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {

                if (resp.code == 200) {

                    if (resp.data.articles.length > 0) {

                        localStorage.setItem('localArticles', JSON.stringify(resp.data.articles));
                        var as = [];
                        $.each(resp.data.articles, function (ind, article) {
                            as.push(renderArticle(article));
                        });

                        $('#articlesSection').html(as.join(""));
                    }
                }
            }
        });
    }

    $('#articlesSection').on('click', '.open-article', function (e) {
        e.preventDefault();
        localStorage.setItem('currentArticle', $(this).attr('data-id'));
        window.location.href = "article.html";

    });

    function renderArticle(article) {
        var image = "graphics/week7.png";
        if (article.image != null) {
            image = FILE_URL + article.image.small_thumb;
        }

        return `<div class="content mb-0 open-article" data-id="${article.id}" style="border-bottom: 1px solid #ededed;">
                <div class="row">
                    <div class="col-4">
                        <img id="weeklyImage" src="${image}" style=" float: left; width: 100%;">
                    </div>
                    <div class="col-8">
                        <h4>${article.title}</h4>
                        <p class="color-highlight mt-n2 pt-2 font-14">${article.short_description}</p>
                    </div>
                </div>
            </div>`;
    }
});
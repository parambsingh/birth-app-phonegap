$(function () {
    if (localStorage.getItem("authUser") === null && !isChrome) {
         window.location.href = "welcome.html";
    }

    var dbDataloaded = false;


    if (localStorage.getItem('dashboardData') !== null && localStorage.getItem('dashboardArticles') !== null) {

        if (localStorage.getItem('dashboardData') !== null) {
            var dashboardData = localStorage.getItem('dashboardData');
            var r = JSON.parse(dashboardData);
            if (r.code == 200) {

                if(!dbDataloaded){
                    localStorage.setItem('actualWeek', r.data.actual_week);
                    localStorage.setItem('currentWeek', r.data.actual_week);
                }

                dbDataloaded = true;

                $('#weeks').html(r.data.week);
                $('#days').html(r.data.day);
                $('#fullDay').val(r.data.total_days);

                var ts = [];
                var imagePath = "graphics/week7.png";
                var tagLine = "";
                var trimester = "";
                var babyWeight = 1.0;
                var babySize = 1.0;
                var videos = [];


                if (r.data.tips.length > 0) {
                    $.each(r.data.tips, function (ind, tip) {
                        ts.push(weeklyTips(tip));

                        tagLine = tip.tag_line;
                        trimester = tip.trimester;
                        babyWeight = tip.baby_weight;
                        babySize = tip.baby_size;

                        if (tip.image != null) {
                            imagePath = FILE_URL + tip.image.image;
                        }

                        if (tip.video != null) {
                            videos.push({
                                image: FILE_URL + tip.video.small_thumb,
                                video: FILE_URL + tip.video.video,
                            });
                        }
                    });

                    $('#weeklyTips').html(ts.join(""));

                    $('.tips-slider').owlCarousel({
                        loop: true,
                        margin: 20,
                        nav: false,
                        lazyLoad: true,
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 4e3,
                        //autoHeight:true
                    });

                    $('#weeklyImage').attr('src', imagePath);
                    $('#tagLine').html(tagLine);
                    $('#trimester').html(trimester);
                    $('#babyWeight').html(babyWeight);
                    $('#babySize').html(babySize);
                    $('#weightP, #sizeP').show();
                    $('#alterNateP').html("");

                    if (r.data.week <= 2) {
                        $('#weightP, #sizeP').hide();
                        $('#alterNateP').html("No Baby Yet");
                    }

                    if (r.data.week >= 3 && r.data.week <= 5) {
                        $('#weightP, #sizeP').hide();
                        $('#alterNateP').html("Baby's super tiny");
                    }

                    if (r.data.week >= 6 && r.data.week <= 10) {
                        $('#weightP').hide();
                    }

                }
            }
        }

        if (localStorage.getItem('dashboardArticles') !== null) {
            var dashboardArticles = localStorage.getItem('dashboardArticles');
            var articles = JSON.parse(dashboardArticles);
            if (articles.length > 0) {

                var as = [];
                $.each(articles, function (ind, article) {
                    as.push(renderArticle(article));
                });

                $('#articlesSection').html(as.join(""));

                $('.article-slider').owlCarousel({
                    loop: !0,
                    margin: 20,
                    nav: !1,
                    lazyLoad: !0,
                    items: 1,
                    autoplay: !0,
                    autoplayTimeout: 4e3
                });
            }
        }

    } else {
        loadPageData();
    }

    function getDashboardData() {
        $('#weeklyTips').html('');
        $('.tips-slider').trigger('destroy.owl.carousel');
        $.ajax({
            type: "POST",
            url: SITE_URL + 'users/getDashboardData',
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {

                if (resp.code == 200) {

                    $('#weeks').html(resp.data.week);
                    $('#days').html(resp.data.day);
                    $('#fullDay').val(resp.data.total_days);

                    if(!dbDataloaded){
                        localStorage.setItem('actualWeek', resp.data.actual_week);
                        localStorage.setItem('currentWeek', resp.data.actual_week);
                    } else {
                        localStorage.setItem('actualWeek', resp.data.actual_week);
                        localStorage.setItem('currentWeek', resp.data.week);
                    }

                    dbDataloaded = true;

                    if (resp.data.actual_week == resp.data.week) {
                        localStorage.setItem('dashboardData', JSON.stringify(resp));
                    }


                    var ts = [];
                    var imagePath = "graphics/week7.png";
                    var tagLine = "";
                    var trimester = "";
                    var babyWeight = 1.0;
                    var babySize = 1.0;
                    var videos = [];


                    if (resp.data.tips.length > 0) {
                        $.each(resp.data.tips, function (ind, tip) {
                            ts.push(weeklyTips(tip));

                            trimester = tip.trimester;
                            tagLine = tip.tag_line;
                            babyWeight = tip.baby_weight;
                            babySize = tip.baby_size;

                            if (tip.image != null) {
                                imagePath = FILE_URL + tip.image.image;
                            }

                            if (tip.video != null) {
                                videos.push({
                                    image: FILE_URL + tip.video.small_thumb,
                                    video: FILE_URL + tip.video.video,
                                });
                            }
                        });

                        $('#weeklyTips').html(ts.join(""));

                        $('.tips-slider').owlCarousel({
                            loop: true,
                            margin: 20,
                            nav: false,
                            lazyLoad: true,
                            items: 1,
                            autoplay: true,
                            autoplayTimeout: 4e3,
                            //autoHeight:true
                        });


                        $('#weeklyImage').attr('src', imagePath);
                        $('#tagLine').html(tagLine);
                        $('#trimester').html(trimester);
                        $('#babyWeight').html(babyWeight + " g");
                        $('#babySize').html(babySize);
                        $('#weightP, #sizeP').show();
                        $('#alterNateP').html("");

                        if (resp.data.week <= 2) {
                            $('#weightP, #sizeP').hide();
                            $('#alterNateP').html("No Baby Yet");
                        }

                        if (resp.data.week >= 3 && resp.data.week <= 5) {
                            $('#weightP, #sizeP').hide();
                            $('#alterNateP').html("Baby's super tiny");
                        }

                        if (resp.data.week >= 6 && resp.data.week <= 10) {
                            $('#weightP').hide();
                        }

                        if (resp.data.week >= 25) {
                            $('#babyWeight').html((parseFloat(babyWeight) / 1000) + " kg");
                        }
                    }
                }
            }
        });
    }

    function weeklyTips(tip) {
        return `<div class="item"><h5 class="mt-3 mb-2 color-pink">${tip.title}</h5>
                <p class="mt-1 short-${tip.id}">${tip.short_content} <span data-id="${tip.id}" class="show-more color-pink" style="cursor: pointer">show more</span></p>
                <p class="mt-1 full-${tip.id} hide">${tip.content} <span data-id="${tip.id}" class="show-less color-pink" style="cursor: pointer">show less</span></p>
            </div>`;
    }

    $('#weeklyTips').on('click', '.show-more', function () {
       var id = $(this).attr('data-id');

       console.log(id);

       $('.short-'+id).hide();
       $('.full-'+id).show();

    });



    $('#weeklyTips').on('click', '.show-less', function () {
        var id = $(this).attr('data-id');

        console.log(id);

        $('.full-'+id).hide();
        $('.short-'+id).show();

    });


    function getArticles() {
        $('#articlesSection').html('');
        $('.article-slider').trigger('destroy.owl.carousel');
        DATA['page'] = "dashboard";
        $.ajax({
            type: "POST",
            url: SITE_URL + 'articles/index',
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {
                if (resp.code == 200) {
                    if (resp.data.articles.length > 0) {
                        localStorage.setItem('dashboardArticles', JSON.stringify(resp.data.articles));
                        var as = [];
                        $.each(resp.data.articles, function (ind, article) {
                            as.push(renderArticle(article));
                        });

                        $('#articlesSection').html(as.join(""));

                        $('.article-slider').owlCarousel({
                            loop: !0,
                            margin: 20,
                            nav: !1,
                            lazyLoad: !0,
                            items: 1,
                            autoplay: !0,
                            autoplayTimeout: 4e3
                        });
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
            image = FILE_URL + article.image.medium_thumb;
        }

        return `<div class="open-article" data-id="${article.id}" style="border-bottom: 1px solid #ededed;">
                <div class="row">
                    <div class="col-4" style="padding-left: 0px !important; ">
                        <img id="weeklyImage" src="${image}" style=" float: left; width: 100%;">
                    </div>
                    <div class="col-8" style="padding-right: 0px !important;padding-left: 0px !important;">
                        <h4>${article.title}</h4>
                        <p class="color-highlight mt-n2 pt-2 font-14">${article.short_description}</p>
                    </div>
                </div>
            </div>`;
    }

    function loadPageData(weeks) {

        DATA['weeks'] = typeof weeks == "undefined" ? 0 : weeks;

        setTimeout(function () {
            getDashboardData();
        }, 100);

        setTimeout(function () {
            getArticles();
        }, 500);
    }

    $('#previousWeek').click(function () {
        var currentWeek = localStorage.getItem('currentWeek');
        currentWeek = parseInt(currentWeek);

        if (currentWeek > 1) {
            currentWeek = currentWeek - 1;

            loadPageData(currentWeek);
            $('#previousWeek, #nexWeek').css('opacity', '1');
        }

        if (currentWeek == 1) {
            $('#previousWeek').css('opacity', '0.5');
        }
    });

    $('#nexWeek').click(function () {
        var currentWeek = localStorage.getItem('currentWeek');
        currentWeek = parseInt(currentWeek);

        if (currentWeek < 42) {
            currentWeek = currentWeek + 1;
            loadPageData(currentWeek);
            $('#nexWeek, #previousWeek').css('opacity', '1');
        }

        if (currentWeek == 42) {
            $('#nexWeek').css('opacity', '0.5');
        }
    });
});
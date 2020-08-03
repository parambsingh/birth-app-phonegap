// CONSTANTS

//var SITE_URL = "http://192.168.43.105/birth-app-api/api/";
//var FILE_URL = "http://192.168.43.105/birth-app-api/";
//   var SITE_URL = "http://mama.strategiclight.com/api/";
//   var FILE_URL = "http://mama.strategiclight.com/";

var SITE_URL = "http://portal.myseasonbirthapp.com/api/";
var FILE_URL = "http://portal.myseasonbirthapp.com/";

var TOKEN = "satwindersingh";

var isChrome = false;


var authUser = {
    email: "",
    due_date: "",
};

var DEVICE_ID = "default"

var DATA = {
    "Authorization": TOKEN,
    "email": authUser.email,
    "device_id": DEVICE_ID
};


function cl(a) {
    console.log(a);
}

$(function () {

    //isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (localStorage.getItem('authUser') !== null) {
        authUser = JSON.parse(localStorage.getItem('authUser'));
        DATA.email = authUser.email;
    }

    if (localStorage.getItem('deviceId') !== null) {
        DATA.device_id = localStorage.getItem('deviceId');
        authUser.device_id = localStorage.getItem('deviceId');
    }


    // $.ajaxSetup({
    //    headers: {
    //        "Authorization": TOKEN + '_' + authUser.email + '_' + authUser.device_id,
    //    }
    // });
    //
    $.ajaxSetup({
        beforeSend: function () {
            $('body').append('<div id="globalLoader"><h3>Loading...<i class="fa fa-spin fas fa-asterisk"></i></h3></div>');
        },
        complete: function () {
            $('#globalLoader').remove();
        }
    });


    setTimeout(function () {
        $('div[data-include]').each(function () {
            $(this).load('ele/' + $(this).attr('data-include') + '.html').trigger('create');
        });


    }, 300);

    $('body').click(function () {
        if ($('.menu-box-bottom').hasClass('menu-active')) {
            $('.menu-box-bottom').removeClass('menu-active');
            $('#footer-bar').removeClass('footer-menu-hidden');
            $('body').removeClass('modal-open');
        }
    });

    $('div[include-preloader]').each(function () {
        $(this).load('ele/' + $(this).attr('include-preloader') + '.html').trigger('create');
        // setTimeout(function () {
        //     $('#preloader').hide();
        //     $('#page').fadeIn();
        // }, 300);
    });

    $('#userLogout').click(function (e) {
        e.preventDefault();

        var localKeys = [
            'authUser',
            'actualWeek',
            'currentWeek',
            'dashboardData',
            'dashboardArticles',
            'localArticles',
            'currentArticle',
            'localChecklists',
            'currentChecklist',
            'forgotToken',
            'forgotEmail',
            'galleryImages',
            'profile',
        ];

        $.each(localKeys, function (ind, localKey) {
            if (localStorage.getItem(localKey) != null) {
                localStorage.removeItem(localKey);
            }
        });

        history.go(-(history.length - 1));

        window.location.href = "welcome.html";

    });

});

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        // cordova.plugins.firebase.messaging.onMessage(function (payload) {
        //     alert("New foreground FCM message: " + JSON.stringify(payload));
        // });
        //
        // cordova.plugins.firebase.messaging.onBackgroundMessage(function (payload) {
        //     alert("New background FCM message: " + payload);
        // });
        //
        // cordova.plugins.firebase.messaging.getInstanceId().then(function (instanceId) {
        //     alert("Got instanceId: " + instanceId);
        // });
        //
        // cordova.plugins.firebase.messaging.getToken().then(function (token) {
        //     //alert("Got device token: "+ token);
        //
        //     authUser.device_id = token;
        // });

        DEVICE_ID = device.uuid;
        DATA.device_id = DEVICE_ID;
        localStorage.setItem('deviceId', DEVICE_ID);
        var current_path = window.location.pathname.split('/').pop();

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


function getFormData(formId) {
    DATA.device_id = localStorage.getItem('deviceId');

    var unindexedArray = $('#' + formId).serializeArray();


    $.map(unindexedArray, function (n, i) {
        DATA[n['name']] = n['value'];
    });

    //console.log(DATA);

    return DATA;
}


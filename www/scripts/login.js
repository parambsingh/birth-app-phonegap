$(function () {

    if (localStorage.getItem("authUser") !== null) {
        window.location.href = "dashboard.html";
    }

    $('#deviceId').val(localStorage.getItem('deviceId'));


    $.validator.addMethod("validEmail", function (value) {
        return /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value)
    }, "Please enter valid email.");

    $('#loginForm').validate({
        rules: {
            email: {
                required: true,
                validEmail: true,
            },
            password: {
                required: true,
            },
        },
        messages: {
            email: {
                required: "Please enter email.",
                validEmail: "Please enter valid email.",
            },
            password: {
                required: "Please enter password.",
            },
        },
        submitHandler: function (form) {
            $('#loginErrorMsg').hide();
            $.ajax({
                type: "POST",
                url: SITE_URL + 'users/login',
                crossDomain: true,
                data: getFormData('loginForm'),
                dataType: "json",
                success: function (resp) {
                    if (resp.code == 200) {
                        localStorage.setItem("authUser", JSON.stringify(resp.data.user));
                        window.location.href = "dashboard.html";
                    } else {
                        $('#loginErrorMsg').html(resp.message);
                        $('#loginErrorMsg').show();
                    }
                }
            });
            return false;
        }
    });

});
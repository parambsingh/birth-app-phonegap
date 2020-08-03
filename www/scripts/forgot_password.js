$(function () {

    if (localStorage.getItem("authUser") !== null) {
        window.location.href = "dashboard.html";
    }


    $.validator.addMethod("pwcheck", function (value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value) // consists of only these
            &&
            /[A-Z]/.test(value) // has a uppercase letter
            &&
            /\d/.test(value); // has a digit
    }, "Password must contain atleast one capital character and one numeric.");

    $.validator.addMethod("validEmail", function (value) {
        return /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value)
    }, "Please enter valid email.");

    $('#forgotPasswordForm').validate({
        rules: {
            email: {
                required: true,
                validEmail: true
            }
        },
        messages: {
            email: {
                required: "Please enter email.",
                validEmail: "Please enter valid email."
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: SITE_URL + 'users/forgotPassword',
                crossDomain: true,
                data: getFormData('forgotPasswordForm'),
                dataType: "json",
                success: function (resp) {
                    localStorage.setItem("forgotToken", JSON.stringify(resp.data.token));
                    localStorage.setItem("forgotEmail", JSON.stringify(resp.data.email));

                    $('#resetToken').val(resp.data.token);
                    $('#resetEmail').val(resp.data.email);

                    $('#forgotPasswordSection, #resetPasswordSection').hide();
                    $('#matchTokenSection').fadeIn();
                }
            });
            return false;
        }
    });

    $('#matchTokenForm').validate({
        rules: {
            token: {
                required: true,
                maxlength: 6,
                minlength: 6,
            }
        },
        messages: {
            token: {
                required: "Please enter email.",
                maxlength: "Token must be equal to 6 characters.",
                minlength: "Token must be equal to 6 characters."
            }
        },
        submitHandler: function (form) {

            $('#incorrectToken').hide();
            if (localStorage.getItem("forgotToken") == $('#Token').val()) {
                $('#forgotPasswordSection,#matchTokenSection').hide();
                $('#resetPasswordSection').fadeIn();
            } else {
                $('#incorrectToken').show();
            }

            return false;
        }
    });

    $('#resetPasswordForm').validate({
        rules: {
            password: {
                required: true,
                minlength: 8,
                pwcheck: true
            },
            confirm_password: {
                required: true,
                equalTo: "#Password"
            },
        },
        messages: {
            password: {
                required: "Please enter password.",
                minlength: "Password must be greater than 8 characters",
                pwcheck: "Password must contain atleast one capital character and one numeric."
            },
            confirm_password: {
                required: "Please confirm password.",
                equalTo: "Password does not match."
            },
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: SITE_URL + 'users/resetPassword',
                crossDomain: true,
                data: getFormData('resetPasswordForm'),
                dataType: "json",
                success: function (resp) {
                    $('#resetPasswordError').hide();
                    if (resp.code == 200) {
                        window.location.href = "login.html";
                    } else {
                        $('#resetPasswordError').html(resp.message);
                        $('#resetPasswordError').show();
                    }
                }
            });
            return false;
        }
    });
});


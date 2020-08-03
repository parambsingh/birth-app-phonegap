$(function () {

    if (localStorage.getItem("authUser") !== null) {
        window.location.href = "dashboard.html";
    }


    $('#deviceId').val(localStorage.getItem('deviceId'));


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

    $('#registerFrom').validate({
        rules: {
            email: {
                required: true,
                validEmail: true,
                remote: {
                    url: SITE_URL + 'users/isUniqueEmail',
                    type: "POST",
                    data: {
                        Authorization: TOKEN,
                        device_id: DEVICE_ID,
                        email: function () {
                            return $("#Email").val();
                        }
                    }
                },
            },
            password: {
                required: true,
                minlength: 8,
                pwcheck: true
            },
        },
        messages:
            {
                email: {
                    required: "Please enter email.",
                    validEmail: "Please enter valid email.",
                    remote: "Email already exists"
                }
                ,
                password: {
                    required: "Please enter password.",
                    minlength: "Password must be greater than 8 characters",
                    pwcheck: "Password must contain one capital character and one numeric."
                }
                ,
            }
        ,
        invalidHandler: function (event, validator) {
            if ($('#iAgreeInput').val() == 0) {
                $('#iAgreeError').show();
            } else {
                $('#iAgreeError').hide();
            }
        }
        ,
        submitHandler: function (form) {
            var error = true;
            if ($('#iAgreeInput').val() == 0) {
                $('#iAgreeError').show();
            } else {
                error = false;
                $('#iAgreeError').hide();
            }
            if (!error) {


                $.ajax({
                    type: "POST",
                    url: SITE_URL + 'users/add',
                    crossDomain: true,
                    data: getFormData('registerFrom'),
                    dataType: "json",
                    success: function (resp) {
                        if (resp.code == 200) {
                            localStorage.setItem("authUser", JSON.stringify(resp.data.user));
                            window.location.href = "due_date.html";
                        } else {
                            $('#registerErrorMsg').html(resp.message);
                            $('#registerErrorMsg').show();
                        }

                    }
                });
                return false;
            }
        }
    });

    $('#iAgreeCheckBox, #iAgree').click(function (e) {
        e.preventDefault();

        if ($('#iAgreeCheckBox').hasClass('fa-heart-o')) {

            $('#iAgreeInput').val(1);

            $('#iAgreeCheckBox').removeClass('fa-heart-o');
            $('#iAgreeCheckBox').addClass('fa-heart');

        } else {

            $('#iAgreeInput').val(0);

            $('#iAgreeCheckBox').removeClass('fa-heart');
            $('#iAgreeCheckBox').addClass('fa-heart-o');

        }
    });
})
;
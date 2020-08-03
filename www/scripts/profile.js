$(function () {

    if (localStorage.getItem("authUser") === null && !isChrome) {
        window.location.href = "welcome.html";
    }


    if (localStorage.getItem("profile") !== null) {
        var profileData = localStorage.getItem('profile');
        var profile = JSON.parse(profileData);

        $('#firstName').val(profile.first_name);
        $('#lastName').val(profile.last_name);
        $('#gender').val(profile.spouse_gender);
        $('#spouseName').val(profile.spouse_name);

        $('#gender').change();
    } else {
        $('#firstName').val(authUser.first_name);
        $('#lastName').val(authUser.last_name);
        $('#gender').val(authUser.spouse_gender);
        $('#spouseName').val(authUser.spouse_name);

        $('#gender').change();
    }


    $.validator.addMethod("pwcheck", function (value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(value) // consists of only these
            &&
            /[A-Z]/.test(value) // has a uppercase letter
            &&
            /\d/.test(value); // has a digit
    }, "Password must contain atleast one capital character and one numeric.");

    $('#Email').val(authUser.email);


    $('#profileFrom').validate({
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            spouse_name: {
                required: true
            },
            spouse_gender: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages:
            {
                first_name: {
                    required: "Please enter first name."
                },
                last_name: {
                    required: "Please enter last name."
                },
                spouse_name: {
                    required: "Please enter spouse name."
                },
                spouse_gender: {
                    required: "Please select spouse gender."
                },
                email: {
                    required: "Please enter email.",
                    email: "Please enter valid email.",
                },

            },
        submitHandler: function (form) {

            $.ajax({
                type: "POST",
                url: SITE_URL + 'users/profile',
                crossDomain: true,
                data: getFormData('profileFrom'),
                dataType: "json",
                success: function (resp) {
                    localStorage.setItem("profile", JSON.stringify(resp.data.profile));
                }
            });
            return false;
        }

    });

})
;
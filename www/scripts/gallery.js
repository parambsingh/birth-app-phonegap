function getImage() {
    navigator.camera.getPicture(uploadAlbumPhoto, onError, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
    });
}

function capturePhoto() {
    navigator.camera.getPicture(uploadCameraPhoto, onError, {
        quality: 50,
        destinationType: navigator.camera.DestinationType.DATA_URL
    });
}

function capturePhotoEdit() {
    navigator.camera.getPicture(uploadCameraPhoto, onError, {
        quality: 20,
        allowEdit: true,
        destinationType: navigator.camera.DestinationType.DATA_URL
    });
}

function onError(err) {
    console.log(err);
}

function uploadAlbumPhoto(imageURI) {


    getFileContentAsBase64(imageURI,function(base64Image){
        //window.open(base64Image);
        var mimeArray = base64Image.split(",")[0];
        var imageData = base64Image.split(",")[1];

        var mimeA = mimeArray.split(";")[0];

        var mimeType = mimeA.replace("data:", "", mimeA);

        DATA['mime_type'] = mimeType;
        DATA['image_data'] = imageData;

        $.ajax({
            type: "POST",
            url: SITE_URL + "userDiaries/create",
            crossDomain: true,
            dataType: "json",
            data: DATA,
            success: function (resp) {
                if (resp.code == 200) {
                    var smallImage = document.getElementById('selectedImage');
                    smallImage.style.display = 'block';
                    smallImage.src = "data:image/jpeg;base64," + imageData;

                    $('#userDiaryId').val(resp.data.userDiary.id);

                    $('#imagesSection, #captureImageSection').hide();
                    $('#uploadImageSection').fadeIn();
                }
            }
        });
        // Then you'll be able to handle the myimage.png file as base64
    });

    // return false;
    //
    // var options = new FileUploadOptions();
    // options.fileKey = "file";
    // options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    // options.mimeType = TOKEN + "__" + DATA['email'] + "__" + DEVICE_ID;
    // //options.headers = {'Auth-Token': TOKEN + "__" + DATA['email'] + "__" + DEVICE_ID};
    //
    // console.log(imageURI); return false;
    // console.log(options);
    // var ft = new FileTransfer();
    // ft.upload(imageURI, encodeURI(SITE_URL + "userDiaries/upload"),
    //     function (result) {
    //         console.log(result);
    //         console.log(JSON.stringify(result));
    //         var resp = JSON.parse(result.response);
    //         console.log(JSON.parse(result.response));
    //         var smallImage = document.getElementById('selectedImage');
    //         smallImage.style.display = 'block';
    //         smallImage.src = imageURI;
    //         $('#userDiaryId').val(resp.data.userDiary.id);
    //
    //         $('#imagesSection').hide();
    //         $('#uploadImageSection').fadeIn();
    //     },
    //     function (error) {
    //         console.log("error");
    //         console.log(error);
    //         console.log(JSON.stringify(error));
    //     }, options);
}

/**
 * This function will handle the conversion from a file to base64 format
 *
 * @path string
 * @callback function receives as first parameter the content of the image
 */
function getFileContentAsBase64(path,callback){
    window.resolveLocalFileSystemURL(path, gotFile, fail);

    function fail(e) {
        alert('Cannot found requested file');
    }

    function gotFile(fileEntry) {
        fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
                var content = this.result;
                callback(content);
            };
            // The most important point, use the readAsDatURL Method from the file plugin
            reader.readAsDataURL(file);
        });
    }
}

function uploadCameraPhoto(imageData) {

    DATA['mime_type'] = "image/jpeg";
    DATA['image_data'] = imageData;

    $.ajax({
        type: "POST",
        url: SITE_URL + "userDiaries/create",
        crossDomain: true,
        dataType: "json",
        data: DATA,
        success: function (resp) {
            if (resp.code == 200) {

                var smallImage = document.getElementById('selectedImage');
                smallImage.style.display = 'block';
                smallImage.src = "data:image/jpeg;base64," + imageData;

                $('#userDiaryId').val(resp.data.userDiary.id);

                $('#imagesSection, #captureImageSection').hide();
                $('#uploadImageSection').fadeIn();
            }
        }
    });
}

function getImages() {
    $.ajax({
        type: "POST",
        url: SITE_URL + "userDiaries/getImages",
        crossDomain: true,
        dataType: "json",
        data: DATA,
        success: function (resp) {

            if (resp.code == 200) {

                localStorage.setItem('galleryImages', JSON.stringify(resp.data.images));

                if (resp.data.images.length > 0) {
                    $.each(resp.data.images, function (ind, image) {
                        $('#imagesSection').append(renderImage(image));
                    });
                } else {
                    $('#uploadImageSection, #imagesSection').hide();
                    $('#captureImageSection').fadeIn();
                }
            } else {
                $('#uploadImageSection, #imagesSection').hide();
                $('#captureImageSection').fadeIn();
            }
        }
    });
}

function renderImage(image) {
    return `<a class="col" data-lightbox="gallery-1" href="${FILE_URL + image.image.image}" title="IDS">
                        <img src="${FILE_URL + image.image.small_thumb}" data-src="${FILE_URL + image.image.medium_thumb}"
                             class="preload-img img-fluid rounded-xs" alt="img">
                        <p class="font-600 pb-1">${image.note}</p>
                    </a>`;
}


$(function () {

    if (localStorage.getItem("authUser") === null) {
        // window.location.href = "welcome.html";
    }

    if (localStorage.getItem('galleryImages') !== null) {
        var galleryImages = localStorage.getItem('galleryImages');
        var images = JSON.parse(galleryImages);
        if (images.length > 0) {
            $.each(images, function (ind, image) {
                $('#imagesSection').append(renderImage(image));
            });
        } else {
            $('#uploadImageSection, #imagesSection').hide();
            $('#captureImageSection').fadeIn();
        }
    } else {
        setTimeout(function () {
            getImages();
        }, 500);
    }

    $('#SaveImage').click(function (e) {
        e.preventDefault();

        $('#noteError').hide();

        if ($('#Note').val().length <= 0) {
            $('#noteError').show();
        } else {
            DATA['user_diary_id'] = $('#userDiaryId').val();
            DATA['note'] = $('#Note').val();

            $.ajax({
                type: "POST",
                url: SITE_URL + "userDiaries/saveImage",
                crossDomain: true,
                dataType: "json",
                data: DATA,
                success: function (resp) {
                    if (resp.code == 200) {
                        $('#uploadImageSection').hide();
                        $('#imagesSection').html("");
                        getImages();
                        $('#imagesSection').fadeIn();
                        $('#Note').val("");

                    }
                }
            });
        }

    });
});


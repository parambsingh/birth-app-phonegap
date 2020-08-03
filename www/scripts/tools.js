$(function () {
    if (localStorage.getItem("authUser") === null && !isChrome) {
        window.location.href = "welcome.html";
    }
});
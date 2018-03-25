$(document).ready(function () {
    $("button").click(function () {
        $("#btn-group").find(".selected").removeClass("selected");
        $(this).addClass("selected");
    });
});
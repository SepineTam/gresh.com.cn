$(document).ready(function loadComponent(name, path) {
    $("#" + name).load(path); // 确保路径正确
    // $("#carousel").load("components/carousel.html"); // 确保路径正确
});

$(document).ready(function () {
    $("#navbar").load("components/navbar.html"); // 确保路径正确
});
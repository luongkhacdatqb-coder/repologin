$(document).ready(function() {
    $('#eye').click(function() {
        let passwordField = $(this).parent().find('input');
        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            $(this).find('i').removeClass('far fa-eye').addClass('far fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            $(this).find('i').removeClass('far fa-eye-slash').addClass('far fa-eye');
        }
    });
    $('form').submit(function(e) {
        e.preventDefault();
        window.location.href = "News.html"; 
    });
});
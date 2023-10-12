$(document).ready(function() {
    var imgLinks = ['cape.jpg', 'greece.avif', 'japan.jpeg', 'nairobi.avif', 'somalia.jpg'];

    $('#btn1').on('click', function() {
        imgLinks.forEach(function() {
            $(this).fadeIn(1000);
        });
    });

    $('#btn2').on('click', function() {
        imgLinks.forEach(function() {
            $(this).fadeOut(1000);
        });
    });
});


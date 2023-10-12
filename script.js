$(document).ready(function() {
    var imgLinks = ['images/cape.jpg', 'images/greece.avif', 'images/japan.jpeg', 'images/nairobi.avif', 'images/somalia.jpg'];


    var currentIndex = 0;
    $('#btn1').click(function(){
        currentIndex = (currentIndex + 1) % imgLinks.length;
        console.log(currentIndex);
        const nextImage = imgLinks[currentIndex];
        console.log('this is the next image', nextImage);
    
        $('#carouselImage').fadeOut(function(){
            $(this).attr('src', nextImage).fadeIn();
        });
    });
    
    $('#btn2').click(function(){
        currentIndex = (currentIndex - 1 + imgLinks.length)% imgLinks.length
        const prevImage = imgLinks[currentIndex];
        $('#carouselImage').fadeOut(function(){
            $(this).attr('src', prevImage).fadeIn();

        })
    })
})

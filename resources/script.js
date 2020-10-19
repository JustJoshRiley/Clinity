//to fade in elements with css
let fade_list = $(".fade")

$(document).scroll(function() {
    console.log("scroll")
    //loop through the list
    $.each(fade_list, function() {
        //get scroll position
        let scrollP = $(document).scrollTop();
        // $(this).css("background", "rgba(" + scrollP % 255 + ",0,0)")
        console.log(scrollP)
        //distance for each element 
        let distance = ($(this).offset().top + $(this).height()) - (scrollP + $(window).height())
        $(this).css("opacity", 1 - (distance / 600))
    });
});

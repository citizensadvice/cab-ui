// Collapsible tables
$(document).ready(function() {
    $('.table-collapse--toggle').click(function(){
        $(this).toggleClass("active");
        $(this).next().toggle();
    });
});
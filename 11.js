$(window).bind('load', function(){
    $().prepare_slider();
    $('#slider_list > li').over();
    var slider_link = $('.slider .box-right a');
    var slider_link_index = 1;
    var slider_count = $('#slider_list > li').size();
    function slider_intro(){
        slider_link.trigger('click');
        slider_link_index++;
        setTimeout(function(){slider_intro()}, 2000);
        }
    setTimeout(function(){slider_intro()}, 2000)
});
function show_Object(name) {
  document.getElementById(name).className = 'show';
}
function hide_Object(name) {
  document.getElementById(name).className = 'hide';
}

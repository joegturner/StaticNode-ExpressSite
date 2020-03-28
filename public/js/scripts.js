$(document).foundation()

/** jQuery animation on project cover photos **/
const $links = $('.link');
const resize_value = 10;
$($links).on('mouseenter', function() {
    $(this).animate({ width: `+=${resize_value}`, height: `+=${resize_value}` }, 'fast');
});
$($links).on('mouseleave', function() {
    $(this).animate({ width: `-=${resize_value}`, height: `-=${resize_value}` }, 'slow');
});
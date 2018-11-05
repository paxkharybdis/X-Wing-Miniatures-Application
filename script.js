// Your original element
var ele = $('#selector');
var mdv = $('#movediv');

$('#selector').draggable({});
$('#movediv').draggable({});


// Create handle
$('<div></div>').appendTo(ele).attr('id','handle').css({
    'position': 'absolute',
    'top': 5,
    'left': 5,
    'height': 20,
    'width': 20,
    'background-color': 'orange'
});
$('<div></div>').appendTo(ele).attr('id','handleb').css({
    'position': 'absolute',
    'top': 5,
    'right': 5,
    'height': 20,
    'width': 20,
    'background-color': 'orange'
});
$('<div></div>').appendTo(ele).attr('id','handlec').css({
    'position': 'absolute',
    'bottom': 5,
    'left': 5,
    'height': 20,
    'width': 20,
    'background-color': 'orange'
});


$('#handle').draggable({
    handle: '#handle',
    opacity: 0.01, 
    helper: 'clone',
    drag: function(event, ui){
        var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

        $(this).parent().css({
            '-moz-transform': rotateCSS,
            '-webkit-transform': rotateCSS
        });
    }
});
$('#handleb').draggable({
    handle: '#handleb',
    opacity: 0.01, 
    helper: 'clone',
    drag: function(event, ui){
        var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

        $(this).parent().css({
            '-moz-transform': rotateCSS,
            '-webkit-transform': rotateCSS
        });
    }
});
$('#handlec').draggable({
    handle: '#handlec',
    opacity: 0.01, 
    helper: 'clone',
    drag: function(event, ui){
        var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

        $(this).parent().css({
            '-moz-transform': rotateCSS,
            '-webkit-transform': rotateCSS
        });
    }
});

// Call the following DIV draggable
ele.css('position', 'relative');
mdv.css('position', 'relative');

// Button toggle.
$('#toggle1').click(function() {
    $('#1movepic').toggle();
});
$('#toggle2').click(function() {
    $('#2movepic').toggle();
}); 
$('#toggle3').click(function() {
    $('#3movepic').toggle();
}); 
$('#toggle4').click(function() {
    $('#4movepic').toggle();
});
$('#toggle5').click(function() {
    $('#5movepic').toggle();
});
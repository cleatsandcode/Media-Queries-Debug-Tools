/*

 Javascript for debug media queries - by cleatsandcode
 
 This requires Jquery loaded before this script. Toggle the visiblity of the info using the "t" key.
 
 Inspired by Johan Brook's css
 
 Enjoy!
 
 */

$('body').prepend("<div id='viewportInfo'><div id='sizeInfo'></div></div>");
$('#sizeInfo').text('Viewport (Width : '
                + $(window).width() + ' , Height :' + $(window).height() + ' )');
    $(window).resize(function () {
		$('#sizeInfo').text('Viewport (Width : ' + $(window).width() 
                                 + ' , Height :' + $(window).height() + ' )');
    });
$(document).keydown(function (e) {
    if (e.keyCode == 84 ) {
         $("#viewportInfo").toggle();
    }
});

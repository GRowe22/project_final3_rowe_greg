//responsive menu - slimmenu
$('#navigation').slimmenu(
    {
        resizeWidth: '800',
        collapserTitle: '',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });

//Sticky Element
$(document).ready(function () {
    $('#sticker').sticky({topSpacing: 0});
});

//Custom jQuery to change h1 colors when clicked
$('h1').click(function () {
    $('h1').css('color', '#ee582b');
});

//Custom JavaScript to add content when h1 clicked
var heading = document.getElementById('click-h1');

function addElement() {
    var paragraph = document.createElement('p');
    var node = document.createTextNode('We are awesome!');
    paragraph.appendChild(node);
    var element = document.getElementById('click-h1');
    element.appendChild(paragraph);
}

heading.addEventListener('click', addElement);

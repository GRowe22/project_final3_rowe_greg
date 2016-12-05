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

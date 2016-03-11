/**
 * Created by Valentino on 11.3.2016..
 */
(function(yourcode) {

    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    $(function() {

        var container = $('#holder'),
            target = $(this).find('[data-target]');

        container.on('click', 'button', function(e){
            target.hide();
        })

    });

}));

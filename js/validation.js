(function(yourcode) {

    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    $(function() {

        /**
         * Setting css components for input elements whose validation fails
         * and removes them when they succeed
         */
        $.validator.setDefaults({
            errorPlacement: function(error, element) {
                //console.log(error);
            },
            highlight: function(element){
                $(element).addClass("error-highlight");
            },
            unhighlight: function(element){
                $(element).removeClass("error-highlight");
            }
        });

        var form = $('#emailForm');

        /**
         * Sets event handler on button click to show error message if validation fails
         * or success message if it succeed
         */
        form.on('click', 'button', function(){
            form.validate({
                invalidHandler: function(e, validator){
                    var errors = validator.numberOfInvalids();
                    if(errors){
                        $('.success-message').hide();
                        $('.error-message').show();
                    }
                    else{
                        $('.error-message').hide();
                        $('.success-message').show();
                    }
                },
                submitHandler: function(){
                    $('.error-message').hide();
                    $('.success-message').show();
                }
            });
        });

    });

}));
/**
 * Created by Valentino on 11.3.2016..
 */
// Best practice poziv funkcije
(function(yourcode) {

    yourcode(window, document);

}(function(window, document) {

    /**
     * Adds evenet listener of type {{type}} to object {{obj}}
     * and callback {{func}} to that event
     *
     *
     * @param {Object} obj
     * @param {string} type
     * @param {function} func
     */
    function addEvent(obj, type, func) {
        if (obj.addEventListener)
            obj.addEventListener(type, func, false);
        else if (obj.attachEvent)
            obj.attachEvent('on' + type, function() { return func.apply(obj, [window.event]);});
    }

    // DOM manipulacija nakon što su se svi elementi load-ali.
    addEvent(window, 'load', function(){
        var anchors = document.querySelectorAll('a');
        var buttons = document.querySelectorAll('button');
        var inputs = document.querySelectorAll('input');

        // Ako treba uloviti apsolutno sve moguće click-ove na bilo koji element
        // onda bi stavio donju liniju kao all i pretvorio u array te registrirao evente.

        //var all = document.body.querySelectorAll('*');



        //region Pretvorba objekata u array-e

        var anchorsArray = Object.keys(anchors).map(function(key){
            return anchors[key];
        });

        var buttonsArray = Object.keys(buttons).map(function(key){
            return buttons[key];
        });

        var inputsArray = Object.keys(inputs).map(function(key){
            if(inputs[key].type === 'submit'){
                return inputs[key];
            }
        });

        //endregion

        // Spajanje svih array-a u jedan globalni za sve elemente koje ima smisla click-at
        var all = anchorsArray.concat(buttonsArray, inputsArray);

        // Registriranje evenata na elemente
        for(var i = 0; i < all.length; i++){
            if(all[i]){
                addEvent(all[i], 'click', function(e){
                    alert('I clicked ' + e.srcElement.id);
                })
            }
        }


    });

}));

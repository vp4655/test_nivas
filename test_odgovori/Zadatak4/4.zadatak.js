/**
 * Created by Valentino on 11.3.2016..
 */
// Best practice poziv funkcije
(function(yourcode) {

    yourcode(window, document);

}(function(window, document) {

    var button = document.getElementById('prvi_button'); // dohvatimo button

    // Dodavanje listener-a na button
    button.addEventListener('click', function(){

        // Dohvat <p>-a za odgovor i vrijednosti u input-u
        var input = document.getElementById('broj');
        var resultLabel = document.getElementById('odgovor');

        if(input.value){
            // Ako smo unjeli vrijednost provjera
            resultLabel.style.display = 'none';
            resultLabel.innerHTML = reverseString(input.value);
            resultLabel.style.display = 'block';
        }
        else{
            resultLabel.innerHTML = 'Niste unjeli riječ!';
            resultLabel.style.display = 'block';
        }
    });

    /**
     * Reverse order of string {{str}} and returns it in {{result}}
     *
     * @param {string} str
     * @returns {string} result
     */
    function reverseString(str){

        var result = '';
        var index = str.length;
        while (index--) {
            result += str.charAt(index);
        }
        return result;
    }

}));

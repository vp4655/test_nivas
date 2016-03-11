/**
 * Created by Valentino on 11.3.2016..
 */
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
            if(checkPrime(input.value)){
                resultLabel.innerHTML = 'Broj je prost!';
                resultLabel.style.display = 'block';
            }
            else{
                resultLabel.innerHTML = 'Nije prost broj :(';
                resultLabel.style.display = 'block';
            }
        }
        else{
            resultLabel.innerHTML = 'Niste unjeli broj!';
            resultLabel.style.display = 'block';
        }
    });

    /**
     * Check if the number {{num}} is prime and
     * returns true if it is, and false otherwise
     *
     * @param {Number} num
     * @returns {boolean}
     */
    function checkPrime(num){
        for(var i = 2; i <= Math.sqrt(num); ++i){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }

}));

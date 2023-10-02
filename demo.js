(function ($) {
    $(document).ready( () => {

        // Do something when DOM is ready
    
        let currentColor = 'white'; // have to define as a semi-global var
        $('#btnDemo').click( () => {
            if (currentColor === 'white') {
                currentColor = 'blue';
            } else {
                currentColor = 'white';
            }
    
            $('#header').css('background-color', currentColor);
            $('#header').text('Class Demo - ' + currentColor);
        })
    });
}) (jQuery);
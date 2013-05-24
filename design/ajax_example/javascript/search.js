$( document ).ready(
    function() {
        bindModuleView()
    }
)

function bindModuleView() {
    $( '.search' ).click(
        function() {
            var url = '/ajax_example/ajax/search'
            var q = $( '.text' ).val();
            $.get(
                url,
                { 'q': q },
                function( data ) {
                    $( '.result' ).html( data );
                }
            );

        }
    )
}

$( document ).ready(
    function() {
        //bindModuleView();
        bindJSCore();
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

function bindJSCore() {
    $( '.search' ).click(
        function() {
            var q = $( '.text' ).val();
            jQuery.ez(
                    "Search::search::" + q,
                    {},
                    function( data ) {
                        $( '.result' ).html( data.content );
                    }
            );
        }
    )
}

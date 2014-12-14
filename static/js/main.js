$(function() {
    $.zeroclipboard({
            moviePath: '/path/to/ZeroClipboard.swf',
            activeClass: 'active',
            hoverClass: 'hover'
        });

    // To glue a button
    $('#copy-button').zeroclipboard({
        dataRequested: function (event, setText) {
            // In order to dynamically set the text to copy to the clipboard
            // at the time the mouse clicks the button
            // NOTE: this function is called within the execution context of the flash movie,
            // therefore any exception might be silently ignored.
            // NOTE 2: the function "setText" should be called during the execution of this
            // callback otherwise the text copied on the clipboard will not be correct.
            // Therefore any AJAX call should be configured to be SYNCHRONOUS
            setText($('#hidden-link').val());
        },
        complete: function () {
            // Do something after the text has been copied to the system clipboard
            // (like notifying the user)
        }
    });
});

$
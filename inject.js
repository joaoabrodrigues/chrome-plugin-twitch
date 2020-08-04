(function() {
    setInterval(() => {
        var element = document.getElementsByClassName("tw-button tw-button--success tw-interactive");

        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        if (element && element.length === 1) {
            element[0].dispatchEvent(event);
        }
    }, 120000);
})();
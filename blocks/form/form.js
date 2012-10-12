BEM.DOM.decl('form', {

    _click: function(e) {
        this.elem('label').html(this.elem('input').val());
    }

}, {

    live: function() {

        this.liveBindTo('button', 'click', function(e) {
            e.preventDefault();
            this._click(e);
            return false;
        })

    }

});

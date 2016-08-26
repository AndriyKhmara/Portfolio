var Person = Backbone.Model.extend ({

});



var PersonView = Backbone.View.extend ({
    el : '#test',

    template : _.template( $('#site-id').html() ),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template( ) );
        return this;
    }
});


var personTestView = new PersonView();

$(document.body).append(personTestView.render().el);
define(['ember'], function(Ember) {
    'use strict';

    var UserLoginView = Ember.View.extend({
        layoutName: 'user/login_modal_layout',
        didInsertElement: function() {
            this.$('.modal, .modal-backdrop').addClass('in');
            //give the view focus
            this.$().attr({ tabindex: 1 });
            this.$().focus();
        },
        willDestroyElement: function() {
            this.$('.modal, .modal-backdrop').removeClass('in').hide();
        },
        keyDown: function(event) {
            if (event.keyCode === 27){//escape character code
                this.get('controller').send('close');
            }
        }
    });

    return UserLoginView;
});
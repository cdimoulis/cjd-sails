App.Page.extend({
  name: 'pages/index',

  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this,'_cardAction');

    var menu_icons = new App.Collection([
      {icon: 'build', action: this._cardAction},
      {icon: 'share', action: this._cardAction}
    ]);

    var footer_actions = new App.Collection([
      {text: "get started", action: this._cardAction},
      {text: 'view next', action: this._cardAction}
    ]);

    this.card = {
      title: "Buttons",
      attributes: new App.Model({class: 'cjd-card'}),
      content: 'Look at the fancy buttons?',
      menu_icons: menu_icons,
      footer_actions: footer_actions
    };

    this.simple_card = {
      title: "Your Flight:\nDL 8320\nSTL > BOS",
      footer_icon: 'flight',
      footer_action: new App.Model({
        text: 'Go Fly',
        action: this._cardAction,
      }),
    };
  },

  _cardAction: function() {
    console.log('card action');
  },
});

Ext.define('Packt.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'Packt.util.MD5'
    ],
    views: ['Login'],

    init: function (application) {
        this.control({
            'login form button#submit': {
                click: this.onButtonClickSubmit
            },
            'login form button#cancel': {
                click: this.onButtonClickCancel
            }
        });
    },

    onButtonClickCancel: function (button, e, options) {
        button.up('form').getForm().reset();
    },

    onButtonClickSubmit: function (button, e, options) {
        var formPanel = button.up('form'),
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();

        if (formPanel.getForm().isValid()) {
            Ext.get(login.getEl()).mask('Authenticating.. Please wait..','Loading');
            Ext.Ajax.request({
                url: 'php/login.php',
                params: {
                    user: user,
                    password: Packt.util.MD5.encode(pass)
                },
                failure: function (conn, response, options, eOpts) {
                    Ext.get(login.getEl()).unmask();
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                },
                success: function (conn, response, options, eOpts) {
                    Ext.get(login.getEl()).unmask();
                    var result = Ext.JSON.decode(conn.responseText, true); // #1
                    if (!result) { // #2
                        result = {};
                        result.success = false;
                        result.msg = conn.responseText;
                    }
                    if (result.success) { // #3
                        login.close(); // #4
                        Ext.create('Packt.view.MyViewport'); // #5
                    }
                    else {
                        Ext.Msg.show({
                            title: 'Fail!',
                            msg: result.msg, // #6
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                }

            })
        }
    }
});

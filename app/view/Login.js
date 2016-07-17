Ext.define('Packt.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',

    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60,
                allowBlank: false,
                vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'under',

            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User',
                    maxLangth: 25
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: 'password',
                    maxLanth: 15,
                    enableKeyEvents:true,
                    id:'password' // id is required because of tooltip
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'cancel',
                            iconCls: 'cancel'
                        },
                        {
                            xtype: 'button',
                            text: 'Submit',
                            itemId: 'submit',
                            iconCls: 'key-go',
                            formBind: true
                        }
                    ]
                }
            ]
        }
    ],
    iconCls: 'key',
    title: 'Login',
    closeAction: 'hide',
    closable: false,
    resizable: false
});
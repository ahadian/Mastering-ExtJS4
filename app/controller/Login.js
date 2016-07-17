Ext.define('Packt.controller.Login',{
    extend:'Ext.app.Controller',

    views:['Login'],

    init:function(application){
        this.control({
            'login form button#submit':{
                click:this.onButtonClickSubmit
            },
            'login form button#cancel':{
                click:this.onButtonClickCancel
            }
        });
    },

    onButtonClickCancel:function(button, e,options){
        button.up('form').getForm().reset();
    },

    onButtonClickSubmit:function(button, e,options){
        console.log('submit clicked');
    }
});

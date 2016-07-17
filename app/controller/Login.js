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

    onButtonClickCancel:function(){
        console.log('cancel clicked');
    },

    onButtonClickSubmit:function(){
        console.log('submit clicked');
    }
});

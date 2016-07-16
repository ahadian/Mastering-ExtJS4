Ext.define('Packt.view.Login',{
    extend:'Ext.window.Window',
    alias:'widget.login',

    autoShow:true,
    height:170,
    width:360,
    layout:{
        type:'fit'
    },
    iconCls:'key',
    title:'Login',
    closeAction:'hide',
    closable:false,
    resizable:false
});
Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    items : [
        {
            xtype: 'rallybutton',
            text: 'Click me',
            handler: function() {
                Ext.Msg.alert('Button', 'You clicked me again');
            }
        }
        ],
    
    launch: function() {
        //Write app code here
        
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});

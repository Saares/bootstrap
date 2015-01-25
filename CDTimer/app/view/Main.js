Ext.define('CDTimer.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype:'home',
            }, 
            {
                xtype:'timerAll',
            },
            {
                xtype: 'impressum',
            }
             
        ]
    }
});

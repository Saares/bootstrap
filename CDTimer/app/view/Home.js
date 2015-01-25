Ext.define('CDTimer.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    config: {
        title: 'Home',
        iconCls: 'home',

        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        styleHtmlCls:'mainHome',

        html: ['<p>Dies ist ein Countdown Timer der im Zuge des IBS - Kurses</p>',
        '<p>der Technischen Hochschule Mittelhessen in Gießen</p>',
        '<p>programmiert wurde.</p>',
        '<br><br>',
        '<p>Zurück geht es mit diesem <a href="http://danielaraddatz.cloudcontrolled.com">Link</a>.</p>'].join(""),
        items: [
            {
                xtype: 'titlebar',
                title: 'Hallo! - Countdown Timer',
                docked:'top',
            }
        ]

    }
})
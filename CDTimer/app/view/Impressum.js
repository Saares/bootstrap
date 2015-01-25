Ext.define('CDTimer.view.Impressum', {
	extend: 'Ext.Panel',
	xtype: 'impressum',
	
	config:{
		title:'Impressum',
		iconCls: 'info',
		layout: 'fit',
		styleHtmlContent:true,
		styleHtmlCls:'impressumHome',
		items: [
	        {
	        	xtype: 'titlebar',
	        	docked: 'top',
	        	title:'Impressum',
	        },
	        {
	        	html:[
					'<h1>Information in accordance with section 5 TMG</h1>',
					'<p>Daniela Raddatz</p>',
					'<p>Berlinerstr. 16</p>',
					'<p>35633 Lahnau</p>',
					'<h2>Contact</h2>',
					'<p>Telephone: +49 160 9621 4566</p>',
					'<p>E-Mail: daniela.raddatz@mni.thm.de</p>',
					'<p>Internetadress: http://danielaraddatz.cloudcontrolled.com</p>'
				].join(""),
	        }
	        ]
	}
})
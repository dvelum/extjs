Ext.define('Ext.theme.classic.Component',{override:'Ext.Component'},function(){Ext.namespace('Ext.theme.is').Classic=!0;Ext.theme.name='Classic'});Ext.define('Ext.theme.gray.Component',{override:'Ext.Component'},function(){Ext.namespace('Ext.theme.is').Gray=!0;Ext.theme.name='Gray'});Ext.define('Ext.classic.toolbar.Toolbar',{override:'Ext.toolbar.Toolbar',defaultFieldUI:'toolbar'});Ext.define('Ext.theme.classic.grid.column.Widget',{override:'Ext.grid.column.Widget',config:{defaultWidgetUI:{button:'grid-cell',splitbutton:'grid-cell',cyclebutton:'grid-cell',textfield:'grid-cell',pickerfield:'grid-cell',combobox:'grid-cell',combo:'grid-cell',datefield:'grid-cell',timefield:'grid-cell',filefield:'grid-cell',fileuploadfield:'grid-cell',sliderwidget:'grid-cell'}}});Ext.define('Ext.theme.classic.grid.plugin.Editing',{override:'Ext.grid.plugin.Editing',defaultFieldUI:'grid-cell'});Ext.define('Ext.theme.classic.toolbar.Breadcrumb',{override:'Ext.toolbar.Breadcrumb',config:{buttonUI:'default-toolbar'}});
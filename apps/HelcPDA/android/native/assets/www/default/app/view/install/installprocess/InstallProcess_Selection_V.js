
/* JavaScript content from app/view/install/installprocess/InstallProcess_Selection_V.js in folder common */
Ext.define('HelcPDA.view.install.installprocess.InstallProcess_Selection_V', {
    extend: 'Ext.Panel',
    id:'installprocess_sel_vid',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Spacer'
    ],

    config: {
        margin: '0 auto',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '按条件同步',
                items: [
                    {
                        xtype: 'button',
                        id: 'back_to_IP_List',
                        text: '返回',
                        ui: 'back',
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        margin: '0 auto',
                        items: [
                            {
                                xtype: 'textfield',
                                id:'tf_instpro_con',
                                label: '安装合同号',
                                labelWidth: '40%',
                                placeHolder: '请输入安装合同号'
                            },
                            {
                                xtype: 'textfield',
                                label: '工号',
                                id:'tf_instpro_eno',
                                labelWidth: '40%',
                                placeHolder: '请输入工号'
                            },
                            {
                                xtype: 'textfield',
                                label:'项目',
                                id:'tf_instpro_pro',
                                labelWidth: '40%',
                                placeHolder: '请输入项目'
                            },
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        margin: '15 0',
                                        width: '90%',
                                        id:'instpro_getdata_btn',
                                        text: '同步'
                                    },
                                    {
                                        xtype: 'spacer'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
// *****************************************************************************
//
// Copyright (c) 2020, Southwest Research Institute® (SwRI®)
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of Southwest Research Institute® (SwRI®) nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL Southwest Research Institute® BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
// OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
// DAMAGE.
//
// *****************************************************************************

Ext.define('BagDatabase.views.ScriptGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.scriptGrid',
    title: 'Scripts',
    requires: ['BagDatabase.models.Script',
               'BagDatabase.stores.ScriptStore',
               'BagDatabase.views.ScriptWindow'],
    store: Ext.create('BagDatabase.stores.ScriptStore'),
    columns: [{
        text: 'Name', dataIndex: 'name'
    }, {
        text: 'Network Access?', dataIndex: 'allowNetworkAccess'
    }, {
        text: 'Docker Image', dataIndex: 'dockerImage'
    }, {
        text: 'Memory Limit (B)', dataIndex: 'memoryLimitBytes'
    }, {
        text: 'Run Automatically?', dataIndex: 'runAutomatically'
    }, {
        text: 'Script', dataIndex: 'script'
    }, {
        text: 'Timeout (s)', dataIndex: 'timeoutSecs'
    }, {
        text: 'Created On', dataIndex: 'createdOn', renderer: bagGridDateRenderer
    }, {
        text: 'Updated On', dataIndex: 'updatedOn', renderer: bagGridDateRenderer
    }, {
        text: 'Description', dataIndex: 'description'
    }],
    listeners: {
        rowdblclick: function(grid, record) {
            var scriptId = record.get('id');
            grid.ownerCt.showScriptDetails(scriptId);
        }
    },
    buttons: [{
        text: 'Create',
        itemId: 'createButton',
        handler: function() {
            var win = Ext.create('BagDatabase.views.ScriptWindow');
            win.show();
        }
    }, {
        text: 'Run',
        itemId: 'runButton'
    }, {
        text: 'Delete',
        itemId: 'deleteButton'
    }],
    showScriptDetails: function(scriptId) {
        var win = Ext.create({
            xtype: 'scriptWindow',
            scriptId: scriptId
        });
        win.show();
    }
});
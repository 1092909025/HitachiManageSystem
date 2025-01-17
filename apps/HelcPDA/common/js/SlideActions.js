Ext.define('plugin.SlideActions', {
    extend: 'Ext.Component',
    alias: 'plugin.slideactions',
    requires: ['Ext.Anim'],
    config: {
        list: null,
        buttons: [],
        minDrag: 15,
        openPosition: 250,
        animation: {duration: 500, easing: {type: 'ease-out'}},
        //actionsBackground: "#5b5b5b",
        actionsBackground: "#ffffff",
        itemBackground: '#ffffff',
        //boxShadow: '5px 0px 5px 0px #aaa'
        boxShadow: 'none'
    },

    init: function(list) {
        this.setList(list);
        
        list.getScrollable().getScroller().on({
            scroll: this.onScrollStart,
            scrollend: this.onScrollEnd,
            scope: this
        });

        list.on({
            itemtap:this.onTap,
            select: this.onTap,
            updatedata: this.updateData,
            itemtouchmove: this.onTouchMove, 
            hide: this.removeButtons,
            scope: this
        });
        list.setBubbleEvents(true);
        
    },

    actualItem: null,
    actualActions: null,

    scrolling: false,

    onScrollEnd: function(){
        this.scrolling = false;
//        console.log('onScrollEnd');
    },

    onScrollStart: function(scroller, x, y){
        this.scrolling = true;
//        console.log('scrollstart');
        if(this.actualItem){
            this.removeButtons(false);
        }
    },

    updateData: function(){
//    	console.log('updateData');
        if(this.actualItem){
            this.removeButtons();
        }
    },

    onTap: function(list, index, target, record, e, eOpts)
    {
        var stop = this.actualItem !== null && target.element.down('.x-innerhtml') == this.actualItem.getElement();

        this.removeButtons();
        
        if(stop)
        {
            return false;
        }
    },

    onTouchMove: function(list, index, target, record, e, eOpts){
//    	console.log('onTouchMove');
        if(this.scrolling) return false;

        var me = this;

        var element = target.element.down('.x-innerhtml');

        var initialOffset = {x: 0, y: 0};

        if(me.actualItem && me.actualItem.getElement() != element){
            me.removeButtons();
        }

        if(!me.actualItem)
        {
            me.actualRecord = record;
            me.actualActions = me.createButtonsDiv(target.element);
            element.setStyle('background', me.config.itemBackground);
            element.setStyle('box-shadow', me.config.boxShadow);
        
            

            me.actualItem = new Ext.util.Draggable({
                element: element,
                constraint: false,
                direction: 'horizontal',
                listeners: {
                    dragstart: function( self, e, startX, startY ){
                        if(self.getOffset().x == -1 * me.config.openPosition)
                        {
                            initialOffset = {x: -1 * me.config.openPosition, y: 0};
                        }
                    },
                    drag: function( self, e, newX, newY ){

                        if(self.getOffset().x > 0)
                        {
                            self.setOffset(0, 0);
                        }
                        else if(Math.min(initialOffset.x, newX) - Math.max(initialOffset.x, newX) > -1 * me.config.minDrag)
                        {
                            //Ex: -350 and -380
                            //Ex: 0 and -30
                            self.setOffset(self.getOffset().x, 0);
                        }
                        else{
                            list.getScrollable().getScroller().fireEvent('scrollend');
                            list.setScrollable(false);
                        }
                        
                    },
                    dragend: function( self, e, endX, endY ){
                        if(self.getOffset().x < -1 * (me.config.openPosition / 2)){
                            self.setOffset(-1 * me.config.openPosition, 0, me.config.animation);
                        }
                        else{
                            self.setOffset(0, 0, me.config.animation);
                            Ext.destroy(me.actualActions);
                            Ext.destroy(me.actualItem);
                            me.actualItem = null;
                            me.actualActions = null;
                            me.actualRecord = null;
                            element.setStyle('box-shadow', null);
                        }
                        setTimeout(function(){list.setScrollable(true);}, 250);
                        // list.setScrollable(true);
                    }
                }
            });
        }
        
    },

    removeButtons: function(timeout){
//    	console.log('removeButtons');
        if(typeof timeout == 'undefined')
        {
            timeout = true;
        }

        if(this.actualItem){
            if(typeof this.actualItem.getElement() == 'undefined')
            {
                this.actualItem = null;
                this.actualRecord = null;
                this.actualActions = null;
            }
            else{
                var actualItem = this.actualItem;
                actualItem.setOffset(0, 0, this.config.animation);
                var actualActions = this.actualActions;
                if(actualItem.getElement() && actualItem.getElement().dom)
                {
                    actualItem.getElement().setStyle('box-shadow', null);
                }
                //To close actual item with animation
                setTimeout(function(){ 
                    Ext.destroy(actualActions);
                    Ext.destroy(actualItem);
                }, timeout ? 500 : 0);
                this.actualItem = null;
                this.actualRecord = null;
                this.actualActions = null;
            }
        }
        if(this.list && !this.list.getScrollable())
        {
            this.list.getScroller().fireEvent('scrollend');
            this.list.setScrollable(true);
        }
    },

    createButtonsDiv: function(element)
    {
        var me = this;
        var outer = Ext.DomHelper.insertFirst(element, '<div class="x-slide-action-outer" style="background: '+me.config.actionsBackground+'; position:absolute; width: 100%; height: 100%"></div>', true);

        Ext.Array.each(me.config.buttons, function(button){
            /*button['flex'] = 1;
            button['style'] = 'height: 100%;border: none;box-shadow: none;z-index: auto;';
            button['record'] = me.actualRecord;*/
            button.flex = 1;
            button.style = 'height: 100%;border: none;box-shadow: none;z-index: auto;';
            button.record = me.actualRecord;

            if(button.initial && typeof(button.initial)==='function') button.initial(button);
//            console.log(me.config.animation);
        });      
        var panel = Ext.create('Ext.Panel', {
            layout: 'hbox',
            width: me.config.openPosition,
            cls: 'x-slide-action-buttons-outer',
            renderTo: outer,
            style: 'margin-left: auto;height: 100%;',
            items: me.config.buttons
        });

        return outer;
    }


});
(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOffApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService){
        var toBuyList = this;
        
        toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();        

        toBuyList.buyItem = function(itemIndex){
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService){
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getItemsBougth();
    }

      function ShoppingListCheckOffService(){
        var service = this;

        var itemsToBuy = [];

        if (itemsToBuy.length===0){
            itemsToBuy.push({name:'cookies',quantity:10});
            itemsToBuy.push({name:'apples',quantity:15});
            itemsToBuy.push({name:'oranges',quantity:12});
            itemsToBuy.push({name:'bottles of water',quantity:5});
            itemsToBuy.push({name:'pens',quantity:30});        
        }
        
        var itemsBought = [];

        //itemsBought.push({name:'apples',quantity:15});

        service.getItemsToBuy = function(){
            return itemsToBuy;
        };

        service.getItemsBougth = function(){
            return itemsBought;
        };

        service.buyItem = function(itemIndex){
            itemsBought.push(itemsToBuy[itemIndex]); 
            itemsToBuy.splice(itemIndex, 1);      
        };
    }
    
    })();
(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];    
    
    function LunchCheckController($scope){
      $scope.listDishes = "";
      $scope.font_color = "black";
      $scope.border = 'none';
      $scope.checkAmount = function () {
        $scope.border = 'solid';
          if ($scope.listDishes !== ""){            
            var words = $scope.listDishes.split(',');
            const noEmpyStrings = [];

            for (const word of words){
              if (word.trim().length){
                noEmpyStrings.push(word);
              }
            }
            words = noEmpyStrings;
              
            if (words.length<=3){
              $scope.message = "Enjoy!";
            }
            else{
              $scope.message = "Too Much!";
            };
            $scope.font_color = 'green';
          }
          else{
            $scope.message = "Please enter data first";
            $scope.font_color = 'red';
            
          };
      };
    }

    })();
    
'use strict';

angular.module('angularLetusgoApp')
  .controller('ResultCtrl', function ($scope,CartService) {
    $scope.cartItems = CartService.get().cartItems;
    $scope.getSubtotal = function(cartitem){
        return CartService.getSubtotal(cartitem);
    };
    $scope.clearData = function() {
        CartService.remove();
        $scope.$emit('clear');
    }
  });

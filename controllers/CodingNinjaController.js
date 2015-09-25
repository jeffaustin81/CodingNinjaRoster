codingNinjaRoster.controller('NinjaCtrl', function NinjaCtrl($scope, CodingNinjaFactory) {
    $scope.ninjas = CodingNinjaFactory.ninjas;
    $scope.CodingNinjaFactory = CodingNinjaFactory;
});
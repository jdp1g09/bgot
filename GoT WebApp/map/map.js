angular.module("App.map", [])

.controller("populateMapCtrl", ["$scope", function($scope) {
    /*d3.selectAll("path").on("click",function(evt){
        console.log(getDataFor(this.id));
    });*/
        
    $scope.setWildlingThreat = function(newValue) {
        var offset0 = 48;
        var offset1 = 102;
        d3.select(".wild-token").style("left",offset0+((newValue/2)*offset1)+"px");
    }
    $scope.setWildlingThreat(4);
    
    $scope.setRound = function(newValue) {
        var offset0 = 48;
        var offset1 = 102;
        d3.select(".round-token").style("left",offset0+((newValue/2)*offset1)+"px");
    }
    //$scope.setRound(1); 
        
    $scope.setInfluencePos = function(track, house, newValue) {
        var offset0 = 979,
            offset1 = 72;
        d3.select("#influence-token-"+track+"-"+house)
            .style("left",offset0+((newValue-1)*offset1)+"px");
    }
    $scope.setInfluencePos("throne", "stark", 4);
    $scope.setInfluencePos("fiefdoms", "stark", 5);
    $scope.setInfluencePos("court", "stark", 6);
    
    $scope.setInfluencePos("throne", "lannister", 1);
    $scope.setInfluencePos("fiefdoms", "lannister", 2);
    $scope.setInfluencePos("court", "lannister", 3);  
    
    $scope.setInfluencePos("throne", "baratheon", 2);
    $scope.setInfluencePos("fiefdoms", "baratheon", 6);
    $scope.setInfluencePos("court", "baratheon", 4); 
    
    $scope.setInfluencePos("throne", "greyjoy", 6);
    $scope.setInfluencePos("fiefdoms", "greyjoy", 4);
    $scope.setInfluencePos("court", "greyjoy", 2);   
    
    $scope.setInfluencePos("throne", "tyrell", 5);
    $scope.setInfluencePos("fiefdoms", "tyrell", 3);
    $scope.setInfluencePos("court", "tyrell", 1); 
    
    $scope.setInfluencePos("throne", "martell", 3);
    $scope.setInfluencePos("fiefdoms", "martell", 1);
    $scope.setInfluencePos("court", "martell", 5);
    
    $scope.setSupplyPos = function(house, newValue) {
        var offset0 = 514,
            offset1 = 46;
        d3.select("#supply-token-"+house)
            .style("left",offset0+((newValue)*offset1)+"px");
    }
    $scope.setSupplyPos("stark", 1);
    $scope.setSupplyPos("lannister", 2);
    $scope.setSupplyPos("baratheon", 2);
    $scope.setSupplyPos("greyjoy", 1);
    $scope.setSupplyPos("tyrell", 1);
    $scope.setSupplyPos("martell", 1);
        
    $scope.setVictoryPos = function(house, newValue) {
        var offset0 = 0,
            offset1 = 100;
        d3.select("#victory-token-"+house)
            .style("left",offset0+((newValue/2)*offset1)+"px");
    }
    //$scope.setVictoryPos("stark", 1);
}]);
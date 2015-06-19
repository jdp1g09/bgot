var app = angular.module("App", [
    "App.map"
])

.controller("AppCtrl", ["$scope",
    function($scope) {
        $scope.test = 3;

        $scope.showWildlingCard = false;

        $scope.turnWildlingCard = function() {
            $scope.showWildlingCard = !$scope.showWildlingCard;
        }

        $scope.takeLand = function(house, area) {
            area = nameToId(area);
            d3.select("#area_" + area).transition().duration(1000).attr("class", "area " + house);
        }

        $scope.getDataFor = function(id) {
            var obj_id = null;
            if (id.indexOf("area_") > -1) {
                obj_id = id.split("area_")[1];
            } else {
                obj_id = id;
            }

            var data = d3.selectAll($scope.lands).filter(function(d, i) {
                return (obj_id == $scope.lands[i]["id"]);
            })[0][0];

            if (data == undefined && id != "area_north-of-the-wall") {
                throw Error("svg object with id='" + id + "' is not on the map");
            } else {
                return data;
            }
        }

        $scope.filterLands = function(parameter, value) {
            return d3.selectAll($scope.lands).filter(function(d, i) {
                return (value == $scope.lands[i][parameter]);
            })[0];
        };

        $scope.houseArray = ["stark", "martell", "tyrell", "baratheon", "lannister", "greyjoy"];

        $scope.houses = {
            "stark": [{
                name: "Winterfell",
                units: 1,
                knights: 1,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "White Harbor",
                units: 1,
                knights: 0,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "The Shivering Sea",
                units: 0,
                knights: 0,
                towers: 0,
                ships: 1,
                port: 0
            }],
            "greyjoy": [{
                name: "Greywater Watch",
                units: 1,
                knights: 0,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Pyke",
                units: 1,
                knights: 1,
                towers: 0,
                ships: 0,
                port: 1
            }, {
                name: "Ironmans Bay",
                units: 0,
                knights: 0,
                towers: 0,
                ships: 1,
                port: 0
            }],
            "lannister": [{
                name: "Lannisport",
                units: 1,
                knights: 1,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Stoney Sept",
                units: 1,
                knights: 0,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "The Golden Sound",
                units: 0,
                knights: 0,
                towers: 0,
                ships: 1,
                port: 0
            }],
            "tyrell": [{
                name: "Highgarden",
                units: 1,
                knights: 1,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Dornish Marches",
                units: 1,
                knights: 0,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Redwyne Straits",
                units: 0,
                knights: 0,
                towers: 0,
                ships: 1,
                port: 0
            }],
            "martell": [{
                name: "Sunspear",
                units: 1,
                knights: 1,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Salt Shore",
                units: 1,
                knights: 0,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Sea of Dorne",
                units: 0,
                knights: 0,
                towers: 0,
                ships: 1,
                port: 0
            }],
            "baratheon": [{
                name: "Dragonstone",
                units: 1,
                knights: 1,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Kingswood",
                units: 1,
                knights: 0,
                towers: 0,
                ships: 0,
                port: 0
            }, {
                name: "Shipbreaker Bay",
                units: 0,
                knights: 0,
                towers: 0,
                ships: 2,
                port: 0
            }]
        }

        $scope.lands = [{
            name: "Kings Landing",
            id: "kings-landing",
            castle: false,
            stronghold: true,
            port: false,
            sea: false,
            crowns: 2,
            supplies: 0
        }, {
            name: "Castle Black",
            id: "castle-black",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "Winterfell",
            id: "winterfell",
            castle: false,
            stronghold: true,
            port: true,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Karhold",
            id: "karhold",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "White Harbor",
            id: "white-harbor",
            castle: true,
            stronghold: false,
            port: true,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Widows Watch",
            id: "widows-watch",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "Stony Shore",
            id: "stony-shore",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "The Shivering Sea",
            id: "the-shivering-sea",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "The Narrow Sea",
            id: "the-narrow-sea",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Moat Cailin",
            id: "moat-cailin",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Greywater Watch",
            id: "greywater-watch",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "Flints Finger",
            id: "flints-finger",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Bay of Ice",
            id: "bay-of-ice",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Sunset Sea",
            id: "sunset-sea",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Ironmans Bay",
            id: "ironmans-bay",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "The Fingers",
            id: "the-fingers",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "The Twins",
            id: "the-twins",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "Seagard",
            id: "seagard",
            castle: false,
            stronghold: true,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Pyke",
            id: "pyke",
            castle: false,
            stronghold: true,
            port: true,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Mountains of the Moon",
            id: "mountains-of-the-moon",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "Riverrun",
            id: "riverrun",
            castle: false,
            stronghold: true,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "The Eyre",
            id: "the-eyre",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Lannisport",
            id: "lannisport",
            castle: false,
            stronghold: true,
            port: true,
            sea: false,
            crowns: 0,
            supplies: 2
        }, {
            name: "The Golden Sound",
            id: "the-golden-sound",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Searoad Marches",
            id: "searoad-marches",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "Stoney Sept",
            id: "stoney-sept",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "Harrenhall",
            id: "harrenhall",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "Crackclaw Point",
            id: "crackclaw-point",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Shipbreaker Bay",
            id: "shipbreaker-bay",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Dragonstone",
            id: "dragonstone",
            castle: false,
            stronghold: true,
            port: true,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Blackwater Bay",
            id: "blackwater-bay",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Blackwater",
            id: "blackwater",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 2
        }, {
            name: "Kingswood",
            id: "kingswood",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "The Reach",
            id: "the-reach",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Highgarden",
            id: "highgarden",
            castle: false,
            stronghold: true,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 2
        }, {
            name: "Storms End",
            id: "storms-end",
            castle: true,
            stronghold: false,
            port: true,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Redwyne Straits",
            id: "redwyne-straits",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Oldtown",
            id: "oldtown",
            castle: false,
            stronghold: true,
            port: true,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Dornish Marches",
            id: "dornish-marches",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "Boneway",
            id: "boneway",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "Princes Pass",
            id: "princes-pass",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Three Towers",
            id: "three-towers",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "The Arbor",
            id: "the-arbor",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 1,
            supplies: 0
        }, {
            name: "West Summer Sea",
            id: "west-summer-sea",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "Yronwood",
            id: "yronwood",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 0
        }, {
            name: "Starfall",
            id: "starfall",
            castle: true,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "Salt Shore",
            id: "salt-shore",
            castle: false,
            stronghold: false,
            port: false,
            sea: false,
            crowns: 0,
            supplies: 1
        }, {
            name: "Sunspear",
            id: "sunspear",
            castle: false,
            stronghold: true,
            port: true,
            sea: false,
            crowns: 1,
            supplies: 1
        }, {
            name: "Sea of Dorne",
            id: "sea-of-dorne",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }, {
            name: "East Summer Sea",
            id: "east-summer-sea",
            castle: false,
            stronghold: false,
            port: false,
            sea: true,
            crowns: 0,
            supplies: 0
        }];


        // set up starting lands
        $scope.init = function() {
            for (house in $scope.houses) {
                console.log(house);
                $scope.houses[house].forEach(function(element, index, array) {
                    $scope.takeLand(house, nameToId(element.name));
                });
            };
        }
    }
])

.directive('tooltip', function() {
    return {
        templateUrl: 'tooltip/tooltip.tpl.html',
        controller: "tooltipCtrl"
    };
})

.directive('map', function() {
    return {
        templateUrl: 'map/westeros.html',
        controller: "populateMapCtrl"
    };
});

nameToId = function(name) {
    return name.toLowerCase().replace(/ /g, "-");
}

function getCentroid(selection) {
    // get the DOM element from a D3 selection
    // you could also use "this" inside .each()
    var element = selection.node(),
        // use the native SVG interface to get the bounding box
        bbox = element.getBBox();
    // return the center of the bounding box
    return [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2];
}
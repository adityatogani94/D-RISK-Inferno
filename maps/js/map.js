
var TerritoryData = {};
var deploy;
var attack;
var commit;
var next;
var reset;
var atkcntry;
var atkcount;
var orgcount;
var atkdcntrycount;
var deploycount = 0;


for (var id in TerritoryNames) {
    var data = {}
    data["name"] = null;
    data["path"] = null;
    data["text"] = null;
    data["color"] = null;
    data["neighbours"] = null;
    data["armyNum"] = null;
    data["owner"] = null;
    TerritoryData[id] = data;
}

var Map = {
    R: null,
    world:{},
    stage:null,
    init: function() {
        Map.R = Raphael("paper", 1366, 768);
        Map.drawMap();
        Map.runStages();
        Map.defEventHandler();
    },

    drawMap: function() {
        Map.R.image("img/bg_image.png",0,0,1366,768);
        var attr = {fill: "gray",stroke: "#666","stroke-width": 1.5,"stroke-linejoin": "round"};
        Map.world.Alaska = Map.R.path(TerritoryPathData['Alaska'].path).attr(attr);
        TerritoryData['Alaska'].path = Map.world.Alaska;
        Map.world.NorthWestTerritory = Map.R.path(TerritoryPathData['NorthWestTerritory'].path).attr(attr);
        TerritoryData['NorthWestTerritory'].path = Map.world.NorthWestTerritory;
        Map.world.Alberta = Map.R.path(TerritoryPathData['Alberta'].path).attr(attr);
        TerritoryData['Alberta'].path = Map.world.Alberta;
        Map.world.Ontario = Map.R.path(TerritoryPathData['Ontario'].path).attr(attr);
        TerritoryData['Ontario'].path = Map.world.Ontario;
        Map.world.Greenland = Map.R.path(TerritoryPathData['Greenland'].path).attr(attr);
        TerritoryData['Greenland'].path = Map.world.Greenland;
        Map.world.Quebec = Map.R.path(TerritoryPathData['Quebec'].path).attr(attr);
        TerritoryData['Quebec'].path = Map.world.Quebec;
        Map.world.WesternUnitedStates = Map.R.path(TerritoryPathData['WesternUnitedStates'].path).attr(attr);
        TerritoryData['WesternUnitedStates'].path = Map.world.WesternUnitedStates;
        Map.world.EasternUnitedStates = Map.R.path(TerritoryPathData['EasternUnitedStates'].path).attr(attr);
        TerritoryData['EasternUnitedStates'].path = Map.world.EasternUnitedStates;
        Map.world.CentralAmerica = Map.R.path(TerritoryPathData['CentralAmerica'].path).attr(attr);
        TerritoryData['CentralAmerica'].path = Map.world.CentralAmerica;
        Map.world.Peru = Map.R.path(TerritoryPathData['Peru'].path).attr(attr);
        TerritoryData['Peru'].path = Map.world.Peru;
        Map.world.Brazil = Map.R.path(TerritoryPathData['Brazil'].path).attr(attr);
        TerritoryData['Brazil'].path = Map.world.Brazil;
        Map.world.Venezuela = Map.R.path(TerritoryPathData['Venezuela'].path).attr(attr);
        TerritoryData['Venezuela'].path = Map.world.Venezuela;
        Map.world.Argentina = Map.R.path(TerritoryPathData['Argentina'].path).attr(attr);
        TerritoryData['Argentina'].path = Map.world.Argentina;
        Map.world.NorthAfrica = Map.R.path(TerritoryPathData['NorthAfrica'].path).attr(attr);
        TerritoryData['NorthAfrica'].path = Map.world.NorthAfrica;
        Map.world.Egypt = Map.R.path(TerritoryPathData['Egypt'].path).attr(attr);
        TerritoryData['Egypt'].path = Map.world.Egypt;
        Map.world.Congo = Map.R.path(TerritoryPathData['Congo'].path).attr(attr);
        TerritoryData['Congo'].path = Map.world.Congo;
        Map.world.EastAfrica = Map.R.path(TerritoryPathData['EastAfrica'].path).attr(attr);
        TerritoryData['EastAfrica'].path = Map.world.EastAfrica;
        Map.world.SouthAfrica = Map.R.path(TerritoryPathData['SouthAfrica'].path).attr(attr);
        TerritoryData['SouthAfrica'].path = Map.world.SouthAfrica;
        Map.world.Iceland = Map.R.path(TerritoryPathData['Iceland'].path).attr(attr);
        TerritoryData['Iceland'].path = Map.world.Iceland;
        Map.world.GreatBritain = Map.R.path(TerritoryPathData['GreatBritain'].path).attr(attr);
        TerritoryData['GreatBritain'].path = Map.world.GreatBritain;
        Map.world.WesternEurope = Map.R.path(TerritoryPathData['WesternEurope'].path).attr(attr);
        TerritoryData['WesternEurope'].path = Map.world.WesternEurope;
        Map.world.NorthernEurope = Map.R.path(TerritoryPathData['NorthernEurope'].path).attr(attr);
        TerritoryData['NorthernEurope'].path = Map.world.NorthernEurope;
        Map.world.SouthernEurope = Map.R.path(TerritoryPathData['SouthernEurope'].path).attr(attr);
        TerritoryData['SouthernEurope'].path = Map.world.SouthernEurope;
        Map.world.Scandinavia = Map.R.path(TerritoryPathData['Scandinavia'].path).attr(attr);
        TerritoryData['Scandinavia'].path = Map.world.Scandinavia;
        Map.world.Madagascar = Map.R.path(TerritoryPathData['Madagascar'].path).attr(attr);
        TerritoryData['Madagascar'].path = Map.world.Madagascar;
        Map.world.Ukraine = Map.R.path(TerritoryPathData['Ukraine'].path).attr(attr);
        TerritoryData['Ukraine'].path = Map.world.Ukraine;
        Map.world.MiddleEast = Map.R.path(TerritoryPathData['MiddleEast'].path).attr(attr);
        TerritoryData['MiddleEast'].path = Map.world.MiddleEast;
        Map.world.Afghanistan = Map.R.path(TerritoryPathData['Afghanistan'].path).attr(attr);
        TerritoryData['Afghanistan'].path = Map.world.Afghanistan;
        Map.world.Ural = Map.R.path(TerritoryPathData['Ural'].path).attr(attr);
        TerritoryData['Ural'].path = Map.world.Ural;
        Map.world.India = Map.R.path(TerritoryPathData['India'].path).attr(attr);
        TerritoryData['India'].path = Map.world.India;
        Map.world.Siam = Map.R.path(TerritoryPathData['Siam'].path).attr(attr);
        TerritoryData['Siam'].path = Map.world.Siam;
        Map.world.China = Map.R.path(TerritoryPathData['China'].path).attr(attr);
        TerritoryData['China'].path = Map.world.China;
        Map.world.Mongolia = Map.R.path(TerritoryPathData['Mongolia'].path).attr(attr);
        TerritoryData['Mongolia'].path = Map.world.Mongolia;
        Map.world.Irkutsk = Map.R.path(TerritoryPathData['Irkutsk'].path).attr(attr);
        TerritoryData['Irkutsk'].path = Map.world.Irkutsk;
        Map.world.Yakutsk = Map.R.path(TerritoryPathData['Yakutsk'].path).attr(attr);
        TerritoryData['Yakutsk'].path = Map.world.Yakutsk;
        Map.world.Siberia = Map.R.path(TerritoryPathData['Siberia'].path).attr(attr);
        TerritoryData['Siberia'].path = Map.world.Siberia;
        Map.world.Kamchatka = Map.R.path(TerritoryPathData['Kamchatka'].path).attr(attr);
        TerritoryData['Kamchatka'].path = Map.world.Kamchatka;
        Map.world.Japan = Map.R.path(TerritoryPathData['Japan'].path).attr(attr);
        TerritoryData['Japan'].path = Map.world.Japan;
        Map.world.Indonesia = Map.R.path(TerritoryPathData['Indonesia'].path).attr(attr);
        TerritoryData['Indonesia'].path = Map.world.Indonesia;
        Map.world.NewGuinea = Map.R.path(TerritoryPathData['NewGuinea'].path).attr(attr);
        TerritoryData['NewGuinea'].path = Map.world.NewGuinea;
        Map.world.WesternAustralia = Map.R.path(TerritoryPathData['WesternAustralia'].path).attr(attr);
        TerritoryData['WesternAustralia'].path = Map.world.WesternAustralia;
        Map.world.EasternAustralia = Map.R.path(TerritoryPathData['EasternAustralia'].path).attr(attr);
        TerritoryData['EasternAustralia'].path = Map.world.EasternAustralia;

        var attr_text = {"font-size": 20,"font-family": "Century Gothic', CenturyGothic, AppleGothic, sans-serif",width: 2};
        for (id in TerritoryNames) {

            var textObject = Map.R.text(ArmyCountCoords[id].x, ArmyCountCoords[id].y, 2).attr(attr_text);
            TerritoryData[id].name = id;
            TerritoryData[id].text = textObject;
            TerritoryData[id].color = "gray";
            TerritoryData[id].neighbours = Neighbours[id];
            TerritoryData[id].armyNum = "2";
            TerritoryData[id].owner = "Neutral";
        }

    },
	
	
	
    setColor: function(country, color) {
        TerritoryData[country].path.attr({
            fill: color
        });
        TerritoryData[country].color = color;
    },

    setArmyCount: function(country, count) {
        TerritoryData[country].text.attr('text', count);
        TerritoryData[country].armyNum = count;
    },

    getColor: function(country) {
        return TerritoryData[country].color;
    },

    getArmyCount: function(country) {
        return Number(TerritoryData[country].text[0].textContent);
    },

    getPathObject: function(country) {
        return TerritoryData[country].path;
    },

    getTextObject: function(country) {
        return TerritoryData[country].text;
    },

    getOwner: function(country) {
        return TerritoryData[country].owner;
    },

    setOwner: function(country, owner) {
        TerritoryData[country].owner = owner;
    },

    runStages: function() {

        Map.stage = "deploy";

        next = function() {
            if (Map.stage == "deploy") {
                Map.stage = "attack";
                alert("Now proceed to Attack");
            } else if (Map.stage == "attack") {
                Map.stage = "commit";
                alert("Proceed to commit your final turn");
            } else {
                Map.stage = "deploy";
                confirm("Executing your turn.");
            }
        }

        deploy = function(IDS) {
            document.getElementById(IDS).style.backgroundColor = 'green';

            if (Map.stage == "deploy") {
                alert('Click on areas to deploy your army and then click next phase!!');
            } else {
                alert("First Deploy -> then Attack -> then Commit");
            }
            document.getElementById(IDS).style.backgroundColor = 'white';
        }

        commit = function(IDS) {
            document.getElementById(IDS).style.backgroundColor = 'green';
            if (Map.stage == "commit") {
                alert('Are you sure? if yes click next phase');
            } else {
                alert("First Deploy -> then Attack -> then Commit");
            }
            document.getElementById(IDS).style.backgroundColor = 'white';
        }

        attack = function(IDS) {
            document.getElementById(IDS).style.backgroundColor = 'green';
            if (Map.stage == "attack") {
                alert('click on the areas you want to attack and then click next phase');

            } else {
                alert("In attack issue");
            }
            document.getElementById(IDS).style.backgroundColor = 'white';
        }

        reset = function() {
            Map.stage = "deploy";
        }
    },

    defEventHandler: function(){
        var current = null;
        var arrow1;
        var arrow2;
        var attr_arrow = {
            fill: "blue",
            stroke: "brown",
            "stroke-width": 1,
            "stroke-linejoin": "round",
        };

        Raphael.fn.arrow = function(x1, y1, x2, y2, size) {
            var angle = Raphael.angle(x1, y1, x2, y2);
            var a45 = Raphael.rad(angle - 45);
            var a45m = Raphael.rad(angle + 45);
            var a135 = Raphael.rad(angle - 135);
            var a135m = Raphael.rad(angle + 135);
            var x1a = "";
            var y1a = "";
            var x1b = "";
            var y1b = "";
            var x2a = x2 + Math.cos(a45) * size;
            var y2a = y2 + Math.sin(a45) * size;
            var x2b = x2 + Math.cos(a45m) * size;
            var y2b = y2 + Math.sin(a45m) * size;

            x1 = x1 - 10;
            y1 = y1 + 10
            x2 = x2 - 10;
            y2 = y2 + 10;
            x2a = x2a - 10;
            x2b = x2b - 10;
            y2a = y2a + 10;
            y2b = y2b + 10;

            Map.R.path(
                "M" + x1 + " " + y1 + "L" + x1a + " " + y1a +
                "M" + x1 + " " + y1 + "L" + x1b + " " + y1b +
                "M" + x1 + " " + y1 + "L" + x2 + " " + y2 +
                "M" + x2 + " " + y2 + "L" + x2a + " " + y2a +
                "M" + x2 + " " + y2 + "L" + x2b + " " + y2b
            ).attr(attr_arrow);
        };

        for (var country in Map.world) {
            Map.world[country].color = Raphael.getColor();
            (function(st, country) {

                st[0].style.cursor = "pointer";

                st[0].onclick = function() {
					
                    if (Map.stage == "deploy" && Map.getOwner(country) != "Neutral") {
						
						var audio1 = document.getElementById('sounddeploy');
						audio1.play();
						if(deploycount < 5){

                            var a = Map.getArmyCount(country);
                            a = a + 1;
							deploycount ++;
							current = country;
                            TerritoryData[current].text.attr('text', a);
                            TerritoryData[current].armyNum = a;
                            document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + Map.getOwner(country) + "<br /> Army Count : " + Map.getArmyCount(country) + " </p>";
						}
						else {
							alert("Deploy Limit Reached");
						}
						

                    }
                    if (Map.stage == "attack") {
						
						deploycount = 0;
						current = country;
						if (atkcntry != null){
							var audio1 = document.getElementById('soundattack');
							audio1.play();
							for (index = 0; index < TerritoryData[atkcntry].neighbours.length; index++) {
								if(current == TerritoryData[atkcntry].neighbours[index] && Map.getArmyCount(atkcntry) > 1) {
									arrow1.remove();
									atkcount = 0;
									transfercount = 0;
									orgcount = Map.getArmyCount(atkcntry); 
									atkdcntrycount = Map.getArmyCount(current);
									if(Map.getOwner(atkcntry) == Map.getOwner(current)) {
										do{
											transfercount = prompt("Please enter the number of armies to transfer. You should leave atleast one army behind", "0");
										}while(transfercount <=0 || transfercount >= orgcount);
										orgcount = orgcount - transfercount;
										atkdcntrycount = Number(atkdcntrycount) + Number(transfercount);
										Map.setArmyCount(atkcntry,orgcount);
										Map.setArmyCount(current,atkdcntrycount);
									}
									else{
										do{
											atkcount = prompt("Please enter the number of armies to attack. You should leave atleast one army behind", "0");
										}while( atkcount <=0 || atkcount >= orgcount);
										// Attacking conditions
										percentAtkCount = 0.6 * atkcount;
										percentAtkCount = Math.floor(percentAtkCount);
										percentAtkdCount = 0.7 * atkdcntrycount;
										percentAtkdCount = Math.ceil(percentAtkdCount);
										if (percentAtkCount - percentAtkdCount > 0){
											
											leftArmyCount = atkcount - percentAtkdCount;
											orgcount = orgcount - atkcount;
											Map.setArmyCount(atkcntry,orgcount);
											Map.setArmyCount(current,leftArmyCount);
											Map.setOwner(current,Map.getOwner(atkcntry));
											Map.setColor(current,Map.getColor(atkcntry));
										}else if(percentAtkCount == percentAtkdCount){
											orgcount = orgcount - atkcount;
											Map.setArmyCount(atkcntry,orgcount);
											Map.setArmyCount(current,1);
											Map.setOwner(current,Map.getOwner(atkcntry));
											Map.setColor(current,Map.getColor(atkcntry));
										}
										else{
											orgcount = orgcount - atkcount;
											leftArmyCount = percentAtkdCount - percentAtkCount;
											Map.setArmyCount(atkcntry,orgcount);
											Map.setArmyCount(current,leftArmyCount) 
										}
									}
								}
								else{
									arrow1.remove();
								}
							}
							atkcntry =null;
						} 
						else if(Map.getOwner(country) != "Neutral") {	
							var audio1 = document.getElementById('soundattacked');
							audio1.play();
							document.getElementById(country).style.display = "block";
							document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + Map.getOwner(country) + "<br /> Army Count : " + Map.getArmyCount(country) + " </p>";
							current = country;				
							Map.R.setStart();
							for (index = 0; index < TerritoryData[current].neighbours.length; index++) {
								Raphael.fn.arrow(ArmyCountCoords[current].x, ArmyCountCoords[current].y, ArmyCountCoords[TerritoryData[current].neighbours[index]].x, ArmyCountCoords[TerritoryData[current].neighbours[index]].y, 15);
							}
							arrow1 = Map.R.setFinish();
							atkcntry = country;
						}

                    }
                }
			st[0].unclick = function(){
				st.toFront();
                TerritoryData[current].text.toFront();
				arrow1.remove();
				
				
			}
				
				st[0].onmouseover = function() {
                    current && (document.getElementById(current).style.display = "");
                    st.animate({
                        fill: st.color,

                    }, 500);

                    document.getElementById(country).style.display = "block";
                    document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + Map.getOwner(country) + "<br /> Army Count : " + Map.getArmyCount(country) + " </p>";
                    current = country;
                    
                }
				
				st[0].onmouseout = function() {
                    st.animate({
                        fill: TerritoryData[current].color,
                    }, 500);
                    document.getElementById(current).style.display = "";
                                        
                };
				
				
				
                TerritoryData[country].text[0].style.cursor = "pointer";

                TerritoryData[country].text[0].onclick = function() {
                    if (Map.stage == "deploy") {
						if(deploycount < 5){
							var a = Map.getArmyCount(country);
							a = a + 1;
							deploycount ++;
							current = country;
							TerritoryData[current].text.attr('text', a);
							TerritoryData[current].armyNum = a;
							document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + Map.getOwner(country) + "<br /> Army Count : " + Map.getArmyCount(country) + " </p>";
						}
						else{
							alert("Deploy Limit Reached");
						}
					}
                    if (Map.stage == "attack") {
						deploycount = 0;
						current = country;
					if (atkcntry != null){
						for (index = 0; index < TerritoryData[atkcntry].neighbours.length; index++) {
							if(current == TerritoryData[atkcntry].neighbours[index]) {
								arrow1.remove();
								atkcount = prompt("Please enter the number of armies to attack", "0");
								orgcount = Map.getArmyCount(atkcntry); 
								atkdcntrycount = Map.getArmyCount(current);
							}
							else{
								arrow1.remove();
							}
						}
						 atkcntry =null;
					} else {
				
						document.getElementById(country).style.display = "block";
						document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + Map.getOwner(country) + "<br /> Army Count : " + Map.getArmyCount(country) + " </p>";
						current = country;

						Map.R.setStart();
						for (index = 0; index < TerritoryData[current].neighbours.length; index++) {

						Raphael.fn.arrow(ArmyCountCoords[current].x, ArmyCountCoords[current].y, ArmyCountCoords[TerritoryData[current].neighbours[index]].x, ArmyCountCoords[TerritoryData[current].neighbours[index]].y, 15);
						}
						arrow1 = Map.R.setFinish();
						atkcntry = country;
					}
                }
            }

                TerritoryData[country].text[0].unclick = function(){
				st.toFront();
                TerritoryData[current].text.toFront();
				arrow1.remove();
			}
				
                TerritoryData[country].text[0].onmouseover = function() {
                    current && (document.getElementById(current).style.display = "");
                    st.animate({
                        fill: st.color,
                     
                    }, 500);

                    document.getElementById(country).style.display = "block";
                    document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + Map.getOwner(country) + "<br /> Army Count : " + Map.getArmyCount(country) + " </p>";
                    current = country;
                    
                };

                TerritoryData[country].text[0].onmouseout = function() {
                    st.animate({
                        fill: TerritoryData[current].color,
                        
                    }, 500);
                    document.getElementById(current).style.display = "";					
                };
				
            })(Map.world[country], country);
        }
    },



    updateMap: function() {

    },



}

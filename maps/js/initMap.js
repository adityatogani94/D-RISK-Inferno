  // -----TO BE DONE------------------
  // CHECK ON DEPLOY MAX COUNT
  // BEAUTIFY SIDEBAR AND BUTTONS
  // UNCLICK HANDLER
  // IMPROVE ARROW TYPE
  // CHECKS TO BE PUT ON STAGES
  // POP UP MENU FOR ATTACK
  // CLIENT - SERVER COMM
  // DATA BINDING
  // GROUP PATH,TEXT - REDUCE SIZE
  // GET USERCOUNT, PLAYER NAME ETC 
  // ---------------------------------

  // INITIALIZE HASHMAP AND FUNCTIONS
  var TerritoryData = {};
  var deploy;
  var attack;
  var commit;
  var next;
  var reset;


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

  // DRAW EACH TERRITROY AND UPDATE HASH MAP 
  window.onload = function() {
    var R = Raphael("paper", 1366, 768);
    R.image("img/bg_image.png",0,0,1366,768);
    var attr = {
      fill: "gray",
      stroke: "#666",
      "stroke-width": 1.5,
      "stroke-linejoin": "round",
    };
    var world = {}
    world.Alaska = R.path(TerritoryPathData['Alaska'].path).attr(attr);
    TerritoryData['Alaska'].path = world.Alaska;
    world.NorthWestTerritory = R.path(TerritoryPathData['NorthWestTerritory'].path).attr(attr);
    TerritoryData['NorthWestTerritory'].path = world.NorthWestTerritory;
    world.Alberta = R.path(TerritoryPathData['Alberta'].path).attr(attr);
    TerritoryData['Alberta'].path = world.Alberta;
    world.Ontario = R.path(TerritoryPathData['Ontario'].path).attr(attr);
    TerritoryData['Ontario'].path = world.Ontario;
    world.Greenland = R.path(TerritoryPathData['Greenland'].path).attr(attr);
    TerritoryData['Greenland'].path = world.Greenland;
    world.Quebec = R.path(TerritoryPathData['Quebec'].path).attr(attr);
    TerritoryData['Quebec'].path = world.Quebec;
    world.WesternUnitedStates = R.path(TerritoryPathData['WesternUnitedStates'].path).attr(attr);
    TerritoryData['WesternUnitedStates'].path = world.WesternUnitedStates;
    world.EasternUnitedStates = R.path(TerritoryPathData['EasternUnitedStates'].path).attr(attr);
    TerritoryData['EasternUnitedStates'].path = world.EasternUnitedStates;
    world.CentralAmerica = R.path(TerritoryPathData['CentralAmerica'].path).attr(attr);
    TerritoryData['CentralAmerica'].path = world.CentralAmerica;
    world.Peru = R.path(TerritoryPathData['Peru'].path).attr(attr);
    TerritoryData['Peru'].path = world.Peru;
    world.Brazil = R.path(TerritoryPathData['Brazil'].path).attr(attr);
    TerritoryData['Brazil'].path = world.Brazil;
    world.Venezuela = R.path(TerritoryPathData['Venezuela'].path).attr(attr);
    TerritoryData['Venezuela'].path = world.Venezuela;
    world.Argentina = R.path(TerritoryPathData['Argentina'].path).attr(attr);
    TerritoryData['Argentina'].path = world.Argentina;
    world.NorthAfrica = R.path(TerritoryPathData['NorthAfrica'].path).attr(attr);
    TerritoryData['NorthAfrica'].path = world.NorthAfrica;
    world.Egypt = R.path(TerritoryPathData['Egypt'].path).attr(attr);
    TerritoryData['Egypt'].path = world.Egypt;
    world.Congo = R.path(TerritoryPathData['Congo'].path).attr(attr);
    TerritoryData['Congo'].path = world.Congo;
    world.EastAfrica = R.path(TerritoryPathData['EastAfrica'].path).attr(attr);
    TerritoryData['EastAfrica'].path = world.EastAfrica;
    world.SouthAfrica = R.path(TerritoryPathData['SouthAfrica'].path).attr(attr);
    TerritoryData['SouthAfrica'].path = world.SouthAfrica;
    world.Iceland = R.path(TerritoryPathData['Iceland'].path).attr(attr);
    TerritoryData['Iceland'].path = world.Iceland;
    world.GreatBritain = R.path(TerritoryPathData['GreatBritain'].path).attr(attr);
    TerritoryData['GreatBritain'].path = world.GreatBritain;
    world.WesternEurope = R.path(TerritoryPathData['WesternEurope'].path).attr(attr);
    TerritoryData['WesternEurope'].path = world.WesternEurope;
    world.NorthernEurope = R.path(TerritoryPathData['NorthernEurope'].path).attr(attr);
    TerritoryData['NorthernEurope'].path = world.NorthernEurope;
    world.SouthernEurope = R.path(TerritoryPathData['SouthernEurope'].path).attr(attr);
    TerritoryData['SouthernEurope'].path = world.SouthernEurope;
    world.Scandinavia = R.path(TerritoryPathData['Scandinavia'].path).attr(attr);
    TerritoryData['Scandinavia'].path = world.Scandinavia;
    world.Madagascar = R.path(TerritoryPathData['Madagascar'].path).attr(attr);
    TerritoryData['Madagascar'].path = world.Madagascar;
    world.Ukraine = R.path(TerritoryPathData['Ukraine'].path).attr(attr);
    TerritoryData['Ukraine'].path = world.Ukraine;
    world.MiddleEast = R.path(TerritoryPathData['MiddleEast'].path).attr(attr);
    TerritoryData['MiddleEast'].path = world.MiddleEast;
    world.Afghanistan = R.path(TerritoryPathData['Afghanistan'].path).attr(attr);
    TerritoryData['Afghanistan'].path = world.Afghanistan;
    world.Ural = R.path(TerritoryPathData['Ural'].path).attr(attr);
    TerritoryData['Ural'].path = world.Ural;
    world.India = R.path(TerritoryPathData['India'].path).attr(attr);
    TerritoryData['India'].path = world.India;
    world.Siam = R.path(TerritoryPathData['Siam'].path).attr(attr);
    TerritoryData['Siam'].path = world.Siam;
    world.China = R.path(TerritoryPathData['China'].path).attr(attr);
    TerritoryData['China'].path = world.China;
    world.Mongolia = R.path(TerritoryPathData['Mongolia'].path).attr(attr);
    TerritoryData['Mongolia'].path = world.Mongolia;
    world.Irkutsk = R.path(TerritoryPathData['Irkutsk'].path).attr(attr);
    TerritoryData['Irkutsk'].path = world.Irkutsk;
    world.Yakutsk = R.path(TerritoryPathData['Yakutsk'].path).attr(attr);
    TerritoryData['Yakutsk'].path = world.Yakutsk;
    world.Siberia = R.path(TerritoryPathData['Siberia'].path).attr(attr);
    TerritoryData['Siberia'].path = world.Siberia;
    world.Kamchatka = R.path(TerritoryPathData['Kamchatka'].path).attr(attr);
    TerritoryData['Kamchatka'].path = world.Kamchatka;
    world.Japan = R.path(TerritoryPathData['Japan'].path).attr(attr);
    TerritoryData['Japan'].path = world.Japan;
    world.Indonesia = R.path(TerritoryPathData['Indonesia'].path).attr(attr);
    TerritoryData['Indonesia'].path = world.Indonesia;
    world.NewGuinea = R.path(TerritoryPathData['NewGuinea'].path).attr(attr);
    TerritoryData['NewGuinea'].path = world.NewGuinea;
    world.WesternAustralia = R.path(TerritoryPathData['WesternAustralia'].path).attr(attr);
    TerritoryData['WesternAustralia'].path = world.WesternAustralia;
    world.EasternAustralia = R.path(TerritoryPathData['EasternAustralia'].path).attr(attr);
    TerritoryData['EasternAustralia'].path = world.EasternAustralia;

    for (id in TerritoryNames) {
      var attr_text = {
        "font-size": 20,
        "font-family": "Century Gothic', CenturyGothic, AppleGothic, sans-serif",
        width: 2
      };
      var textObject = R.text(ArmyCountCoords[id].x, ArmyCountCoords[id].y, 2).attr(attr_text);
      TerritoryData[id].name = id;
      TerritoryData[id].text = textObject;
      TerritoryData[id].color = "gray";
      TerritoryData[id].neighbours = Neighbours[id];
      TerritoryData[id].armyNum = "2";
      TerritoryData[id].owner = "Neutral";
    }


    // FUNCTIONS TO SET OR GET TERRITORY COMPONENTS
    var setColor = function(country, color) {
      TerritoryData[country].path.attr({
        fill: color
      });
      TerritoryData[country].color = color;
    }

    var setArmyCount = function(country, count) {
      TerritoryData[country].text.attr('text', count);
      TerritoryData[country].armyNum = count;
    }

    var getColor = function(country) {
      return TerritoryData[country].color;
    }

    var getArmyCount = function(country) {
      return Number(TerritoryData[country].text[0].textContent);
    }

    var getPathObject = function(country) {
      return TerritoryData[country].path;
    }

    var getTextObject = function(country) {
      return TerritoryData[country].text;
    }

    var getOwner = function(country) {
      return TerritoryData[country].owner;
    }

    var setOwner = function(country, owner) {
      TerritoryData[country].owner = owner;
    }


    // MANAGES STAGES OF A TURN

    var stage = "deploy";
    next = function() {
      if (stage == "deploy") {
        stage = "attack";
        alert("Now proceed to Attack");
      } else if (stage == "attack") {
        stage = "commit";
        alert("Proceed to commit your final turn");
      } else {
        stage = "deploy";
        confirm("Executing your turn.");
      }
    }

    deploy = function(IDS) {
      document.getElementById(IDS).style.backgroundColor = 'green';

      if (stage == "deploy") {
        alert('Click on areas to deploy your army and then click next phase!!');
        //alert('color did not change');
        //alert('color did not change');
      } else {
        alert("First Deploy -> then Attack -> then Commit");
      }
      document.getElementById(IDS).style.backgroundColor = 'white';
    }

    commit = function(IDS) {
      document.getElementById(IDS).style.backgroundColor = 'green';
      if (stage == "commit") {
        alert('Are you sure? if yes click next phase');
      } else {
        alert("First Deploy -> then Attack -> then Commit");
      }
      document.getElementById(IDS).style.backgroundColor = 'white';
    }

    attack = function(IDS) {
      document.getElementById(IDS).style.backgroundColor = 'green';
      if (stage == "attack") {
        alert('click on the areas you want to attack and then click next phase');

      } else {
        alert("In attack issue");
      }
      document.getElementById(IDS).style.backgroundColor = 'white';
    }

    reset = function() {
      stage = "deploy";
    }

    // EVENT HANDLERS

    var current = null;
    var arrow1;
    var arrow2;
    for (var country in world) {
      world[country].color = Raphael.getColor();
      (function(st, country) {
        st[0].style.cursor = "pointer";

        st[0].onclick = function() {
          if (stage == "deploy") {
            var a = getArmyCount(country);
            a = a + 1;
            TerritoryData[current].text.attr('text', a);
            TerritoryData[current].armyNum = a;
            document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + getOwner(country) + "<br /> Army Count : " + getArmyCount(country) + " </p>";
          }
          if (stage == "attack") {
            alert("Need to add pop-up window");
          }
        }

        st[0].onmouseover = function() {
          current && (document.getElementById(current).style.display = "");
          st.animate({
            fill: st.color,

          }, 500);
          R.safari();
          document.getElementById(country).style.display = "block";
          document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + getOwner(country) + "<br /> Army Count : " + getArmyCount(country) + " </p>";
          current = country;
          if (stage == "attack") {
            R.setStart();
            for (index = 0; index < TerritoryData[current].neighbours.length; index++) {
              Raphael.fn.arrow(ArmyCountCoords[current].x, ArmyCountCoords[current].y, ArmyCountCoords[TerritoryData[current].neighbours[index]].x, ArmyCountCoords[TerritoryData[current].neighbours[index]].y, 15);
            }
            arrow1 = R.setFinish();
          }
        }

        st[0].onmouseout = function() {
          st.animate({
            fill: TerritoryData[current].color,
          }, 500);
          document.getElementById(current).style.display = "";
          st.toFront();
          TerritoryData[current].text.toFront();
          R.safari();
          arrow1.remove();
        };

        TerritoryData[country].text[0].style.cursor = "pointer";

        TerritoryData[country].text[0].onclick = function() {
          if (stage == "deploy") {
            var a = getArmyCount(country);
            a = a + 1;
            TerritoryData[current].text.attr('text', a);
            TerritoryData[current].armyNum = a;
            document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + getOwner(country) + "<br /> Army Count : " + getArmyCount(country) + " </p>";
          }
          if (stage == "attack") {
            alert("need to add pop-up window");
          }
        }

        TerritoryData[country].text[0].onmouseover = function() {
          current && (document.getElementById(current).style.display = "");
          st.animate({
            fill: st.color,
            stroke: "#ccc"
          }, 500);
          R.safari();
          document.getElementById(country).style.display = "block";
          document.getElementById(country).innerHTML = "<h2>" + country + "</h2><p>Owner : " + getOwner(country) + "<br /> Army Count : " + getArmyCount(country) + " </p>";
          current = country;
          if (stage == "attack") {
            R.setStart();
            for (index = 0; index < TerritoryData[current].neighbours.length; index++) {
              Raphael.fn.arrow(ArmyCountCoords[current].x, ArmyCountCoords[current].y, ArmyCountCoords[TerritoryData[current].neighbours[index]].x, ArmyCountCoords[TerritoryData[current].neighbours[index]].y, 15);
            }
            arrow2 = R.setFinish();
          }
        };

        TerritoryData[country].text[0].onmouseout = function() {
          st.animate({
            fill: TerritoryData[current].color,
            stroke: "#666"
          }, 500);
          document.getElementById(current).style.display = "";
          st.toFront();
          TerritoryData[current].text.toFront();
          R.safari();
          arrow2.remove();
        };


        //more event handlers
      })(world[country], country);
    }

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

      R.path(
        "M" + x1 + " " + y1 + "L" + x1a + " " + y1a +
        "M" + x1 + " " + y1 + "L" + x1b + " " + y1b +
        "M" + x1 + " " + y1 + "L" + x2 + " " + y2 +
        "M" + x2 + " " + y2 + "L" + x2a + " " + y2a +
        "M" + x2 + " " + y2 + "L" + x2b + " " + y2b
      ).attr(attr_arrow);
    };

  }
var _STRINGS = {
    "Ad": {
        "Mobile": {
            "Preroll": {
                "ReadyIn": "The game is ready in ",
                "Loading": "Your game is loading...",
                "Close": "Close",
            },
            "Header": {
                "ReadyIn": "The game is ready in ",
                "Loading": "Your game is loading...",
                "Close": "Close",
            },
            "End": {
                "ReadyIn": "Advertisement ends in ",
                "Loading": "Please wait ...",
                "Close": "Close",
            },
        },
    },

    "Splash": {
        "Loading": "Loading ...",
        "TapToStart": "TAP TO START",
    },

    "Game": {
        "Score": "Score:",
        "Coins": "Coins:",
        "Shop": "SHOP",
        "Protect": "PROTECT THE BALLOON",
        "Use": "Use",
        "Best": "Best",
        "High": "High",
        "HighScore": "Hi-Score:",
        "Woops": "Whoops!",
        "BuyItems": "Buy Items",
        "ToUnlock": " points to unlock",
        "StartTutorial": "Start the tutorial?",
        // BUTTONS & POPUPS
        "MoreGames": "More Games",
        "Play": "Play",
        "Settings": "Settings",
        "Select": "Select",
        "Selected": "Selected",
        "ShareFacebook": "Share Facebook",
        "GamePause": "Game Pause",
        "GameOver": "Game Over",
        "OK": "OK",
        "Yes": "Yes",
        "No": "No",
    },

    "ItemsBalloon": {
        "1": "Original Balloon",
        "2": "Ombre Balloon",
        "3": "Chevron Balloon",
        "4": "Polca Dot Balloon",
        "5": "Panda Balloon",
        "6": "Donut Balloon",
        "7": "Moustache Balloon",
    },
};

var _LVL = [
      [ 
            {"type":"EntityRectangle","x":60,"y":-470,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-495,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-520,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-545,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-570,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-595,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntityRectangle","x":60,"y":-620,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntityRectangle","x":60,"y":-645,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntityRectangle","x":60,"y":-670,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntityRectangle","x":60,"y":-695,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntityRectangle","x":60,"y":-720,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntityRectangle","x":60,"y":-745,"settings":{"w":420,"h":20,"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [ 
          {"type":"EntityCircle","x":115,"y":-460,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":170,"y":-350,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":280,"y":-350,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":390,"y":-350,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":60,"y":-350,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":225,"y":-460,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":335,"y":-460,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":280,"y":-570,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":170,"y":-570,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":225,"y":-680,"settings":{"checkObstacle":1}},
          {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [
            {"type":"EntityObstacleDynamic","x":276,"y":-460,"settings":{"checkObstacle":1}},{"type":"EntityObstacleDynamic","x":52,"y":-460,"settings":{"checkObstacle":1}},{"type":"EntityObstacleDynamic","x":164,"y":-648,"settings":{"checkObstacle":1}},
            {"type":"EntityObstacleDynamic","x":276,"y":-836,"settings":{"checkObstacle":1}},{"type":"EntityObstacleDynamic","x":52,"y":-836,"settings":{"checkObstacle":1}},        
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [
            {"type":"EntityDiamond","x":45,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":45,"y":-580,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":45,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":205,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":205,"y":-580,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":205,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":365,"y":-740,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":365,"y":-580,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":365,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":45,"y":-740,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":205,"y":-740,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":365,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":45,"y":-420,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":205,"y":-420,"settings":{"checkObstacle":1}},{"type":"EntityDiamond","x":365,"y":-420,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [
            {"type":"EntityPentagon","x":60,"y":-450,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":165,"y":-450,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":270,"y":-450,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":375,"y":-450,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":165,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":215,"y":-556,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":320,"y":-556,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":110,"y":-556,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":268,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntityPentagon","x":215,"y":-760,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
        [
          {"type":"EntityBigPentagon","x":280,"y":-510,"settings":{"checkObstacle":1}},{"type":"EntityBigPentagon","x":60,"y":-510,"settings":{"checkObstacle":1}},{"type":"EntityBigPentagon","x":176,"y":-724,"settings":{"checkObstacle":1}},
          {"type":"EntityBigPentagon","x":280,"y":-938,"settings":{"checkObstacle":1}},{"type":"EntityBigPentagon","x":60,"y":-938,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],    
    
    
    [
          {"type":"EntityBigOval","x":60,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntityBigOval","x":210,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntityBigOval","x":360,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntityBigOval","x":130,"y":-700,"settings":{"checkObstacle":1}},{"type":"EntityBigOval","x":290,"y":-700,"settings":{"checkObstacle":1}},
          {"type":"EntityBigOval","x":210,"y":-900,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],  
    
        [
            {"type":"EntityCircle","x":36,"y":-784,"settings":{"r":180,"checkObstacle":0}},{"type":"EntityCircle","x":412,"y":-784,"settings":{"r":180,"checkObstacle":0}},{"type":"EntityCircle","x":-44,"y":-524,"settings":{"r":180,"checkObstacle":0}},{"type":"EntityCircle","x":364,"y":-516,"settings":{"r":180,"checkObstacle":0}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [
          {"type":"EntityRectangle","x":135,"y":-748,"settings":{"w":25,"h":420,"nColor":"#253D54","isStatic":1,"dynamicType":2,"isObstacle":0,"checkObstacle":0}},{"type":"EntityRectangle","x":360,"y":-748,"settings":{"w":25,"h":420,"nColor":"#253D54","isStatic":1,"dynamicType":2,"isObstacle":0,"checkObstacle":0}},
           {"type":"EntityRectangle","x":165,"y":-348,"settings":{"w":190,"h":20}},{"type":"EntityCircle","x":165,"y":-390,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-390,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-390,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-390,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-390,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-435,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-435,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-435,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-435,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-435,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-525,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-525,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-525,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-525,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-525,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-570,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-570,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-570,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-570,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-570,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-660,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-660,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-660,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-660,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-660,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-705,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-705,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-705,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-705,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-705,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-480,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-480,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-480,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-480,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-480,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":165,"y":-615,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":205,"y":-615,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":245,"y":-615,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":285,"y":-615,"settings":{"checkObstacle":1,"r":15}},{"type":"EntityCircle","x":325,"y":-615,"settings":{"checkObstacle":1,"r":15}},
           {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [
          {"type":"EntityRectangle","x":-15,"y":-800,"settings":{"w":50,"h":480,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":510,"y":-800,"settings":{"w":50,"h":480,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":-15,"y":-800,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":370,"y":-800,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":165,"y":-348,"settings":{"w":220,"h":20,"checkObstacle":1}},{"type":"EntitySmallStars","x":60,"y":-720,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":170,"y":-720,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":280,"y":-720,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":390,"y":-720,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":116,"y":-604,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":230,"y":-604,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":340,"y":-604,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":60,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":170,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":280,"y":-500,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":390,"y":-500,"settings":{"checkObstacle":1}},
          {"type":"EntitySensor","x":0,"y":-290}
    ],
    
      [
            {"type":"EntityRectangle","x":-15,"y":-800,"settings":{"w":50,"h":480,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":515,"y":-800,"settings":{"w":50,"h":480,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":-15,"y":-800,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":375,"y":-800,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":-72,"y":-632,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":436,"y":-552,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":-16,"y":-336,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityRectangle","x":375,"y":-336,"settings":{"w":190,"h":50,"nColor":"#253D54","isStatic":1,"dynamicType":2}},{"type":"EntityPlus","x":416,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":88,"y":-716,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":208,"y":-484,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":168,"y":-740,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":224,"y":-676,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":324,"y":-740,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":76,"y":-564,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":164,"y":-596,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":292,"y":-544,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":112,"y":-460,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":376,"y":-532,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":408,"y":-736,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":244,"y":-788,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":324,"y":-632,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
          [
            {"type":"EntityRectangle","x":0,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","dynamicType":2,"isStatic":1}},{"type":"EntityRectangle","x":480,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","dynamicType":2,"isStatic":1}},{"type":"EntityRectangle","x":220,"y":-800,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":100,"y":-800,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":340,"y":-800,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":100,"y":-690,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":220,"y":-690,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":340,"y":-690,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":100,"y":-580,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":220,"y":-580,"settings":{"checkObstacle":1}},{"type":"EntityRectangle","x":340,"y":-580,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],          
    
    [
            {"type":"EntityRectangle","x":0,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","isStatic":1,"dynamicType":2,"isObstacle":0}},{"type":"EntityRectangle","x":480,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","isStatic":1,"dynamicType":2,"isObstacle":0}},{"type":"EntityCircle","x":370,"y":-656,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":215,"y":-808,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":70,"y":-656,"settings":{"checkObstacle":1}},{"type":"EntityCircle","x":215,"y":-512,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":348,"y":-512,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":220,"y":-660,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":360,"y":-800,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":92,"y":-796,"settings":{"checkObstacle":1}},{"type":"EntitySmallStars","x":96,"y":-508,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],    
    
    [
            {"type":"EntityRectangle","x":0,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","dynamicType":2,"isStatic":1}},{"type":"EntityRectangle","x":480,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","dynamicType":2,"isStatic":1}},{"type":"EntityBigStars","x":260,"y":-468,"settings":{"checkObstacle":1}},{"type":"EntityBigStars","x":240,"y":-892,"settings":{"checkObstacle":1}},{"type":"EntityBigStars","x":72,"y":-684,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],    
    
    [
            {"type":"EntityRectangle","x":0,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","dynamicType":2,"isStatic":1}},{"type":"EntityRectangle","x":480,"y":-800,"settings":{"w":60,"h":450,"nColor":"#253D54","dynamicType":2,"isStatic":1}},{"type":"EntityCircle","x":244,"y":-728,"settings":{"r":10}},{"type":"EntityCircle","x":124,"y":-796,"settings":{"r":10}},{"type":"EntityCircle","x":88,"y":-732,"settings":{"r":10}},{"type":"EntityCircle","x":120,"y":-652,"settings":{"r":10}},{"type":"EntityCircle","x":252,"y":-796,"settings":{"r":10}},{"type":"EntityCircle","x":244,"y":-536,"settings":{"r":10}},{"type":"EntityCircle","x":340,"y":-792,"settings":{"r":10}},{"type":"EntityCircle","x":420,"y":-788,"settings":{"r":10}},{"type":"EntityCircle","x":424,"y":-716,"settings":{"r":10}},{"type":"EntityCircle","x":380,"y":-664,"settings":{"r":10}},{"type":"EntityCircle","x":176,"y":-728,"settings":{"r":10}},{"type":"EntityCircle","x":432,"y":-612,"settings":{"r":10}},{"type":"EntityCircle","x":292,"y":-640,"settings":{"r":10}},{"type":"EntityCircle","x":108,"y":-576,"settings":{"r":10}},{"type":"EntityCircle","x":164,"y":-608,"settings":{"r":10}},{"type":"EntityCircle","x":236,"y":-592,"settings":{"r":10}},{"type":"EntityCircle","x":328,"y":-564,"settings":{"r":10}},{"type":"EntityCircle","x":412,"y":-548,"settings":{"r":10}},{"type":"EntityCircle","x":428,"y":-492,"settings":{"r":10}},{"type":"EntityCircle","x":108,"y":-504,"settings":{"r":10}},{"type":"EntityCircle","x":176,"y":-536,"settings":{"r":10}},{"type":"EntityCircle","x":100,"y":-400,"settings":{"r":10}},{"type":"EntityCircle","x":332,"y":-512,"settings":{"r":10}},{"type":"EntityCircle","x":132,"y":-444,"settings":{"r":10}},{"type":"EntityCircle","x":292,"y":-472,"settings":{"r":10}},{"type":"EntityCircle","x":372,"y":-456,"settings":{"r":10}},{"type":"EntityCircle","x":424,"y":-436,"settings":{"r":10}},{"type":"EntityCircle","x":396,"y":-404,"settings":{"r":10}},{"type":"EntityCircle","x":200,"y":-408,"settings":{"r":10}},{"type":"EntityCircle","x":344,"y":-420,"settings":{"r":10}},{"type":"EntityCircle","x":400,"y":-404,"settings":{"r":10}},{"type":"EntityCircle","x":360,"y":-720,"settings":{"r":10}},{"type":"EntityCircle","x":188,"y":-668,"settings":{"r":10}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],    
    
    [
            {"type":"EntityRectangle","x":60,"y":-260,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-285,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-310,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-335,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-360,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityCircle","x":440,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":76,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":124,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":172,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":220,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":264,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":308,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":352,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityCircle","x":396,"y":-400,"settings":{"r":15,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-430,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-455,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-480,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-505,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-530,"settings":{"w":420,"h":20,"checkObstacle":1}},{"type":"EntityCircle","x":368,"y":-620,"settings":{"r":40,"checkObstacle":1}},{"type":"EntityCircle","x":84,"y":-620,"settings":{"r":40,"checkObstacle":1}},{"type":"EntityCircle","x":232,"y":-620,"settings":{"r":40,"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
    [
            {"type":"EntityRectangle","x":150,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":175,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":200,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":225,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":250,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":275,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":300,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":325,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":375,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityCircle","x":196,"y":-460,"settings":{"r":80,"checkObstacle":1}},{"type":"EntityRectangle","x":150,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":175,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":200,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":225,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":250,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":275,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":300,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":325,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":350,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityCircle","x":116,"y":-656,"settings":{"r":80,"checkObstacle":1}},{"type":"EntityCircle","x":292,"y":-652,"settings":{"r":80,"checkObstacle":1}},{"type":"EntityRectangle","x":375,"y":-484,"settings":{"w":20,"h":20,"checkObstacle":1}},{"type":"EntityRectangle","x":350,"y":-296,"settings":{"w":20,"h":20,"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],      
    
        [
           {"type":"EntityRectangle","x":60,"y":-380,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-380,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-380,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-380,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-380,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-410,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-410,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-410,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-410,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-410,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-440,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-440,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-440,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-440,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-440,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-470,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-470,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-470,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-470,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-470,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-500,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-500,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-500,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-500,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-500,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-530,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-530,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-530,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-530,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-530,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-560,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-560,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-560,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-560,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-560,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-590,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-590,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-590,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-590,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-590,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-620,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-620,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-620,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-620,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-620,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":60,"y":-650,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":142,"y":-650,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":224,"y":-650,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":306,"y":-650,"settings":{"w":80,"h":5,"checkObstacle":1}},{"type":"EntityRectangle","x":388,"y":-650,"settings":{"w":80,"h":5,"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
    [
            {"type":"EntityRectangle","x":188,"y":-268,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":247,"y":-267,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":307,"y":-267,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":367,"y":-267,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":187,"y":-378,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":247,"y":-378,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":307,"y":-378,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":367,"y":-378,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":188,"y":-485,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":190,"y":-592,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":250,"y":-485,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":310,"y":-485,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":370,"y":-485,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":250,"y":-592,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":310,"y":-592,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityRectangle","x":370,"y":-592,"settings":{"w":40,"h":40,"checkObstacle":1}},{"type":"EntityPlus","x":210,"y":-328,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":390,"y":-328,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":270,"y":-328,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":330,"y":-328,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":150,"y":-544,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":150,"y":-652,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":150,"y":-436,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":210,"y":-436,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":270,"y":-436,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":330,"y":-436,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":390,"y":-436,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":210,"y":-544,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":270,"y":-544,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":330,"y":-544,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":390,"y":-544,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":210,"y":-652,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":270,"y":-652,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":330,"y":-652,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":390,"y":-652,"settings":{"checkObstacle":1}},{"type":"EntityPlus","x":150,"y":-328,"settings":{"checkObstacle":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
    [
          {"type":"EntitySmallPentagon","x":-264,"y":-520,"settings":{"checkObstacle":1,"isFall":1}},{"type":"EntitySmallPentagon","x":-460,"y":-756,"settings":{"checkObstacle":1,"isFall":1}},{"type":"EntitySmallPentagon","x":-172,"y":-672,"settings":{"checkObstacle":1,"isFall":1}},{"type":"EntitySmallPentagon","x":548,"y":-868,"settings":{"checkObstacle":1,"isFall":1,"fallLeft":1}},{"type":"EntitySmallPentagon","x":608,"y":-672,"settings":{"checkObstacle":1,"isFall":1,"fallLeft":1}},{"type":"EntitySmallPentagon","x":808,"y":-972,"settings":{"checkObstacle":1,"isFall":1,"fallLeft":1}},{"type":"EntitySmallPentagon","x":-288,"y":-780,"settings":{"checkObstacle":1,"isFall":1}},{"type":"EntitySmallPentagon","x":-416,"y":-584,"settings":{"checkObstacle":1,"isFall":1}},{"type":"EntitySmallPentagon","x":820,"y":-676,"settings":{"checkObstacle":1,"isFall":1,"fallLeft":1}},{"type":"EntitySmallPentagon","x":732,"y":-808,"settings":{"checkObstacle":1,"isFall":1,"fallLeft":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],      
    
    [
          {"type":"EntityCircle","x":188,"y":-852,"settings":{"r":80,"checkObstacle":1}},{"type":"EntityCircle","x":140,"y":-455,"settings":{"r":60,"checkObstacle":1}},{"type":"EntityCircle","x":285,"y":-455,"settings":{"r":60,"checkObstacle":1}},{"type":"EntityCircle","x":344,"y":-572,"settings":{"r":20,"checkObstacle":1}},{"type":"EntityCircle","x":152,"y":-572,"settings":{"r":20,"checkObstacle":1}},{"type":"EntityCircle","x":196,"y":-532,"settings":{"r":20,"checkObstacle":1}},{"type":"EntityCircle","x":248,"y":-500,"settings":{"r":20,"checkObstacle":1}},{"type":"EntityCircle","x":300,"y":-532,"settings":{"r":20,"checkObstacle":1}},{"type":"EntityCircle","x":256,"y":-600,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":228,"y":-600,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":256,"y":-572,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":284,"y":-600,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":256,"y":-628,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":256,"y":-656,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":256,"y":-684,"settings":{"r":10,"checkObstacle":1}},{"type":"EntityCircle","x":190,"y":-320,"settings":{"r":80,"checkObstacle":1}},
          {"type":"EntitySensor","x":0,"y":-290}
    ],    
    
    [
        {"type":"EntityPlus","x":-328,"y":-648,"settings":{"isFall":1}},{"type":"EntityPlus","x":-116,"y":-820,"settings":{"isFall":1}},{"type":"EntityPlus","x":-336,"y":-764,"settings":{"isFall":1}},{"type":"EntityPlus","x":-272,"y":-892,"settings":{"isFall":1}},{"type":"EntityPlus","x":-424,"y":-812,"settings":{"isFall":1}},{"type":"EntityPlus","x":-552,"y":-712,"settings":{"isFall":1}},{"type":"EntityPlus","x":828,"y":-892,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityPlus","x":952,"y":-792,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityPlus","x":1076,"y":-684,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityPlus","x":576,"y":-820,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityPlus","x":812,"y":-764,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityPlus","x":824,"y":-648,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityPlus","x":-212,"y":-736,"settings":{"isFall":1}},{"type":"EntityPlus","x":684,"y":-724,"settings":{"isFall":1,"fallLeft":1}},
        {"type":"EntitySensor","x":0,"y":-290}
    ],    
       
    
    [
            {"type":"EntityBigOval","x":-228,"y":-556,"settings":{"isFall":1}},{"type":"EntityBigOval","x":-404,"y":-696,"settings":{"isFall":1}},{"type":"EntityBigOval","x":840,"y":-740,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityBigOval","x":652,"y":-968,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityBigOval","x":-148,"y":-784,"settings":{"isFall":1}},{"type":"EntityBigOval","x":-260,"y":-972,"settings":{"isFall":1}},{"type":"EntityBigOval","x":548,"y":-784,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntityBigOval","x":664,"y":-588,"settings":{"isFall":1,"fallLeft":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],
    
    [
            {"type":"EntitySmallTriangle","x":-164,"y":-692,"settings":{"isFall":1}},{"type":"EntitySmallTriangle","x":728,"y":-656,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntitySmallTriangle","x":-352,"y":-752,"settings":{"isFall":1}},{"type":"EntitySmallTriangle","x":-564,"y":-624,"settings":{"isFall":1}},{"type":"EntitySmallTriangle","x":-364,"y":-584,"settings":{"isFall":1}},{"type":"EntitySmallTriangle","x":-196,"y":-484,"settings":{"isFall":1}},{"type":"EntitySmallTriangle","x":556,"y":-588,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntitySmallTriangle","x":648,"y":-776,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntitySmallTriangle","x":884,"y":-724,"settings":{"isFall":1,"fallLeft":1}},{"type":"EntitySmallTriangle","x":888,"y":-508,"settings":{"isFall":1,"fallLeft":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ],    
    
    [
          {"type":"EntityCircle","x":-264,"y":-780,"settings":{"r":100,"isFall":1}},{"type":"EntityCircle","x":-360,"y":-500,"settings":{"r":50,"isFall":1}},{"type":"EntityCircle","x":-392,"y":-652,"settings":{"r":30,"isFall":1}},{"type":"EntityCircle","x":-368,"y":-848,"settings":{"r":100,"isFall":1}},{"type":"EntityCircle","x":688,"y":-592,"settings":{"r":100,"isFall":1,"fallLeft":1}},{"type":"EntityCircle","x":632,"y":-440,"settings":{"r":50,"isFall":1,"fallLeft":1}},{"type":"EntityCircle","x":592,"y":-516,"settings":{"r":50,"isFall":1,"fallLeft":1}},{"type":"EntityCircle","x":588,"y":-772,"settings":{"r":30,"isFall":1,"fallLeft":1}},{"type":"EntityCircle","x":-304,"y":-608,"settings":{"r":100,"isFall":1}},{"type":"EntityCircle","x":560,"y":-692,"settings":{"r":100,"isFall":1,"fallLeft":1}},{"type":"EntityCircle","x":716,"y":-768,"settings":{"r":50,"isFall":1,"fallLeft":1}},
            {"type":"EntitySensor","x":0,"y":-290}
    ]
]

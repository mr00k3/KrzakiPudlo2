////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Mythic Metals
  const mythicmetals = [
    'adamantite',
    'aquarium',
    'banglum',
    'carmot',
    'kyber',
    'mythril',
    'orichalcum',
    'osmium',
    'palladium',
    'prometheum',
    'quadrillum',
    'runite',
    'stormyx'
  ];

  const mythicmetals_1 = [
    'morkite',
    'starrite',
  ];

  mythicmetals.forEach((item) => {
    event.custom({
      "type": "techreborn:grinder",
      "power": 3,
      "time": 200,
      "ingredients": [
        {
          "tag": "c:" + item + "_ores"
        }
      ],
      "results": [
        {
          "item": "mythicmetals:raw_" + item,
          "count": 2
        }
      ]
    })
  })

  mythicmetals_1.forEach((item) => {
    event.custom({
      "type": "techreborn:grinder",
      "power": 3,
      "time": 200,
      "ingredients": [
        {
          "tag": "c:" + item + "_ores"
        }
      ],
      "results": [
        {
          "item": "mythicmetals:" + item,
          "count": 2
        }
      ]
    })
  })

})
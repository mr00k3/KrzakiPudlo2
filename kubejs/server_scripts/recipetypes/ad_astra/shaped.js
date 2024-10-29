
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'ad_astra:cheese_block',
      pattern: ['AAA', 'AAA', 'AAA'],
      key: {
        A: 'croptopia:cheese',
      },
      id: 'aof:cheese_block'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});

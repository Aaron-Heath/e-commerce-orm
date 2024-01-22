const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll({
    // be sure to include its associated Products
    include: {
      model: Product,
      as: 'product'
    }
  });
  
  const categories = categoryData.map((category => category.get({plain: true})));

  res.json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      as: 'product'
    }
  });

  const category = categoryData.get({plain: true});
  // be sure to include its associated Products
  res.json(category);

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

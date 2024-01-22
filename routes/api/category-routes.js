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

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create({
    category_name: req.body.category_name,
  });

  const newCategory = categoryData.get({plain: true});
  res.json(newCategory);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  });

  res.json({message: 'category updated!'});
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  console.log('DELETE heard')
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({message:'category deleted'});
    

  } catch (err) {
    res.json({message: err})
  }
;


});

module.exports = router;

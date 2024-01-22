const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tagData = await Tag.findAll({
    include: {
      model: Product,
    }
  });

  const tags = tagData.map(tag => tag.get({plain: true}));

  return res.json(tags)

  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tagData = await Tag.findOne({
    where: {
      id: req.params.id
    }
  });

  const tag = tagData.get({plain: true});

  return res.json(tag);
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTagData = await Tag.create({
    tag_name: req.body.tag_name
  });

  const newTag = newTagData.get({plain:true});
  
  return res.json(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updatedTagData = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  return res.status(200).send();

  } catch (err) {
    console.log(err);
    return res.status(500)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.status(200).send();
  } catch (err) {
    console.log(err);
    return res.send(500);
  }
});

module.exports = router;

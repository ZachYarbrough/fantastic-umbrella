const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbPostData => {
      res.json({
        message: 'success',
        data: dbPostData
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Could not find category with that id.' });
        return;
      }
      res.json({
        message: 'success',
        data: dbPostData
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbPostData => {
      res.json({
        message: 'success',
        data: dbPostData
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if(!dbPostData) {
        res.status(404).json({ message: 'Could not find category with this id.' })
      }
      res.json({
        message: 'success',
        data: dbPostData
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if(!dbPostData) {
        res.status(404).json({ message: 'Could not find category with this id.' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;

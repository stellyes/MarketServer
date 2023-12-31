const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({
        message: "Error: no tag associated with the provided id",
      });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res
        .status(404)
        .json({ message: "Error: No tag associated with the provided id" });
      return;
    }

    res.status(200).json({
      message: `Tag succesfully updated in database with response code ${tagData}`,
      payload: req.body,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res
        .status(404)
        .json({ message: "Error: No tag associated with the provided id" });
      return;
    }

    res.status(200).json({
      message: `Tag succesfully deleted in database with response code ${tagData}`,
      payload: `Tag ID - ${req.params.id}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

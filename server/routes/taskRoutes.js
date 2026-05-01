const express = require("express");

const router = express.Router();

const Task = require("../models/Task");


// CREATE TASK
router.post("/", async (req, res) => {
  try {

    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
});


// GET ALL TASKS
router.get("/", async (req, res) => {
  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
});


// DELETE TASK
router.delete("/:id", async (req, res) => {
  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
});
router.put("/:id", async (req, res) => {
  try {

    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
});

module.exports = router;
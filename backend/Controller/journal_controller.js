const express = require("express");

// MongoDB connection
require("../DB/DBConn/conn");

// MongoDB Schema and model
const Journal = require("../DB/DBmodel/journalSchema");

exports.find = async (req, res) => {
  Journal.find({}, function (err, journals) {
    if (err) {
      res.send("Something went wrong");
    }
    res.json(journals);
  });
};

exports.create = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(422).json({ error: "Field not filled please fill" });
  }

  try {
    const Registered = await Journal.findOne({ title: title });

    if (Registered) {
      return res.status(422).json({ error: "Title Already Exists" });
    }

    const journal = new Journal({ title, content });

    const saved = await journal.save();

    saved
      ? res.status(201).json({ message: "New DB document saved successfully" })
      : res.status(500).json({ message: "New DB saving failed" });
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res) => {
  const dbDocument_id = req.body.journal_id;

  Journal.deleteOne({ _id: dbDocument_id }, function (err, results) {
    if (err) {
      res.send({ message: "Deletion Unsuccessful" });
    }
  });
};

exports.edit = async (req, res) => {
  res.redirect("http://localhost:3000/");
  res.send();
};

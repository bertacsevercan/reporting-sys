const db = require("../models");
const fs = require("fs");
const path = require("path");

const __basedir = path.resolve();

const File = db.file;

exports.upload = (req, res) => {
  File.create({
    userId: req.body.userId,
    type: req.file.mimetype,
    name: req.file.originalname,
    data: fs.readFileSync(__basedir + "/uploads/" + req.file.filename),
  }).then((file) => {
    try {
      /*         fs.writeFileSync(__basedir + '/resources/static/assets/tmp/' + image.name, image.data);
       */
      // exit node.js app
      file.setUsers(file.userId);
      res.json({ msg: "File uploaded successfully!", file: req.file });
    } catch (e) {
      console.log(e);
      res.json({ err: e });
    }
  });
};
/* 
exports.upload = async (req, res) => {
   
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
   
    File.create({
        name: req.file.originalname,
        data: fs.readFileSync(
            __basedir + "/resources/static/assets/uploads/" + req.file.filename
          ),
        userId : req.body.userId
    })
    .then((file)=> {
        fs.writeFileSync(
            __basedir + "/resources/static/assets/tmp/" + file.name,
            file.data
          );
        file.setUsers(file.userId)
        .then(()=> {
            res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.originalname,
              });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        })
    })
    .catch((err) => res.status.send({message: err}))
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
 */

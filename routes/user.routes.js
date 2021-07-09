import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/user.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 },{ name: 'firma', maxCount: 1 }])

  // Retrieve all Books
  router.get("/user/all",[authJwt.verifyToken ], controller.findAll);

  router.get("/user/admin",[authJwt.verifyToken ], controller.findAdmin);

  router.post("/user/create",[cpUpload,authJwt.verifyToken,verifySignUp.checkDuplicateUsernameOrEmail], controller.create);


  router.post("/user/update",[cpUpload,authJwt.verifyToken], controller.update);

  module.exports = router;
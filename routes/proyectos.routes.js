import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const Controller = require("../controllers/proyectos.controller.js");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    // Create a new cargo
    router.post("/proyectos/listar",[cpUpload,authJwt.verifyToken,authJwt.isAdmin], Controller.find);
    // Create a new cargo

    router.post("/proyectos/find",[cpUpload], Controller.findOne); 
    // Create a new cargo
    router.post("/proyectos",[cpUpload,authJwt.verifyToken,authJwt.isAdmin], Controller.create);
  
    // Retrieve all cargos
    router.get("/proyectos",authJwt.verifyToken, Controller.findAll);
  
    // Update a cargo with id
    router.put("/proyectos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.update);
  
    // Delete a cargo with id
    router.post("/proyectos/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.delete);

  
    module.exports = router;
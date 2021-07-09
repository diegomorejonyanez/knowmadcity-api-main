const config = require("../config/config");
const db = require("../models");
const jwt = require("jsonwebtoken");
const User = db.user;
const Op = db.Op;
const bcrypt = require("bcrypt");

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;

  User.findAndCountAll({
    limit: 10000000,
    offset: 0,
    where: {
      [Op.or]: [
        { tipo: "Master" },
        { tipo: "Administrador" }
      ]
    }, // conditions
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Ocurrio un erro al acceder ."
      });
    });
};
exports.findAdmin = (req, res) => {
  const title = req.query.title;

  User.findAndCountAll({
    limit: 10000000,
    offset: 0,
    attributes: ['id','nombre'],
    where: {
      [Op.or]: [
        { tipo: "Master" },
      ]
    }, // conditions
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Ocurrio un erro al acceder ."
      });
    });
};
// Retrieve all Books from the database.
exports.findAllContacto = (req, res) => {
  const title = req.query.title;

  User.findAndCountAll({
    limit: 10000000,
    offset: 0,
    attributes: ['id', 'nombre', 'apellido', 'cargo', 'telefono'],
    where: {}, // conditions
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Ocurrio un erro al acceder ."
      });
    });
};

// Update a Book by the id in the request
exports.updateCanal = (req, res) => {

  const id = req.userId;
  User.update({
    canal: req.body.canal,
    },{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
      } else {
        res.send({
          message: `No puede editar el canal con el id =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el canal con el id=" + id
      });
    });
};


// Update a Book by the id in the request
exports.create = async (req, res) => {
  const body={};
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.imagen= `https://plataformaknowmad.herokuapp.com/public/${filename}`;
    console.log(body.imagen);
  }
  if(req.files['firma']){
    const { firma } = req.files['firma'][0]
    body.firma= `https://plataformaknowmad.herokuapp.com/public/${firma}`;
    console.log(body.imagen);
  }
  body.password = bcrypt.hashSync(req.body.password, 8)
  body.tipo= req.body.tipo;
  body.status= req.body.status;
  body.nombre= req.body.nombre;
  body.email= req.body.email;


  await User.create(body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Book."
    });
    return;
  });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  const id = req.body.id;
  const body={};
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.imagen= `https://plataformaknowmad.herokuapp.com/public/${filename}`;
  }
  if(req.files['firma']){
    const { firma } = req.files['firma'][0]
    body.firma= `https://plataformaknowmad.herokuapp.com/public/${firma}`;

  }
  body.tipo= req.body.tipo;
  body.status= req.body.status;
  body.nombre= req.body.nombre;

  User.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        User.findOne({
          where: {
            id: id
          }
        }).then(user => {

            let token = jwt.sign({ id: user.id,rol: user.tipo, email: user.email,nombre: user.nombre,apellido: user.apellido,imagen: user.imagen}, config.auth.secret, {
              expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
              accessToken: token
            });
          })
          .catch(err => {
            res.status(500).send({ message: err.message });
          });




      } else {
        res.send({
          message: `Error al intentar editar este usuario`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
 
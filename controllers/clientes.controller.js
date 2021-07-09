const bcrypt = require("bcrypt");
const db = require("../models");
const Clientes = db.cliente;
const User = db.user;
const Op = db.Op;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const body={};
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.logo = `https://plataformaknowmad.herokuapp.com/public/${filename}`;  
  }
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.imagen = `https://plataformaknowmad.herokuapp.com/public/${filename}`;  
  }
  body.nombre=req.body.nombre;
  body.direccion=req.body.fundadireccionda;
  body.telefono=req.body.telefono;
  body.fax=req.body.fax;
  body.celular=req.body.celular;
  body.email=req.body.email; 
  body.status=req.body.status; 

 await User.create({
     nombre:req.body.nombre,
     status:"activo",
     tipo:"Cliente",
     imagen:body.logo,
     email:body.email,
     password: bcrypt.hashSync(req.body.password, 8)
 })
    .then(data => {
      res.send(data);
      body.user_id= data.id;
      CrearCliente(body);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    }); 
};
async function CrearCliente(body){
  // Save
  await  Clientes.create(body)
  .then( data => {
  })
  .catch(err => {
    return;
  });
}

exports.findAll = async (req, res) => {
    await  Clientes.findAll({
        limit: 3000000,
        offset: 0,
        where: { }, // conditions
        include: [  
          {
            model:User,
            attributes:['status','imagen']
          }
        ],
        order: [
          ['id', 'DESC'],
        ],
      })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.send(500).send({
            message: err.message || "Some error accurred while retrieving books."
          });
        });
    };


// Update a Book by the id in the request
exports.update = async (req, res) => {
  // Create a Book
  const body={};
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.logo = `https://plataformaknowmad.herokuapp.com/public/${filename}`;  
  }
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.imagen = `https://plataformaknowmad.herokuapp.com/public/${filename}`;  
  }
  body.nombre=req.body.nombre;
  body.direccion=req.body.fundadireccionda;
  body.telefono=req.body.telefono;
  body.fax=req.body.fax;
  body.celular=req.body.celular;
  body.email=req.body.email; 
  body.status=req.body.status; 

    await Clientes.update(body,{
        where: { id: req.body.id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
        User.update(body,{
            where: { id: req.body.user_id }
          })
      } else {
        res.send({
          message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.body.id;
 await Clientes.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cliente borrado satisfactoriamente!"
        });
        User.destroy({
            where: { id: req.body.user_id }
          })
      } else {
        res.send({
          message: `No se pudo borrar el lciente con el id=${id}. Tal vez el  no existe!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el cliente con el id=" + id
      });
    });
};


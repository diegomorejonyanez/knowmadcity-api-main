const bcrypt = require("bcrypt");
const db = require("../models");
const Empresas = db.empresas;
const User = db.user;
const Op = db.Op;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.cliente_id) {
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
  body.nombre=req.body.nombre;
  body.cargo_contacto=req.body.cargo_contacto;
  body.rubro=req.body.rubro;
  body.numero_empleados=req.body.numero_empleados;
  body.procentaje_mujeres=req.body.procentaje_mujeres;
  body.volumen_facturacion=req.body.volumen_facturacion;
  body.direccion=req.body.direccion;
  body.fundada=req.body.fundada;
  
  // Save Book in database
 await Empresas.create(body)
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


exports.findAll = async (req, res) => {
    await  Empresas.findAll({
        limit: 3000000,
        offset: 0,
        where: { }, // conditions
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

    exports.listarEmpresas = async (req, res) => {
      await  Empresas.findAll({
          limit: 3000000,
          offset: 0,
          where: { cliente_id :req.body.cliente_id  }, // conditions
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
// Find a single with an id


// Update a Book by the id in the request
exports.update = async (req, res) => {
  const body={};
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.logo = `https://plataformaknowmad.herokuapp.com/public/${filename}`;  
  }
  body.nombre=req.body.nombre;
  body.cargo_contacto=req.body.cargo_contacto;
  body.rubro=req.body.rubro;
  body.numero_empleados=req.body.numero_empleados;
  body.procentaje_mujeres=req.body.procentaje_mujeres;
  body.volumen_facturacion=req.body.volumen_facturacion;
  body.direccion=req.body.direccion;
  body.fundada=req.body.fundada;
  body.cliente_id=req.body.cliente_id;
    await Empresas.update(body,{
        where: { id: req.body.id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
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
 await Empresas.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cliente borrado satisfactoriamente!"
        });
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


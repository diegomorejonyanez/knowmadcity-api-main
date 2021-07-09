const db = require("../models");
const Proyectos = db.proyectos;
const Empresa = db.empresas;
const Cliente = db.cliente;
const Op = db.Op;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.titulo) {
    res.status(400).send({
      message: "No puede ser vacio!"
    });
    return;
  }
  const body={};
  body.numero=req.body.numero;
  body.titulo=req.body.titulo;
  body.presupuesto=req.body.presupuesto;
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.archivo= `https://plataformaknowmad.herokuapp.com/public/${filename}`;
  }
  if(req.body.proyectos_propuestos){
    body.proyectos_propuestos=req.body.proyectos_propuestos;
  }
  if(req.body.promotores){
    body.promotores=req.body.promotores;
  }
  if(req.body.objetivos){
    body.objetivos=req.body.objetivos;
  }
  if(req.body.meta){
    body.metas=req.body.metas; 
  }
  if(req.body.descripcion_iniciativa){
    body.descripcion_iniciativa=req.body.descripcion_iniciativa; 
  }
  body.descripcion=req.body.descripcion;
  body.justificacion=req.body.justificacion;
  body.empresa_id=req.body.empresa_id;
  body.elabora_id=req.userId;
  body.aprueba_id=req.body.aprueba_id;
  // Save
await Proyectos.create(body)
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


exports.find = async (req, res) => {

await  Proyectos.findAll({
    limit: 3000000,
    offset: 0,
    where: {
    }, 
    include: [  
      {
        model:Empresa,
        where:{ cliente_id:req.body.cliente_id}
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




exports.findOne = async (req, res) => {

  await  Proyectos.findOne({
      where: {
        id :req.body.id
      }, 
      include: [  
        {
          model:Empresa,
        }
      ],
      order: [
        ['id', 'DESC'],
      ],
    })
      .then(data => {
        res.send(data);
        console.log(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving books."
        });
      });
  };


exports.findAll = async (req, res) => {
  const id = req.userId;
await  Proyectos.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {
      uid:id
    }, // conditions
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

  const id = req.body.id;
  const body={};
  body.numero=req.body.numero;
  body.titulo=req.body.titulo;
  body.presupuesto=req.body.presupuesto;
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.archivo= `https://plataformaknowmad.herokuapp.com/public/${filename}`;
  }
  if(req.body.proyectos_propuestos){
    body.proyectos_propuestos=req.body.proyectos_propuestos;
  }
  if(req.body.promotores){
    body.promotores=req.body.promotores;
  }
  if(req.body.objetivos){
    body.objetivos=req.body.objetivos;
  }
  if(req.body.meta){
    body.metas=req.body.metas; 
  }
  if(req.body.descripcion_iniciativa){
    body.descripcion_iniciativa=req.body.descripcion_iniciativa; 
  }
  body.descripcion=req.body.descripcion;
  body.justificacion=req.body.justificacion;
  body.empresa_id=req.body.empresa_id;
  body.elabora_id=req.userId;
  body.aprueba_id=req.body.aprueba_id;
  await Proyectos.update(body,{
    where: { id: id }
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

 await Proyectos.destroy({
    where: { id: req.body.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " borrado satisfactoriamente!"
        });
      } else {
        res.send({
          message: `No se pudo borrar el cargo con el id=${id}. Tal vez el cargo no existe!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el cargo con el id=" + id
      });
    });
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
    Proyectos.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Books were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all books."
      });
    });
};

// Find all published Books
exports.findAllPublished = (req, res) => {
    Proyectos.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};
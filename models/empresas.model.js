module.exports = (sequelize, Sequelize, DataTypes) => {
    const Empresas = sequelize.define(
      "empresa", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
        },  
        nombre: {
          type: DataTypes.STRING(40), 
          unique: false
        },
        cargo_contacto: {
            type: DataTypes.STRING(40), 
            unique: false
        },
        rubro: {
            type: DataTypes.STRING(30),
            unique: false
        },
        logo: {
          type: DataTypes.STRING(160),
          unique: false
        },
        numero_empleados: {
            type: DataTypes.STRING(30),
            unique: false
        },
        procentaje_mujeres: {
            type: DataTypes.STRING(20),
            unique: false
        },
        volumen_facturacion: {
            type: DataTypes.STRING(50),
            unique: false
        },
        direccion: {
            type: DataTypes.STRING(250),
            unique: false
        },
        fundada: {
            type: DataTypes.DATEONLY,
            unique: false
        },
      
        created_at: {
             allowNull: false,
             type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Empresas;
  };
  
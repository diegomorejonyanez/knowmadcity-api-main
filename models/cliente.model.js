module.exports = (sequelize, Sequelize, DataTypes) => {
    const Cliente = sequelize.define(
      "cliente", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
        },  
        logo: {
          type: DataTypes.STRING(150), 
          unique: false
        },
        nombre: {
          type: DataTypes.STRING(255),
          unique: false
        },
        telefono: {
          type: DataTypes.STRING(15),
          unique: false
        },
        fax: {
          type: DataTypes.STRING(15),
          unique: false
        },
        celular: {
          type: DataTypes.STRING(15),
          unique: false
        },
        email: {
          type: DataTypes.STRING(25),
          unique: true
        },
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Cliente;
  };
  
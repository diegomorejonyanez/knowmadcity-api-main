module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  
  /** DATABASE */
  //db: {
  //  DB_HOST: "localhost",
  //  DB_USER: "root",
  //  DB_PASS: "",
  //  DB_NAME: "nmc",
 //   dialect: "mysql",

  //  // pool is optional, it will be used for Sequelize connection pool configuration
  //  pool: {
  //    max: 5,
  //    min: 0,
  //    acquire: 30000,
  //    idle: 10000
  //  }
  //},
 
    /** DATABASE */
  db: {
    DB_HOST: "babej9nkpstdq8y4srbn-mysql.services.clever-cloud.com",
    DB_USER: "udnvp9gid0mevni9",
    DB_PASS: "RRbZZq1yYyg2Zvnkrbr1",
    DB_NAME: "babej9nkpstdq8y4srbn",
    dialect: "mysql",
  
    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};


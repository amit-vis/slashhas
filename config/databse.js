const {Sequelize} = require('sequelize');


// setup the database
const sequelize = new Sequelize("mysql://root:@localhost:3306/interview", {
    logging: false  
});

async function connection(){
    try {
        await sequelize.authenticate();
        console.log("Connection stablished successfully!!")
    } catch (error) {
        console.log("Enable to connect the databse", error)
    }
}

connection();
sequelize.sync({ 
    alter: true
  
  });
  
module.exports = sequelize;
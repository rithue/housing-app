module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.Integer,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
    
    return Role;
};
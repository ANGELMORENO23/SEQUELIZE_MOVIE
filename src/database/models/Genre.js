module.exports = (sequelize, dataTypes) => {
    const alias = 'Genre';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    };
    const config = {
        timestamps: false,
        deconstedAt: false
    }
    const Genre = sequelize.define(alias, cols, config);

    
    return Genre

};
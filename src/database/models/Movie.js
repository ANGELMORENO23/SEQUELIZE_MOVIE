module.exports = (sequelize, dataTypes) => {
    const alias = 'Movie'; 
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: dataTypes.INTEGER,
        genre_id: dataTypes.INTEGER
    };
    const config = {
        timestamps: false,
        deconstedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    return Movie
};
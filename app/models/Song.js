module.exports = (sequelize, Model, DataTypes) => {
  class Song extends Model { }

  Song.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      allowNull: false,
      primaryKey: true
    },
    singer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'song',
    timestamps: false
  });

  return Song;
};

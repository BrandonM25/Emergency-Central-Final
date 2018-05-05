module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: DataTypes.STRING,
        email: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.TINYINT,
        sex: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        emergencyContact: DataTypes.STRING,
        emergrncyNumber: DataTypes.STRING,
        medicalHistory: DataTypes.TEXT,
        currentMedications: DataTypes.TEXT,
        allergies: DataTypes.TEXT,
        doctorName: DataTypes.STRING,
        hospitalChoice: DataTypes.STRING
    })
    return User;
}
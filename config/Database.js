import { Sequelize } from "sequelize";

const db = new Sequelize('book_crud','root','',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+07:00'
});

export default db;
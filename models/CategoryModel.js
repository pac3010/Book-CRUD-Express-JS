import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Category = db.define('categories', {
    name: DataTypes.STRING,
    created_at:{
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIME')
    },
    updated_at:{
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIME')
    }
},{
    freezeTableName:true,
    timestamps:false

});

export default Category;

(async()=>{
    await db.sync();
})();
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Category from "./CategoryModel.js";

const {DataTypes} = Sequelize;

const Book = db.define('books', {
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    image_url:DataTypes.STRING,
    release_year:DataTypes.INTEGER,
    price:DataTypes.STRING,
    total_page:DataTypes.INTEGER,
    thickness:DataTypes.STRING,
    created_at:{
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIME')
    },
    updated_at:{
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIME')
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: Category,
            key: 'id'
        }
    }

}, {
    freezeTableName:true,
    timestamps:false
});

Book.belongsTo(Category, {
    foreignKey: 'category_id'
});

export default Book;

(async()=>{
    await db.sync();
})();
require('dotenv').config();

module.exports={
    PORT: process.env.PORT||5000,
    mongodbURL: process.env.mongodbURL||"mongodb://localhost:27017/ecommerce",
    jwtSecret:process.env.jwtSecrt||"aakash123"
}
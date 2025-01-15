const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser"); // Corrected import (cookies-parser to cookie-parser)
const { PORT } = require("./config/env");
const {authRoutes} =require("./routes/loginRoutes")
const app = express();

app.use(express.json()); // Parse JSON payloads
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(cookieParser()); // Parse cookies

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

app.use('/api', authRoutes);
// app.use('/api', productRoutes);
// app.use('/api', orderRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});


const app = require('./src/app');

require('dotenv').config()

const {PORT} = process.env;

app.listen(PORT || 3000, ()=> {
    console.log(`Server running on port http://localhost:${PORT}`)
}
);

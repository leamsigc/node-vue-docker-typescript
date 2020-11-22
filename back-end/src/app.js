const app = require('express')();
const PORT = 3000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
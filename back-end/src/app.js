const app = require('express')();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
     res.json('hello from the back end hot reloading ');
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
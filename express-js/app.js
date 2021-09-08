const express = require('express');
const app = express();
const PORT = 5050;

app.use(express.static('public'));

app.get('/' , (req,res) => {
    res.send('You can write Calculator or Todo with slash in URL bar after 5050 for visit the projects');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
});
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const posts = require('./routes/api/post');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(cors());

app.use('/api/posts',posts);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+'/public'));
    app.get(/.*/,(req,res)=>{
        res.sendFile(__dirname+'/public/index.html');
    });
}

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});
const express = require('express')

const app = express()
const hbs = require('hbs')

app.set('view engine', hbs);
hbs.registerPartials(__dirname + '/view/partial');

const today = new Date().getHours();
const open = (today >= 8 && today <= 17);


app.use('/assets', [
    express.static(__dirname + '/node_modules/bootstrap/dist/'),
]);


app.get('/home',(req,res)=>{
    (open)? res.status(200).render('index.hbs',{name:"home"}) : res.status(200).end("close");
})
app.get('/ourservices',(req, res)=> {
	(open) ? res.status(200).render('index.hbs',{name:"ourservices"}) : res.status(200).end("close");
});

app.get('/contact', (req, res)=> {
	(open) ? res.status(200).render('index.hbs',{name:"contact"}) : res.status(200).end("close");
});

app.listen( 5000, (err)=>{
    if (err) console.log('server is not runnig')
    else console.log('server is runnig on 5000')
}


)
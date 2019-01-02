const ctrl=require('./controller');
const express=require('express');
const morgan =require('morgan');

const app=express();
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', express.static('api'));
app.use(morgan('dev'));

app.get('/shows', ctrl.getAllShows);
app.post('/shows', ctrl.updateShow);
app.get('/shows/:id/:name',ctrl.getShowByIdName);
app.get('*',ctrl.mainMenu)

app.listen(port,
    ()=>console.log('Express server ready for requests on:', port))
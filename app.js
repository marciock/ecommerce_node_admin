const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressEjsLayouts=require('express-ejs-layouts')
//rotas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testeRouter=require('./routes/teste');
//rotas de produtos
const listaProdutosRouter=require('./routes/produtos/lista');
const addProdutosRouter=require('./routes/produtos/add');
//rotas de marcas
const listaMarcasRouter=require('./routes/marcas/lista');
const addMarcasRouter=require('./routes/marcas/add');


//

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// alias rota
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teste',testeRouter);
//middleware produtos
app.use('/produtos',listaProdutosRouter);
app.use('/add_produtos',addProdutosRouter);
//middleware marcas
app.use('/marcas',listaMarcasRouter);
app.use('/add_marcas',addMarcasRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

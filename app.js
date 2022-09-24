var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var catalogsRouter = require('./routes/catalogs');
var productsRouter = require('./routes/products');
var shopRouter = require('./routes/shop');
var userAdminRouter = require('./routes/user');
var revRouter = require('./routes/review');
var API_userRouter = require('./routes/API_users');
var API_productRouter = require('./routes/API_product');
var API_reviewRouter = require('./routes/API_review');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// gọi catalogsRouter
app.use('/catalogs', catalogsRouter);
// gọi productsRouter
app.use('/admin', productsRouter);
// gọi shopRouter
app.use('/shop', shopRouter);
//  gọi userAdminRouter
app.use('/user', userAdminRouter);
// gọi revRouter
app.use('/rev', revRouter);

// gọi API user
app.use('/userapi', API_userRouter);
// gọi API products
app.use('/productsapi', API_productRouter);
// gọi API review
app.use('/revapi', API_reviewRouter);

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

const express = require('express');
const app = express();

app.use(require('../Routes/userRoute'));
app.use(require('../Routes/loginRoute'));
app.use(require('../Routes/buqueRoute'));
app.use(require('../Routes/containerRoute'));
app.use(require('../Routes/cargaRoute'));
app.use(require('../Routes/productRoute'));
app.use(require('../Routes/companyRoute'));
app.use(require('../Routes/scheduleRoute'));
app.use(require('../Routes/ExcelSheetRoute'));
app.use(require('../Routes/documentRoute'));

module.exports = app;
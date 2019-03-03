const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', 8000);

app.use(morgan('dev'));
app.use(require('./routes/index'));
app.listen(app.get('port'), () => {
    console.log('server running on port: ', app.get('port'));
})
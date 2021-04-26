let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app);
let port = process.env.port || 3000;
let info = require('./routes/info');
let performance = require('./routes/performance');

app.use('/info', info);
app.use('/performance', performance);
app.use('/', express.static('./pages/root'));

app.listen(port, () => {
    console.log('App listening at http://localhost:3000');
});

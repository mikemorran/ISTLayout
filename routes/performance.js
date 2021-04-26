let express = require('express');
let router = express.Router();

router.use((req, res, next) => {
    console.log(req.url + "@" + Date.now());
    next();
});

router
    .use('/', express.static('./pages/performance/root'));
    // .route('/')
    // .get((req, res) => {
    //     res.send('PERFORMANCE LANDING PAGE');
    // });

router
    .use('/login', express.static('./pages/performance/login'));

router
    .use('/performer/:userid', express.static('./pages/performance/performer-userid'));

router
    .use('/audience', express.static('./pages/performance/audience'));

router
    .use('/audience/:userid', express.static('./pages/performance/audience-userid'));

module.exports = router;
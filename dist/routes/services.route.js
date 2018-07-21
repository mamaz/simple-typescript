var express = require('express');
var router = express.Router();
/*
  /services
*/
router.get('/', function (req, res, next) {
    res.send('/services');
});
module.exports = router;
//# sourceMappingURL=services.route.js.map
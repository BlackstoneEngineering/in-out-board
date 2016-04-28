var express = require('express');
var router = express.Router();

var employees = {person1:"mac address 1",
				 person2:'mac address 2'};

var btn =  '<div class="onoffswitch">
		        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
		        <label class="onoffswitch-label" for="myonoffswitch">
		            <span class="onoffswitch-inner"></span>
		            <span class="onoffswitch-switch"></span>
		        </label>
		    </div>';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'In / Out Board',
						people: employees,
						button: btn});
});

module.exports = router;

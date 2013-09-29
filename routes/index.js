var testdata = require('../model/index');



exports.index = function (req, res) {    

	 console.log("index.js - routes");

	 testdata.getTestData(function(err,theData){

	 	if (err){
			console.log("ERROR : " + err);
			// TODO: handle Error
		} else {
	 		console.log(theData);
	 		res.render('index',theData);
	 	}

		});
};

exports.test = function (req, res) {   
	res.render("test",{title:"test"});
}

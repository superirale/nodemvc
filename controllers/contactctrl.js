var Contact = require('../models/').Contact;


exports.All = function (req, res) {
	Contact.findAll({})
      .then(function (contacts) {
      	var data = {'status': "success", "status_code": 200, 'data': contacts};
        res.status(200).json(data);
      })
      .catch(function (error) {
      	var data = {'status': "error", "status_code": 500, "data": error};
        res.status(500).json(data);
      });
}
exports.Save = function (req, res) {

    	Contact.create(req.body)
    	.then(function(contact){
    		var data = {'status': "success", "status_code": 200, 'data': contact};
        	res.status(200).json(data);
    	})
    	.catch(function(error){
    		var data = {'status': "error", "status_code": 500, "data": error};
        	res.status(500).json(data);
    	});
}

exports.Update = function (req, res) {
		console.log(req.body);
		Contact.update(req.body, {
		  where: {
		  	id: req.params.id
		  }
		})
		.then(function(contact){
    		var data = {'status': "success", "status_code": 200, 'data': contact};
        	res.status(200).json(data);
    	})
    	.catch(function(error){
    		var data = {'status': "error", "status_code": 500, "data": error};
        	res.status(500).json(data);
    	});
}
exports.Show = function (req, res) {
	Contact.findById(req.params.id)
	.then(function(contact){
    		var data = {'status': "success", "status_code": 200, 'data': contact};
        	res.status(200).json(data);
    	})
    	.catch(function(error){
    		var data = {'status': "error", "status_code": 500, "data": error};
        	res.status(500).json(data);
    	});

}
exports.Remove = function (req, res) {
	console.log(req.params.id);
	Contact.destroy({
		  where: {
		    id: req.params.id
		  }
		})
	.then(function(contact){
    		var data = {'status': "success", "status_code": 200, 'data': contact};
        	res.status(200).json(data);
    	})
    	.catch(function(error){
    		var data = {'status': "error", "status_code": 500, "data": error};
        	res.status(500).json(data);
    	});
}
exports.Export = function (req, res) {

	Contact.findAll({})
    .then(function (contacts) {
    	var csvFile = "";
    	// console.log(contacts);
  //
		var headers = [];

        for (key in contacts[0].dataValues) {
            headers.push(key);
        }
        headers.join();
        csvFile += headers;


        for (var i = contacts.length - 1; i >= 0; i--) {
	       	var tmpValues = [];

	       	for (key in contacts[i].dataValues){
	        	tmpValues.push(contacts[i].dataValues[key]);
	        }
	        csvFile += tmpValues.join() + "\n";
        }

	   	res.setHeader('Content-disposition', 'attachment; filename=contacts-'+Date.now()+'.csv');
		res.set('Content-Type', 'text/csv');
		res.status(200).send(csvFile);


		})
       .catch(function (error) {
      	var data = {'status': "error", "status_code": 500, "data": error};
        res.status(500).json(data);
      });
}

exports.Import = function (req, res) {
		res.status(200).json(req.body);
}
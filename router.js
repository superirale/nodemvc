var IgController = require('./controllers/instagramctrl');
var ContactController = require('./controllers/contactctrl');

// Routes
module.exports = function(app){
    // Main Routes
    app.get('/', IgController.media);
    app.get('/contacts', ContactController.All);
    app.get('/contacts/:id', ContactController.Show);
    app.post('/contacts', ContactController.Save);
    app.put('/contacts/:id', ContactController.Update);
    app.delete('/contacts/:id', ContactController.Remove);
    app.get('/file/export/contacts', ContactController.Export);
    app.post('/file/import/contacts', ContactController.Import);
};
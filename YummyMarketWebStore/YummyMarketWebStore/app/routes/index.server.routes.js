// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Mount the 'index' controller's 'render' method
    app.get('/', index.render);
    //app.post('/', index.showFeedbackpage);
    ////redner registration.ejs if a get request is made to /registration path
    //app.get('/registration', index.renderRegistration);
    //app.post('/registration', index.registerUser);

    //////renders add_user.ejs if a get request is made to /add_user path
    //app.get('/feedback', index.renderFeedback);
    //app.post('/feedback', index.updatFeedback);

    //app.get('/shawallfeedback', index.showallFeedback);
    //////renders read_user.ejs if a get request is made to /read_user path
    ////app.get('/read_user', index.renderReadUser);


};
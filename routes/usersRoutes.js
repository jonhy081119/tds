const UsersController = require('../controllers/usersController');
const passport = require('passport');

module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
    app.get('/api/users/findById/:id', passport.authenticate('jwt', {session: false}), UsersController.findById);
    app.get('/api/users/findDeliveryMen', passport.authenticate('jwt', {session: false}), UsersController.findDeliveryMen);
    app.get('/api/users/getAdminsNotificationTokens', passport.authenticate('jwt', {session: false}), UsersController.getAdminsNotificationTokens);

    // GUARDAR DATOS
    app.post('/api/users/create', upload.array('image', 1), UsersController.registerWithImage);
  //  app.post('/api/users/create', upload.array('image', 1), UsersController.registerWithImage);//reporte
    app.post('/api/users/ registerReports' , passport.authenticate('jwt', {session: false}),UsersController. registerReports);
    //reprote   , passport.authenticate('jwt', {session: false})
    app.post('/api/users/login', UsersController.login);
    app.post('/api/users/logout', UsersController.logout);
    app.post('/api/users/createEncargado', upload.array('image',1), UsersController.registerWithImageEncargado);
    app.post('/api/users/createAdmin', upload.array('image',1), UsersController.registerWithImageAdmin);

    // ACTUALIZAR DATOS
    app.put('/api/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), UsersController.update);
    app.put('/api/users/updateNotificationToken', UsersController.updateNotificationToken);
}
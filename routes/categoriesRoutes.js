const CategoriesController = require('../controllers/categoriesController');
const passport = require('passport');

module.exports = (app) => {

    /*
    * GET ROUTES
    */
   app.get('/api/categories/getAll', passport.authenticate('jwt', {session: false}), CategoriesController.getAll);
   app.get('/api/categories/findByStatus/:status', passport.authenticate('jwt', {session: false}), CategoriesController.findByStatus);
    /*
    * POST ROUTES
    */
   app.post('/api/categories/create', passport.authenticate('jwt', {session: false}), CategoriesController.create);

   app.post('/api/categories/createReport',passport.authenticate('jwt', {session: false}), CategoriesController.createReport);


   app.put('/api/categories/updateToDispatched', passport.authenticate('jwt', {session: false}), CategoriesController.updateToDispatched);
}
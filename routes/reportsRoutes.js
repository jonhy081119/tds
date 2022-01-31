const ReportsController = require('../controllers/reportsController');
const passport = require('passport');

module.exports = (app) => {

    /*
    * GET ROUTES
    */
   app.get('/reports/getAll', passport.authenticate('jwt', {session: false}), ReportsController.getAll);

    /*
    * POST ROUTES
    */
   app.post('/api/reports/create', ReportsController.create);

   // passport.authenticate('jwt', {session: false}),
}
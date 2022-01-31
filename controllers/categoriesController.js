const Category = require('../models/category');

module.exports = {

    async getAll(req, res, next) {

        try {
            const data = await Category.getAll();
            console.log(`Categorias ${JSON.stringify(data)}`);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error ${error}`);    
            return res.status(501).json({
                message: 'Hubo un error al tratar de obtener las categorias',
                error: error,
                success: false
            })
        }

    },

    async create(req, res, next) {
        try {
            const category = req.body;
            console.log(`Categoria enviada: ${category}`);

            const data = await Category.create(category);

            return res.status(201).json({
                message: 'La categoria se creo correctamente',
                success: true,
                data: data.id
            });

        } 
        catch (error) {
            console.log(`Error: ${error}`);    
            return res.status(501).json({
                message: 'Hubo un error al crear la categoria',
                success: false,
                error: error
            });
        }
    },
    async createReport(req, res, next) {
        try {
            let reports = req.body;
            reports.status = 'ENTREGADO';
            console.log(`Categoria enviada: ${reports}`);

            const data = await Category.createReport(reports);

            return res.status(201).json({
                message: 'Reporte se creo Exitosamente',
                success: true,
                data: data.id
            });

        } 
        catch (error) {
            console.log(`Error: ${error}`);    
            return res.status(501).json({
                message: 'Hubo un error al crear Reporte',
                success: false,
                error: error
            });
        }
    },





    async findByStatus(req, res, next) {

        try {
            const status = req.params.status;
            const data = await Category.findByStatus(status);
            console.log(`Status ${JSON.stringify(data)}`);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error ${error}`);    
            return res.status(501).json({
                message: 'Hubo un error al tratar de obtener las ordenes por estado',
                error: error,
                success: false
            })
        }

    },


    async updateToDispatched(req, res, next) {
        try {
            
            let reports = req.body;
            //reports.status = 'ENTREGADO';
            reports.status = 'ATENDIDO';
            await Category.update();
            

            return res.status(201).json({
                success: true,
                message: 'Reporte actualizado correctamente',
            });

        } 
        catch (error) {
            console.log(`Error ${error}`);    
            return res.status(501).json({
                success: false,
                message: 'Hubo un error al actualizar el reporte',
                error: error
            });
        }
    },



}
const db = require('../config/config');

const Reports = {};

Reports.getAll = () => {

    const sql = `
        SELECT
            id,
            name,
            description
        FROM
            categories
        ORDER BY
            name
    `;

    return db.manyOrNone(sql);
}
/*
Reports.create = (Reports) => {
    const sql = `
    INSERT INTO
        categories(
            name,
            description,
            created_at,
            updated_at
        )
    VALUES ($1, $2, $3, $4) RETURNING id
    `;
    return db.oneOrNone(sql, [
        category.name,
        category.description,
        new Date(),
        new Date()
    ]);
}*/


Reports.createReport = (reports) => {
    const sql = `
    INSERT INTO
        reports(
           name,
           date,
           reports,
           description
        )
    VALUES($1, $2, $3, $4) RETURNING id
    `;

    return db.oneOrNone(sql, [
        reports.name,
        reports.date,
        reports.reports,
        reports.description
    ]);
}
//fin de reportes


module.exports = Reports;
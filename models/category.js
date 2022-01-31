const db = require('../config/config');

const Category = {};

Category.getAll = () => {

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

Category.create = (category) => {
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
}
    Category.createReport = (reports) => {
    const sql = `
    INSERT INTO 
        reports(
           name,
           status,
           date,
           reports,
           description,
           created_at,
           updated_at
        )
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id
    `;

    return db.oneOrNone(sql, [
        reports.name,
        reports.status,
        reports.date,
        reports.reports,
        reports.description,
        new Date(),
        new Date()
    ]);

}


Category.findByStatus = (status) => {

    const sql = `
    SELECT
	R.id,
	R.name,
	R.status,
	R.reports,
	R.description,
	R.date
FROM
	reports AS R
WHERE
	status = $1
    `;

    return db.manyOrNone(sql, status);

}
Category.update = (reports) => {
    const sql = `
    UPDATE
        reports
    SET
        status = $2, 
	    updated_at = $3
    WHERE
        id = $1
    `;
    return db.none(sql, [
        reports.id,
        reports.status,
        new Date()
    ]);
}









module.exports = Category;
var knex=require('knex')({
    client:"mysql",
    connection:{
        host: 'localhost',
        user: 'root',
        password: 'Rohit@22',
        database: 'rohit'
    }
})
knex.schema.createTable('user',(table)=>{
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
    table.string('status').defaultTo('user');
}).then(()=>{
    console.log('user table is created sucessfully')
}).catch((err)=>{
    console.log('user table is alredy exists..........')
})

module.exports=(knex);
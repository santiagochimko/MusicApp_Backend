const knex = require("knex")({
  client: "pg",
  connection: {
    host: "ep-tight-hill-04275720.us-east-2.aws.neon.tech",
    port: 5432,
    user: "GonBac",
    password: "dhrUuBFS8q6E",
    database: "proyecto_final",
    ssl: true,
    sslmode: "verify-full",
  },
});

module.exports = { knex };
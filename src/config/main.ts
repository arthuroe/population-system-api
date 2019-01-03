const config = {

    // Port
    port: process.env.PORT ||  3000,

    // Database
    db: 'mongodb://localhost/population',

    // test
    test_env: 'test',
    test_db: 'mongodb://localhost/population-test',
    test_port: 3001
}

export default config;
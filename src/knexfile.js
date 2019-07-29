module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: `${__dirname}/db/sqlite3/development-restaurant.db3`,
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: `${__dirname}/db/sqlite3/production-restaurant.db3`,
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: `${__dirname}/db/sqlite3/test-restaurant.db3`,
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds`,
    },
  },
};

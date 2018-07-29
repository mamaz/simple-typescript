import * as Sequelize from 'sequelize';

class Database {
  private dbname: string;
  private username: string;
  private password: string;
  private sequelize: Sequelize.Sequelize;

  constructor(dbname: string, username: string, password: string, options = {}) {
    this.dbname = dbname;
    this.username = username;
    this.password = password;
    const defaultOptions = {
      dialect: 'mysql',
      host: 'localhost',
      operatorsAliases: false,
      pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0
      }
    };
    this.sequelize = new Sequelize(
      this.dbname,
      this.username,
      this.password,
      defaultOptions
    );
  }

  public async connect() {
    return this.sequelize.authenticate();
  }
}

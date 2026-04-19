"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users/users.entity");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'your_password',
    database: 'your_db',
    entities: [users_entity_1.User],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});

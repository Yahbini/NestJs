import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3307,
    "username": "root",
    "password": "",
    "database": "nest_demo",
    "synchronize": false,
    "entities": ["./entities/*.entity.ts"]
})
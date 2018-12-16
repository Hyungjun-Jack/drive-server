import { ConnectionOptions } from "typeorm";

const connectionOptions:ConnectionOptions = {
    type:"postgres",
    database:"drive",
    synchronize:true,
    logging:true,
    entities:["entities/**/*.*"],
    host:process.env.DB_ENDPOINT,
    port:parseInt(process.env.DB_PORT || "", 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};

export default connectionOptions;

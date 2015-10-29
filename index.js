/**
 * Created by nuoli on 29/10/15.
 */

import config from './config';
import mongoose from 'mongoose';
import fs from 'fs';

let mongo = config.mongo;

mongoose.connect(mongo.db, {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
});

mongoose.connection.on('connecting', function () {
    console.info('Connecting database to ' + mongo.db);
});
mongoose.connection.on('error', function (err) {
    console.error(err);
    console.info('Exit process');
    process.exit(1);
});
mongoose.connection.on('disconnected', function () {
    console.error('Database disconnected');
    console.info('Exit process');
    process.exit(1);
});
mongoose.connection.on('connected', function () {
    console.log('Database connected to ' + mongo.host + '/' + mongo.database);

    if (process.argv.length <= 2) {
        console.error('need absolute dir path');
        return;
    }
    const dir = process.argv[2];
    console.log(dir);
    fs.readdirSync(dir).forEach(function (file) {
        console.log(file);
    });

});
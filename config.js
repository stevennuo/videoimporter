/**
 * Created by nuoli on 29/10/15.
 */

export default {
    mongo: {
        database: "importer",
        host: '10.8.8.8',
        get db () { return "mongodb://" + this.host + this.database }
    }
}
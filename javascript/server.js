class Server {

    post(key, data) {
        let newData = JSON.stringify(data);
        database.set(key, newData);
    }

    get(key) {
        let newObj = JSON.parse(database.get(key))
        return newObj;
    }

    delete(key) {
        database.remove(key);
    }
}
var server = new Server();
class Database {
    set(key, data) {
        localStorage.setItem(key, data);
    };
    get(key) {
        return localStorage.getItem(key);
    }
    remove(key) {
        localStorage.removeItem(key);
    };
}
var database = new Database();

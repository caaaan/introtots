"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const path_1 = __importDefault(require("path"));
const data_js_1 = __importDefault(require("./data.js"));
const app = (0, express_1.default)();
const port = 3000;
// Serve static files from the "dist" directory / + '/dist'
//app.use(express.static(__dirname+"/media"));
app.use('/media', express_1.default.static(path_1.default.join(process.cwd(), '/dist/media/')));
app.use(express_1.default.static(__dirname));
console.log(__dirname + "!!!!");
console.log(process.cwd() + "!!!!");
//app.use(express.static(path.join(__dirname, '../media')));
app.use('/routes', routes_1.default);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'index.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
console.log("hello world!");
//console.log(PlaylistData);
let items = [];
for (const obj of data_js_1.default) {
    //console.log(obj);
    items.push(obj);
    //items.push({...JSON.parse(obj)});
}
for (const obj of items) {
    console.log(obj.src);
}
app.get('/media', (req, res) => {
    // let imageSrc = items[0].src; // Your logic to get the image URL
    //res.json({ src: imageSrc });
    res.json(items[0]);
});
//imagelerin olduğu path'İ static olarak dışarıya açmaya bak
//# sourceMappingURL=app.js.map
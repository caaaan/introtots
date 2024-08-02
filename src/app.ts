import express from 'express';
import routes from './routes/routes';
import path from 'path';
import PlaylistData from "./data.js";

type media = {id: number, src: string, duration: number, type: string};

const app = express();
const port = 3000;

// Serve static files from the "dist" directory / + '/dist'
//app.use(express.static(__dirname+"/media"));

app.use('/media', express.static(path.join(process.cwd(), '/dist/media/')));
app.use(express.static(__dirname ));
console.log(__dirname + "!!!!");
console.log(process.cwd() + "!!!!");
//app.use(express.static(path.join(__dirname, '../media')));
app.use('/routes', routes);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
console.log("hello world!");

//console.log(PlaylistData);
let items: media[] = [];

for (const obj of PlaylistData){
    //console.log(obj);
    items.push(obj);
    //items.push({...JSON.parse(obj)});
}
for (const obj of items){
    console.log(obj.src);
}


app.get('/media', (req, res) => {
   // let imageSrc = items[0].src; // Your logic to get the image URL
    //res.json({ src: imageSrc });
    res.json(items[0]);
  });

  //imagelerin olduğu path'İ static olarak dışarıya açmaya bak
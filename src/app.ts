import express from 'express';
import path from 'path';
import PlaylistData from "./data.js";

type media = {id: number, src: string, duration: number, type: string};

const app = express();
const port = 3000;


app.use('/media', express.static(path.join(process.cwd(), '/media/')));
app.use(express.static(__dirname ));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


let items: media[] = [];

for (const obj of PlaylistData){
    items.push(obj);
}
/*
for (const obj of items){
    console.log(obj.src);
}
*/


app.get('/media', (req, res) => {
    res.json(items);
  });

  //imagelerin olduğu path'İ static olarak dışarıya açmaya bak
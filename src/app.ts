import express from 'express';
import path from 'path';
import PlaylistData from "./data.js";

type media = {id: number, src: string, duration: number, type: string};

const app = express();
const port = 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
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
    let imageSrc = items[0].src; // Your logic to get the image URL
    res.json({ src: imageSrc });
  });

  //imagelerin olduğu path'İ static olarak dışarıya açmaya bak
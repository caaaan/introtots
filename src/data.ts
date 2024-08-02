type media = {id: number, src: string, duration: number, type: string};
const PlaylistData: media[] = [
    {
      id: 1,
      src: "http://localhost:3000/media/IMG_7276-transformed.jpeg",
      duration: 5000,
      type: "image"
    },
    {
      id: 2,
      src: "http://localhost:3000/media/IMG_4725.JPG",
      duration: 10000,
      type: "image"
    },
    {
      id: 3,
      src: "http://localhost:3000/media/daft-punk-alive-1997-vinyl.jpg",
      duration: 5000,
      type: "image"
    }
  ];
export default PlaylistData

//burdan öğrenilecek dosya src'sini kodla server'ın çalıştığı url olarak değiştirmek gerekiomuş
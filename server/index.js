const express = require('express');
const path = require('path');

const app = express();
// const staticFilesPath = path.resolve(__dirname, process.env.STATIC_FILES_PATH);
const staticFilesPath = path.resolve(__dirname, './public');
app.use('/', express.static(staticFilesPath));

app.use("/dogsList", async (req, res) => {
  res.send([
    {
      "id": 1,
      "picUrl": "/images/bulldog-ingles.jpg",
      "title": "Bulldog Ingles",
      "selected": false
    },
    {
      "id": 2,
      "picUrl": "/images/caniche.jpg",
      "title": "Caniche",
      "selected": false
    },
    {
      "id": 3,
      "picUrl": "/images/chihuahua.jpg",
      "title": "Chihuahua",
      "selected": false
    },
    {
      "id": 4,
      "picUrl": "/images/Chow_Chow.jpg",
      "title": "Chow-Chow",
      "selected": false
    },
    {
      "id": 5,
      "picUrl": "/images/doberman.jpg",
      "title": "Doberman",
      "selected": false
    },
    {
      "id": 6,
      "picUrl": "/images/husky-m.jpg",
      "title": "Husky",
      "selected": false
    },
    {
      "id": 7,
      "picUrl": "/images/Labrador retriever.jpg",
      "title": "Labrador Retriever",
      "selected": false
    },
    {
      "id": 8,
      "picUrl": "/images/Pastor aleman.jpg",
      "title": "Pastor Aleman",
      "selected": false
    },
    {
      "id": 9,
      "picUrl": "/images/pomerania.jpg",
      "title": "Pomerania",
      "selected": false
    },
    {
      "id": 10,
      "picUrl": "/images/Rottweiler.jpg",
      "title": "Rottweiler",
      "selected": false
    },
    {
      "id": 11,
      "picUrl": "/images/shih_tzu.jpg",
      "title": "Shih Tzu",
      "selected": false
    },
    {
      "id": 12,
      "picUrl": "/images/Short-haired-Dachshund.jpg",
      "title": "Dachshund",
      "selected": false
    }
  ]);
});

app.use("/catsList", async (req, res) => {
  res.send([
    {
      "id": 13,
      "picUrl": "/images/Egyptian Mau.jpg",
      "title": "Egyptian Mau",
      "selected": false
    },
    {
      "id": 14,
      "picUrl": "/images/gato balinés.jpg",
      "title": "Gato Balinés",
      "selected": false
    },
    {
      "id": 15,
      "picUrl": "/images/gato ragdoll.jpg",
      "title": "Gato Ragdoll",
      "selected": false
    },
    {
      "id": 16,
      "picUrl": "/images/gato_esfinge.jpg",
      "title": "Gato Esfinge",
      "selected": false
    },
    {
      "id": 17,
      "picUrl": "/images/gato-bosque-de-Noruega.jpg",
      "title": "Gato Bosque De Noruega",
      "selected": false
    },
    {
      "id": 18,
      "picUrl": "/images/gato-devon-rex.jpg",
      "title": "Gato Devon Rex",
      "selected": false
    },
    {
      "id": 19,
      "picUrl": "/images/gato-exotico.jpg",
      "title": "Gato Exótico",
      "selected": false
    },
    {
      "id": 20,
      "picUrl": "/images/gato-habana.jpg",
      "title": "Gato Habana",
      "selected": false
    },
    {
      "id": 21,
      "picUrl": "/images/gato-himalayo.jpg",
      "title": "Gato Himalayo",
      "selected": false
    },
    {
      "id": 22,
      "picUrl": "/images/gato-manx.jpg",
      "title": "Gato Manx",
      "selected": false
    },
    {
      "id": 23,
      "picUrl": "/images/gato-somalí.jpg",
      "title": "Gato Somalí",
      "selected": false
    },
    {
      "id": 24,
      "picUrl": "/images/oriental pelo corto.jpg",
      "title": "Gato Oriental Pelo Corto",
      "selected": false
    }
  ]);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
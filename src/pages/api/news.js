
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://news-portal-user:F4jOv6gK4nEn1CPa@cluster0.snx8owk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
    const newsCollection = client.db("news-portal").collection("news");
   // console.log('my data',newsCollection.find({}).toArray())
    if (req.method === "GET") {
        const news = await newsCollection.find({}).toArray();
       
        res.send({ message: "success", status: 200, data: news });
      }
  
      if (req.method === "POST") {
        const news = req.body;
        const result = await newsCollection.insertOne(news);
        res.json(result);
      }
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
  export default run;

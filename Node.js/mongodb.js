const dns = require('dns');
dns.setServers(['8.8.8.8']);

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://anvmongo:anveshnamongo@cluster0.745tneo.mongodb.net/?appName=Cluster0";

const client = new MongoClient("mongodb+srv://anvmongo:anveshnamongo@cluster0.745tneo.mongodb.net/?appName=Cluster0", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
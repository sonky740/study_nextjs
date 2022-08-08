import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://sonky740_nextjs:eqwwr@cluster0.reatrgr.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}

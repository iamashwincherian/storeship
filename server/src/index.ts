import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import schemas from "./schemas";
import resolvers from "./resolvers";

const app = express();
dotenv.config();

const PORT: string = process.env.PORT || "3003";

async function startServer() {
  const graphqlServer = new ApolloServer({
    typeDefs: schemas,
    resolvers,
  });
  await graphqlServer.start();

  app.use(express.json());
  app.use("/graphql", expressMiddleware(graphqlServer));

  app.listen(PORT, () => console.log("🚀 Server has started on port", PORT));
}

startServer();

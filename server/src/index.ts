import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";
import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

const app = express();
dotenv.config();

const PORT: string = process.env.PORT || "3003";

const resolvers = {
  Query: {
    getUser: () => [],
  },
};

async function startServer() {
  const graphqlServer = new ApolloServer({ resolvers, typeDefs });
  await graphqlServer.start();

  app.use(express.json());
  app.use("/graphql", expressMiddleware(graphqlServer));

  app.listen(PORT, () => console.log("🚀 Server has started on port", PORT));
}

startServer();

import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";

const typeDefs = loadFilesSync(path.join(__dirname, "./*.graphql"));

export default mergeTypeDefs(typeDefs);

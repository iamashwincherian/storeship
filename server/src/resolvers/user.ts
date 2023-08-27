import { User } from "../models/User";

export default {
  Query: {
    getUser: (_: any, { id }: { id: string }) => {
      return {
        id,
        name: "User name",
        email: "email@example.com",
      };
    },
    createUser: async (_: any, { name, email }: User) => {
      const user = User.create({ name, email });
      await user.save();
      return user;
    },
  },
};

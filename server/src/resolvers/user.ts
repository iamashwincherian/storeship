import { User } from "../models/User";

export default {
  Query: {
    getAllUsers: () => {
      return User.find();
    },
    getUser: (_: any, { id }: { id: number }) => {
      return User.findOne({ where: { id } });
    },
    createUser: async (_: any, { name, email }: User) => {
      const user = User.create({ name, email });
      await user.save();
      return user;
    },
  },
};

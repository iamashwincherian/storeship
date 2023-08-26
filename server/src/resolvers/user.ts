export default {
  Query: {
    getUser: (parent: any, { id }: { id: string }) => {
      return {
        id,
        name: "User name",
        email: "email@example.com",
      };
    },
  },
};

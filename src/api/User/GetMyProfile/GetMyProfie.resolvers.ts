import { Resolvers } from "../../../../src/types/resolvers";
import privateResolver from "../../../../src/utils/privateResolver";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: privateResolver(async (_, __, { req }) => {
      //console.log(context.req.user);
      //const user  = context.req.user;
      //const {user}  = context.req;
      const { user } = req;
      console.log(user);
      return {
        ok: true,
        error: null,
        user
      };
    })
  }
};

export default resolvers;

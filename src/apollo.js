import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql2.vercel.app/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id, isLiked }, { cache }) => {
        const cacheId = `Movie:${id}`;
        cache.writeData({
          id: cacheId,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
});

export default client;

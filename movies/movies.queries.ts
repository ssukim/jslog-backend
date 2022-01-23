import client from "../client";

// A map of functions which return data for the schema.
export default {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, { id }) => client.movie.findUnique({ where: { id } }),
  },
};

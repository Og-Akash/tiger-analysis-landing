import { HttpLink } from "@apollo/client"
import {ApolloClient, InMemoryCache} from "@apollo/client"

const cache = new InMemoryCache()
const httpLink = new HttpLink({uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`})

export const client = new ApolloClient({
    cache: cache,
    link: httpLink
})
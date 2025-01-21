import { 
    ApolloClient, 
    InMemoryCache, 
    createHttpLink 
} from "@apollo/client";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_IDENTITY_SERVER_URL,
    credentials: "include",
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export { client };
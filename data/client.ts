import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_API_KEY,
  dataset: 'production',
  apiVersion: '2024-08-13',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;

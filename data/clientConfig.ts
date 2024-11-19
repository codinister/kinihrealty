import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_KEY,
  dataset: 'production',
  apiVersion: '2024-08-13',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

export default client;





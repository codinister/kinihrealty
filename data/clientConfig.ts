import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.projectId,
  dataset: 'production',
  apiVersion: '2024-08-13',
  useCdn: true,
  token: process.env.NEXT_SANITY_TOKEN,
});

export default client;





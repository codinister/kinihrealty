import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-08-13',
  useCdn: true,
  token:'skl6ENpbCgOzS3MLgPEgfyVTjjynHfhMznYaLRhjswcrh8qUYvPBW8blFBT1NtU9bOv9wm5lKwYouiNCaElGSUD2ttWMyuak0oUQ0XeEz5b3CIlCXdwp1ranKAmBfVgrFEzwLUDtyRX5jszOtkAG3yHmytqVgXOn7CbEg0E7AZXL5YC2Pvly',
});

export default client;

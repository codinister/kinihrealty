import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes/index';

const key = process.env.NEXT_PUBLIC_PROJECT_ID || '';
const studioConfig = defineConfig({
  projectId: key,
  dataset: 'production',
  title: 'Kinehrealty',
  apiVersion: '2024-08-13',
  basePath: '/adminpage',
  schema: {
    types: schemaTypes,
  },
  plugins: [deskTool()],
});

export default studioConfig

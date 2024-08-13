'use client';

import { NextStudio } from 'next-sanity/studio';
import studioConfig from '@/data/studioConfig';

const AdminPage = () => {
  return (
    <div className="adminpage">
      <NextStudio config={studioConfig} />
    </div>
  );
};

export default AdminPage;

'use client';

type ERR = {
  error: Error
};
export default function ErrorBoundary({ error }: ERR) {
  return <>{error.message}</>;
}

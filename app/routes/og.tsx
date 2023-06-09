import type { LoaderFunction } from '@remix-run/node';

export const config = { runtime: 'edge' };

export const loader: LoaderFunction = async () => {
  const { ImageResponse } = require('@vercel/og');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <h1>Welcome to Remix</h1>
      </div>
    )
  );
};

import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/og">Go to see the Open Graph image for this page</a>
        </li>
      </ul>
    </div>
  );
}

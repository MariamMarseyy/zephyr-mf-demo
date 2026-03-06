import React, { Suspense, type ReactElement } from 'react';

const RemoteButton = React.lazy(() => import('remote_app/Button'));

const App = (): ReactElement => (
  <div>
    <h1>Host Application</h1>
    <Suspense fallback="Loading…">
      <RemoteButton />
    </Suspense>
  </div>
);

export default App;

import React, { Suspense, type ReactElement } from 'react';

import './App.css';

const RemoteButton = React.lazy(() =>
  import('remote_app/Button').catch(() => ({ default: () => <span>—</span> }))
);

const App = (): ReactElement => (
  <div className="app">
    <h1>Host Application</h1>
    <Suspense fallback={null}>
      <RemoteButton />
    </Suspense>
  </div>
);

export default App;

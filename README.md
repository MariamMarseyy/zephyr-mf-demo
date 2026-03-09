# Zephyr Module Federation Demo

Two apps (host + remote) deployed on Zephyr’s default cloud. The remote exposes a React component; the host loads it at runtime via Module Federation.

**Stack:** React, Vite, TypeScript, `@originjs/vite-plugin-federation`.

## Repo layout

- **remote-app** — exposes a Button. Build produces `remoteEntry.js` at `/assets/remoteEntry.js`.
- **host-app** — consumes it with `React.lazy(() => import('remote_app/Button'))`.

## Run locally

Start the remote first, then the host.

```bash
cd remote-app && npm install && npm run dev
```

In a second terminal:

```bash
cd host-app && npm install && npm run dev
```

Remote: http://localhost:5173 · Host: http://localhost:5174. Open the host URL to see the federated button.

## Build

```bash
cd remote-app && npm run build
cd host-app && npm run build
```

For the host build (local or deploy), set `VITE_REMOTE_APP_URL` to the remote origin (no trailing slash). Use `.env.production` or export it before `npm run build`.

## Deploy (Zephyr Cloud)

Deployment uses the Zephyr plugin: when you run `npm run build`, the plugin uploads the build to Zephyr and prints the deployed URL. Git remote origin must be set (Zephyr maps your repo to the deployment).

1. **Remote:** From the repo root, `cd remote-app && npm run build`. If prompted, log in via the browser. Copy the deployed URL from the build output.
2. **Host:** Set `VITE_REMOTE_APP_URL` to that URL (no trailing slash), then `cd host-app && npm run build`. Copy the host URL from the output.
3. Open the host URL in the browser; the button is loaded from the remote.

## How it works

Host and remote are independent builds. The remote exposes an entry script and the Button module; the host’s federation config points to that entry (localhost in dev, deployed URL in prod). At runtime the host fetches the script and then loads `remote_app/Button`; React.lazy + Suspense render it. The host never bundles the Button—it comes from the remote. Both apps use Zephyr’s default cloud; only the host needs the remote URL so it can load the entry.

## Notes on the setup

Deployment is root + build command + output dir per app. The only extra bit is `VITE_REMOTE_APP_URL` on the host so the same code works locally and in prod. Federation setup is minimal: expose on the remote, remotes + shared on the host.

## Deployed URLs

- Host:
- Remote:

## License

MIT

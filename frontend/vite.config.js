    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    export default defineConfig({ plugins: [react()] });
    ```
  - index.html with the correct entry
    - If your entry file is at frontend/src/main.jsx:
      ```html
      <script type="module" src="/src/main.jsx"></script>
      ```
    - If your entry is at frontend/main.jsx, use:
      ```html
      <script type="module" src="/main.jsx"></script>
      ```
  - src/
    - main.jsx, App.jsx, App.css, plus your components and utils
  - public/ (optional, for static assets if you use it)
  - icons/ (since your code imports icons from this folder)
  - public/model/ (model.json, weights.bin, metadata.json) because your app loads the model at /model/model.json

- What NOT to deploy
  - server.js at the repo root (unless you are deploying a Node API; for a pure SPA, omit it or ensure Root Directory is frontend so Vercel ignores it)
  - node_modules (gitignored)

If you can’t change Root Directory in Vercel, add a vercel.json at repo root so Vercel builds the frontend app:
```json
{
  "version": 2,
  "builds": [
    { "src": "frontend/package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "frontend/dist/index.html" }
  ]
}
```

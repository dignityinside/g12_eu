# g12eu

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Deploy to GitHub Pages

Build and publish the generated `dist` directory to the `gh-pages` branch:

```sh
npm run build
npm run deploy
```

In the GitHub repository settings, configure **Pages** to deploy from the
`gh-pages` branch and its root directory. Set the custom domain to
`neuesleben.church` and enable HTTPS. The build includes the `CNAME` file and a
`404.html` fallback so Vue routes such as `/imprint` also work when opened
directly.

# Archethic Documentation

Offical documentation for the Archethic network.

This documentation aims to provide the knowledge, the understanding and the actions to take in order
to contribute and make Archethic network more visible.

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
npm install
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Update GraphQL documentation

To update the GraphQL schema documentation you can run the following command:

```
npx docusaurus graphql-to-doc
```

### Deployment

Github actions are setup to ease the deployment of the documentation.

Each time a commit is pushed to the main branch, a job is started to build the documentation and make the Github Page build up to date.

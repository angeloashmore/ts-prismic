# ts-prismic

A light-weight interface to [Prismic's REST API](https://prismic.io/).

[![npm version](https://img.shields.io/npm/v/gatsby-node-helpers?style=flat-square)](https://www.npmjs.com/package/gatsby-node-helpers)
[![Build Status](https://img.shields.io/github/workflow/status/angeloashmore/gatsby-node-helpers/CI?style=flat-square)](https://github.com/angeloashmore/gatsby-node-helpers/actions?query=workflow%3ACI)

This package provides:

- URL builders for the
  [REST API V2](https://prismic.io/docs/technologies/introduction-to-the-content-query-api)
- TypeScript types for API responses

This is not a batteries-included API client. Instead, this library provides you
the minimal set of tools to fetch and manage data yourself.

This means your codebase can be lean.

## Installation

```
npm install --save ts-prismic
```

## API

All functions and types are documented in the source files using
[TSDoc](https://github.com/microsoft/tsdoc) to provide documentation directly in
your editor.

If you editor does not have TSDoc integration, you can read all documentation by
viewing the source files.

### URL Builders

The following functions can be used to build an API request URL.

- [`buildQueryURL`](./src/buildQueryURL.ts)
- [`buildRepositoryURL`](./src/buildRepositoryURL.ts)
- [`defaultEndpoint`](./src/defaultEndpoint.ts)

### Types

The following types can be used to type API responses:

- [`Response.Repository`](./src/types-response.ts)
- [`Response.Query`](./src/types-response.ts)

The following types may be useful throughout your project:

- [`Document`](./src/types.ts)
- [`Ref`](./src/types.ts)

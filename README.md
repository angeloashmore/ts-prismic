# ts-prismic

A light-weight interface to [Prismic's REST API](https://prismic.io/).

This package provides:

- URL builders for the
  [REST API V2](https://prismic.io/docs/technologies/introduction-to-the-content-query-api)
- [Predicate](https://prismic.io/docs/technologies/query-predicates-reference-rest-api)
  builders for repository queries
- TypeScript types for API responses

This is not a batteries-included API client. Instead, this library provides you
the minimal set of tools to fetch and manage data yourself.

This means your codebase can be lean and purpose-built.

## Status

[![npm version](https://img.shields.io/npm/v/ts-prismic?style=flat-square)](https://www.npmjs.com/package/ts-prismic)
[![Build Status](https://img.shields.io/github/workflow/status/angeloashmore/ts-prismic/CI?style=flat-square)](https://github.com/angeloashmore/ts-prismic/actions?query=workflow%3ACI)

## Installation

```
npm install --save ts-prismic
```

## Example Usage

**Note**: The following examples use [Got](https://github.com/sindresorhus/got)
to make API requests, but any method can be used, including `fetch`.

Get the default API endpoint for a repository:

```typescript
import * as prismic from 'ts-prismic'

const endpoint = prismic.defaultEndpoint('qwerty')
```

Request a repository's metadata, such as refs and custom types.

```typescript
import * as prismic from 'ts-prismic'
import got from 'got'

const endpoint = prismic.defaultEndpoint('qwerty')
const url = prismic.buildRepositoryURL(endpoint)
const repository = (await got(url).json()) as prismic.Response.Repository
```

Get the master ref from the metadata:

```typescript
const masterRef = repository.refs.find((ref) => ref.isMasterRef)
```

Query all documents:

```typescript
import * as prismic from 'ts-prismic'
import got from 'got'

const url = prismic.buildQueryURL(
  endpoint, // Defined in previous example
  masterRef.ref, // Defined in previous example
)
const allDocs = (await got(url).json()) as prismic.Response.Query
```

Query with predicates:

```typescript
import * as prismic from 'ts-prismic'
import got from 'got'

const url = prismic.buildQueryURL(
  endpoint, // Defined in previous example
  masterRef.ref, // Defined in previous example
  [
    prismic.predicate.at('document.type', 'blog-post'),
    prismic.predicate.has('my.blog-post.title'),
  ],
)
const blogPosts = (await got(url).json()) as prismic.Response.Query
```

Query with parameters:

```typescript
import * as prismic from 'ts-prismic'
import got from 'got'

const url = prismic.buildQueryURL(
  endpoint, // Defined in previous example
  masterRef.ref, // Defined in previous example
  prismic.predicate.at('document.type', 'blog-post'),
  { orderings: 'my.blog-post.date', orderingsDirection: 'desc' },
)
const blogPosts = (await got(url).json()) as prismic.Response.Query
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

### Predicate Builders

The following functions can be used to build predicates for use with
`buildQueryURL`.

- [`at`](./src/predicate.ts)
- [`not`](./src/predicate.ts)
- [`any`](./src/predicate.ts)
- [`in`](./src/predicate.ts)
- [`fulltext`](./src/predicate.ts)
- [`has`](./src/predicate.ts)
- [`missing`](./src/predicate.ts)
- [`similar`](./src/predicate.ts)
- [`geopointNear`](./src/predicate.ts)
- [`numberLessThan`](./src/predicate.ts)
- [`numberGreaterThan`](./src/predicate.ts)
- [`numberInRange`](./src/predicate.ts)
- [`dateAfter`](./src/predicate.ts)
- [`dateBefore`](./src/predicate.ts)
- [`dateBetween`](./src/predicate.ts)
- [`dateDayOfMonth`](./src/predicate.ts)
- [`dateDayOfMonthAfter`](./src/predicate.ts)
- [`dateDayOfMonthBefore`](./src/predicate.ts)
- [`dateDayOfWeek`](./src/predicate.ts)
- [`dateDayOfWeekAfter`](./src/predicate.ts)
- [`dateDayOfWeekBefore`](./src/predicate.ts)
- [`dateMonth`](./src/predicate.ts)
- [`dateMonthAfter`](./src/predicate.ts)
- [`dateMonthBefore`](./src/predicate.ts)
- [`dateYear`](./src/predicate.ts)
- [`dateHour`](./src/predicate.ts)
- [`dateHourAfter`](./src/predicate.ts)
- [`dateHourBefore`](./src/predicate.ts)

### Types

The following types can be used to type API responses:

- [`Response.Repository`](./src/types-response.ts)
- [`Response.Query`](./src/types-response.ts)

The following types may be useful throughout your project:

- [`Document`](./src/types.ts)
- [`Ref`](./src/types.ts)

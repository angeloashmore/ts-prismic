import * as prismic from '../src'

const endpoint = prismic.defaultEndpoint('qwerty')

test('includes ref', () => {
  expect(prismic.buildQueryURL(endpoint, 'ref')).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref',
  )
})

test('supports null predicate', () => {
  expect(prismic.buildQueryURL(endpoint, 'ref', null)).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref',
  )
})

test('supports single predicate', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(
        endpoint,
        'ref',
        prismic.predicate.has('my.document.title'),
      ),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&q=[[has(my.document.title)]]',
  )
})

test('supports multiple predicates', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', [
        prismic.predicate.has('my.document.title'),
        prismic.predicate.has('my.document.subtitle'),
      ]),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&q=[[has(my.document.title)]]&q=[[has(my.document.subtitle)]]',
  )
})

test('supports params', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        accessToken: 'accessToken',
        pageSize: 1,
        page: 1,
        after: 'after',
        fetch: 'fetch',
        fetchLinks: 'fetchLinks',
        graphQuery: 'graphQuery',
        lang: 'lang',
        orderings: 'orderings',
        orderingsDirection: 'asc',
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&access_token=accessToken&pageSize=1&page=1&after=after&fetch=fetch&fetchLinks=fetchLinks&graphQuery=graphQuery&lang=lang&orderings=[orderings]',
  )
})

test('supports array fetch param', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        fetch: ['title', 'subtitle'],
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&fetch=title,subtitle',
  )
})

test('supports array fetchLinks param', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        fetchLinks: ['page.link', 'page.second_link'],
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&fetchLinks=page.link,page.second_link',
  )
})

test('supports array orderings param', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        orderings: ['page.title', 'page.subtitle'],
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&orderings=[page.title,page.subtitle]',
  )
})

test('supports setting direction of ordering param', () => {
  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        orderings: ['page.title', 'page.subtitle'],
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&orderings=[page.title,page.subtitle]',
  )

  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        orderings: ['page.title', 'page.subtitle'],
        orderingsDirection: 'asc',
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&orderings=[page.title,page.subtitle]',
  )

  expect(
    decodeURIComponent(
      prismic.buildQueryURL(endpoint, 'ref', null, {
        orderings: ['page.title', 'page.subtitle'],
        orderingsDirection: 'desc',
      }),
    ),
  ).toBe(
    'https://qwerty.cdn.prismic.io/api/v2/documents/search?ref=ref&orderings=[page.title,page.subtitle+desc]',
  )
})

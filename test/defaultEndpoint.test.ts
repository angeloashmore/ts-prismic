import * as prismic from '../src'

test('returns default endpoint', () => {
  expect(prismic.defaultEndpoint('qwerty')).toBe(
    'https://qwerty.cdn.prismic.io/api/v2',
  )
})

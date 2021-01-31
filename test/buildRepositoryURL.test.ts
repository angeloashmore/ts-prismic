import * as prismic from '../src'

const endpoint = prismic.defaultEndpoint('qwerty')

test('returns repository URL', () => {
  expect(prismic.buildRepositoryURL(endpoint)).toBe(
    'https://qwerty.cdn.prismic.io/api/v2',
  )
})

test('includes access token if provided', () => {
  expect(prismic.buildRepositoryURL(endpoint, 'accessToken')).toBe(
    'https://qwerty.cdn.prismic.io/api/v2?access_token=accessToken',
  )
})

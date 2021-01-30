/**
 * Build a Prismic REST API V2 URL to request metadata about a repository. Meta
 * information about the repository includes data such as refs, languages, and
 * types.
 *
 * Type the JSON response with `Response.Repository`.
 *
 * @param endpoint Endpoint to the repository's REST API.
 * @param accessToken Access token for the repository.
 *
 * @returns URL that can be used to request meta information about the repository.
 */
export const buildRepositoryURL = (
  endpoint: string,
  accessToken?: string,
): string => {
  const url = new URL(endpoint)

  if (accessToken) {
    url.searchParams.set('access_token', accessToken)
  }

  return url.toString()
}

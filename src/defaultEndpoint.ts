/**
 * Get a repository's default Prismic REST API V2 endpoint.
 *
 * @param repositoryName Name of the repository.
 *
 * @returns The repository's default Prismic REST API V2 endpoint
 */
export const defaultEndpoint = (repositoryName: string): string =>
  `https://${repositoryName}.cdn.prismic.io/api/v2`

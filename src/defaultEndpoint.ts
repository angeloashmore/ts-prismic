/**
 * Get a repository's default Prismic REST API V2 endpoint.
 *
 * @param repositoryName Name of the repository.
 *
 * @returns The repository's default Prismic REST API V2 endpoint
 */
export const defaultEndpoint = <RepositoryName extends string>(
  repositoryName: RepositoryName,
): `https://${RepositoryName}.cdn.prismic.io/api/v2` =>
  `https://${repositoryName}.cdn.prismic.io/api/v2` as `https://${RepositoryName}.cdn.prismic.io/api/v2`

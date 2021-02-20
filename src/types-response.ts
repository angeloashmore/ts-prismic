import { Ref, Language, Document } from './types'

export interface Repository {
  refs: Ref[]
  bookmarks: Record<string, string>
  languages: Language[]
  types: Record<string, string>
  tags: string[]
  // forms: Record<string, Form>
  experiments: unknown
  oauth_initiate: string
  oauth_token: string
  version: string
  licence: string
}

export interface Query<TResults extends Document[] = Document[]> {
  page: number
  results_per_page: number
  results_size: number
  total_results_size: number
  total_pages: number
  next_page: string | null
  prev_page: string | null
  results: TResults
}

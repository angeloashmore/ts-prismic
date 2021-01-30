export interface Ref {
  ref: string
  label: string
  isMasterRef: boolean
  scheduledAt: string
  id: string
}

export interface Language {
  id: string
  name: string
}

export interface Document<Data = unknown> {
  id: string
  uid?: string
  url?: string
  type: string
  href: string
  tags: string[]
  slugs: string[]
  lang?: string
  alternate_languages: AlternateLanguage[]
  first_publication_date: string | null
  last_publication_date: string | null
  data: Data
}

export interface AlternateLanguage {
  id: string
  uid?: string
  type: string
  lang: string
}

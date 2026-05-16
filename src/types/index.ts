export interface Project {
  id: string
  secId: string
  title: string
  description: string
  tags: string[]
  url?: string
}

export interface NavLink {
  label: string
  path: string
}

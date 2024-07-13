export interface NotionResponse {
  object: string
  results: Result[]
  next_cursor: any
  has_more: boolean
  type: string
  page_or_database: PageOrDatabase
  request_id: string
}

export interface Result {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  in_trash: boolean
  properties: Properties
  url: string
  public_url: any
}

export interface CreatedBy {
  object: string
  id: string
}

export interface LastEditedBy {
  object: string
  id: string
}

export interface Parent {
  type: string
  database_id: string
}

export interface Properties {
  description: Description
  imageUrl: ImageUrl
  price: Price
  status: Status
  title: Title
}

export interface Description {
  id: string
  type: string
  rich_text: RichText[]
}

export interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Text {
  content: string
  link: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface ImageUrl {
  id: string
  type: string
  rich_text: RichText2[]
}

export interface RichText2 {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: string
  href: any
}

export interface Text2 {
  content: string
  link: any
}

export interface Annotations2 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Price {
  id: string
  type: string
  number?: number
}

export interface Status {
  id: string
  type: string
  select?: Select
}

export interface Select {
  id: string
  name: string
  color: string
}

export interface Title {
  id: string
  type: string
  title: Title2[]
}

export interface Title2 {
  type: string
  text: Text3
  annotations: Annotations3
  plain_text: string
  href: any
}

export interface Text3 {
  content: string
  link: any
}

export interface Annotations3 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface PageOrDatabase {}

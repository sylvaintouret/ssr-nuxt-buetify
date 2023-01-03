import { Ref } from 'vue'

export enum CookieType {
  NECESSARY = 'necessary',
  OPTIONAL = 'optional',
}

export interface Cookie {
  description?: string
  id?: string
  name: string
  // onAccept?: Function
  // onDecline?: Function
  src?: string
}

export interface ModuleOptions {
  cookies: {
    necessary: Cookie[]
    optional: Cookie[]
  }
}


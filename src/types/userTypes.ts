export interface TUser  {
  id: number
  created_at: string
  updated_at: string
  fullName: string
  email?: string
  password: string
  phone: number
  address?: string
  role: "admin"|"customer"
  wishlist?: string[]
  avatar_url?: string
}

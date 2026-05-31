import { UserResponse } from '../types/user'

export function renderUser(user: UserResponse): string {
  return `${user.name} <${user.email}>`
}

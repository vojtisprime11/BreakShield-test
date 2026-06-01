export interface UserResponse {
  id: string
  name: string
  // createdAt removed — use audit log instead
}

export interface UserUpdateRequest {
  name: string
  email: string
}

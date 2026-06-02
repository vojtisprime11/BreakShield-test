export interface UserResponse {
  id: string
  name: string
  // createdAt removed — use audit log instead
}

export interface UserUpdateRequest {
  name: string
  email: string
}
// trigger reanalysis
// fix test Mon Jun  1 17:58:08 CEST 2026
// screenshot trigger Tue Jun  2 16:25:16 CEST 2026

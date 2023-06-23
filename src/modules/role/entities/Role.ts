import { Permission } from "../../permission/entities/Permission"

export class Role {
  id: string
  description: string
  createdAt: Date
  updatedAt: Date

  permissions: Permission[]
}
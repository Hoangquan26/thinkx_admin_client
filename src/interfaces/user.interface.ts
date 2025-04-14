export type User = {
    id: string,
    email: string,
    roles: "admin" | "user" | "instrutor",
    createdAt: string
}
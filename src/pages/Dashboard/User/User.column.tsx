import { User } from "@/interfaces/user.interface"
import Avatars from "@/pages/UiElements/Avatars"
import { ColumnDef } from "@tanstack/react-table"


  export const columns: ColumnDef<User>[] = [
    {
        header: "Avatar",
        cell: (row) => {
          return <Avatars/>
        }
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
      accessorKey: "roles",
      header: "Roles",
    },
    {
      accessorKey: "createdAt",
      header: "CreatedAt",
    },
  ]
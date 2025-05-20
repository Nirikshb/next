import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export default function Dropdown() {
    return (<DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Dropdown</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/login">Login</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/logout">Logout</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/register">Register</Link></DropdownMenuItem>
        </DropdownMenuContent>

    </DropdownMenu>
    )

}
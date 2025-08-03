import Search from "@/components/icons/search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header className="flex items-center justify-between px-6 py-2 border-b border-gray-500">
    <div>
      <Link to="/">Auth Sol</Link>
    </div>

    <nav className="flex items-center gap-2">
      <Button asChild size="sm" variant="default">
        <Link to="/upgrade">Upgrade</Link>
      </Button>
      <Button asChild size="sm" variant="link">
        <Link to="/feedback">Feedback</Link>
      </Button>
      <Button asChild size="sm" variant="link">
        <Link to="/support">Support</Link>
      </Button>

      <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="outline-none">
          <Avatar className="ml-3">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="#">Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </header>
);
export default NavBar;

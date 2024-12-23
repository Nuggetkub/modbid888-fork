import Link from "next/link"
import { MenuIcon } from "lucide-react"

import {
  getBalanceAction,
  getProfileAction,
} from "~/components/navigate/action"
import Logout from "~/components/sign-out/index"
import ModeTogger from "~/components/toggle-mode"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Separator } from "~/components/ui/separator"
import { formatNumberWithCommas } from "~/lib/utils"

async function Navbar() {
  const [data] = await getProfileAction()
  const [balance] = await getBalanceAction()

  return (
    <div className="h-fit sticky top-0 bg-background z-[100]">
      <div className="h-16 flex items-center w-full justify-between px-14">
        <Link href="/minigames">
          <h1 className="font-alagard text-3xl">Modbid888</h1>
        </Link>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/profile">
            <div className="w-fit flex flex-row font-alagard text-lg items-center cursor-pointer hover:underline">
              <p>{data?.displayName}</p>
              <p>#</p>
              <p>{data?.id}</p>
            </div>
          </Link>
          <Logout />
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-alagard">
              <DropdownMenuLabel>
                <p className="font-alagard text-xl p-2">
                  balance :{" "}
                  {balance !== null ? formatNumberWithCommas(balance) : "N/A"}
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/minigames">Minigames</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/leaderboard">Leaderboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ModeTogger />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </div>
  )
}

export default Navbar

'use client'

import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
    currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log({currentUser})
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container children={
                    <div className="
                    flex
                    flex-grow
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    "
                    >
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                        </div>
                } />
                
            </div>
        </div>
    )
}

export default Navbar;
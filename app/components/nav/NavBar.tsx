import Link from "next/link";
import Container  from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";


const NavBar = async() => {
  
  const currentUser = await getCurrentUser();
  
    return (
    <div
    className="
    sticky
    top-0
    w-full
    bg-stone-950
    z-30
    shaodow-sm
    "
    >
        <div className="py-4 border-b-[2px]">
            <Container>
              <div
              className="
              flex
              items-center
              justify-between
              md-gap-0">
                <Link 
                href="/" 
                className={`
                font- text-2xl`}
                >
                CEYLONspices
                </Link>
                <div className="hidden md:block">Search</div>
                <div className="flex items-center gap-8 md:gap-12">
                    <CartCount/>
                    <UserMenu currentUser= {currentUser} />
                </div>
              </div>
            </Container>
        </div>
    </div>
    );
};
 
export default NavBar;
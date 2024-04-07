import Link from "next/link";
import Container  from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"],
    weight: ["400"] 
});

const NavBar = () => {
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
                className={`${redressed.className}
                font-bold text-3xl`}
                >
                Ceylonspices
                </Link>
                <div className="hidden md:block">Search</div>
                <div className="flex items-center gap-8 md:gap-12">
                    <div>CartCount</div>
                    <div>UserMenu</div>
                </div>
              </div>
            </Container>
        </div>
    </div>
    );
};
 
export default NavBar;
// @ts-ignore
import Socials from "./Socials.tsx";

export default function Footer() {
    return (
        <footer className="w-screen text-center lg:text-left bg-black text-white absolute bottom-0">
            <div className="mx-6 py-10 text-center">
                <div className="">
                    <h6 className="uppercase font-semibold mb-4 text-center md:justify-start">
                        My socials
                    </h6>
                    <Socials/>
                </div>
            </div>
        </footer>
    );
}
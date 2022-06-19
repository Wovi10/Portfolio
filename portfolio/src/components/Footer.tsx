// @ts-ignore
import Socials from "./Socials.tsx";

export default function Footer() {
    return (
        <footer className="w-screen bg-black text-white absolute h-auto py-5">
            <hr/>
            <div className="flex m-6 absolute right-0 -bottom-6">
                <h6 className="uppercase font-semibold md:justify-start mr-4">
                    My socials
                </h6>
                <Socials/>
            </div>
        </footer>
    );
}
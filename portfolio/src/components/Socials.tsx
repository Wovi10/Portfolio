// @ts-ignore
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import {socials} from "../data/Socials.tsx";


export default function Socials() {
    return (
        <section id="socials">
            <div className="flex mx-auto align-content-center">
                <div className="flex items-center justify-center md:justify-start mb-4 flex-wrap">
                    {socials.map((social, index) => (
                        <p className="w-1/2" key={index}>
                            <div key={social.name}>
                                <a
                                    href={social.link}
                                    className="rounded flex hover:underline font-thin text-sm md:text-md pr-2"
                                >
                                    <i className={`${social.icon} mr-2`}></i>
                                    <p className="flex-shrink-0 text-white">{social.name}</p>
                                </a>
                            </div>
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
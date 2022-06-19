// @ts-ignore
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import {socials} from "../data/Socials.tsx";


export default function Socials() {
    return (
        <section id="socials">
            <div className="flex justify-content-center">
                <div className="flex items-center justify-center md:justify-start flex-wrap">
                    {socials.map((social, index) => (
                        <p className="" key={index}>
                            <div key={social.name}>
                                <a
                                    href={social.link}
                                    className="rounded flex font-thin text-md pr-2"
                                >
                                    <i className={`${social.icon} mr-2`}></i>
                                </a>
                            </div>
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
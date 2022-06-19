// @ts-ignore
import {Container} from "./Container.tsx";
// @ts-ignore
import {socials} from "../Data/Socials.tsx";

export default function Socials() {
    return (
        <section id="skills">
            <Container className="container mx-auto flex flex-col">
                <div className="flex mx-auto md:w-1/2">
                    <div className="flex text-white rounded-xl rounded bg-black md:p-8 mx-2 p-4 flex-wrap">
                        {socials.map((social, index) => (
                            <div className="p-2 w-1/2" key={index}>
                                <div key={social.name}>
                                    <a
                                        href={social.link}
                                        className="rounded flex py-2 hover:underline rounded font-thin text-sm md:text-md"
                                        target={"_blank"}
                                    >
                                        <i className={`${social.icon} mx-4`}></i>
                                        <p className="flex-shrink-0 mr-4 text-white">{social.name}</p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
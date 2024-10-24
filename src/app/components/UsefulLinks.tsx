import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons";

const UsefulLinks: React.FC = () => {

    const handleRedirect = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <div className="tw-p-8 tw-flex tw-flex-wrap tw-justify-center tw-gap-5">
            <button onClick={() => handleRedirect('https://github.com/pete85/nextjs_app')}
                    className="tw-flex tw-items-center tw-justify-center tw-bg-blue-600 tw-text-white tw-px-4 tw-py-3 tw-gap-2 tw-rounded-lg">
                <FontAwesomeIcon icon={faGithub}/>
                <span>Github</span>
            </button>

            <button onClick={() => handleRedirect('https://pete85.com')}
                    className="tw-flex tw-items-center tw-justify-center tw-bg-blue-600 tw-text-white tw-py-3 tw-px-4 tw-gap-2 tw-rounded-lg">
                <img alt="pete85 logo" className="tw-w-5" src="/images/pete85_bulb.png"/>
                <span>pete85</span>
            </button>

            <button onClick={() => handleRedirect('https://react.dev/')}
                    className="tw-flex tw-items-center tw-justify-center tw-bg-blue-600 tw-text-white tw-px-4 tw-py-3 tw-gap-2 tw-rounded-lg">
                <FontAwesomeIcon icon={faReact}/>
                <span>React</span>
            </button>

            <button onClick={() => handleRedirect('https://tailwindcss.com/')}
                    className="tw-flex tw-items-center tw-justify-center tw-bg-blue-600 tw-text-white tw-px-4 tw-py-3 tw-gap-2 tw-rounded-lg">
                <img alt="pete85 logo" className="tw-w-5" src="/images/tailwind.png"/>
                <span>Tailwind</span>
            </button>

            <button onClick={() => handleRedirect('https://nextjs.org/')}
                    className="tw-flex tw-items-center tw-justify-center tw-bg-blue-600 tw-text-white tw-px-4 tw-py-3 tw-gap-2 tw-rounded-lg">
                <img alt="nextjs logo" className="tw-w-5" src="/images/next.png"/>
                <span>Next.js</span>
            </button>
        </div>
    )
}

export default UsefulLinks;
"use client";

import {useRouter} from 'next/navigation';
import {useState} from "react";
import UsefulLinks from "@/app/components/UsefulLinks";

export default function Home() {
    const [location, setLocation] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        if (location) {
            router.push(`/weather?q=${location}`); // Navigate to /weather?q=location
        }
    };

    return (
        <div
            className="tw-grid tw-grid-rows-[20px_1fr_20px] tw-items-center tw-justify-items-center tw-min-h-screen tw-pb-20 tw-gap-5">
            <main className="tw-flex tw-flex-col tw-gap-8 tw-row-start-2 tw-items-center sm:tw-items-start">

                <div className="tw-px-5 tw-flex tw-w-full tw-justify-center">
                    <h1>Welcome</h1>
                </div>

                <div className="tw-p-5 tw-hidden xl:tw-block">
                    <p>
                        This application is a current weather information app built using Next.js, where users can
                        view
                        the
                        live weather conditions for a selected location. A key highlight is the use of Server-side
                        rendering
                        (SSR), which allows the app to fetch weather data dynamically from external APIs, ensuring
                        that
                        content is delivered quickly and optimized for performance and SEO.
                    </p>

                    <p>Throughout the development, several important features were implemented:</p>

                    <ul>
                        <li>
                            Next.js: The app utilizes Next.js for server-side rendering and dynamic routing,
                            providing a fast,
                            reliable user experience.
                        </li>
                        <li>
                            Tailwind CSS: Tailwind CSS is applied to ensure a responsive and modern design across
                            different screen sizes, making the app visually appealing and user-friendly.
                        </li>
                        <li>
                            Google Maps API: Integrated the Google Maps API to display an interactive map of the
                            selected location, allowing users to see their weather in a geographical context.
                        </li>
                        <li>
                            Error Handling and Fallbacks: Set up robust error handling to provide fallback content (like
                            default maps) when issues with API calls occur.
                        </li>
                    </ul>
                </div>

                <div
                    className="tw-flex tw-items-center tw-flex-col sm:tw-flex-row tw-p-5 tw-justify-center tw-w-full">
                    <form onSubmit={handleSearch}
                          className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-justify-center tw-items-center tw-w-full">
                        <input type="text" placeholder="Enter location" value={location}
                               onChange={(e) => setLocation(e.target.value)}
                               className="tw-p-2 tw-border tw-rounded tw-text-slate-900 tw-max-w-[80%]"/>
                        <button type="submit"
                                className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-w-full tw-max-w-[80%] sm:tw-max-w-[150px]">
                            Search
                        </button>
                    </form>
                </div>
            </main>
            <footer className="tw-row-start-3 tw-flex tw-gap-6 tw-flex-wrap tw-items-center tw-justify-center">
                <UsefulLinks/>
                {/*<button*/}
                {/*    className="tw-flex tw-items-center tw-justify-center tw-bg-blue-600 tw-text-white tw-py-1 tw-px-4 tw-gap-2 tw-rounded-lg">*/}
                {/*    <span>Netlify</span>*/}
                {/*</button>*/}
            </footer>
        </div>
    );
}

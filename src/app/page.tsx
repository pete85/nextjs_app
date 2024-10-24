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
            className="homepage-container tw-grid tw-grid-rows-[20px_1fr_20px] tw-items-center tw-justify-items-center tw-min-h-screen tw-pb-20 tw-gap-5">
            <main className="tw-flex tw-flex-col tw-gap-8 tw-row-start-2 tw-items-center sm:tw-items-start">

                <div className="tw-px-5 tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-text-center">
                    <h1 className="outlined-text">Welcome</h1>
                    <h3 className="outlined-text">Enter location to see current weather</h3>
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

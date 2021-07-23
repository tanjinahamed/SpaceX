import React, { useEffect, useState } from 'react';
import LoadMission from '../LoadMission/LoadMission';
import { css } from '@emotion/react';
import RiseLoader from "react-spinners/RiseLoader";

const PastLaunches = () => {
    const override = css`
         margin: 0 auto;
    `;

    const [missions, setMissions] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => {
                console.log("datfgfffa", data.slice(0, 8))
                setMissions(data.slice(0, 8))
            })
    }, [])
    return (
        <section className="py-6 sm:py-12 bg-bgNav text-coolGray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold animate-pulse">OUR PAST LAUNCHES</h2>
                </div>
                {
                    missions.length === 0 && <div className="flex items-center text-center"><RiseLoader css={override} color='#808080'></RiseLoader></div>
                }
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

                    {
                        missions.map(mission => (<LoadMission mission={mission}></LoadMission>))
                    }

                </div>
            </div>
        </section>
    );
};

export default PastLaunches;
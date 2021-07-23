import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const LoadMission = ({ mission }) => {
    console.log(mission)
    const { flight_number, launch_year, details } = mission;
    const { rocket_name } = mission.rocket;
    const { mission_patch_small, wikipedia } = mission.links;

    return (
        <article className="flex flex-col bg-coolGray-50 border-2 mx-3 mb-6 shadow-md border-gray-50">
            <img alt="" className="object-cover w-auto p-8" src={mission_patch_small} />
            <div className="flex flex-col flex-1 p-6">
                <small>
                    <span className="text-black text-md font-bold ">Mission{flight_number}</span>
                    <span className=""> {launch_year}</span>
                    <span className="pl-1"> {rocket_name}</span>
                </small>
                <h3 className="flex-1 py-6 text-regal-blue text-sm leading-snug line-clamp-2">{details}</h3>
                <a href={wikipedia} target="_blank" rel="" className="flex flex-wrap justify-between pt-3 space-x-2 text-indigo-600 text-xs text-coolGray-600">
                    <span className="text-regal-blues"><FontAwesomeIcon icon={faChevronCircleRight} /> <span className="text-regal-bluess">Go to Wikipedia Page</span></span>
                </a>

            </div>
        </article>
    );
};

export default LoadMission;
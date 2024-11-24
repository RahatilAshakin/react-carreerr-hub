import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {

        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            console.log(jobsApplied);
        }

    }, [jobs]);

    return (
       <div>
         <div className="mx-auto  flex items-center justify-center  bg-left-bottom h-60  bg-no-repeat bg-[url('/assets/images/bg1.png')]  ]"  >
            <h1 className="text-center font-bold text-3xl text-green-800 ">
                Jobs I Applied{" "}
                <span className="text-3xl">{appliedJobs.length}</span>
            </h1>
            
           
        </div>
        <div>
                {appliedJobs.map((job) => (
                    <AppliedJob key={job.id} job={job}></AppliedJob>
                ))}
            </div>
       </div>
    );
};

export default AppliedJobs;

import { useLoaderData } from "react-router-dom";
import AvailableJob from "../AvailableJob/AvailableJob";

const AvailableJobs = () => {
    const jobs = useLoaderData()
  
    return (
      <div>
        <div className="relative mx-auto flex items-center justify-center bg-left-bottom h-60 bg-no-repeat bg-[url('/assets/images/bg1.png')]">
          <h1 className="text-center font-bold text-3xl text-green-800">
            {jobs.length > 0
              ? `Available Jobs  (${jobs.length})`
              : "No Jobs Available "}
          </h1>
        </div>
        <div className="mt-4">
         
          
            
                {jobs.map((job)=> <AvailableJob key={job.id} job={job}></AvailableJob>)}
                
         
            
       
        </div>
      </div>
    );
  };
  
  export default AvailableJobs;
  
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {
  const [jobs, setjobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setjobs(data));
  }, []);

  return (
    <div className="bg-green-200 mt-10 mb-10">
      <div>
        <h2 className="text-6xl text-red-700 mt-5 mb-5 text-center">
          Featured jobs {jobs.length}
        </h2>
        <p className="text-red-700 ml-48 mr-48 bg-black text-center">
          Discover top featured jobs, handpicked to match your skills and
          accelerate your career growth today.
        </p>
      </div>

      <div className="grid grid-cols-2  gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength===jobs.length && "hidden"}>
        <h2 className="text-center mt-6">
          <button
           onClick={()=>setDataLength(jobs.length)}
           className="btn btn-primary">ShowAll Jobs</button>
        </h2>
      </div>
    </div>
  );
};

export default FeturedJobs;

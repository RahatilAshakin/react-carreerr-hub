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
    <div className=" mt-10 mb-10 ">
      <div>
        <h2 className="text-6xl font-bold mt-5 mb-5 text-center">
          Featured jobs {jobs.length}
        </h2>
        <p className=" ml-48 mr-48 text-center">
          Discover top featured jobs, handpicked to match your skills and
          accelerate your career growth today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-10 w-3/4 m-auto ">
        {/* Render Job and Jobs components independently */}
        {jobs.slice(0, dataLength).map((job) => (
          <>
            <Job key={job.id} job={job} />
            
          </>
        ))}
      </div>

      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <h2 className="text-center mt-6">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary"
          >
            Show All Jobs
          </button>
        </h2>
      </div>
    </div>
  );
};

export default FeturedJobs;

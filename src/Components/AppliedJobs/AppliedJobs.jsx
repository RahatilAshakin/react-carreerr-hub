import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
    setIsDropdownOpen(false); // Close dropdown after filtering
  };

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      {/* Header Section */}
      <div className="mx-auto flex items-center justify-center bg-left-bottom h-60 bg-no-repeat bg-[url('/assets/images/bg1.png')]">
        <h1 className="text-center font-bold text-3xl text-green-800">
          Jobs You Applied <span className="text-3xl">{appliedJobs.length}</span>
        </h1>
      </div>

      {/* Dropdown Section */}
      <div className="flex justify-end container mx-auto mt-4" ref={dropdownRef}>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="btn m-1"
          >
            Filter
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Jobs Display Section */}
      <div className="mt-4">
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

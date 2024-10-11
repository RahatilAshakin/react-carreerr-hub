import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;

  return (
    <div className="mt-4 flex">
      <div></div>

      <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <p className=" ml-4 flex justify-start">
            <figure>
              <img src={logo} alt="not found" />
            </figure>
          </p>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>

            <div className="card-actions gap-6">
              <button className="px-5 py-2  font-extrabold border rounded border-[#7e90fe mr-4]">
                {remote_or_onsite}
              </button>

              <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe mr-4]">
                {job_type}
              </button>
            </div>
            <div className="card-actions gap-4">
              <div className="flex gap-2">
                <h2 className="text-xl">
                  <CiLocationOn></CiLocationOn>
                </h2>
                <p>{location}</p>
              </div>
              <div className="flex gap-2">
                <h2 className="text-xl">
                  <FaDollarSign />
                </h2>
                <p>{salary}</p>
              </div>
            </div>
            <div>
              <Link to={`/Job/:${id}`}><button className="btn btn-active btn-primary">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;

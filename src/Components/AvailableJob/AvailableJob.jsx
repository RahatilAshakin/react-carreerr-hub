
import { Link } from 'react-router-dom';
const AvailableJob = ({job}) => {

    const {
        id,        
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        job_type,
        location,
        salary,
    } = job;


    return (
        <div className="container mx-auto">
         <div className="job-card flex justify-between items-center border rounded-lg p-6 shadow-md bg-white mb-6 hover:shadow-lg transition-shadow">
            {/* Left Section */}
            <div className="flex items-center gap-6">
                {/* Logo Container */}
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg">
                    <img
                        src={logo}
                        alt={`${company_name} Logo`}
                        className="w-16 h-16 object-contain"
                    />
                </div>

                {/* Job Details */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        {job_title}
                    </h2>
                    <p className="text-gray-600">{company_name}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg">
                            {remote_or_onsite}
                        </span>
                        <span className="px-3 py-1 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg">
                            {job_type}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 mt-2">
                        <p className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-1"></i> {location}
                        </p>
                        <p className="flex items-center">
                            <i className="fas fa-dollar-sign mr-1"></i> Salary: {salary}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div>
              <Link to={`/Job/${id}`}><button className="btn btn-active btn-primary">
                View Details
              </button></Link>
            </div>
        </div>
       </div>
    );
};

export default AvailableJob;
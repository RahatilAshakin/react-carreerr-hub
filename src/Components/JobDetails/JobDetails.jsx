import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication, getStoredJobApplication } from "../../Utility/LocalStorage";

// JobDetailsCard Component
const JobDetailsCard = ({ job }) => (
  <div className="bg-cyan-50 border rounded-xl p-4">
    <h2 className="font-bold text-l">Job Details</h2>
    <hr className="mt-2" />
    <div className="flex gap-2 items-center">
      <p className="text-sm"><FaDollarSign /></p>
      <p><span className="font-bold">Salary:</span> {job.salary}</p>
    </div>
    <div className="flex mt-4 gap-2 items-center">
      <p className="text-sm"><MdOutlineWork /></p>
      <p><span className="font-bold">Job Title:</span> {job.job_title}</p>
    </div>
    <h2 className="font-bold mt-6 text-l">Contact Information</h2>
    <hr className="mt-4" />
    <div>
      <p><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
      <p><span className="font-bold">Email:</span> {job.contact_information.email}</p>
      <p><span className="font-bold">Address:</span> {job.contact_information.address}</p>
    </div>
  </div>
);

const JobDetails = () => {
  const jobs = useLoaderData(); // Assuming this is an array of job objects
  const { id } = useParams(); // Extract the job ID from URL params
  const trimmedId = id.replace(/:/, "").trim(); // Remove any colons or extra spaces
  const idT = parseInt(trimmedId); // Parse the ID into an integer
  
  // Find the job based on the parsed ID
  const job = jobs.find((job) => job.id === idT);

  const handleApplyJob = () => {
    // Check if the job ID is already stored in localStorage
    const storedJobApplications = getStoredJobApplication();
    const alreadyApplied = storedJobApplications.includes(idT); // Check if the ID is already in the array

    if (alreadyApplied) {
      toast.info('You have already applied for this job!'); // Show info toast if already applied
    } else {
      saveJobApplication(idT); // Save job application if not already applied
      toast.success('Your application was submitted successfully!'); // Show success toast
    }
  }

  // If no job is found for the given ID, show a message
  if (!job) {
    return <h2>No job found with ID: {idT}</h2>;
  }

  return (
    <div>
      <div className="bg-[url(`/public/assets/images/bg1.png`)]">
        <h2 className="text-center text-3xl font-bold">
          Job details <br />
          of
        </h2>
        <h3 className="text-center text-2xl font-bold">{job.job_title}</h3>
      </div>

      <div className="grid mt-6 mb-6 gap-6 md:grid-cols-4">
        <div className="md:col-span-3 border rounded-xl pl-2">
          <p className="mt-6">
            <span className="font-bold capitalize">Job Description:</span>
            {job.job_description}
          </p>
          <p className="mt-6">
            <span className="font-bold capitalize">Job Responsibility:</span>
            {job.job_responsibility}
          </p>
          <p className="mt-6">
            <span className="font-bold capitalize">Educational Requirements:</span>
            <br />
            <p className="mt-4">{job.educational_requirements}</p>
          </p>
          <p className="mt-6">
            <span className="font-bold capitalize">Experience Requirements:</span>
            {job.experiences}
          </p>
        </div>
        <div className="md:col-span-1">
          <JobDetailsCard job={job} />
          <button onClick={handleApplyJob} className="btn btn-primary mt-4 w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;

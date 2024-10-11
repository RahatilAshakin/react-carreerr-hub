import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-9xl capitalize text-red-800">Oppsss</h1>
            <h1 className="text-center font-bold text-3xl mt-10 capitalize text-yellow-300"> this is going to active soon</h1>
            <h2 className="text-center border rounded-md bg-slate-400 font-bold text-3xl mt-7 capitalize text-red-800"><Link  to="/"> touch or clik me to go home</Link></h2>
        
        </div>
    );
};

export default ErrorPage;
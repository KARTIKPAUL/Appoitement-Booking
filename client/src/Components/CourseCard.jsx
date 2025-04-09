import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate("/course/description", { state: { ...data } })}
      className="text-white w-full sm:w-80 md:w-96 h-auto shadow-lg 
        rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
    >
      <div className="overflow-hidden">
        {/* {data?.thumbnail?.secure_url && (
          <img
            src={data?.thumbnail?.secure_url}
            alt="courseThumbnail"
            className="w-full h-48 object-cover rounded-tl-lg rounded-tr-lg group-hover:scale-110 transition-transform ease-in-out duration-300"
          />
        )} */}

        <div className="p-4 space-y-2 text-white">
          <h2 className="text-lg md:text-xl font-bold text-yellow-500 line-clamp-2">
            Patient Name: {data?.title}
          </h2>

          <p className="line-clamp-2 text-sm md:text-base"> 
            Issues: {data?.description}
          </p>

          <p className="line-clamp-2 text-sm md:text-base font-semibold">
            <span className="text-yellow-500 font-bold">Gender: </span>
            {data?.catagory}
          </p>

          <p className="line-clamp-2 text-sm md:text-base font-semibold">
            <span className="text-yellow-500 font-bold">Total Appointments: </span>
            {data?.numbersOfLectures}
          </p>

          <p className="line-clamp-2 text-sm md:text-base font-semibold">
            <span className="text-yellow-500 font-bold">Blood Group: </span>{" "}
            {data?.createdBy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
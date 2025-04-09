import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayot";
import { useSelector } from "react-redux";

function CourseDescription() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.auth);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-6 md:pt-12 px-4 md:px-20 flex flex-col items-center justify-center text-white">
        <div className="w-full max-w-4xl">
          {/* Single stylish box */}
          <div className="bg-zinc-800 rounded-lg shadow-xl overflow-hidden border border-zinc-700">
            {/* Header with patient name */}
            <div className="bg-zinc-900 p-4 md:p-6 border-b border-zinc-700">
              <h2 className="text-xl md:text-3xl font-bold text-yellow-500 text-center">
                Patient Name: {" "} <span className="text-base text-white md:text-3xl">{state?.title}</span>
              </h2>
            </div>

            {/* Content section */}
            <div className="p-5 md:p-8">
              {/* Patient information */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-700 p-3 rounded-md">
                    <p className="font-semibold">
                      <span className="text-yellow-500 font-bold">
                        Total Appointments:{" "}
                      </span>
                      {state?.numbersOfLectures}
                    </p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md">
                    <p className="font-semibold">
                      <span className="text-yellow-500 font-bold">
                        Blood Group:{" "}
                      </span>
                      {state?.createdBy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Issues section */}
              <div className="bg-zinc-700 p-4 rounded-md mb-6">
                <p className="text-yellow-500 text-lg md:text-xl font-semibold mb-2">Issues: {" "}
                <span className="text-base text-white md:text-lg">{state?.description}</span>
                </p>
                
              </div>

              {/* Action button */}
              <div className="mt-8">
                {data?.role === "ADMIN" ||
                data?.subscription?.status === "active" ? (
                  <button
                    onClick={() =>
                      navigate("/course/displaylectures", {
                        state: { ...state },
                      })
                    }
                    className="bg-yellow-500 text-lg md:text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-200 flex items-center justify-center"
                  >
                    Watch Lectures
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 text-lg md:text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-200 flex items-center justify-center"
                    onClick={() => navigate("/checkout")}
                  >
                    Subscribe
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HomeLayout from "../../Layouts/HomeLayot";
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import { FaUsers } from "react-icons/fa";
import { deleteCourses, getAllCourses } from "../../Redux/Slices/courseSlice";
import { getStatsData } from "../../Redux/Slices/stateSlice";
import { getPaymentRecord } from "../../Redux/Slices/razorpaySlice";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { FaCheck, FaClock } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function CourseList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUserCount, subscribeCount } = useSelector((state) => state.stat);
  const { allPayments, monthlySalesRecord } = useSelector(
    (state) => state.razorpay
  );
  
  const myCourses = useSelector((state) => state?.courses?.courseData);
  // Track appointment status locally (in real app, you'd update this in backend)
  const [appointmentStatus, setAppointmentStatus] = useState({});

  useEffect(() => {
    if (myCourses && myCourses.length > 0) {
      const initialStatus = {};
      myCourses.forEach(course => {
        initialStatus[course._id] = "pending";
      });
      setAppointmentStatus(initialStatus);
    }
  }, [myCourses]);

  async function onCourseDelete(id) {
    if (window.confirm("Are You Sure To Delete The Course")) {
      const res = await dispatch(deleteCourses(id));
      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  }

  function toggleAppointmentStatus(id) {
    setAppointmentStatus(prev => ({
      ...prev,
      [id]: prev[id] === "pending" ? "completed" : "pending"
    }));
  }

  useEffect(() => {
    (async () => {
      await dispatch(getAllCourses());
      await dispatch(getStatsData());
      await dispatch(getPaymentRecord());
    })();
  }, []);

  return (
    <HomeLayout>
      <div className="pt-12 min-h-[90vh] flex flex-col flex-wrap gap-10 text-white">
        <h1 className="pt-20 text-center text-4xl md:text-5xl font-semibold text-yellow-500">
          All Appointments
        </h1>

        <div className="mx-4 md:mx-[10%] w-auto md:w-[80%] self-center flex flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-center text-2xl md:text-3xl font-semibold">
              Manage Appointments
            </h1>
            <button
              className="w-full md:w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-lg py-2 px-4 font-semibold text-lg cursor-pointer shadow-lg"
              onClick={() => navigate("/course/create")}
            >
              Create Appointment
            </button>
          </div>

          <div className="w-full overflow-x-auto rounded-lg shadow-xl">
            <table className="min-w-full bg-zinc-800 border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-yellow-500 border-b border-zinc-700">
                  <th className="py-3 px-4 text-left">SL No</th>
                  <th className="py-3 px-4 text-left">Patient Name</th>
                  <th className="py-3 px-4 text-left">Gender</th>
                  <th className="py-3 px-4 text-left">Blood Group</th>
                  <th className="py-3 px-4 text-left">Appointments</th>
                  <th className="py-3 px-4 text-left">Issues</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myCourses?.map((course, idx) => {
                  const status = appointmentStatus[course._id] || "pending";
                  return (
                    <tr 
                      key={course._id} 
                      className={`border-b border-zinc-700 hover:bg-zinc-700 transition-all ${
                        status === "completed" ? "bg-zinc-700/40" : ""
                      }`}
                    >
                      <td className="py-3 px-4">{idx + 1}</td>
                      <td className="py-3 px-4">
                        <div className="w-40 overflow-hidden text-ellipsis">
                          {course?.title}
                        </div>
                      </td>
                      <td className="py-3 px-4">{course?.catagory}</td>
                      <td className="py-3 px-4">{course?.createdBy}</td>
                      <td className="py-3 px-4">{course?.numbersOfLectures || 0}</td>
                      <td className="py-3 px-4">
                        <div className="w-60 md:w-80 max-h-20 overflow-y-auto">
                          {course?.description}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          status === "completed" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {status === "completed" 
                            ? <FaCheck className="mr-1" /> 
                            : <FaClock className="mr-1" />
                          }
                          {status === "completed" ? "Completed" : "Pending"}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            className={`${
                              status === "completed" 
                                ? "bg-green-600 hover:bg-green-700" 
                                : "bg-yellow-500 hover:bg-yellow-600"
                            } transition-all ease-in-out duration-300 rounded-md py-2 px-3 text-sm font-medium flex items-center gap-1`}
                            onClick={() => toggleAppointmentStatus(course?._id)}
                          >
                            {status === "completed" 
                              ? <><FaCheck /> </> 
                              : <><FaEdit /> </>
                            }
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 rounded-md py-2 px-3 text-sm font-medium flex items-center gap-1"
                            onClick={() => onCourseDelete(course?._id)}
                          >
                            <BsTrash /> 
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {(!myCourses || myCourses.length === 0) && (
                  <tr>
                    <td colSpan="8" className="py-8 text-center text-gray-400">
                      No appointments found. Create a new appointment to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseList;
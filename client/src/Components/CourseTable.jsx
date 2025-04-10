import { useNavigate } from "react-router-dom";

function CourseTable({ data }) {
  const navigate = useNavigate();
  
  return (
    <tr 
      //onClick={() => navigate("/course/description", { state: { ...data } })}
      className="border-b border-zinc-600 hover:bg-zinc-700 transition-colors cursor-pointer"
    >
      <td className="px-4 py-3 text-sm md:text-base">{data?.title}</td>
      <td className="px-4 py-3 text-sm md:text-base">{data?.catagory}</td>
      <td className="px-4 py-3 text-sm md:text-base">{data?.age}</td>
      <td className="px-4 py-3 text-sm md:text-base">{data?.createdBy}</td>
      <td className="px-4 py-3 text-sm md:text-base">{data?.numbersOfLectures || 0}</td>
      <td className="px-4 py-3 text-sm md:text-base line-clamp-2">{data?.description}</td>
    </tr>
  );
}

export default CourseTable;
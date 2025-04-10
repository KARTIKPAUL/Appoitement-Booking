import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createNewCourse } from "../../Redux/Slices/courseSlice";
import HomeLayout from "../../Layouts/HomeLayot";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { bloodGroupOption, genderOption } from "../../Components/Constants/DropDownData";

function CreateCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    title: "",
    catagory: "",
    createdBy: "",
    description: "",
    age: "",
    //thumbnail: null,
    //previewImage: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];

    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          //previewImage: this.result,
          //thumbnail: uploadedImage,
        });
      });
    }
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    if (
      !userInput.title ||
      !userInput.description ||
      !userInput.catagory ||
      !userInput.age ||
      //!userInput.thumbnail ||
      !userInput.createdBy
    ) {
      toast.error("All Fields are mandatory");
      return;
    }

    const responce = await dispatch(createNewCourse(userInput));

    if (responce?.paload?.success) {
      setUserInput({
        title: "",
        catagory: "",
        createdBy: "",
        description: "",
        age: "",
        // thumbnail: null,
        // previewImage: "",
      });
    }

    //navigate("/courses");
    toast.success("Appoitement Booked Succesfully")
  }

  return (
    <HomeLayout>
      <div className="pt-10">
        <div className="text-center pt-20">
          <h2 className="text-lime-500 text-sm uppercase font-bold hover:cursor-pointer">
            Create An Appoitement
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center px-4">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-full max-w-3xl my-10 shadow-[0_0_10px_black] relative"
        >
          <Link
            to="/courses"
            className="absolute top-4 left-4 text-2xl link text-accent cursor-pointer"
          >
            <AiOutlineArrowLeft />
          </Link>
          <h1 className="text-center text-xl md:text-2xl font-bold mt-3">
            Create An Appointment
          </h1>

          <main className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-x-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="title"
                  className="text-base md:text-lg font-semibold"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  name="title"
                  id="title"
                  placeholder="Enter Your Full Name"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.title}
                  onChange={handleUserInput}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Blood Group and Gender in same row on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="createdBy"
                    className="text-base md:text-lg font-semibold"
                  >
                    Blood Group:
                  </label>
                  <select
                    required
                    name="createdBy"
                    id="createdBy"
                    className="bg-transparent px-2 py-1 border"
                    value={userInput.createdBy}
                    onChange={handleUserInput}
                  >
                    <option value="" disabled hidden>
                      Select Blood Group.....
                    </option>
                    {bloodGroupOption.map((group, index) => (
                      <option key={index} value={group} className="text-black">
                        {group}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="catagory"
                    className="text-base md:text-lg font-semibold"
                  >
                    Gender:
                  </label>
                  <select
                    required
                    name="catagory"
                    id="catagory"
                    className="bg-transparent px-2 py-1 border"
                    value={userInput.catagory}
                    onChange={handleUserInput}
                  >
                    <option value="" disabled hidden>
                      Select Gender....
                    </option>
                    {genderOption.map((gender, index) => (
                      <option key={index} value={gender} className="text-black">
                        {gender}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="age"
                  className="text-base md:text-lg font-semibold"
                >
                  Age:
                </label>
                <input
                  required
                  name="age"
                  id="age"
                  placeholder="Enter Your age"
                  className="bg-transparent px-2 py-1 border overflow-y-scroll resize-none"
                  value={userInput.age}
                  onChange={handleUserInput}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="description"
                  className="text-base md:text-lg font-semibold"
                >
                  Issues:
                </label>
                <textarea
                  required
                  name="description"
                  id="description"
                  placeholder="Enter Your Issues"
                  className="bg-transparent px-2 py-1 border h-24 overflow-y-scroll resize-none"
                  value={userInput.description}
                  onChange={handleUserInput}
                />
              </div>
            </div>
          </main>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 rounded-sm font-semibold text-lg mt-2"
          >
            Create Appointment
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default CreateCourse;

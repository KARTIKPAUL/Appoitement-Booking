// Add these state variables to your existing component
const [selectedUser, setSelectedUser] = useState(null);
const [isModalOpenMain, setIsModalOpenMain] = useState(false);

// Function to open the patient details popup
const openPatientDetailsMain = (user) => {
  setSelectedUser(user);
  setIsModalOpenMain(true);
};

// Function to close the patient details popup
const closePatientDetailsMain = () => {
  setIsModalOpenMain(false);
};

// Replace your expandable rows with a "View Details" button
// In your table row, replace the expansion logic with:
<button
  onClick={() => openPatientDetailsMain(user)}
  className="text-blue-600 hover:text-blue-900"
>
  View Details
</button>

// Then add this popup component at the end of your component's return statement
{isModalOpenMain && selectedUser && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
    <motion.div
      className="relative w-11/12 max-w-4xl p-6 bg-white shadow-2xl rounded-xl transform transition-all max-h-[90vh] overflow-y-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Close button */}
      <button 
        onClick={closePatientDetailsMain}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={24} />
      </button>

      <h2 className="text-3xl font-extrabold text-blue-700 mb-6 flex items-center gap-2">
        <User size={28} className="text-blue-600" /> Patient Details
      </h2>

      {/* 🌐 Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 🟦 Personal Info */}
        <div className="p-6 border rounded-xl bg-blue-50 shadow-lg hover:shadow-xl transition-all border-blue-300">
          <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
            <User size={20} className="text-blue-500" /> Personal Information
          </h3>
          <p>
            <strong>Gender:</strong> {selectedUser.userDetails?.gender || "N/A"}
          </p>
          <p>
            <strong>DOB:</strong>{" "}
            {selectedUser.userDetails?.dateOfBirth
              ? new Date(selectedUser.userDetails.dateOfBirth).toLocaleDateString()
              : "N/A"}
          </p>
          <p>
            <strong>Contact:</strong> {selectedUser.userDetails?.contact?.mobile || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {selectedUser.userDetails?.contact?.address || "N/A"}
          </p>
        </div>

        {/* 🟩 Medical Details */}
        <div className="p-6 border rounded-xl bg-green-50 shadow-lg hover:shadow-xl transition-all border-green-300">
          <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
            <Heart size={20} className="text-green-500" /> Medical Details
          </h3>
          <p>
            <strong>Blood Group:</strong> {selectedUser.medicalDetails?.bloodGroup || "N/A"}
          </p>
          <p>
            <strong>Medical History:</strong>{" "}
            {Array.isArray(selectedUser.medicalDetails?.medicalHistory)
              ? selectedUser.medicalDetails.medicalHistory.join(", ")
              : selectedUser.medicalDetails?.medicalHistory || "N/A"}
          </p>
          <p>
            <strong>Past Dental History:</strong>{" "}
            {renderDentalHistory(selectedUser.medicalDetails?.pastDentalHistory) || "NA"}
          </p>
        </div>

        {/* 🟣 Previous OPD */}
        <div className="p-6 border rounded-xl bg-purple-50 shadow-lg hover:shadow-xl transition-all border-purple-300">
          <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
            <ClipboardList size={20} className="text-purple-500" /> Previous OPD
          </h3>
          {selectedUser?.opdForms && selectedUser.opdForms.length > 0 ? (
            <ul className="list-disc list-inside ml-4 text-purple-600">
              {selectedUser.opdForms.map((opd) => (
                <li key={opd._id}>
                  <Link to={`/dashboard/checkup/${opd}`} className="hover:underline">
                    {opd.opdNumber} ({opd.checkupInfo}{" "}
                    - {new Date(opd.createdAt).toLocaleDateString()})
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ml-4 text-gray-600">No OPD records found.</p>
          )}
        </div>
      </div>

      {/* 🔹 Action Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          onClick={() => openModal(selectedUser)}
        >
          Create OPD
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          onClick={() => openAppointmentModal(selectedUser)}
        >
          Create Appointment
        </button>
      </div>
    </motion.div>
  </div>
)}
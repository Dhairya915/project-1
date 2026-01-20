import React, { useState } from 'react';

function Admission() {
  const step = [
    "INQUIRY",
    "CAMPUS VISIT",
    "SUBMIT DOCUMENTS",
    "ADMISSION CONFIRMATION",
    "ENROLLMENT",
  ];

  const documents = [
    "Birth Certificate",
    "Passport-size Photo",
    "Adhar Card (Child & Parent)",
    "Previous School Report Card / TC",
    "Address Proof",
    "Caste Certificate",
    "Medical Certificate (if applicable)",
  ];

  const steps = [
    { number: 1, title: 'Student Details' },
    { number: 2, title: 'Parent Information' },
    { number: 3, title: 'Document Upload' },
    { number: 4, title: 'Additional Information' }
  ];

  const initialFormData = {
    studentName: '',
    dateOfBirth: '',
    gender: '',
    classApplying: '',
    academicYear: '',
    parentName: '',
    relationship: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    medicalCondition: ''
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.studentName && formData.dateOfBirth && formData.gender && formData.classApplying && formData.academicYear;
      case 2:
        return formData.parentName && formData.relationship && formData.phoneNumber && formData.email && formData.address && formData.city && formData.state;
      case 4:
        return formData.medicalCondition;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please fill all required fields before proceeding.");
      return;
    }
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map(file => ({ name: file.name, file }));
    setUploadedDocuments([...uploadedDocuments, ...newDocs]);
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    setFormData(initialFormData);
    setCurrentStep(1);
    setUploadedDocuments([]);
  };

  return (
    <div className="w-full">

      {/* Admission Process Section */}
      <div className='w-full flex flex-col items-center px-4 py-8'>
        <div className='w-full max-w-[842px] flex flex-col items-center gap-1 mt-8 sm:mt-10'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Admission Process</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Begin your child's educational journey with us.
          </span>
        </div>

        <div className="w-full max-w-[1080px] flex flex-col mt-8 sm:mt-12 gap-0">
          {step.map((title, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between h-auto sm:h-[104px] border-b border-[#F0942A] p-4 sm:p-0 ${index === 0 ? "border-t border-[#F0942A]" : ""}`}
            >
              <div className="text-[#F0942A] text-3xl sm:text-[40px] font-semibold mb-2 sm:mb-0">0{index + 1}</div>
              <div className="flex-1 sm:ml-8 md:ml-16 mb-2 sm:mb-0">
                <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold text-[#555555] tracking-wide">{title}</h3>
              </div>
              <div className="w-full sm:w-[280px] md:w-[360px] text-sm sm:text-base md:text-[18px] text-[#8D8D8D] leading-relaxed">
                Fill out initial interest form or contact info at school office.
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents Section */}
      <div className='w-full flex flex-col items-center px-4 py-8'>
        <div className='w-full max-w-[842px] flex flex-col items-center gap-1 mt-8 sm:mt-10'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Required Documents</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Admission Documents Checklist
          </span>
        </div>

        <div className="w-full max-w-[1076px] flex flex-col gap-3 sm:gap-4 mt-8 sm:mt-12">
          {documents.map((doc, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:h-[42px] gap-2">
              <span className="text-lg sm:text-xl md:text-[24px] text-[#555555] font-medium whitespace-nowrap">{doc}</span>
              <div className="flex-1 relative mx-2 sm:mx-4">
                <div className="absolute bottom-0 left-0 right-0 border-b-2 border-dashed border-[#CFCFCF]" />
              </div>
              <div><span className="text-lg sm:text-xl md:text-[24px] text-[#555555]">0{index + 1}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Form Section */}
      {/* Admission Form Section */}
      <div className='w-full min-h-[800px] h-auto flex flex-col items-center px-4 py-8'>

        <div className='w-full max-w-[842px] h-auto flex flex-col justify-center items-center mt-8 sm:mt-10 md:mt-13 gap-1'>
          <span className='text-base sm:text-lg md:text-[18px] text-[#F0942A] font-medium'>Admission Form</span>
          <span className='text-xl sm:text-2xl md:text-[30px] text-[#555555] font-semibold text-center px-4'>
            Fill out admission form to begin your journey with us.
          </span>
        </div>

        <div className="w-full max-w-[1343px] flex flex-col lg:flex-row gap-4 lg:gap-6 mt-8 sm:mt-12 md:mt-[61px]">

          {/* Left Sidebar - Steps */}
          <div className='w-full lg:w-[343px] h-auto bg-[#F0942A1A] flex flex-col rounded-lg p-4 sm:p-6'>
            <div className='flex flex-row lg:flex-col gap-4 lg:gap-0 overflow-x-auto lg:overflow-x-visible'>
              {steps.map((step, index) => (
                <div key={step.number} className='flex flex-col lg:flex-row items-start flex-shrink-0'>
                  <div className='flex flex-col items-center'>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base ${currentStep === step.number ? 'bg-[#F0942A]' : currentStep > step.number ? 'bg-[#F0942A]' : 'bg-[#C8C8C8]'
                      }`}>
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`hidden lg:block w-0.5 h-16 ${currentStep > step.number ? 'bg-[#F0942A]' : 'bg-[#C8C8C8]'}`} />
                    )}
                  </div>
                  <div className='lg:ml-4 mt-2 lg:mt-2 text-center lg:text-left'>
                    <p className={`text-sm sm:text-base ${step.number <= currentStep
                      ? 'font-medium sm:text-[20px] text-[#555555]'
                      : 'text-[16px] sm:text-[18px] text-[#929292]'
                      }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className='w-full lg:w-[967px] h-auto bg-[#F5F5F5] rounded-lg shadow-sm p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[400px]'>

            {/* Step 1: Student Details */}
            {currentStep === 1 && (
              <>
                <div className='flex-1'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Student Full Name</label>
                      <input
                        type='text'
                        name='studentName'
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Date of Birth</label>
                      <input
                        type='date'
                        name='dateOfBirth'
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Gender</label>
                      <select
                        name='gender'
                        value={formData.gender}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      >
                        <option value=''>Select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Class Applying For</label>
                      <input
                        type='text'
                        name='classApplying'
                        value={formData.classApplying}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Academic Year</label>
                      <input
                        type='text'
                        name='academicYear'
                        value={formData.academicYear}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className='flex flex-col sm:flex-row justify-end gap-2 mt-6'>
                  <button
                    onClick={handleNext}
                    className='px-8 py-3 bg-[#3A53A4] text-white rounded-lg hover:bg-[#3d4d99] font-medium w-full sm:w-auto'
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Step 2: Parent Information */}
            {currentStep === 2 && (
              <>
                <div className='flex-1'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Parent/Guardian Full Name</label>
                      <input
                        type='text'
                        name='parentName'
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Relationship to Student</label>
                      <input
                        type='text'
                        name='relationship'
                        value={formData.relationship}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Phone Number</label>
                      <input
                        type='tel'
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Email Address</label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>Address</label>
                      <input
                        type='text'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>City</label>
                      <input
                        type='text'
                        name='city'
                        value={formData.city}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                      <label className='block text-[#555555] text-[16px] font-medium mb-2'>State</label>
                      <input
                        type='text'
                        name='state'
                        value={formData.state}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className='flex flex-col sm:flex-row justify-end gap-2 mt-6'>
                  <button
                    onClick={handleBack}
                    className='px-8 py-3 bg-[#C8C8C8] text-white rounded-lg hover:bg-gray-400 font-medium w-full sm:w-auto'
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className='px-8 py-3 bg-[#3A53A4] text-white rounded-lg hover:bg-[#3d4d99] font-medium w-full sm:w-auto'
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Step 3: Document Upload */}
            {currentStep === 3 && (
              <>
                <div className='flex-1'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Upload Section */}
                    <div className='flex flex-col items-center'>
                      <div className='w-full h-48 sm:h-56 bg-[#E8EAF6] rounded-lg flex flex-col items-center justify-center mb-4'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 bg-[#3A53A4] rounded-2xl flex items-center justify-center mb-3'>
                          <svg
                            className='w-8 h-8 sm:w-10 sm:h-10 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                            />
                          </svg>
                        </div>
                        <p className='text-[#1C1C1C] font-medium'>Upload</p>
                      </div>
                      <input
                        type='file'
                        id='fileUpload'
                        multiple
                        onChange={handleFileUpload}
                        className='hidden'
                      />
                      <label
                        htmlFor='fileUpload'
                        className='px-6 py-2 bg-[#3A53A4] text-white rounded-lg hover:bg-[#3d4d99] cursor-pointer w-full text-center sm:w-auto'
                      >
                        Choose Files
                      </label>
                    </div>

                    {/* Document List */}
                    <div>
                      <h3 className='text-[#555555] font-semibold mb-4 text-center sm:text-left'>
                        List of Documents
                      </h3>
                      <ul className='space-y-2 text-[#929292] text-sm sm:text-base'>
                        <li>Birth Certificate</li>
                        <li>Aadhar Card (Child)</li>
                        <li>Aadhar Card (Parent)</li>
                        <li>Previous Report Card / Transfer Certificate</li>
                      </ul>
                    </div>
                  </div>

                  {/* Uploaded Documents */}
                  {uploadedDocuments.length > 0 && (
                    <div className='mt-6'>
                      <h3 className='text-[20px] font-semibold mb-4'>Uploaded Documents</h3>
                      <div className='space-y-3'>
                        {uploadedDocuments.map((doc, index) => (
                          <div
                            key={index}
                            className='flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg'
                          >
                            <span className='text-[#555555] text-[18px] font-medium truncate'>
                              {doc.name}
                            </span>
                            <button className='text-[#929292] hover:text-blue-600 font-medium text-[16px]'>
                              View
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className='flex flex-col sm:flex-row justify-end gap-2 mt-6'>
                  <button
                    onClick={handleBack}
                    className='px-8 py-3 bg-[#C8C8C8] text-white rounded-lg hover:bg-gray-400 font-medium w-full sm:w-auto'
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className='px-8 py-3 bg-[#3A53A4] text-white rounded-lg hover:bg-[#3d4d99] font-medium w-full sm:w-auto'
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Step 4: Additional Information */}
            {currentStep === 4 && (
              <>
                <div className='flex-1 rounded-lg p-4 sm:p-6 md:p-8'>
                  <div>
                    <label className='block text-[16px] text-[#555555] font-medium mb-2 sm:mb-4'>
                      Does the child have any medical condition?
                    </label>
                    <textarea
                      name='medicalCondition'
                      value={formData.medicalCondition}
                      onChange={handleInputChange}
                      placeholder='NA / Any medical condition'
                      className='w-full h-40 sm:h-48 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none text-sm sm:text-base'
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className='flex flex-col sm:flex-row justify-end gap-2 mt-6'>
                  <button
                    onClick={handleBack}
                    className='px-8 py-3 bg-[#C8C8C8] text-white rounded-lg hover:bg-gray-400 font-medium w-full sm:w-auto'
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className='px-8 py-3 bg-[#3A53A4] text-white rounded-lg hover:bg-[#3d4d99] font-medium w-full sm:w-auto'
                  >
                    Submit
                  </button>
                </div>
              </>
            )}



          </div>
        </div>
      </div>

    </div>
  );
}



export default Admission;
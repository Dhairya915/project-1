import React from 'react'
import { useState } from 'react';

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

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
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
  });

  const initialCondition = {
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
  }

  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.studentName &&
          formData.dateOfBirth &&
          formData.gender &&
          formData.classApplying &&
          formData.academicYear
        );

      case 2:
        return (
          formData.parentName &&
          formData.relationship &&
          formData.phoneNumber &&
          formData.email &&
          formData.address &&
          formData.city &&
          formData.state
        );

      // case 3:
      //   return uploadedDocuments.length > 0; // mandatory documents

      case 4:
        return formData.medicalCondition;

      default:
        return true;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please fill all required fields before proceeding.");
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map(file => ({
      name: file.name,
      file: file
    }));
    setUploadedDocuments([...uploadedDocuments, ...newDocs]);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    setFormData(initialCondition);
  };

  const steps = [
    { number: 1, title: 'Student Details' },
    { number: 2, title: 'Parent Information' },
    { number: 3, title: 'Document Upload' },
    { number: 4, title: 'Additional Information' }
  ];

  return (

    <div>

      <div className='w-full h-[810px]  flex flex-col items-center'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Admission Process</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Begin your child's educational journey with us.</span>
        </div>

        <div className="w-[1080px] h-[522px] border-[#F0942A] flex flex-col  mt-[66px]">

          {step.map((title, index) => (
            <div
              key={index}
              className={`flex items-center justify-between h-[104px] border-b border-[#F0942A] ${index === 0 ? "border-t border-[#F0942A]" : ""}`} >
              {/* Step number */}
              <div className="text-[#F0942A] text-[40px] font-semibold text-start">
                0{index + 1}
              </div>

              {/* Step title */}
              <div className="flex-1 ml-16">
                <h3 className="text-[24px] font-semibold text-[#555555] tracking-wide">
                  {title}
                </h3>
              </div>

              {/* Description */}
              <div className="w-[360px] text-[18px] text-[#8D8D8D] leading-relaxed">
                Fill out initial interest form or contact info at school office.
              </div>
            </div>
          ))}


        </div>

      </div>

      <div className='w-full h-[710px] flex flex-col items-center'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Required Documents</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Admission Documents Checklist</span>
        </div>

        <div className="w-[1076px] h-[414px] mx-auto flex flex-col justify-start gap-4 mt-[66px]">
          {documents.map((doc, index) => (
            <div key={index} className="flex flex-col h-[42px]">
              {/* Row content */}
              <div className="flex items-center flex-1">
                {/* Left text */}
                <span className="text-[24px] text-[#555555] font-medium whitespace-nowrap">
                  {doc}
                </span>

                {/* Spacer for line */}
                <div className="flex-1 relative">
                  {/* Dashed line at bottom of spacer */}
                  <div className="absolute bottom-0 left-0 right-0 border-b-2 border-dashed border-[#CFCFCF]" />
                </div>

                {/* Right number */}
                <div>
                  <span className="text-[24px] text-[#555555]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='w-full h-[800px] flex flex-col items-center'>

        <div className='w-[842px] h-[83px] flex flex-col  justify-center items-center  mt-13 gap-1'>
          <span className='text-[18px] text-[#F0942A] font-medium'>Admission Form</span>
          <span className='text-[30px] text-[#555555] font-semibold'>Fill out  admission form to begin your journey with us.</span>
        </div>

        <div className={`w-[1343px] flex flex-row justify-between mt-[61px] transition-all duration-300 ${currentStep === 1 ? 'h-[473px]' :
          currentStep === 2 ? 'h-[510px]' :
            currentStep === 3 ? 'h-[612px]' :
              'h-[456px]'
          }`}>

          {/* Left Sidebar - Steps */}
          <div className='w-[343px] h-full bg-[#F0942A1A] flex flex-col rounded-lg p-8'>
            <div className='flex flex-col gap-0'>
              {steps.map((step, index) => (
                <div key={step.number} className='flex items-start'>
                  <div className='flex flex-col items-center'>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${currentStep === step.number
                      ? 'bg-[#F0942A]'
                      : currentStep > step.number
                        ? 'bg-[#F0942A]'
                        : 'bg-[#C8C8C8]'
                      }`}>
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-0.5 h-16 ${currentStep > step.number ? 'bg-[#F0942A]' : 'bg-[#C8C8C8]'
                        }`} />
                    )}
                  </div>
                  <div className='ml-4 mt-2'>
                    <p className={`text-base ${currentStep === step.number ? 'font-medium text-[20px] text-[#555555]' : 'text-[18px] text-[#929292]'
                      }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className='w-[967px] h-full bg-[#F5F5F5] rounded-lg shadow-sm p-8 flex flex-col justify-between'>

            {/* Step 1: Student Details */}
            {currentStep === 1 && (
              <>
                <div className='flex-1'>
                  <div className='grid grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-[#555555]  text-[16px] font-medium mb-2'>Student Full Name</label>
                      <input
                        type='text'
                        name='studentName'
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555]  text-[16px] font-medium mb-2'>Date of Birth</label>
                      <input
                        type='date'
                        name='dateOfBirth'
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div>
                      <label className='block text-[#555555]  text-[16px] font-medium mb-2'>Gender</label>
                      <select
                        name='gender'
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      >
                        <option value=''>Select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-[#555555]  text-[16px] font-medium mb-2'>Class Applying For</label>
                      <input
                        type='text'
                        name='classApplying'
                        value={formData.classApplying}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                    <div className='col-span-2'>
                      <label className='block text-[#555555]  text-[16px] font-medium mb-2'>Academic Year</label>
                      <input
                        type='text'
                        name='academicYear'
                        value={formData.academicYear}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50'
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className='flex justify-end mt-6'>
                  <button
                    onClick={handleNext}
                    disabled={!validateStep()}
                    className="px-8 py-3 bg-[#3A53A4] text-white rounded-lg font-medium hover:bg-[#3d4d99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            

          </div>

        </div>

      </div>

    </div>
  )
}

export default Admission
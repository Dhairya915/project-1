import React from 'react'

function AcademicCulture() {
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="w-[1351px] h-[608px] mx-auto flex flex-col">
        
        {/* Top Row - 3 Small Cards */}
        <div className="flex gap-2 justify-center  flex-wrap">
          <div className="w-[549px] h-[289px] bg-white rounded-[20px]  shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-5">💡</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Concept-Based Learning</h3>
            <p className="text-sm text-gray-600 leading-relaxed">We promote a culture of academic excellence with focus, discipline, and curiosity.Every student is encouraged to think critically and learn deeply.Our classrooms are centers of active engagement and grow</p>
          </div>

          <div className="w-[321px] h-[289px] bg-white rounded-[20px]  shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-5">🎯</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Thinking Focus</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Our academic culture balances traditional wisdom with modern learning methods.We aim for well-rounded development.</p>
          </div>

          <div className="w-[438px] h-[289px] bg-white rounded-[20px]  shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-5">🔧</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Value-Based Academics</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Education here is rooted in values, discipline, and respect.Academic lessons are enriched with cultural understanding and ethical thinking.</p>
          </div>
        </div>

        {/* Bottom Row - Small, Medium, Large Cards */}
        <div className="flex gap-2 justify-center flex-wrap">
          <div className="w-[321px] h-[289px] bg-white rounded-[20px]  shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl ">🎯</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Student-Centered</h3>
            <p className="text-sm text-gray-600 leading-relaxed">We place each student at the center of the learning journey. Our approach encourages curiosity, creativity, and more.</p>
          </div>

          <div className="w-[438px] h-[289px] bg-white rounded-[20px] p-7 shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl ">🔧</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Continuous Improvement</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Our academic environment thrives on constant progress and reflection. We encourage both students and teachers to evolve and grow.</p>
          </div>

          <div className="w-[549px] h-[289px] bg-white rounded-[20px] p-7 shadow-md hover:shadow-xl transition-shadow ">
            <div className="text-4xl ">💡</div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Collaborative Learning</h3>
            <p className="text-sm text-gray-600 leading-relaxed">We foster a spirit of teamwork, peer learning, and open discussion.Group activities and interactive lessons strengthen understanding.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AcademicCulture
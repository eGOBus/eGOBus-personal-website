import React from 'react'


function home() {
  return (
   <>
    
       <div id="main" className="bg-zinc-800 text-white flex flex-col md:flex-row h-auto w-full overflow-hidden">
                

                <div id="left-part" className="w-full h-auto pt-0 md:w-1/2 p-20 pl-10 p-20 lg:p-[4%]" >
                    <h1 className="font-semibold text-left leading-tight text-5xl md:text-4xl lg:text-6xl pt-0" >
                        e-Go Bus</h1>
                        <h3  classNameName="font-semibold text-left leading-none text-2xl  pt-2">The Smart Way to Monitor School Commutes!
                        </h3>
                    <p className="text-base md:text-md text-left mt-4">
                        e-GO Bus is an essential mobile app designed to keep parents and school authorities connected and informed. With real-time GPS tracking and instant notifications, you’ll always know the location and status of your child’s school bus. Get alerts on arrivals, pickups, delays, and even report absences with a tap. Friendly and easy to navigate, e-GO Bus also features attendance monitoring, forgotten item notifications, and accurate arrival estimates that consider current traffic conditions. Your child's safe commute is just a glance away with e-GO Bus your partner for peace of mind on every school day.
    
                    </p>
                   
                </div>
                
               
                <div id="img" className="w-full md:w-1/2 flex items-center justify-center p-2 overflow-hidden">
                <img src="images/school-bus-monitoring-app.png" alt="Consulting agency image" className="w-4/5 md:w-2/3 h-[400px] object-cover rounded-md" />

                </div>
            </div>










   
      </>
  )
}

export default home
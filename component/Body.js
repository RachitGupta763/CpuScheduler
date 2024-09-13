
import { Link } from "react-router-dom";
import cpu from "../assets/cpu.jpg"

const img3="https://media.istockphoto.com/id/522380177/photo/as-times-goes-by-sequence.jpg?s=1024x1024&w=is&k=20&c=eGesHqDwk4A7FRpGTTf54urX_xn1zYf7W8MBKZR4VtE="
const img2="https://plus.unsplash.com/premium_photo-1681426698212-53e47fec9a2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF4JTIwcGVyZm9ybWFuY2UlMjBvZiUyMGNwdXxlbnwwfHwwfHx8MA%3D%3D"
const img1="https://media.istockphoto.com/id/1924188189/photo/artificial-intelligence-ai-data-tech-analytics-for-kpi-accounting-big-complex-business.jpg?s=612x612&w=0&k=20&c=TBgiO57UOY5k4cAnuO_us8ZSxAsyqQ9YHBRcQNX9Kyk=";
const Body = () => {
    return <div className=" " >
      <div className='bg-cover w-screen h-screen' style={{backgroundImage: `url(${cpu})`}} >
        <div className="flex flex-col justify-center items-center  text-white ">
         <div className=" flex flex-col justify-center items-center font-bold m-40">
         <p className="p-8 text-[43px]">Welcome to the World of</p>
         <p className="p-10 text-5xl ">CPU Scheduling Algorithm</p>
         <Link to="/Algorithm"><button className=" m-8 p-3 text-[#030230] bg-white text-2xl rounded-md font-bold">Explore Now {">"}</button></Link>
         </div>
        
        </div>
      </div>

      {/* Need Of CPU Utilization*/}
      <div className="w-[8/10] scroll-smooth m-10 p-10 text-[#030230]">

      <p className="text-center text-5xl font-bold p-10">Need of Scheduling Algorithm</p>
      
      {/*Container 1*/}
      <div className="shadow-lg m-5 p-10">
        <p className="text-center text-5xl font-bold p-10 m-5">CPU Utilization</p>
        <div className="flex justify-between items-center ">
          <img className="w-[500px] h-[350px]" src={img1} />
          <p className="w-[400px] text-center text-2xl font-semibold">CPU scheduling is a process that allows one process to use the CPU while the execution of another process is on hold due to unavailability of any resource like I/O etc, thereby making full use of CPU. The aim of CPU scheduling is to maximize CPU utilization by making the system efficient, fast, and fair.</p>
        </div>
      </div>

      {/*Container 2*/}
      <div className="shadow-lg m-5 p-10">
        <p className="text-center text-5xl font-bold p-10 m-5">Max Performance</p>
        <div className="flex justify-between items-center ">
          <p className="w-[400px] text-center text-2xl font-semibold">To make out the best use of the CPU and not to waste any CPU cycle, the CPU would be working most of the time(Ideally 100% of the time). Considering a real system, CPU usage should range from 40% (lightly loaded) to 90% (heavily loaded.).</p>
          <img className="w-[500px] h-[350px]" src={img2} />
        </div>
      </div>
      <div>

      {/*Container 3*/}
      <div className="shadow-lg m-5 p-10">
        <p className="text-center text-5xl font-bold p-10 m-5">Time Minimizing</p>
        <div className="flex justify-between items-center ">
          <img className="w-[500px] h-[350px]" src={img3} />
          <p className="w-[400px] text-center text-2xl font-semibold">There are many very different types of algorithms for different different tasks. By using them we can minimize waiting time, response time and turnaround time of processes. like turnaround time is minimized if most processes finish their next cpu burst within one time quantum.</p>
        </div>
      </div>
      <div></div>

      </div>
      </div>
    </div>
}
export default Body;
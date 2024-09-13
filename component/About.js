const About = () => {
    return <div className="w-screen">
      
      <div className=" w-11/12   my-36 flex flex-col justify-around items-center mx-auto">
         
      <div className="w-4/5 my-10 transform transition duration-500 hover:scale-110 hover:shadow-md bg-gray-100 hover:shadow-black rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">What is CPU Scheduling?</p>
          <p className="text-xl font-semibold p-4">CPU Scheduling is a process of determining which process will own CPU for execution while another process is on hold. The main task of CPU scheduling is to make sure that whenever the CPU remains idle, the OS at least select one of the processes available in the ready queue for execution. The selection process will be carried out by the CPU scheduler. It selects one of the processes in memory that are ready for execution.</p>
        </div> 


        <div className="w-4/5  my-10 transform transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-black bg-gray-100 rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">Why is CPU Scheduling?</p>
          <p className="text-xl font-semibold p-4">
A typical process involves both I/O time and CPU time. In a uni programming system like MS-DOS, time spent waiting for I/O is wasted and CPU is free during this time. In multi programming systems, one process can use CPU while another is waiting for I/O. This is possible only with process scheduling.
</p>
<p className="text-2xl font-semibold p-4">Objectives of Process Scheduling Algorithm</p>

<ul className="list-disc px-8 py-4 text-xl"  >
  <li>
  Max CPU utilization [Keep CPU as busy as possible]
  </li>
  <li>Fair allocation of CPU.</li>
  <li>Max throughput [Number of processes that complete their execution per time unit]</li>
  <li>
   Min turnaround time [Time taken by a process to finish execution]</li>
  <li>
  Min waiting time [Time a process waits in ready queue]
  </li>
  <li>Min response time [Time when a process produces first response]</li>
  
</ul>
        </div> 


        <div className="w-4/5 my-10 transform transition duration-500  hover:scale-110 hover:shadow-black hover:shadow-lg bg-gray-100 rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">Important CPU scheduling Terminologies</p>
          <ul className="list-disc text-xl px-8 py-4" >
  <li  className="p-2">
  <span className="font-semibold "> Burst Time/Execution Time: </span>It is a time required by the process to complete execution. It is also called running time.

  </li>
  <li className="p-2"><span className="font-semibold "> Arrival Time:</span> when a process enters in a ready state
  </li>
  <li className="p-2"><span className="font-semibold "> Finish Time: </span>when process complete and exit from a system
</li>
  <li className="p-2">
  <span className="font-semibold "> Multiprogramming:</span> A number of programs which can be present in memory at the same time.</li>
  <li className="p-2">
  <span className="font-semibold "> Jobs: </span>It is a type of program without any kind of user interaction.
  </li>
  <li className="p-2"><span className="font-semibold "> User:</span> It is a kind of program having user interaction.
  </li>
  <li className="p-2"><span className="font-semibold "> Process: </span>It is the reference that is used for both job and user.</li>
  <li className="p-2">
<span className="font-semibold "> CPU/IO burst cycle: </span>Characterizes process execution, which alternates between CPU and I/O activity. CPU times are shorter than the time of I/O.
  </li>
  </ul>
        </div> 


        <div className="w-4/5 my-10 transform transition duration-500 hover:scale-110 hover:shadow-md bg-gray-100 hover:shadow-black rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">Types of CPU Scheduling</p>
          <p className="text-xl font-semibold p-4">There is mainly two major types of CPU Scheduling which is listed below.There is sub-types of this algorithm also. we have discussed all algorithm in details below.</p>
          <ul className="list-disc px-8 py-2 text-lg">
            <li>Non Preemptive Algorithm</li>
            <li>Preemptive Algorithm</li>
          </ul>

          <p className="text-2xl font-semibold p-4">Non Preemptive Algorithm</p>
          <p className="p-4 text-xl">In this type of scheduling method, the CPU has been allocated to a specific process. The process that keeps the CPU busy will release the CPU either by switching context or terminating. It is the only method that can be used for various hardware platforms. That’s because it doesn’t need special hardware (for example, a timer) like preemptive scheduling.</p>

          <p className="text-2xl font-semibold p-4">Preemptive Algorithm</p>
          <p className="p-4 text-xl">In Preemptive Scheduling, the tasks are mostly assigned with their priorities. Sometimes it is important to run a task with a higher priority before another lower priority task, even if the lower priority task is still running. The lower priority task holds for some time and resumes when the higher priority task finishes its execution.</p>
        </div> 


        <div className="w-4/5 my-10 transform transition duration-500 hover:scale-110 hover:shadow-md bg-gray-100 hover:shadow-black rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">1) First Come First Serve</p>
          <p className="text-xl font-semibold p-4">First Come First Serve is the full form of FCFS. It is the easiest and most simple CPU scheduling algorithm. In this type of algorithm, the process which requests the CPU gets the CPU allocation first. This scheduling method can be managed with a FIFO queue.</p>
          <p className="text-xl font-semibold p-4">As the process enters the ready queue, its PCB (Process Control Block) is linked with the tail of the queue. So, when CPU becomes free, it should be assigned to the process at the beginning of the queue.</p>
          <p className="text-2xl font-semibold p-4">Advantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
            <li>FCFS provides fairness by treating all processes equally and giving them an equal opportunity to run.</li>
            <li>FCFS guarantees that every process will eventually get a chance to execute, as long as the system has enough resources to handle all the processes.</li>
            <li>FCFS is well-suited for long-running processes or workloads that do not have strict time constraints. </li>
          </ul>
          
          <p className="text-2xl font-semibold p-4">Disadvantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
            <li>The process with less execution time suffers i.e. waiting time is often quite long.</li>
            <li>Favors CPU Bound process then I/O bound process.</li>
            <li>FCFS algorithm is particularly troublesome for multiprogramming systems, where it is important that each user get a share of the CPU at regular intervals. </li>
          </ul>
        
        </div> 

        <div className="w-4/5 my-10 transform transition duration-500 hover:scale-110 hover:shadow-md bg-gray-100 hover:shadow-black rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">2) Shortest job first</p>
          <p className="text-xl font-semibold p-4">SJF is a full form of (Shortest job first) is a scheduling algorithm in which the process with the shortest execution time should be selected for execution next. This scheduling method can be preemptive or non-preemptive. It significantly reduces the average waiting time for other processes awaiting execution.</p>

          <p className="text-2xl font-semibold p-4">Advantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
             <li>It is probably optimal, in that it gives the minimum average waiting time for a given set of processes.</li>
             <li>Shortest jobs are favored.</li>
          </ul>
          
          <p className="text-2xl font-semibold p-4">Disadvantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
            <li>SJF may cause starvation if shorter processes keep coming. This problem is solved by aging.</li>
            <li>It cannot be implemented at the level of short-term CPU scheduling.</li>
          </ul>
        
        </div> 


        <div className="w-4/5 my-10 transform transition duration-500 hover:scale-110 hover:shadow-md bg-gray-100 hover:shadow-black rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">3) Shortest Remaining Time (SRJF)</p>
          <p className="text-xl font-semibold p-4">The full form of SRT is Shortest remaining time. It is also known as SJF preemptive scheduling. In this method, the process will be allocated to the task, which is closest to its completion. This method prevents a newer ready state process from holding the completion of an older process.</p>
          <p className="text-2xl font-semibold p-4">Advantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
             <li>The main advantage of the SRTF algorithm is that it makes the processing of the jobs faster than the SJF algorithm, mentioned it’s overhead charges are not counted.</li>
          </ul>
          
          <p className="text-2xl font-semibold p-4">Disadvantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
            <li>In SRTF, the context switching is done a lot more times than in SJN due to more consumption of the CPU's valuable time for processing. The consumed time of CPU then adds up to its processing time and which then diminishes the advantage of fast processing of this algorithm</li>
          </ul>
        
        </div>

        <div className="w-4/5 my-10 transform transition duration-500 hover:scale-110 hover:shadow-md bg-gray-100 hover:shadow-black rounded-lg py-5">
          <p className="text-4xl font-bold text-center p-4">4) Round Robin </p>
          <p className="text-xl font-semibold p-4">Round robin is the oldest, simplest scheduling algorithm. The name of this algorithm comes from the round-robin principle, where each person gets an equal share of something in turn. It is mostly used for scheduling algorithms in multitasking. This algorithm method helps for starvation free execution of processes.</p>
          <p className="text-2xl font-semibold p-4">Advantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
             <li>Every process gets an equal share of the CPU.</li>
             <li>RR is cyclic in nature, so there is no starvation.</li>
          </ul>
          
          <p className="text-2xl font-semibold p-4">Disadvantages</p>
          <ul className="list-disc px-8 py-2 text-lg">
            <li>Setting the quantum too short increases the overhead and lowers the CPU efficiency, but setting it too long may cause a poor response to short processes.</li>
            <li>The average waiting time under the RR policy is often long.</li>
            <li>If time quantum is very high then RR degrades to FCFS.</li>
          </ul>
        
        </div>
        
        </div>
    </div>
}
export default About;



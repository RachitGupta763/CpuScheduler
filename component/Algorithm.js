import { useState } from "react";
import Output from "./Output";
import Clean from "./Clean";

const Algorithm = () => {

    const [data,setData] = useState({
      a1:0,
      b1:0,
      a2:0,
      b2:0,
      a3:0,
      b3:0,
      a4:0,
      b4:0,
      a5:0,
      b5:0,
    })
    let newA=[
      [Math.round(data.a1),Math.round(data.b1),0,0,0],
      [Math.round(data.a2),Math.round(data.b2),0,0,0],
      [Math.round(data.a3),Math.round(data.b3),0,0,0],
      [Math.round(data.a4),Math.round(data.b4),0,0,0],
      [Math.round(data.a5),Math.round(data.b5),0,0,0]
    ]

    
    const [algo,setAlgo] = useState(''); 
    
    const [arr,setArr] = useState(newA);
    const[count,setCount]=useState(0);
  function decreaseHandler(){
      setCount(count-1);
  }
  function increaseHandler(){
      setCount(count+1);
  }

    const handlechange = (e) =>{
      const {name,value} = e.target;
      
      setData((prev) =>{
        return {...prev,[name]:value}
      });
    }
   
    let quantum = count;
    let a=[
      [Math.round(data.a1),Math.round(data.b1),0],
      [Math.round(data.a2),Math.round(data.b2),1],
      [Math.round(data.a3),Math.round(data.b3),2],
      [Math.round(data.a4),Math.round(data.b4),3],
      [Math.round(data.a5),Math.round(data.b5),4],
    ]

    const fcfs = () => {
     
      
      function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
       }
    
       a.sort(sortFunction);
        
       
      function calculateWaitingTime(a,n) {
         newA[a[0][2]][3] = 0;
        
       
        for (let i = 1; i < n; i++) {
          newA[a[i][2]][3] = (a[i - 1][0] + a[i - 1][1] + newA[a[i-1][2]][3]) - a[i][0];
      
        }

        for (let i = 0; i < n; i++) {
          newA[i][2] = (newA[i][0] + newA[i][1] + newA[i][3]);
      
        }

        for (let i = 0; i < n; i++) {
          newA[i][4] = (newA[i][2] - newA[i][0]);
      
        }



        let average;
        let sum = 0;
  
        for (let i = 0; i < n; i++) {
          sum = sum +newA[i][3];
        } 
        average = sum / n;
      }

      let n=5;
      calculateWaitingTime(a,n);
      setAlgo('f'); 
      setArr(newA);
     }  
     
     const sjf = () => {
        
      
      function sortFunction(a, b) {
        if (a[0] === b[0]) {
          if(a[1]==b[1])
            return 0;
          else
            return (a[1] < b[1]) ? -1 : 1; 
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
       }

       function sortF(a, b) {
        if (a[1] === b[1]) {
          if(a[0]==b[0])
            return 0;
          else
            return (a[0] < b[0]) ? 1 : -1; 
        }
        else {
            return (a[1] < b[1]) ? 1 : -1;
        }
       }
    
       a.sort(sortFunction);
       console.log(a);
       function calculateWaitingTime(a,n) {
        

        let countP=0;
        let t=0;
        let i=0;
        let arr=[];
        while(countP<n){
             
          while(i<n && a[i][0]<=t){
            arr.push(a[i]);
            i++;
           
          }
          if(arr.length>0){
            arr.sort(sortF);
            
            let at=arr[arr.length-1];
            console.log(at[0]);
            
            arr.pop();
           
            console.log(t);
            newA[at[2]][3]= t - at[0];
            t=t+at[1];
            countP++;
          }
          else{
            t=t+1;
          }
         
        }
       
      
        for (let i = 0; i < n; i++) {
          newA[i][2] = (newA[i][0] + newA[i][1] + newA[i][3]);
      
        }

       for (let i = 0; i < n; i++) {
         newA[i][4] = (newA[i][2] - newA[i][0]);
     
       }



       let average;
       let sum = 0;
 
       for (let i = 0; i < n; i++) {
         sum = sum +newA[i][3];
       } 
       average = sum / n;
      }

     let n=5;
     calculateWaitingTime(a,n);
     setAlgo('sf'); 
     setArr(newA);
     }
     
     const sjrf = () => {

      
      
      function sortFunction(a, b) {
        if (a[0] === b[0]) {
          if(a[1]==b[1])
            return 0;
          else
            return (a[1] < b[1]) ? -1 : 1; 
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
       }

       function sortF(a, b) {
        if (a[1] === b[1]) {
          if(a[0]==b[0])
            return 0;
          else
            return (a[0] < b[0]) ? 1 : -1; 
        }
        else {
            return (a[1] < b[1]) ? 1 : -1;
        }
       }
    
       a.sort(sortFunction);
       console.log(a);

       function calculateWaitingTime(a,n) {
        

        let countP=0;
        let t=0;
        let i=0;
        let arr=[];
        while(countP<n){
             
          while(i<n && a[i][0]<=t){
            arr.push(a[i]);
            i++;
           
          }
          if(arr.length>0){
          
            arr.sort(sortF);
            
            console.log(t);
           
            arr[arr.length-1][1]=arr[arr.length-1][1]-1;
            let at=arr[arr.length-1];

            t=t+1;
            
           if(arr[arr.length-1][1]===0){
            
            arr.pop();
            newA[at[2]][2]= t;
            countP++;
           } 
          }
          else{
            t=t+1;
          }
         
         
        }
       
      
       

       for (let i = 0; i < n; i++) {
         newA[i][4] = (newA[i][2] - newA[i][0]);
     
       }

       for (let i = 0; i < n; i++) {
          newA[i][3]=(newA[i][4] - newA[i][1]);

       }

       let average;
       let sum = 0;
 
       for (let i = 0; i < n; i++) {
         sum = sum +newA[i][3];
       } 
       average = sum / n;
      }

     let n=5;
     calculateWaitingTime(a,n);
     setAlgo('srf'); 
     setArr(newA);
     } 

     const rr = () => {

      
      
      function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
       }

      
       a.sort(sortFunction);
       console.log(a);

       function calculateWaitingTime(a,n) {
        

class Queue
{
	// Array is used to implement a Queue
	constructor()
	{
		this.items = [];
	}
	isEmpty()
	{
	
		return this.items.length == 0;
	}
	enqueue(element)
	{ 
		// adding element to the queue
		this.items.push(element);
		
	}
	dequeue()
	{
		// removing element from the queue
		// returns underflow when called 
		// on empty queue
		if(this.isEmpty())
			return "Underflow<br>";
		return this.items.shift();
	}
	front()
	{
		// returns the Front element of 
		// the queue without removing it.
		if(this.isEmpty())
			return "No elements in Queue<br>";
		return this.items[0];
	}
	rear()
	{
		// returns the Rear element of 
		// the queue without removing it.
		if(this.isEmpty())
			return "No elements in Queue<br>";
		return this.items[this.items.length-1];
	}
}

// creating object for queue class
var queue = new Queue();


        let countP=0;
        let t=0;
        let i=0;
        while(i<n && a[i][0]<=t){
          queue.enqueue(i);
          i++;
        }
        while(countP<n){
             
         
          if(!queue.isEmpty()){
     
            
            if(a[queue.front()][1]>quantum){
            a[queue.front()][1]=a[queue.front()][1]-quantum;
            t=t+quantum;

            }
            else{
              t=t+a[queue.front()][1];
              a[queue.front()][1]=0;
              newA[a[queue.front()][2]][2]= t;
              countP++;
            }
           
          }
          else{
            t=t+1;
          }
          while(i<n && a[i][0]<=t){
            queue.enqueue(i);
            i++;
          }
          let ind = queue.front();
          queue.dequeue();
          
          if(a[ind][1]!=0){
            queue.enqueue(ind);
          }
         
        }
       
      
       

       for (let i = 0; i < n; i++) {
         newA[i][4] = (newA[i][2] - newA[i][0]);
     
       }

       for (let i = 0; i < n; i++) {
          newA[i][3]=(newA[i][4] - newA[i][1]);

       }

       let average;
       let sum = 0;
 
       for (let i = 0; i < n; i++) {
         sum = sum +newA[i][3];
       } 
       average = sum / n;
      }

     let n=5;
     calculateWaitingTime(a,n);
     setAlgo('r'); 
     setArr(newA);
     } 
     

     const Clear = () =>{
      setAlgo('c');
      setData(
        data.a1=0,
        data.b1=0,
        data.a2=0,
        data.b2=0,
        data.a3=0,
        data.b3=0,
        data.a4=0,
        data.b4=0,
        data.a5=0,
        data.b5=0,
      );
     }
     
    return <div> 
      <div className="mt-40 w-screen">
      <div className="m-10 text-center text-5xl font-bold">CPU Scheduler</div>
      <div className="w-[1100px] grid grid-cols-3 m-auto my-10 text-center">
        <div className="P-4 border-black w-[1/3] h-[40px] border font-bold bg-pink-100">Procees</div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-green-100">Arrival Time </div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-blue-100">Burst Time</div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-pink-50">p1</div>
        <input type="number" name="a1" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <input type="number" name="b1" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-b bg-pink-50">p2</div>
        <input type="number" name="a2" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <input type="number" name="b2" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-b bg-pink-50">p3</div>
        <input type="number" name="a3" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <input type="number" name="b3" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-b bg-pink-50">p4</div>
        <input type="number" name="a4" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <input type="number" name="b4" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-pink-50">p5</div>  
        <input type="number" name="a5" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>
        <input type="number" name="b5" defaultValue="0" min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" onChange={handlechange}></input>

      </div>

      {/* now we  have to develop input algorithm and button area */} 
      <div className="w-[1100px] m-auto my-10 flex justify-around bg-gray-100 rounded-lg py-5">
     
      <div className="w-[550px]">
      <p className="text-2xl text-left font-semibold py-5 px-4">Select the Algorithm :</p>  
      <div className="flex flex-wrap justify-around gap-20">
      <div ><input type="radio" name="test" value="value1" onClick={fcfs} /> <span className="font-bold text-xl text-yellow-700">FCFS </span> 
       </div>
      <div>  <input type="radio" name="test" value="value2" onClick={sjf} /><span  className="font-bold text-xl text-rose-500" >SJF</span> </div>
      <div> <input type="radio" name="test" value="value3" onClick={sjrf}/> <span className="font-bold text-xl text-green-600">SRJF</span></div>
      <div><input type="radio" name="test" value="value3" onClick={rr}/> <span className="font-bold text-xl text-blue-700">RR</span> </div>
      
      
        </div>  
      </div>


      <div className="w-[550px] flex flex-col justify-center items-center">
      
      <div className=" flex justify-center items-center ">
      <p className="w-[200px] text-xl text-left font-semibold p-4">Quant Time:</p>  
      <div className="w-[200px] h-[100px] flex justify-center items-center flex-col gap-10">

       <div className="bg-white flex justify-center gap-12 rounded-sm text-[25px] text-[#182c3d]">
        <button onClick={decreaseHandler} className="border-black bg-[#bfbfbf] p-1 rounded-sm text-center w-[60px] font-bold text-xl">
          -
        </button>
        <div className="font-bold gap-10 text-xl">
           {count}
        </div>
        <button onClick={increaseHandler} className="border-black bg-[#bfbfbf] p-1 rounded-sm text-center w-[60px] font-bold text-xl">
          +
        </button>
       </div>
       
      
      </div>

      </div>
      <button className="text-xl  bg-green-700 text-white py-2 px-4 font-semibold rounded-md" onClick={Clear}  >Clear</button>  

       
      </div>
      
    
      </div>
        
          {algo==='f' && <Output data={arr}/>}
          {algo==='sf' && <Output data={arr} />}
          {algo==='srf' && <Output data={arr} />}
          {algo==='r' && <Output data={arr} />}
          {algo==='c' && <Clean />}
          
      
            

      </div>

      
    </div>
}



export default Algorithm;

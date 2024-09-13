

const Output = ({data}) =>{
   // console.log(data)
     return <div>
        <p className="text-center font-bold text-3xl">Output Table</p>
        <div className="w-[1100px] grid grid-cols-6 m-auto my-10 text-center">
        <div className="P-4 border-black w-[1/3] h-[40px] border font-bold bg-pink-100">Procees</div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-green-100">Arrival Time </div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-blue-100">Burst Time</div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-yellow-100">Completion Time </div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-red-100">Waiting Time</div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-orange-100">Turn Around Time </div>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-purple-50">p1</div>
        <input type="number" name="a1" defaultValue={data[0][0]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="b1" defaultValue={data[0][1]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border"></input>
        <input type="number" name="a1" defaultValue={data[0][2]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[0][3]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[0][4]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-b bg-pink-50">p2</div>
        <input type="number" name="a2" defaultValue={data[1][0]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="b2" defaultValue={data[1][1]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[1][2]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[1][3]}min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[1][4]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-b bg-pink-50">p3</div>
        <input type="number" name="a3" defaultValue={data[2][0]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="b3" defaultValue={data[2][1]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[2][2]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[2][3]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[2][4]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-b bg-pink-50">p4</div>
        <input type="number" name="a4" defaultValue={data[3][0]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="b4" defaultValue={data[3][1]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border"></input>
        <input type="number" name="a1" defaultValue={data[3][2]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[3][3]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[3][4]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <div className="P-4 border-black w-[1/3] h-[40px] border  font-bold bg-pink-50">p5</div>  
        <input type="number" name="a5" defaultValue={data[4][0]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="b5" defaultValue={data[4][1]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border"></input>
        <input type="number" name="a1" defaultValue={data[4][2]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[4][3]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        <input type="number" name="a1" defaultValue={data[4][4]} min="0" max="99" className="P-4 text-center font-semibold  border-black w-[1/3] h-[40px] border" ></input>
        </div>
        </div>
}

  export default Output;
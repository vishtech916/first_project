import React, { useEffect } from "react";
import { apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
// import { useEffect } from "react";
import { useState} from "react";


const App=() =>{
   
  const [courses,setCourses]=useState(null);
  const [loading,setLoding]=useState(true); 
  const [category,setCategory]=useState(filterData[0].title);
  const fetchData=async ()=>{
    setLoding(true);
    try{
      const res=await fetch(apiUrl);
      const output=await res.json();
      
      setCourses(output.data);
      // console.log(output.data);
    }
    catch(error){
      toast.error("something is wrong")
    }  
    setLoding(false); 
  }

  useEffect( ()=>{
    fetchData();
  }, []);
  
  return(
     <div className="min-h-screen bg-indigo-900 flex flex-col">
      <div>
      <Navbar></Navbar>
      </div>
    <div className="bg-indigo-900	">
      <Filter filterData={filterData} category={category} setCategory={setCategory} ></Filter>
    
    <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] ">
     { 
        loading?(<Spinner />):( <Cards courses={courses} category={category}></Cards>)
     }
    </div>
     </div>
     </div>
  );

};

export default App;

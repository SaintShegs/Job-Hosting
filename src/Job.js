import React, { useEffect, useState } from 'react'


const Job = () => {

    const [filter, setFilter] = useState([])

    const [data, setData]=useState([])

    const getData=async()=>{
        const res=await fetch("data.json")
        const data=await res.json()

        setData(data)
    }

  


    function filterData(e){
        const filterValue=e.target.value
        const filteredData=data.filter(item=>{
            return item.tools.includes(filterValue) || item.role.includes(filterValue) ||
            item.level.includes(filterValue) || item.languages.includes(filterValue)
        }
        )
        setData(filteredData)
        setFilter([...filter, filterValue])
    }

    // function filterData2(e){
    //     const filterValue=e.target.value
    //     const filteredData=data.filter(item=>{
    //         return item.role.includes(filterValue)
    //     }
    //     )
    //     setData(filteredData)
    //     setFilter([...filter, filterValue])

    // }
    // function filterData3(e){
    //     const filterValue=e.target.value
    //     const filteredData=data.filter(item=>{
    //         return item.level.includes(filterValue)
    //     }
    //     )
    //     setData(filteredData)
    //     setFilter([...filter, filterValue])

    // }
    // function filterData4(e){
    //     const filterValue=e.target.value
    //     const filteredData=data.filter(item=>{

    //         return item.languages.includes(filterValue)
    //     }
    //     )
    //     setData(filteredData)
    //     setFilter([...filter, filterValue])

    // }

    // function splitlang(){
    //     const splitlan=data.filter(item=>{
            
    //         let test="<button>"
            
    //         for (let i = 0; i < item.languages.length; i++) {
    //             test+=item.languages[i]
    //         }
    //         test+="</button>"
            
    //         document.querySelector(".lang").innerHTML=test
    //     }
    // )}

    // splitlang()


    function clearfilter(){
        // setData(data)
        getData()
        setFilter([])
    }

    









    useEffect(()=>{
        getData()
        return () => {
        }
        
    },[])


  

    
    
    



    
  return (
    <div>
            <div className="container">
                <div className='upperimage'>
                </div>

                <div className='filteritems'>

                    <div className='filter'>
                        {filter.map((item, index)=>{
                            return(
                                    
                                <div>
                                    <span key={index}>{[item]}</span>
                                </div>
                                )
                                
                            })}
                    </div>


                        
                    <div className='clearfilter'>
                        <button onClick={clearfilter}>Clear Filter</button>
                    </div>
                </div>

                <div className='jobs'>
                    <div className='job'>

                        {data.map((item)=>{
                            return(
                                
                                <div className='job-item' key={item.id}>
                                    <div className='job-item-image'>
                                      <img src={item.logo} alt=""/>
                                    </div>

                                    <div className='job-item-details'>
                                        <div className='job-item-details-header'>

                                        <span><h4>{item.company}</h4></span>
                                        <span>New!</span>
                                        <span>Featured</span>
                                        </div>
                                        

                                        <div className="job-item-details-position">
                                            <span>{item.position}</span>
                                        </div>

                                        <div className="job-item-details-footer">
                                            <span>{item.postedAt}</span>
                                            <span>{item.contract}</span>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>

                                       
                                    <div className="job-item-filter">

                                       {item.languages.map((each, index)=>{
                                           return(

                                               <button key={index} onClick={filterData} value={each}> {each}</button>
                                           )
                                       })}
                                       {item.tools.map((each , index)=>{
                                           return(
                                               <button key={index} onClick={filterData} value={each}>{each}</button>

                                           )
                                       })}
                                        
                                        <button onClick={filterData} value={item.role}>{item.role}</button>
                                        <button onClick={filterData} value={item.level}>{item.level}</button>
                                    </div>



                                </div>
                                
                                )
                        })}


                    </div>


                </div>


                <div className="footer">
                    <marquee behavior=""><h3>Job listing by SaintShegs ©2022</h3> </marquee>
                </div>
            </div>
    </div>
  )
}

export default Job
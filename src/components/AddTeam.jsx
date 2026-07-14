import axios from 'axios'
import React, { useState } from 'react'

const AddTeam = () => {

    const[input,changeInput] = useState(
   {
        "team_id":"",
        "team_name":"",
        "teamLeader_name":"",
        "leader_email":"",
        "leader_phone":"",
        "clg_name":"",
        "no_of_members":"",
        "proj_title":"",
        "prob_stat_stack":"",
        "tech_stack":"",
        "mentor_name":"",
        "reg_date":"",
        "table_no":""
    }

    )


            const inputHandler = (event) =>{


                    changeInput({...input,[event.target.name]:event.target.value})
            }


            const readValue = () => {

                    console.log(input)

                    axios.post("http://localhost:3000/add-team",input).then(

                        (response) => {


                            console.log(response.data)

                            alert("Team added succesfully")

                        }

                    ).catch(

                        (error) => {


                            console.error("Error adding log:",error)

                            alert("Failed to add team")


                        }

                    )


            }


  return (
    <div>
<h1 align="center">Add Hackathon Team</h1>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Team Id</label>
<input type="text" className="form-control" name="team_id" value={input.team_id} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Team Name</label>
<input type="text" className="form-control" name="team_name" value={input.team_name} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Team Leader Name</label>
<input type="text" className="form-control" name="teamLeader_name" value={input.teamLeader_name} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Leader Email</label>
<input type="email" className="form-control" name="leader_email" value={input.leader_email} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Leader Phone</label>
<input type="tel" className="form-control" name="leader_phone" value={input.leader_phone} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">College Name</label>
<input type="text" className="form-control" name="clg_name" value={input.clg_name} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">No of members</label>
<input type="number" className="form-control" name="no_of_members" value={input.no_of_members} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Project Title</label>
<input type="text" className="form-control" name="proj_title" value={input.proj_title} onChange={inputHandler}/>

        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Problem Statement Stack</label>
<input type="text" className="form-control" name="prob_stat_stack" value={input.prob_stat_stack} onChange={inputHandler}/>

        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Technology Stack</label>
<select className="form-control" name="tech_stack" value={input.tech_stack} onChange={inputHandler}>
    <option value="React.js" className="options">React.js</option>
    <option value="Node.js" className="options">Node.js</option>
    <option value="Flutter" className="options">Flutter</option>
    <option value="Python-Django" className="options">Python-Django</option>
</select>
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Mentor Name</label>
<input type="text" className="form-control" name="mentor_name" value={input.mentor_name} onChange={inputHandler}/>

        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Registration Date</label>
<input type="date" className="form-control" name="reg_date" value={input.reg_date} onChange={inputHandler}/>

        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Table Number</label>
<input type="number" className="form-control" name="table_no" value={input.table_no} onChange={inputHandler}/>

        </div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-dark">SUBMIT</button>

        </div>
    </div>
</div>



        </div>
    </div>
</div>

    </div>
  )
}

export default AddTeam
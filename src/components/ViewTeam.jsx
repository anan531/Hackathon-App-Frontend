import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {

const[data,changeData] = useState([])

        const fetchData = () => {

            axios.get("http://localhost:3000/view-teams").then(

                (response) => {

                    changeData(response.data)


                }

            ).catch()

        }

        useEffect(


            () => {


                fetchData()

            }, []

        )


  return (
    <div>
<div className="container">
    <div className="row g-3">



 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
<div className="container">
    <div className="row g-3">



 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<table className="table table-light table-striped" >
  <thead>
    <tr>
      <th scope="col">Team ID</th>
      <th scope="col">Team Name</th>
      <th scope="col">Team Leader Name</th>
      <th scope="col">Leader Email</th>
      <th scope="col">Leader Phone</th>
      <th scope="col">College Name</th>
      <th scope="col">No of members</th>
      <th scope="col">Project Title</th>
      <th scope="col">Problem Statement Stack</th>
      <th scope="col">Technology Stack</th>
      <th scope="col">Mentor Name</th>
      <th scope="col">Registration Date</th>
      <th scope="col">Table No</th>
    </tr>
  </thead>
  <tbody>
             {data.map(

              (value,index) => {

                return(


    <tr>
      <th scope="row">{value["team_id"]}</th>
      <td>{value.team_name}</td>
      <td>{value.teamLeader_name}</td>
      <td>{value.leader_email}</td>
      <td>{value.leader_phone}</td>
      <td>{value.clg_name}</td>
      <td>{value.no_of_members}</td>
      <td>{value.proj_title}</td>
      <td>{value.prob_stat_stack}</td>
      <td>{value.tech_stack}</td>
      <td>{value.mentor_name}</td>
      <td>{value.reg_date}</td>
      <td>{value.table_no}</td>
    </tr>
                )

              }

            )
            
            
            }

  </tbody>
</table>
</div>
        </div>
    </div>
</div>

</div>
</div>
  )
}

export default ViewTeam
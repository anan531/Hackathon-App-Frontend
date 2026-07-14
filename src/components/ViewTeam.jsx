import axios from 'axios'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

const ViewTeam = () => {

const[data,changeData] = useState([])

        const fetchData = () => {

            axios.post("http://localhost:3000/view-teams").then(

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
    <Navigation />

<div className="container-fluid px-2 mt-4">
               <h1 className="text-center mb-4">Hackathon Teams</h1>

      <div className="row">
        <div className="col-12">

            <div className="table-responsive">
          <table className="table table-light table-striped">
            <thead>
          <tr>
            <th>Team ID</th>
            <th>Team Name</th>
            <th>Team Leader Name</th>
            <th>Leader Email</th>
            <th>Leader Phone</th>
            <th>College Name</th>
            <th>No of Members</th>
            <th>Project Title</th>
            <th>Problem Statement Stack</th>
            <th>Technology Stack</th>
            <th>Mentor Name</th>
            <th>Registration Date</th>
            <th>Table No</th>
          </tr>
        </thead>

        <tbody>
          {data.map((value) => (
            <tr key={value.team_id}>
              <td>{value.team_id}</td>
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
          ))}
        </tbody>
                </table>
                </div>

        </div>
      </div>
    </div>
  </div>
)

  
}

export default ViewTeam
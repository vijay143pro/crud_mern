import React, { Component } from 'react'
import axios from 'axios'
import './dashboard.css'
export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            sav:[]

        }
      
    }
    componentDidMount(){
        this.getAll()
    }
    getAll(){
        axios.get("http://localhost:4000/info").then((res)=>{
            this.setState({sav:res.data})})
    }
    handleClick=async(_id)=>{
        await axios.delete(`http://localhost:4000/info/del/${_id}`);
        alert("Data deleted");

    }
    
  render() {
    return (
      <div className='table_container'>
        <table border="1px" className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th colSpan={2}>Operation</th>
                </tr>
            </thead>
            <tbody>
                {this.state.sav.map((items)=>{

                    return(
                       
                            <tr>
                                <td scope='col'>{items._id}</td>
                                <td scope='col'>{items.name}</td>
                                <td scope='col'>{items.age}</td>
                                <td scope='col'>{items.email}</td>
                                <td scope='col'><button className='btn btn-primary'>Update</button></td>
                                <td><button onClick={()=>{this.handleClick(items._id)}} className="btn btn-danger">Delete</button></td>
                            </tr>   
                       
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}

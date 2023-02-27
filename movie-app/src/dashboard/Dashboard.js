import React, { Component } from 'react'
import axios from 'axios'
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
  render() {
    return (
      <div>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {this.state.sav.map((items)=>{
                    return(
                       
                            <tr>
                                <td>{items._id}</td>
                                <td>{items.name}</td>
                                <td>{items.age}</td>
                                <td>{items.email}</td>
                            </tr>   
                       
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}

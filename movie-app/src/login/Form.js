import React from "react";
import logImg from '../asserts/signup-img.jpg'
import './form.css'
import axios from "axios";
import { json } from "react-router-dom";
import logo1 from '../asserts/google.svg';
import logo2 from '../asserts/fb.svg';
class Form extends React.Component {
  //Mounting

  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      age: "",
      mail:"",
      password:"",
      firstErr: "",
      ageErr:"",
      mailErr:"",
      passErr:""
    };
  }

  

  //Functions



handleSubmit=(e)=>{
    const {Name,age,mail,password} = this.state;
  
    if(Name==="" || age==="" || mail==="" || password===""){
        e.preventDefault()
        alert("Fill the field")
    }
    else{
      
        alert("You Login successfully")
        axios.post("http://localhost:4000/info",({"name":this.state.Name,"age":this.state.age,"email":this.state.mail,"password":this.state.password})).then(()=>{
          console.log("data sent")
        }).catch((err)=>{
          console.log(err);
        })
    }
}

  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({ [name]: value });
    // let x = e.target.value;
    this.validate();

   
  };

  validate = () => {
    const regName = /^[A-Za-z\s]+$/;
    if (this.state.Name === "") {
      this.setState({ firstErr: "invalid" });
    } else if (!regName.test(this.state.Name)) {
      this.setState({
        firstErr: "Invalid Name",
      });
    } else {
      this.setState({
        firstErr: "",
      });
    }

    if(this.state.age=== "") {
        this.setState({ ageErr: "invalid"});
    }else if (this.state.age<1 || this.state.age>100){
        this.setState({ageErr: " Invalid age"});
    }
    else{
        this.setState({ageErr: ""});
    }

    var regex =/^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;
    if (this.state.mail === "") {
      this.setState({ mailErr:"Please enter a valid e-mail"});
    } else if (!regex.test(this.state.mail)) {
        this.setState({ mailErr:"Please enter a valid e-mail"});
    }
    else{
        this.setState({ mailErr:""});
    }
    var passregex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
        if (this.state.password === "") {
        this.setState({ passErr:"Please enter a valid password"});
      } else if (!passregex.test(this.state.password)) {
          this.setState({ passErr:"Please enter a valid password"});
      }
      else{
          this.setState({ passErr:""});
      }
    
  };

  //Render part
  render() {
    const {Name,age,mail,password} = this.state;
    
    return (
        <div>
      <div className="form-container">
      <div className="login-img">
        <img src={logImg}/>
        </div>
      <form onSubmit={(e)=>{this.handleSubmit(e)}} className="login-form" method="post">
      <h1>Sign up</h1>
      <label for="name">Name:</label><br/>
        <input
          name="Name"
          id="f1"
          value={Name}
          placeholder="Name"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <span className="err">{this.state.firstErr}</span><br/>

        <label for="age">Age:</label><br/>
        <input type="number" id="age" name="age" value={age}  placeholder="Age"
        onChange={(e) => this.handleChange(e)}></input>
         <span className="err">{this.state.ageErr}</span><br></br>
         
          <label for="email">Email:</label><br/>
        <input type="email" id="mail" name="mail" value={mail}  placeholder="Email"
        onChange={(e) => this.handleChange(e)}></input>
         <span className="err">{this.state.mailErr}</span><br></br>
        
         <label for="password">Password:</label><br/>
        <input type="password" id="pass" name="password" value={password} placeholder="Password"
        onChange={(e) => this.handleChange(e)}></input><br/><br/>
        <span><a href="">Forget password</a></span><br/>
         <span className="err">{this.state.passErr}</span><br/>
        <button className="submit">Submit</button><br/><br/>
        </form>
        <button className="btn btn-1"><img src={logo1}/></button> 
        <button className="btn btn-2"><img src={logo2} width="50px"/></button><br/><br/>
      </div>
      </div>
    );
  }
}
export { Form}; 
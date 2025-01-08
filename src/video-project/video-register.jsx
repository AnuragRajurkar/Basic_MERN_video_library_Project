import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export function VideoRegister(){

    const[users,setusers] = useState();
    const[error,seterror] = useState();
    const[errorclass,seterrorclass] = useState();
    const[btnstyle,setbtnstyle] = useState({display:'block'})

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:4000/users`)
        .then(response => {
            setusers(response.data)
        })
    },[])

    const formik = useFormik({
        initialValues : {
            "UserId"  : '',
            "UserName" : '',
            "Password" : '',
            "Mobile" : ''
        },
        onSubmit : (user) => {
            axios.post('http://127.0.0.1:4000/registeruser',user)
            alert('User Registered Successfully')
            navigate('/login')
        }
    })

    function verifyuserid(e){
        for(var user of users)
        {
            if(user.UserId===e.target.value)
            {
                seterror('User Id already taken try another')
                seterrorclass('text-danger')
                setbtnstyle({display:'none'})
                break;
            }else{
                seterror('User Id available')
                seterrorclass('text-success')
                setbtnstyle({display:'block'})
            }
        }
    }


    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit} className="w-25 border border-2 rounded p-4" style={{marginLeft : '350px',marginTop:'60px'}}>
              <h2 className="bi bi-persosn">User Register</h2>
              <dl>
                <dt>UserId</dt>
                <dd><input type="text" onKeyUp={verifyuserid} onChange={formik.handleChange} name="UserId" className="form-control" /></dd>
                <dd className={errorclass}>{error}</dd>
                <dt>UserName</dt>
                <dd><input type="text" onChange={formik.handleChange} name="UserName" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} name="Password" className="form-control" /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Mobile" className="form-control" /></dd>
              </dl>
              <button style={btnstyle} className="btn btn-primary w-100">Register</button>
              <div className="mt-2 text-center">
                <p><Link to={'/login'}>Already registered??? Login</Link></p>
              </div>
            </form>
        </div>
    )
}
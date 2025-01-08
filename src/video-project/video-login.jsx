import axios from "axios"
import { useFormik } from "formik"
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom"

export function VideoLogin(){

    let navigate = useNavigate();

    const[cookies,setCookie,removeCookie] = useCookies(['uname'])

    const formik = useFormik({
        initialValues : {
            UserId : '',
            Password : ''
        },
        onSubmit : (user) => {
            axios.get('http://127.0.0.1:4000/users')
            .then(response => {
                var userdetails = response.data.find(item => item.UserId===user.UserId && item.Password===user.Password)
                if(userdetails)
                {
                    if(userdetails.UserId===user.UserId && userdetails.Password===user.Password)
                        {
                            setCookie('uname',user.UserId,[{expires: new Date("2025-01-10")}])
                            navigate('/videos')
                        }else{
                            navigate('/invalid')
                        }
                }else{
                    navigate('/invalid')
                }
            })
        }
    })

    useEffect(() => {
        if(cookies.uname==null)
        {
            alert('plz login')
        }else{
            navigate('/videos')
        }
    },[])

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit} className="w-25 border border-2 rounded p-4" style={{marginLeft:'350px',marginTop:'70px'}}>
            <h2 className="bi bi-person-fill">User Login</h2>
            <dl>
                <dt>UserId</dt>
                <dd><input onChange={formik.handleChange} type="text" name="UserId" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input onChange={formik.handleChange} type="password" name="Password" className="form-control" /></dd>
            </dl>
            <button className="btn btn-primary w-100">Login</button>
            <p className="mt-2 text-center">
                <Link to={'/register'}>New User? Register</Link>
            </p>
            </form>
        </div>
    )
}
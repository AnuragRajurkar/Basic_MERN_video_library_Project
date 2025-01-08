import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Videos(){

    const[cookies,setCookie,removeCookie] = useCookies(['uname'])
    let navigate = useNavigate();

    useEffect(() => {
        if(cookies.uname==null)
        {
            navigate('/login')
        }
    },[])

    function handlesignoutclick(){
        removeCookie('uname')
        navigate('/login')
    }
    return(
        <div className="container-fluid">
            <h2>Your Videos - {cookies.uname} - <button onClick={handlesignoutclick} className="btn btn-link">SignOut</button></h2>
            <iframe src="https://www.youtube.com/embed/tm7kVn8abSg" width='400' height='400' frameborder="0"></iframe>

        </div>
    )
}
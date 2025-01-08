import { Link } from "react-router-dom";

export function VideoInvalid(){

    return(
        <div className="container-fluid">
            <h2>Invalid Credentials...<Link to='/login'>Try again</Link></h2>
        </div>
    )
}
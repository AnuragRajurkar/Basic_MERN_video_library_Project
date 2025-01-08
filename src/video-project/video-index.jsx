import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { VideoHome } from "./video-home";
import { VideoLogin } from "./video-login";
import { VideoRegister } from "./video-register";
import { Videos } from "./video-videos";
import { VideoInvalid } from "./video-invalid";

export function VideoIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
            <div className="bg-dark text-white text-center p-4">
                <span className="h2">Video-Tutorial's</span>
            </div>
            <section className="row">
                <nav className="col-2 bg-light">
                    <div className="btn btn-dark w-100 text-white p-2 mt-2 mb-2">
                        <Link className="text-white text-decoration-none" to='/'>Home</Link>
                    </div>
                    <div className="btn btn-dark w-100 text-white p-2 mt-2 mb-2">
                        <Link className="text-white text-decoration-none" to='login'>Login</Link>
                    </div>
                    <div className="btn btn-dark w-100 text-white p-2 mt-2 mb-2">
                        <Link className="text-white text-decoration-none" to='register'>Register</Link>
                    </div>
                    <div className="btn btn-dark w-100 text-white p-2 mt-2 mb-2">
                        <Link className="text-white text-decoration-none" to='videos'>Your Video's</Link>
                    </div>
                </nav>
                <main className="col-10">
                    <Routes>
                        <Route path="/" element={<VideoHome />}></Route>
                        <Route path="login" element={<VideoLogin />}></Route>
                        <Route path="register" element={<VideoRegister />}></Route>
                        <Route path="videos" element={<Videos />}></Route>
                        <Route path="invalid" element={<VideoInvalid />}></Route>
                    </Routes>
                </main>
            </section>
            </BrowserRouter>
        </div>
    )
}
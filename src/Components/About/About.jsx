import React from 'react';
import YoussefPhoto from '../../assets/Mans.webp';
export default function About() {
  return (<>
    <section id="about" className="about py-5">
        <div className="container py-5">
            <div className="row">
                <div className='section-title text-center col-md-12 d-flex position-relative justify-content-center mt-4 mb-5'>    
                    <h2 className='m-0'>ABOUT ME</h2>
                    <h3 className='position-absolute top-50 translate-middle-y fs-2 fw-bold'>Know Me More</h3>
                </div>
                <div className="container bg-white shadow my-3 py-5">
                    <div className="row">
                        <div className="col-md-6 pb-4 ps-md-5">
                            <div className="about-layout d-flex p-2">
                                <div className="photo col-md-4">
                                    <img className="w-100 pt-2 rounded-3" loading="lazy" src={YoussefPhoto} alt="Youssef photo"/>
                                </div>
                                <div className="details col-md-7 pt-md-3 offset-1">
                                    <p><span className='fw-bold'>Name: </span>Youssef Mansour</p>
                                    <p><span className='fw-bold'>Profile: </span>Frontend Developer</p>
                                    <p><span className='fw-bold'>Email: </span>youssef.mansour.swe@gmail.com</p>
                                    <p><span className='fw-bold'>Phone: </span>(+20) 0101612972</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="m-0 mb-2 fw-bold">About Me.</h4>
                            <span className="text-muted fs-6">Frontend Developer | React.js</span>
                            <p className="py-3">I am <span className="span fw-bolder text-muted">Youssef Mohamed Mansour</span>, a passionate Software Engineer with a degree in Computer Science from the Faculty of Computer and Information Sciences, Ain Shams University, graduating with a GPA of 3.0 (Very Good). I specialize in frontend web development with a strong focus on React. I am dedicated to crafting responsive and efficient web applications, combining technical expertise with creativity to deliver user-friendly solutions. With the ability to work both independently and collaboratively, I am eager to contribute to diverse and impactful projects.</p>
                        </div>
                        <div className="pt-3 text-center">
                            <a className='me-2' href="/Youssef_Mohamed_Mansour_CV.pdf" download="Youssef_Mohamed_Mansour_CV.pdf">
                                <button className="download-btn btn px-4 py-2 rounded-2 shadow">Download C.V</button>
                            </a>
                            <a href="mailto:youssef.mansour.swe@gmail.com?subject=Contacting You&body=Hi Youssef,">
                                <button className="contact-btn btn px-4 py-2 rounded-2 shadow">Contact Me</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>)
}

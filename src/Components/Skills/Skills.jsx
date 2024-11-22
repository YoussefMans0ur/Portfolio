import React from 'react'

export default function Skills() {
  return (<>
    <section id='skills' className='skills py-5'>
        <div className="container">
            <div className='section-title text-center col-md-12 d-flex position-relative justify-content-center mt-4 mb-5'>    
                    <h2 className='m-0'>SKILLS</h2>
                    <h3 className='position-absolute top-50 translate-middle-y fs-2 fw-bold'>Technical</h3>
            </div>
            <div className="row justify-content-center justify-content-md-start gy-4 py-5">
                <div className="col-md-3 col-9 d-flex offset-md-3 ps-5 align-items-center rounded-2 me-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-1 fa-brands fa-react" style={{ color: '#61DAFB' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">React.js</p>
                </div>
                <div className="col-md-3 col-9 d-flex ps-5 align-items-center rounded-2 ms-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-2 fa-brands fa-js" style={{ color: '#F7DF1E' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4"> JavaScript (ES6+)</p>
                </div>
                <div className="col-md-3 col-9 d-flex offset-md-3 ps-5 align-items-center rounded-2 me-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-1 fa-brands fa-html5" style={{ color: '#E34F26' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">HTML5</p>
                </div>
                <div className="col-md-3 col-9 d-flex ps-5 align-items-center rounded-2 ms-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-1 bx bxl-typescript" style={{ color: '#3178C6' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">TypeScript</p>
                </div>
                <div className="col-md-3 col-9 d-flex offset-md-3 ps-5 align-items-center rounded-2 me-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-1 fa-brands fa-css3-alt" style={{ color: '#1572B6' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">CSS3</p>
                </div>
                <div className="col-md-3 col-9 d-flex ps-5 align-items-center rounded-2 ms-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-2 fa-brands fa-sass" style={{ color: '#CC6699' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">Sass</p>
                </div>
                <div className="col-md-3 col-9 d-flex offset-md-3 ps-5 align-items-center rounded-2 me-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-2 fa-brands fa-bootstrap" style={{ color: '#7952B3' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">Bootstrap</p>
                </div>
                <div className="col-md-3 col-9 d-flex ps-5 align-items-center rounded-2 ms-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className='fs-1 bx bxl-jquery' style={{ color: '#0769ad' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">jQuery</p>
                </div>
                <div className="col-md-3 col-9 d-flex offset-md-3 ps-5 align-items-center rounded-2 me-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fs-1 bx bxl-redux" style={{ color: '#764ABC' }}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4">Redux</p>   
                </div>
                <div className="col-md-3 col-9 d-flex ps-5 align-items-center rounded-2 ms-md-2 py-4 bg-white">
                    <div className="skill-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className='fs-1 bx bxl-tailwind-css' style={{ color: "#38BDF8"}}></i>
                    </div>
                    <p className="fs-5 m-0 ms-4"> Tailwind CSS</p>
                </div>
            </div>
        </div>
    </section>
  </>)
}

import React from 'react'
import { Link } from 'react-router-dom';
import CineFlixImg from '../../assets/cineflix.webp';
import YummyImg from '../../assets/yummy.webp';
import ProfessionalPortfolioImg from '../../assets/professional-portfolio.webp';
import DevfolioImg from '../../assets/devfolio.webp';

export default function Portfolio() {
  return (<>
    <section id='portfolio' className='portfolio py-5'>
        <div className="container py-5">
            <div className='section-title text-center col-md-12 d-flex position-relative justify-content-center mt-4 mb-5'>    
                <h2 className='m-0'>PORTFOLIO</h2>
                <h3 className='position-absolute top-50 translate-middle-y fs-2 fw-bold'>My Work</h3>
            </div>
            <div className="row m-0 g-5 pb-4">
                <div className="col-md-4">
                    <div className="bg-white shadow">
                        <div className="overflow-hidden" style={{cursor: "pointer"}}>
                            <Link to={'https://youssefmans0ur.github.io/CineflixReact'} target='_blank' className='text-decoration-none'><img className="w-100" loading="lazy" src={CineFlixImg} alt="" /></Link>
                        </div>
                        <div className="p-3 pb-1 d-flex align-items-center m-0"> 
                            <div className=''>
                                <Link to={'https://youssefmans0ur.github.io/CineflixReact'} target='_blank' className='website-link h3 text-decoration-none'>CineFlix
                                <p className='fs-6 pt-2 text-muted' style={{cursor: "pointer"}}>CineFlix – Movie and TV Show Platform</p></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white shadow">
                        <div className="overflow-hidden" style={{cursor: "pointer"}}>
                            <Link to={'https://youssefmans0ur.github.io/Yummy'} target='_blank' className='text-decoration-none'><img className="w-100" loading="lazy" src={YummyImg} alt="" /></Link>
                        </div>
                        <div className="p-3 pb-1 d-flex align-items-center m-0"> 
                            <div className=''>
                                <Link to={'https://youssefmans0ur.github.io/Yummy'} target='_blank' className='website-link h3 text-decoration-none'>Yummy
                                <p className='fs-6 pt-2 text-muted' style={{cursor: "pointer"}}> Yummy – Food Recipe Browsing Platform</p></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white shadow">
                        <div className="overflow-hidden" style={{cursor: "pointer"}}>
                            <Link to={'https://youssefmans0ur.github.io/Professional-Portfolio'} target='_blank' className='text-decoration-none'><img className="w-100" loading="lazy" src={ProfessionalPortfolioImg} alt="" /></Link>
                        </div>
                        <div className="p-3 pb-1 d-flex align-items-center m-0"> 
                            <div className=''>
                                <Link to={'https://youssefmans0ur.github.io/Professional-Portfolio'} target='_blank' className='website-link h3 text-decoration-none'>Professional Portfolio
                                <p className='fs-6 pt-2 text-muted' style={{cursor: "pointer"}}>Professional Portfolio – website template </p></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white shadow">
                        <div className="overflow-hidden" style={{cursor: "pointer"}}>
                            <Link to={'https://youssefmans0ur.github.io/Devfolio'} target='_blank' className='text-decoration-none'><img className="w-100" loading="lazy" src={DevfolioImg} alt="" /></Link>
                        </div>
                        <div className="p-3 pb-1 d-flex align-items-center m-0"> 
                            <div className=''>
                                <Link to={'https://youssefmans0ur.github.io/Devfolio'} target='_blank' className='website-link h3 text-decoration-none'>Devfolio
                                <p className='fs-6 pt-2 text-muted' style={{cursor: "pointer"}}>Devfolio – responsive portfolio website</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}

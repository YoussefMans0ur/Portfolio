import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            emailjs.sendForm('service_2w9t0ns', 'template_sw60jgi', e.target, 'dN8cuAw1TXESBrYNW').then((result) => {
                    alert('Your message has been sent to Youss!');
                },
                (error) => {
                    alert('Error: Unable to send your message!');
                }
            );
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTouched({});
            setErrors({});
        }
    }
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const validationErrors = validate();
        setErrors(validationErrors);
    };
    const getInputClass = (fieldName) => {
        if (!touched[fieldName]) return "";
        return errors[fieldName] ? "is-invalid" : "is-valid";
    };
  return (<>
    <section id='contact' className='contact py-5'>
        <div className="container">
            <div className='section-title text-center col-md-12 d-flex position-relative justify-content-center mt-4 mb-5'>    
                <h2 className='m-0'>CONTACT</h2>
                <h3 className='position-absolute top-50 translate-middle-y fs-2 fw-bold'>Get in Touch</h3>
            </div>
        </div>
        <div className="row m-0 gy-4 py-5 justify-content-center">
            <div className="col-md-3">
                <div className='d-flex align-items-center text-center flex-column'>
                    <div className="contact-icon d-flex align-items-center justify-content-center rounded-5">
                        <i className="fa-solid fa-map-location-dot"></i>
                    </div>
                    <div className='mt-4'>
                        <h5 className='m-0 fw-bold'>Address</h5>
                        <p className='text-muted m-0 pt-1'>Cairo, Egypt</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className='d-flex align-items-center text-center flex-column'>
                    <div className="contact-icon d-flex align-items-center justify-content-center rounded-5">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className='mt-4'>
                        <h5 className='m-0 fw-bold'>Email</h5>
                        <p className='text-muted m-0 pt-1'>youssef.mansour.swe@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className='d-flex align-items-center text-center flex-column'>
                    <div className="contact-icon d-flex align-items-center justify-content-center rounded-5">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className='mt-4'>
                        <h5 className='m-0 fw-bold'>Phone</h5>
                        <p className='text-muted m-0 pt-1'>(+20) 01019612972</p>
                    </div>
                </div>
            </div>
            <form className='mt-5 pt-3 pt-md-5' onSubmit={handleSubmit}>
                <div className="col-md-12 d-flex justify-content-center">
                    <input className={`form-control w-25 me-2 ${getInputClass('name')}`} type="text" name="name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} placeholder='Name' required/>
                    {touched.name && (<i className={`position-absolute end-0 top-50 translate-middle ${errors.name ? "text-danger bx bxs-error-circle" : "text-success bx bxs-check-circle"}`}></i>)}
                    <input className={`form-control w-25 ms-2 ${getInputClass('email')}`} type="email" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} placeholder='Email' required/>
                    {touched.email && (<i className={`position-absolute end-0 top-50 translate-middle ${errors.email ? "text-danger bx bxs-error-circle" : "text-success bx bxs-check-circle"}`}></i>)}
                </div>
                <div className="col-md-12 mt-4 d-flex justify-content-center">
                    <input className={`form-control subject ${getInputClass('subject')}`} type="text" placeholder='Subject'name="subject" value={formData.subject} onBlur={handleBlur} onChange={handleInputChange} required/>
                    {touched.subject && (<i className={`position-absolute end-0 top-50 translate-middle ${errors.subject ? "text-danger bx bxs-error-circle" : "text-success bx bxs-check-circle"}`}></i>)}
                </div>
                <div className="col-md-12 mt-4 d-flex justify-content-center">
                    <textarea className={`form-control rounded-2 border-0 ps-3 pt-2 ${getInputClass("message")}`} name="message" placeholder="Message" cols="30" rows="5" value={formData.message} onBlur={handleBlur} onChange={handleInputChange} required></textarea>
                    {touched.message && (<i className={`position-absolute end-0 top-50 translate-middle ${errors.message ? "text-danger bx bxs-error-circle" : "text-success bx bxs-check-circle"}`}></i>)}
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn px-5 fs-5 rounded-4' type='submit'>Send</button>
                </div>
            </form>
        </div>
    </section>
  </>)
}

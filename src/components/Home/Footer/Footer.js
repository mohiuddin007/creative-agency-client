import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerContainer mt-5">
            <div className="container mt-5 p-4">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1>Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter Your email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark px-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
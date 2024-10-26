import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-950 -mt-36 pt-40'>
            <footer className="footer grid grid-cols-1 grid-cols-3
            justify-center  text-gray-400 p-10">

                <div>
                    <h6 className="text-xl text-white font-semibold">About Us</h6>
                    <p className='w-72'>We are passionate team dedicated to
                        providing the best services to our customer</p>
                </div>
                <div>
                    <h6 className="text-xl text-white font-semibold">Quick Links</h6>
                    <ul className='list-disc pl-5 space-y-2'>

                        <li> <a className="link link-hover">Home</a></li>
                        <li> <a className="link link-hover">Services</a></li>
                        <li> <a className="link link-hover">About</a></li>
                        <li> <a className="link link-hover">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-xl text-white font-semibold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label my-3">
                            <span className="">Subscribe to our newsletter for the latest updates</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div className='contactUsMainDiv'>
                <div className='bannerDiv'>
                    <h3 className='bannerText'>Contact Us</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor='emailAddressForm'>Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    </form>
                    </div>
                )
            }
        }
        
export default Contact;
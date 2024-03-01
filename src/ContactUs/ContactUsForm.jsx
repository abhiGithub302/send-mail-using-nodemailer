// src/components/ContactUsForm.jsx
import React, { useState } from "react";
import "./ContactUsForm.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

const ContactUsForm = () => {
  return (
    <div>
      <div className="contactus_container">
        <div class="contactus_box ">
          <div class="time_line_iconss">
            <i class="fas fa-headphones"></i>
          </div>
          <h2>Sales Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:sales@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> sales@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
        {/* technical support box */}
        <div class="contactus_box">
          <div class="time_line_iconss">
            <i class="fa-solid fa-headset"></i>
          </div>
          <h2>Technical Support Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:support@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> support@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="contactus_container">
        <div class="contactus_box ">
          <div class="time_line_iconss">
            <i class="fas fa-coins"></i>
          </div>
          <h2>Finance Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:accounts@itinfrasolutions.co.in">
              <div class="contact-info-text">
              <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> accounts@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
        {/* hr team box */}
        <div class="contactus_box">
          <div class="time_line_iconss">
            <IoIosContacts />
          </div>
          <h2>HR Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:hr@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> hr@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form-container">
          <form action="/" method="POST">
            <div className="form-group">
              <div className="contactHead">
              <h1>Contact Us Form:</h1>
              <p>
                (Tell us a bit about yourself, and we'll get in touch as soon as we can.)
              </p>
              </div>

              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="FirstName"
                // onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"

                placeholder="email"
                // onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyname"
                placeholder="YourCompanyName"
                // onChange={handleCompanyNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                id="mobile"
              name="mobile"
                placeholder="MobileNumber"
                // onChange={handleMobileNumberChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="mess"
                rows={12}
                placeholder="WriteMessageHere"
                // onChange={handleMessageChange}
                required

/>
            </div>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
        <div className="map-and-contact">
          <div className="contact-info">
            <h1>Contact Us:</h1>
            <br />
            <h2>It Infra Solutions</h2>

            <div class="contact-info-text">
            <i class="fa-solid fa-location-dot"></i>
              <span id="span">
                A- 48/2, Mahavir Enclave, Near Dwarka puri bus stand
                NewDelhi-110059{" "}
              </span>
            </div>

            
            <a href="tel:+919015739026">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9015739026 </span>
              </div>
            </a>
            <a href="mailto:sk@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> sk@itinfrasolutions.co.in</span>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

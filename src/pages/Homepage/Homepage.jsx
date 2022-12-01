import React, { useState } from "react";
import "./style.scss";
import Select from "react-select";
import { images, inputdownarrow } from "../../images";
import Card from "../../Components/Card/Card";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const name = "Talha";
  const email = "talhaasre786@gmail.com";

  return (
    <>
      <section className="my_container">
        <div className="homesec1">
          <div className="glassmorp">
            <h1 className="homesec1__heading">Create an Account</h1>
            <form className="homesec1__formsec">
              <div className="homesec1__fieldwrap">
                <div className="form_field_wrapper">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    // value={values.email}
                    // onChange={handleChange}
                  />
                  <p className="error_message">Error message</p>
                </div>
                <div className="form_field_wrapper">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    // value={values.email}
                    // onChange={handleChange}
                  />
                  <p className="error_message">Error message</p>
                </div>
                <div className="form_field_wrapper">
                  <input
                    type="text"
                    placeholder="Email Id"
                    name="email"
                    // value={values.email}
                    // onChange={handleChange}
                  />
                  <p className="error_message">Error message</p>
                </div>
              </div>
              <div className="btn_wrapper">
                <button className="form_submit_btn">
                  {loading ? "Loading.." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="homesec2">
          <div className="glassmorp">
            <h1 className="homesec2__heading">Follow Now</h1>
            <form className="homesec2__formsec">
              <div className="homesec2__fieldwrap">
                <div className="form_field_wrapper form_field_wrapper_custom">
                  <h4 className="labelhead">Select User</h4>
                  <Select
                    defaultValue=""
                    options={[]}
                    className="select_box_wrapper"
                    classNamePrefix="select_box_el"
                    placeholder="Town/City"
                  />
                  <img src={inputdownarrow} alt="" className="inputdownarrow" />
                  <p className="error_message">Error here</p>
                </div>
                <div className="form_field_wrapper form_field_wrapper_custom">
                  <h4 className="labelhead">Following To</h4>
                  <Select
                    defaultValue=""
                    options={[]}
                    className="select_box_wrapper"
                    classNamePrefix="select_box_el"
                    placeholder="Town/City"
                  />
                  <img src={inputdownarrow} alt="" className="inputdownarrow" />
                  <p className="error_message">Error here</p>
                </div>
              </div>
              <div className="btn_wrapper">
                <button className="form_submit_btn">
                  {loading ? "Loading.." : "Follow"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="homesec3">
          <div className="glassmorp">
            <h1 className="homesec3__heading">User and their followers</h1>
            <div className="homesec3__flex-box">
              <Card
                name={name}
                email={email}
                image="https://via.placeholder.com/150"
                alt={images.error.alt}
              />
              <div className="homesec3__arrowswrap">
                <img
                  src={images.arrow.image}
                  alt={images.arrow.alt}
                  className="arrow-right"
                  loading="lazy"
                />
                <img
                  src={images.arrow.image}
                  alt={images.arrow.alt}
                  className="arrow-left"
                  loading="lazy"
                />
              </div>
              <Card
                name={name}
                email={email}
                image="https://via.placeholder.com/150"
                alt={images.error.alt}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;

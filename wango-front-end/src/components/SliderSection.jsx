import React from "react";

const SliderSection = () => {
  return (
    <section className="slider_section ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-7 col-md-8 mx-auto">
            <div className="detail-box">
              <h1>Park your car</h1>
              <p>
                After choosing the city please choose the parking are and hit
                "pay with Wango" button.
              </p>
            </div>
          </div>
        </div>
        <div className="find_container ">
          <div className="container">
            <div className="row">
              <div className="col">
                <form>
                  <div className="form-row ">
                    <div className="form-group col-lg-3">
                      {/* <input
                        type="text"
                        className="form-control"
                        id="inputPatientName"
                        placeholder="Keywords"
                      /> */}
                    </div>
                    <div className="form-group col-lg-3">
                      <select
                        name=""
                        className="form-control wide"
                        id="inputCities"
                      >
                        <option>Choose city</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-3">
                      <select
                        name=""
                        className="form-control wide"
                        id="inputParkingAreas"
                      >
                        <option>Choose parking area</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-3">
                      <div className="btn-box">
                        <button type="submit" className="btn ">
                          pay with Wango
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;

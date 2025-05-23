import React from "react";
import CitySelector from "./CitySelector";
import ParkingSelector from "./ParkingSelector";
import StyledButton from "./StyledButton";

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
                      <CitySelector />
                    </div>
                    <div className="form-group col-lg-3">
                      <ParkingSelector />
                    </div>
                    <div className="form-group col-lg-3">
                      <div className="btn-box">
                        <StyledButton />
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

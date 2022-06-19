import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import "./AddClientForm.css";
function AddClientForm() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="pc"></div>
      <div className="baseform">
        <div class="card">
          <div class="card-header card-head ">
            <div class="hea lab">
              <h3> Client data</h3>
            </div>
          </div>
          <div class="scrollit">
            <div class="card-body1">
              <div class="row">
                <div class="col lab">Name:</div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <br/>
                <br/>
                <br/> 
                
                
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col lab">Address:</div>
                <div class="text-field-align col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>
              <br/>
                
              <div class="row">
                <div class="col lab">City/Pincode:</div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="City" />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Pincode"
                  />
                </div>
              </div>
              <br/>
               
            
              <div class="row">
                <div class="col lab">Phone:</div>
                <div class="text-field-align col ">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <br/>
              <div class="row">
                <div class="col lab">Email:</div>
                <div class="text-field-align col">
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
              </div>
              <br/>
              <div class="row">
                <div class="col lab">Date of Birth:</div>
                <div class="text-field-align col">
                  <input
                    type="date"
                    class="form-control "
                    placeholder="Date Of Birth"
                  />
                </div>
              </div>
              <br/> <br/>
              <div class="card-header1 card-head card-head-margin ">
                <div class="hea1 lab">
                  <h3> Store data</h3>
                </div>
              </div>

              <div class="row">
                <div class="col lab">Shop Name:</div>
                <div class="text-field-align col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Shop Name"
                  />
                </div>
              </div>
              <br/>
              <div class="row">
                <div class="col lab">Shop Address:</div>
                <div class="text-field-align col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Shop Address"
                  />
                </div>
              </div>
              <br/>
              <div class="row">
                <div class="col lab">Shop Pan:</div>
                <div class="text-field-align col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Shop Pan"
                  />
                </div>
              </div>
            </div>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddClientForm;

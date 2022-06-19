import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import "./LIstUser.css";
import {Link } from 'react-router-dom';
function ListUser() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="men card">
        <h5 className="">Our Clients</h5>
        <div className="search-bar">
  <i class="fas fa-search icon-ser" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
    aria-label="Search"/>
        </div>
        <div class="card-body">
        <div class="scrollit">

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">City</th>
                <th scope="col">Shop Name</th>
                <th scope="col">Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td><Link to="/viewprofile"  className="">View Profile</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListUser;

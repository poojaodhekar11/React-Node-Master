import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";

const Employee = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    location: "",
    age: "",
    joined: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const data = await fetch(`/contacts/${id}`);
    const userData = await data.json();
    setUser(userData);
  };

  return (
    <div className="container-fluid p-3 w-50">
      <div id="user-profile-2" className="user-profile">
        <div className="row">
          <div className=" col-md-6 col-sm-6 col-xs-12 text-xs-center">
            <span className="profile-picture">
              <img className="img-responsive avatar2" alt="Avatar" src={`https://www.bootdey.com/img/Content/avatar/avatar${user.id}.png`} />
            </span>
          </div>
          <div className="col-sm-6 col-md-6 col-xs-12 text-xs-center">
            <h4 className="blue">
              <span className="middle">{user.name}</span>
            </h4>
            <div className="profile-user-info mt-3">
              <div className="profile-info-row">
                <div className="profile-info-name"> Username </div>
                <div className="profile-info-value">
                  <span>{user.email}</span>
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-name"> Location </div>
                <div className="profile-info-value">
                  <i className="fa fa-map-marker light-orange bigger-110"></i>
                  <span className="ml-2">{user.location}</span>
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-name"> Age </div>
                <div className="profile-info-value">
                  <span>{user.age}</span>
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-name"> Joined </div>
                <div className="profile-info-value">
                  <span>{user.joined}</span>
                </div>
              </div>
            </div>
            <div className="hr hr-8 dotted"></div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-6">
            <div className="widget-box transparent">
              <div className="widget-header widget-header-small">
                <h4 className="widget-title smaller">
                  <i className="ace-icon fa fa-check-square-o bigger-110"></i>
                  Little About Me
                </h4>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <p>
                    My job is mostly lorem ipsuming and dolor sit ameting as long as consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <Link className="btn btn-dark mr-2" to='/contacts'>
                Back to contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;

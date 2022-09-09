import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

    const commonColor = {
        color: "#6D0FB6"
      };

  const navigate = useNavigate();
  const [islogged, setIsLogged] = useState(false);
  const [localtostate, setLocalToState] = useState(false);
  const [nameis, setNameIs] = useState("");
  const [mobileis, setMobileIs] = useState("");

  useEffect(() => {
    const sessionNameIs = localStorage.getItem("nameis");
    setNameIs(sessionNameIs);

    const sessionMobileIs = localStorage.getItem("mobileis");
    setMobileIs(sessionMobileIs);
    console.log(mobileis);

    const sessionStatus = localStorage.getItem("isLoggedIn");
    if (
      sessionStatus === "no" ||
      sessionStatus === null ||
      sessionStatus === undefined
    ) {
      navigate("/");
    } else {
      setLocalToState(true);
      setIsLogged(true);
    }
  }, [setNameIs, setMobileIs, setIsLogged, navigate, mobileis]);

  useEffect(() => {
    if (localtostate) {
      if (!islogged) {
        navigate("/");
      }
    }
  }, [localtostate, islogged, navigate]);

  return (
    <>
      <div className="row">
        <div className="col-md-3 col-lg-3 text-left">
          <h5>
            Hi <b>{nameis}</b>, Welcome...
          </h5>
        </div>
        <div className="col-md-3 col-lg-3"></div>
        <div className="col-md-3 col-lg-3"></div>
        <div className="col-md-3 col-lg-3 text-right">
          <div className="dropdown">
            <g
              className=""
              type="button"
              style={commonColor}
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaUserCircle size={26} />
            </g>
            <div
              className="dropdown-menu"
              style={{ border: "1px solid #6D0FB6" }}
              aria-labelledby="dropdownMenuButton"
            >
              <Link to="/dashboard" className="dropdown-item">
                Dashboard
              </Link>
              <Link to="/" className="dropdown-item">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Header;

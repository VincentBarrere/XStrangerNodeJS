import React from "react";
import Log from "../components/Log";

function Profil() {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log signIn={false} signUp={true} />
        <div className="img-container">
          <img src="./img/log.svg" alt="img-log" />
        </div>
      </div>
    </div>
  );
}

export default Profil;

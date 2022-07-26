import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBio } from "../../actions/user.actions";
import LeftNav from "../LeftNav";

function UpdateProfil() {
  const userData = useSelector((state) => state.userReducer);
  const [updateForm, setUpdateForm] = useState("false");
  const [bio, setBio] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="user-pic" />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm !== true && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier la bio
                </button>
              </>
            )}
            {updateForm === true && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modifications</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfil;

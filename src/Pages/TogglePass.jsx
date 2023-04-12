import React, { useState } from "react";

function TogglePass() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <input
        type={passwordType}
        onChange={handlePasswordChange}
        value={passwordInput}
        name="password"
        class="form-control"
        placeholder="Password"
      />
      <div className="input-group-btn">
        <button className="btn" onClick={togglePassword}>
          {passwordType === "password" ? (
            <i className="fa fa-eye-slash"></i>
          ) : (
            <i className="fa fa-eye"></i>
          )}
        </button>
      </div>
    </>
  );
}

export default TogglePass;

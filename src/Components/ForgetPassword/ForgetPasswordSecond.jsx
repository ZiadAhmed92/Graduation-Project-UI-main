import "./ForgetPassword.css";
import img2 from "../../image/Reset_password.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { speechContext } from "../Context/Store.jsx";
import axios from "axios";
import { useTranslation } from "react-i18next"; //1

export const ForgetPasswordSecond = () => {
  const { t, i18n } = useTranslation(); //2
  let { userData } = useContext(speechContext);
  let Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("password");
  const [type1, setType1] = useState("password");
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  function getUserData(e) {
    let MyUser = { ...password };
    MyUser[e.target.name] = e.target.value;
    setPassword(MyUser);
  }
  async function sendUserData() {
    try {
      let { data } = await axios.patch(
        ` https://speech-emotions-874.onrender.com/users`,
        password,
        {
          headers: {
            token: `${localStorage.getItem("Token")}`,
          },
        }
      );
      if (data.message === "success") {
        setLoading(false);
        Navigate("/homepage");
      } else {
        setError(data.message);
        console.log(data.message);
        setLoading(false);
      }
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  }
  function submitPassword(e) {
    e.preventDefault();
    setLoading(true);
    sendUserData();
  }

  return (
    <div>
      <div className="container pt-2">
        <div className="row  ">
          <div className="col-md-6 mt-5">
            <form
              onSubmit={submitPassword}
              className="d-flex flex-column gap-2 mt-5 position-relative"
            >
              <div className="text-danger">{error}</div>
              <label htmlFor="forgetPassword" className="label-forget">
                {t("Currrent Password")}
              </label>
              <input
                type={`${type}`}
                className="input-forget fontfamily"
                name="oldPassword"
                onChange={getUserData}
              />
              <div className="new-password">
                {type == "password" ? (
                  <i
                    onClick={() => setType("text")}
                    className="eya fs-4 fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() => setType("password")}
                    className="eya fs-4 fa-solid fa-eye-slash"
                  ></i>
                )}
              </div>
              <label htmlFor="forgetPassword" className="label-forget">
                {t("New Password")}
              </label>
              <input
                type={`${type1}`}
                className="input-forget fontfamily"
                name="newPassword"
                onChange={getUserData}
              />
              <div className="confirm-password">
                {type1 == "password" ? (
                  <i
                    onClick={() => setType1("text")}
                    className="eya fs-4 fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() => setType1("password")}
                    className="eya fs-4 fa-solid fa-eye-slash"
                  ></i>
                )}
              </div>
              <button
                type="submit"
                className="btn-forget fontfamily"
                style={{ background: "#dc0b62"  }}
              >
                {loading ? (
                  <i className="fas fa-spinner fa-spin" ></i>
                ) : (
                  t("Change1")
                )}
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img src={img2} className="img-2-forget w-100 " />
          </div>
        </div>
      </div>
    </div>
  );
};

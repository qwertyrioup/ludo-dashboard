import axios from "axios";
import React, { useState } from "react";

import { useAppDispatch } from "../../context/hooks";
import { loginUser } from "../../context/userRedux";
import { BaseURL } from "../../consts";






const Login = () => {
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
 
  
    const dispatch = useAppDispatch()
    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            const response = await axios.post(`${BaseURL}/api/e/login`, {username: username, password: password})
           
            if(response.data && response.data.token.length>0) {
    
              // const user = {
              //   ...response.data,
              //   username: 'hamma',
              //   balance: 1000
              // }
               dispatch(loginUser({... response.data}))
            }
        } catch (error) {
            // console.log(error)
            alert("Error Wrong username or password")
        }
    }
  return (
    <>
      <form
        style={{
          border: "0px",
          fontVariant: "inherit",
          margin: "0px",
          padding: "0px",
          fontFeatureSettings: "inherit",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          boxSizing: "border-box",
          fontStretch: "inherit",
          fontStyle: "inherit",
          lineHeight: "inherit",
          verticalAlign: "initial",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10vw",
          paddingRight: "10vw"

        }}
        onSubmit={login}
      >
        <div
          className="input auth-page__input"
          style={{
            border: "0px",
            fontVariant: "inherit",
            margin: "0px",
            padding: "0px",
            fontFeatureSettings: "inherit",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            boxSizing: "border-box",
            fontStretch: "inherit",
            fontStyle: "inherit",
            lineHeight: "inherit",
            verticalAlign: "initial",
            marginBottom: "15px",
            width: "100%"
          }}
        >
          <label
            className="input__input-container"
            style={{
              border: "0px",
              fontVariant: "inherit",
              margin: "0px",
              padding: "0px",
              fontFeatureSettings: "inherit",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
              fontStretch: "inherit",
              fontStyle: "inherit",
              lineHeight: "inherit",
              verticalAlign: "initial",
              display: "block",
            }}
          >
            <span
              className="input__label"
              style={{
                border: "0px",
                fontVariant: "inherit",
                margin: "0px",
                padding: "0px",
                fontFeatureSettings: "inherit",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
                fontStretch: "inherit",
                fontStyle: "inherit",
                verticalAlign: "initial",
                transition: "color 0.5s ease",
                color: "#fff",
                display: "block",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                marginBottom: "5px",
              }}
            >
              Nom d'utilisateur
            </span>
            <div
              className="input__input-field-container"
              style={{
                fontVariant: "inherit",
                margin: "0px",
                fontFeatureSettings: "inherit",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
                fontStretch: "inherit",
                fontStyle: "inherit",
                lineHeight: "inherit",
                verticalAlign: "initial",
                border: "1px solid #fff",
                borderRadius: "5px",
                padding: "6px 12px",
                transition:
                  "background-color 0.5s ease,border 0.5s ease,border-radius 0.5s ease",
                alignItems: "center",
                backgroundColor: "#181c23",
                display: "flex",
              }}
            >
              <input
                className="input__input-field"
                name="username"
                type="text"
                required
                placeholder="Nom d'utilisateur"
                autoCapitalize="off"
                style={{
                  boxSizing: "border-box",
                  border: "none",
                  outline: "none",
                  padding: "0px",
                  transition: "color 0.5s ease",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "#fff",
                  fontFamily: '"Source Sans Pro"',
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  width: "100%",
                }}
                onChange={(e)=> setUsername(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div
          className="input auth-page__input"
          style={{
            border: "0px",
            fontVariant: "inherit",
            margin: "0px",
            padding: "0px",
            fontFeatureSettings: "inherit",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            boxSizing: "border-box",
            fontStretch: "inherit",
            fontStyle: "inherit",
            lineHeight: "inherit",
            verticalAlign: "initial",
            marginBottom: "15px",
            width: "100%"
          }}
        >
          <label
            className="input__input-container"
            style={{
              border: "0px",
              fontVariant: "inherit",
              margin: "0px",
              padding: "0px",
              fontFeatureSettings: "inherit",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
              fontStretch: "inherit",
              fontStyle: "inherit",
              lineHeight: "inherit",
              verticalAlign: "initial",
              display: "block",
            }}
          >
            <span
              className="input__label"
              style={{
                border: "0px",
                fontVariant: "inherit",
                margin: "0px",
                padding: "0px",
                fontFeatureSettings: "inherit",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
                fontStretch: "inherit",
                fontStyle: "inherit",
                verticalAlign: "initial",
                transition: "color 0.5s ease",
                color: "#fff",
                display: "block",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                marginBottom: "5px",
              }}
            >
              Mot de passe
            </span>
            <div
              className="input__input-field-container"
              style={{
                fontVariant: "inherit",
                margin: "0px",
                fontFeatureSettings: "inherit",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
                fontStretch: "inherit",
                fontStyle: "inherit",
                lineHeight: "inherit",
                verticalAlign: "initial",
                border: "1px solid #fff",
                borderRadius: "5px",
                padding: "6px 12px",
                transition:
                  "background-color 0.5s ease,border 0.5s ease,border-radius 0.5s ease",
                alignItems: "center",
                backgroundColor: "#181c23",
                display: "flex",
              }}
            >
              <input
                className="input__input-field"
                name="password"
                type="password"
                required
                placeholder="Mot de passe"
                autoCapitalize="off"
                style={{
                  boxSizing: "border-box",
                  border: "none",
                  outline: "none",
                  padding: "0px",
                  transition: "color 0.5s ease",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "#fff",
                  fontFamily: '"Source Sans Pro"',
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  width: "100%",
                }}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <svg
                className="icon input__icon input__icon_position_right"
                height="32"
                width="32"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transition: "color 0.5s ease",
                  color: "#fff",
                  flexShrink: 0,
                  height: "16px",
                  width: "16px",
                  marginLeft: "7px",
                }}
              >
                <path
                  d="M27.3223 28.7084C27.4517 28.762 27.5905 28.7895 27.7306 28.7893C27.9414 28.7892 28.1476 28.7266 28.3229 28.6094C28.4982 28.4922 28.6348 28.3257 28.7155 28.1308C28.7962 27.936 28.8173 27.7216 28.7762 27.5148C28.7351 27.308 28.6336 27.118 28.4845 26.9688L5.01994 3.50427C4.8183 3.31269 4.54979 3.20746 4.27167 3.21103C3.99355 3.21459 3.72782 3.32665 3.53114 3.52333C3.33446 3.72001 3.2224 3.98573 3.21884 4.26385C3.21528 4.54197 3.3205 4.81048 3.51208 5.01213L26.9766 28.4767C27.0754 28.576 27.1929 28.6547 27.3223 28.7084Z"
                  fill="currentColor"
                />
                <path
                  d="M12.0126 16.5278L15.465 19.9801C15.4846 19.9999 15.4975 20.0253 15.502 20.0528C15.5064 20.0803 15.5021 20.1085 15.4897 20.1335C15.4772 20.1584 15.4573 20.1788 15.4327 20.1918C15.408 20.2049 15.3799 20.2099 15.3523 20.2061C14.4567 20.0667 13.6285 19.6462 12.9876 19.0052C12.3466 18.3642 11.926 17.5361 11.7867 16.6404C11.7829 16.6128 11.7879 16.5847 11.8009 16.5601C11.8139 16.5355 11.8344 16.5155 11.8593 16.5031C11.8842 16.4907 11.9124 16.4864 11.9399 16.4908C11.9674 16.4952 11.9929 16.5081 12.0126 16.5278Z"
                  fill="currentColor"
                />
                <path
                  d="M19.9893 15.4572L16.5316 12.0008C16.5117 11.981 16.4986 11.9553 16.4942 11.9275C16.4898 11.8998 16.4943 11.8714 16.507 11.8463C16.5197 11.8212 16.54 11.8008 16.565 11.788C16.59 11.7752 16.6185 11.7706 16.6462 11.7749C17.5431 11.9139 18.3725 12.3347 19.0142 12.9765C19.656 13.6183 20.0769 14.4476 20.2159 15.3445C20.2198 15.3723 20.215 15.4006 20.2019 15.4254C20.1889 15.4502 20.1683 15.4702 20.1433 15.4827C20.1182 15.4952 20.0898 15.4994 20.0621 15.4948C20.0345 15.4903 20.009 15.4771 19.9893 15.4572Z"
                  fill="currentColor"
                />
                <path
                  d="M32 15.9896C32.0012 16.4003 31.8845 16.8027 31.6638 17.1491C30.436 19.0833 28.9251 20.8225 27.1815 22.3086C27.1304 22.3515 27.0651 22.3736 26.9984 22.3706C26.9318 22.3677 26.8687 22.3398 26.8216 22.2926L22.292 17.7597C22.2593 17.7271 22.2357 17.6865 22.2234 17.642C22.2112 17.5975 22.2107 17.5505 22.222 17.5057C22.4821 16.4383 22.463 15.3219 22.1666 14.264C21.8702 13.2061 21.3065 12.2424 20.5296 11.4655C19.7527 10.6886 18.789 10.1249 17.7311 9.82845C16.6732 9.53204 15.5568 9.51298 14.4894 9.7731C14.4445 9.78455 14.3974 9.78412 14.3528 9.77185C14.3081 9.75957 14.2674 9.73588 14.2347 9.70311L11.0857 6.55406C11.0534 6.52195 11.0299 6.48211 11.0174 6.43835C11.0049 6.39458 11.0038 6.34835 11.0142 6.30404C11.0247 6.25974 11.0463 6.21884 11.077 6.18524C11.1077 6.15165 11.1465 6.12647 11.1897 6.1121C12.7327 5.59381 14.3494 5.32841 15.9772 5.32617C19.0649 5.32617 22.198 6.29608 25.0397 8.13059C27.6048 9.7871 29.8933 12.1042 31.6571 14.832C31.8798 15.1771 31.9988 15.5788 32 15.9896Z"
                  fill="currentColor"
                />
                <path
                  d="M13.2023 21.7482C14.0737 22.1715 15.0298 22.3914 15.9986 22.3913C16.5072 22.3915 17.0141 22.3311 17.5084 22.2113C17.5532 22.2 17.6001 22.2005 17.6446 22.2128C17.6892 22.225 17.7297 22.2486 17.7624 22.2813L20.9268 25.445C20.9591 25.4774 20.9826 25.5175 20.995 25.5615C21.0074 25.6055 21.0082 25.652 20.9974 25.6965C20.9867 25.7409 20.9646 25.7819 20.9335 25.8154C20.9023 25.8488 20.863 25.8737 20.8194 25.8876C19.255 26.3934 17.6214 26.6532 15.9772 26.6576C12.7935 26.6576 9.73645 25.7243 6.89071 23.8825C4.36494 22.2486 2.09981 19.9282 0.339299 17.1731C0.110731 16.8185 -0.00725139 16.4039 0.000345057 15.9821C0.0079415 15.5602 0.140773 15.1502 0.381962 14.804C1.75984 12.8315 3.26703 11.1436 4.89289 9.75644C4.94398 9.71332 5.0094 9.69096 5.07619 9.6938C5.14299 9.69664 5.20628 9.72447 5.25352 9.77177L9.70912 14.2294C9.74178 14.262 9.7654 14.3026 9.77767 14.3471C9.78994 14.3916 9.79044 14.4386 9.77911 14.4833C9.55075 15.4248 9.53911 16.4058 9.74507 17.3524C9.95102 18.299 10.3692 19.1865 10.9681 19.948C11.567 20.7094 12.3309 21.325 13.2023 21.7482Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </label>
        </div>
        <button
          className="button button_full-width"
          type="submit"
          style={{
            border: "none",
            borderRadius: "5px",
            outline: "none",
            overflow: "hidden",
            padding: "7px 14px",
            transition: "background-color 0.5s ease,color 0.5s ease",
            alignItems: "center",
            backgroundColor: "#ffea1f",
            color: "#000",
            cursor: "pointer",
            display: "flex",
            fontFamily: '"Source Sans Pro"',
            fontSize: "14px",
            fontWeight: 400,
            justifyContent: "center",
            lineHeight: "20px",
            position: "relative",
            width: "100%",
          }}
    
        >
          <div
            className="button__icon-container button__icon-container_position_left"
            style={{
              border: "0px",
              fontVariant: "inherit",
              margin: "0px",
              padding: "0px",
              fontFeatureSettings: "inherit",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
              fontStretch: "inherit",
              fontStyle: "inherit",
              lineHeight: "inherit",
              verticalAlign: "initial",
              height: "16px",
              width: "16px",
              marginRight: "10px",
            }}
          />
          Autorisation
          <div
            className="button__icon-container button__icon-container_position_right"
            style={{
              border: "0px",
              fontVariant: "inherit",
              margin: "0px",
              padding: "0px",
              fontFeatureSettings: "inherit",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
              fontStretch: "inherit",
              fontStyle: "inherit",
              lineHeight: "inherit",
              verticalAlign: "initial",
              height: "16px",
              width: "16px",
              marginLeft: "10px",
            }}
          />
        </button>
      </form>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border: 0px;
  font-variant: inherit;
  margin: 0px;
  padding: 0px;
  font-feature-settings: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-stretch: inherit;
  font-style: inherit;
  line-height: inherit;
  vertical-align: initial;
  height: 100%;
  width: 100%;
}

body {
  border: 0px;
  font-variant: inherit;
  margin: 0px;
  padding: 0px;
  font-feature-settings: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-stretch: inherit;
  font-style: inherit;
  line-height: inherit;
  vertical-align: initial;
  height: 100%;
  width: 100%;
  transition: background-color 0.5s ease,color 0.5s ease;
  background-color: #181c23;
  color: #fff;
  overflow-y: auto;
}
`,
        }}
      />
    </>
  );
}


export default Login


import React from "react";
// @ts-ignore
const AgentBalances = ({state, setState} : {state: string, setState: (val: string) => void}) => {


  return (
    <>
      <div
        className="section-header"
        style={{
          border: "0px",
          fontVariant: "inherit",
          margin: "0px",
          fontFeatureSettings: "inherit",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          boxSizing: "border-box",
          fontStretch: "inherit",
          fontStyle: "inherit",
          verticalAlign: "initial",
          padding: "10px 15px",
          transition: "background-color 0.5s ease,color 0.5s ease",
          backgroundColor: "#08af72",
          color: "#fff",

          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "16px",
          width: '100%'
        }}
      >
        Solde des cartes d'agent
      </div>
      <div
        className="loader-container user-list-page__loader-container"
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
          position: "relative",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <div
          className="loader-container__content"
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
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className="search-block user-list-page__search-block"
            style={{
              border: "0px",
              fontVariant: "inherit",
              margin: "0px",
              fontFeatureSettings: "inherit",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
              fontStretch: "inherit",
              fontStyle: "inherit",
              lineHeight: "inherit",
              verticalAlign: "initial",
              padding: "10px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="input input_full-width search-block__input"
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
                width: "100%",
                marginRight: "10px",
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
                  <svg
                    className="icon input__icon input__icon_position_left"
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
                      marginRight: "7px",
                    }}
                  >
                    <path
                      d="M31.5095 28.788L24.2553 21.5337C26.0018 19.2087 26.9446 16.3786 26.9414 13.4707C26.9414 6.04301 20.8984 0 13.4707 0C6.04301 0 0 6.04301 0 13.4707C0 20.8984 6.04301 26.9414 13.4707 26.9414C16.3786 26.9446 19.2087 26.0018 21.5337 24.2553L28.788 31.5095C29.1552 31.8378 29.6341 32.013 30.1264 31.9992C30.6188 31.9855 31.0872 31.7837 31.4355 31.4355C31.7837 31.0872 31.9855 30.6188 31.9992 30.1264C32.013 29.6341 31.8378 29.1552 31.5095 28.788ZM3.84878 13.4707C3.84878 11.5677 4.41309 9.70738 5.47037 8.12506C6.52764 6.54273 8.03038 5.30947 9.78856 4.5812C11.5467 3.85294 13.4814 3.6624 15.3479 4.03366C17.2143 4.40493 18.9288 5.32133 20.2745 6.66698C21.6201 8.01263 22.5365 9.7271 22.9078 11.5936C23.279 13.46 23.0885 15.3947 22.3602 17.1529C21.632 18.9111 20.3987 20.4138 18.8164 21.4711C17.2341 22.5283 15.3738 23.0927 13.4707 23.0927C10.9198 23.0896 8.47416 22.0749 6.67036 20.2711C4.86656 18.4673 3.85184 16.0217 3.84878 13.4707Z"
                      fill="currentColor"
                    />
                  </svg>
                  <input
                    className="input__input-field"
                    type="text"
                    placeholder="Search"
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

                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      width: "100%",
                    }}
                    // @ts-ignore
                    onChange={(e)=> setState(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <button
              className="button search-block__button"
           
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

                fontSize: "14px",
                fontWeight: 400,
                justifyContent: "center",
                lineHeight: "20px",
                position: "relative",
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
              Search
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
          </div>



        </div>
      </div>
    </>
  );
};

export default AgentBalances;

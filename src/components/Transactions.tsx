import React from "react";

const Transactions: React.FC = () => {
  return (
    <>
      <div
        className="authorized-template__content cashier-transactions-page"
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
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          className="loader-container cashier-transactions-page__loader"
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
            <form
              className="date-filter-block cashier-transactions-page__date-filter-block"
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
                padding: "15px",
              }}
            >
              <div
                className="date-picker date-filter-block__date-picker"
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
                  marginBottom: "10px",
                }}
              >
                <label
                  className="date-picker__label"
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
                    marginBottom: "5px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  Start date
                </label>
                <div
                  className="react-datepicker-wrapper"
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
                    border: "0px",
                    padding: "0px",
                    display: "inline-block",
                    width: "100%",
                  }}
                >
                  <div
                    className="react-datepicker__input-container"
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
                      display: "inline-block",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <span
                      className="react-datepicker__aria-live"
                      aria-live="polite"
                      role="alert"
                      style={{
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        verticalAlign: "initial",
                        border: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: "0px",
                        whiteSpace: "nowrap",
                        clipPath: "circle(0px)",
                        height: "1px",
                        position: "absolute",
                        width: "1px",
                      }}
                    />
                    <div
                      className="date-picker__input"
                      style={{
                        fontVariant: "inherit",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        verticalAlign: "initial",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "16px",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                        padding: "6px 12px",
                        transition:
                          "color 0.5s ease,background-color 0.5s ease,border 0.5s ease,border-radius 0.5s ease",
                        alignItems: "center",
                        backgroundColor: "#181c23",
                        color: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        minHeight: "30px",
                      }}
                    >
                      <span
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
                        }}
                      >
                        2024-01-01
                      </span>
                      <svg
                        className="icon date-picker__calendar-icon"
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
                        }}
                      >
                        <path
                          d="M20.5714 14.2857C20.5714 15.2325 19.8039 16 18.8571 16C17.9104 16 17.1429 15.2325 17.1429 14.2857C17.1429 13.3389 17.9104 12.5714 18.8571 12.5714C19.8039 12.5714 20.5714 13.3389 20.5714 14.2857Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.5714 16C25.5182 16 26.2857 15.2325 26.2857 14.2857C26.2857 13.3389 25.5182 12.5714 24.5714 12.5714C23.6247 12.5714 22.8571 13.3389 22.8571 14.2857C22.8571 15.2325 23.6247 16 24.5714 16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.5714 20C20.5714 20.9468 19.8039 21.7143 18.8571 21.7143C17.9104 21.7143 17.1429 20.9468 17.1429 20C17.1429 19.0532 17.9104 18.2857 18.8571 18.2857C19.8039 18.2857 20.5714 19.0532 20.5714 20Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.5714 21.7143C25.5182 21.7143 26.2857 20.9468 26.2857 20C26.2857 19.0532 25.5182 18.2857 24.5714 18.2857C23.6247 18.2857 22.8571 19.0532 22.8571 20C22.8571 20.9468 23.6247 21.7143 24.5714 21.7143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.14286 20C9.14286 20.9468 8.37535 21.7143 7.42857 21.7143C6.4818 21.7143 5.71429 20.9468 5.71429 20C5.71429 19.0532 6.4818 18.2857 7.42857 18.2857C8.37535 18.2857 9.14286 19.0532 9.14286 20Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.1429 21.7143C14.0896 21.7143 14.8571 20.9468 14.8571 20C14.8571 19.0532 14.0896 18.2857 13.1429 18.2857C12.1961 18.2857 11.4286 19.0532 11.4286 20C11.4286 20.9468 12.1961 21.7143 13.1429 21.7143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.14286 25.7143C9.14286 26.6611 8.37535 27.4286 7.42857 27.4286C6.4818 27.4286 5.71429 26.6611 5.71429 25.7143C5.71429 24.7675 6.4818 24 7.42857 24C8.37535 24 9.14286 24.7675 9.14286 25.7143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.1429 27.4286C14.0896 27.4286 14.8571 26.6611 14.8571 25.7143C14.8571 24.7675 14.0896 24 13.1429 24C12.1961 24 11.4286 24.7675 11.4286 25.7143C11.4286 26.6611 12.1961 27.4286 13.1429 27.4286Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.5714 25.7143C20.5714 26.6611 19.8039 27.4286 18.8571 27.4286C17.9104 27.4286 17.1429 26.6611 17.1429 25.7143C17.1429 24.7675 17.9104 24 18.8571 24C19.8039 24 20.5714 24.7675 20.5714 25.7143Z"
                          fill="currentColor"
                        />
                        <path
                          clipRule="evenodd"
                          d="M6.85714 0C7.48833 0 8 0.511675 8 1.14286V2.28571H24V1.14286C24 0.511675 24.5117 0 25.1429 0C25.774 0 26.2857 0.511675 26.2857 1.14286V2.28571H27.4286C29.9533 2.28571 32 4.33241 32 6.85714V27.4286C32 29.9533 29.9533 32 27.4286 32H4.57143C2.0467 32 0 29.9533 0 27.4286V6.85714C0 4.33241 2.0467 2.28571 4.57143 2.28571H5.71429V1.14286C5.71429 0.511675 6.22596 0 6.85714 0ZM27.4286 4.57143C28.6909 4.57143 29.7143 5.59478 29.7143 6.85714V8H2.28571V6.85714C2.28571 5.59478 3.30906 4.57143 4.57143 4.57143H27.4286ZM2.28571 10.2857V27.4286C2.28571 28.6909 3.30906 29.7143 4.57143 29.7143H27.4286C28.6909 29.7143 29.7143 28.6909 29.7143 27.4286V10.2857H2.28571Z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="date-picker date-filter-block__date-picker"
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
                  marginBottom: "10px",
                }}
              >
                <label
                  className="date-picker__label"
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
                    marginBottom: "5px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  End date
                </label>
                <div
                  className="react-datepicker-wrapper"
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
                    border: "0px",
                    padding: "0px",
                    display: "inline-block",
                    width: "100%",
                  }}
                >
                  <div
                    className="react-datepicker__input-container"
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
                      display: "inline-block",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <span
                      className="react-datepicker__aria-live"
                      aria-live="polite"
                      role="alert"
                      style={{
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        verticalAlign: "initial",
                        border: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: "0px",
                        whiteSpace: "nowrap",
                        clipPath: "circle(0px)",
                        height: "1px",
                        position: "absolute",
                        width: "1px",
                      }}
                    />
                    <div
                      className="date-picker__input"
                      style={{
                        fontVariant: "inherit",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        verticalAlign: "initial",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "16px",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                        padding: "6px 12px",
                        transition:
                          "color 0.5s ease,background-color 0.5s ease,border 0.5s ease,border-radius 0.5s ease",
                        alignItems: "center",
                        backgroundColor: "#181c23",
                        color: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        minHeight: "30px",
                      }}
                    >
                      <span
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
                        }}
                      >
                        2024-01-18
                      </span>
                      <svg
                        className="icon date-picker__calendar-icon"
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
                        }}
                      >
                        <path
                          d="M20.5714 14.2857C20.5714 15.2325 19.8039 16 18.8571 16C17.9104 16 17.1429 15.2325 17.1429 14.2857C17.1429 13.3389 17.9104 12.5714 18.8571 12.5714C19.8039 12.5714 20.5714 13.3389 20.5714 14.2857Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.5714 16C25.5182 16 26.2857 15.2325 26.2857 14.2857C26.2857 13.3389 25.5182 12.5714 24.5714 12.5714C23.6247 12.5714 22.8571 13.3389 22.8571 14.2857C22.8571 15.2325 23.6247 16 24.5714 16Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.5714 20C20.5714 20.9468 19.8039 21.7143 18.8571 21.7143C17.9104 21.7143 17.1429 20.9468 17.1429 20C17.1429 19.0532 17.9104 18.2857 18.8571 18.2857C19.8039 18.2857 20.5714 19.0532 20.5714 20Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.5714 21.7143C25.5182 21.7143 26.2857 20.9468 26.2857 20C26.2857 19.0532 25.5182 18.2857 24.5714 18.2857C23.6247 18.2857 22.8571 19.0532 22.8571 20C22.8571 20.9468 23.6247 21.7143 24.5714 21.7143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.14286 20C9.14286 20.9468 8.37535 21.7143 7.42857 21.7143C6.4818 21.7143 5.71429 20.9468 5.71429 20C5.71429 19.0532 6.4818 18.2857 7.42857 18.2857C8.37535 18.2857 9.14286 19.0532 9.14286 20Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.1429 21.7143C14.0896 21.7143 14.8571 20.9468 14.8571 20C14.8571 19.0532 14.0896 18.2857 13.1429 18.2857C12.1961 18.2857 11.4286 19.0532 11.4286 20C11.4286 20.9468 12.1961 21.7143 13.1429 21.7143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.14286 25.7143C9.14286 26.6611 8.37535 27.4286 7.42857 27.4286C6.4818 27.4286 5.71429 26.6611 5.71429 25.7143C5.71429 24.7675 6.4818 24 7.42857 24C8.37535 24 9.14286 24.7675 9.14286 25.7143Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.1429 27.4286C14.0896 27.4286 14.8571 26.6611 14.8571 25.7143C14.8571 24.7675 14.0896 24 13.1429 24C12.1961 24 11.4286 24.7675 11.4286 25.7143C11.4286 26.6611 12.1961 27.4286 13.1429 27.4286Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.5714 25.7143C20.5714 26.6611 19.8039 27.4286 18.8571 27.4286C17.9104 27.4286 17.1429 26.6611 17.1429 25.7143C17.1429 24.7675 17.9104 24 18.8571 24C19.8039 24 20.5714 24.7675 20.5714 25.7143Z"
                          fill="currentColor"
                        />
                        <path
                          clipRule="evenodd"
                          d="M6.85714 0C7.48833 0 8 0.511675 8 1.14286V2.28571H24V1.14286C24 0.511675 24.5117 0 25.1429 0C25.774 0 26.2857 0.511675 26.2857 1.14286V2.28571H27.4286C29.9533 2.28571 32 4.33241 32 6.85714V27.4286C32 29.9533 29.9533 32 27.4286 32H4.57143C2.0467 32 0 29.9533 0 27.4286V6.85714C0 4.33241 2.0467 2.28571 4.57143 2.28571H5.71429V1.14286C5.71429 0.511675 6.22596 0 6.85714 0ZM27.4286 4.57143C28.6909 4.57143 29.7143 5.59478 29.7143 6.85714V8H2.28571V6.85714C2.28571 5.59478 3.30906 4.57143 4.57143 4.57143H27.4286ZM2.28571 10.2857V27.4286C2.28571 28.6909 3.30906 29.7143 4.57143 29.7143H27.4286C28.6909 29.7143 29.7143 28.6909 29.7143 27.4286V10.2857H2.28571Z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
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
                Display
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
            <div
              className="table__container"
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
                transition: "background-color 0.5s ease",
                backgroundColor: "#181c23",
                marginBottom: "30px",
                width: "100%",
              }}
            >
              <table
                className="table"
                style={{
                  border: "0px",
                  fontVariant: "inherit",
                  fontFeatureSettings: "inherit",
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  boxSizing: "border-box",
                  fontStretch: "inherit",
                  fontStyle: "inherit",
                  borderWidth: "initial",
                  borderStyle: "none",
                  borderImage: "initial",
                  borderColor: "inherit",
                  borderSpacing: "0px",
                  margin: "0px",
                  padding: "0px",
                  borderCollapse: "inherit",
                  height: "auto",
                  textAlign: "left",
                  verticalAlign: "inherit",
                  transition: "color 0.5s ease",
                  color: "#fff",

                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  tableLayout: "fixed",
                  width: "100%",
                }}
              >
                <thead
                  className="table__header"
                  style={{
                    border: "0px",
                    fontVariant: "inherit",
                    fontFeatureSettings: "inherit",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    boxSizing: "border-box",
                    fontStretch: "inherit",
                    fontStyle: "inherit",
                    lineHeight: "inherit",
                    borderWidth: "initial",
                    borderStyle: "none",
                    borderImage: "initial",
                    borderColor: "inherit",
                    borderSpacing: "0px",
                    margin: "0px",
                    padding: "0px",
                    borderCollapse: "inherit",
                    fontWeight: "inherit",
                    height: "auto",
                    textAlign: "left",
                    verticalAlign: "inherit",
                    transition: "background-color 0.5s ease",
                    backgroundColor: "#23272f",
                    width: "100%",
                  }}
                >
                  <tr
                    className="table__header-row"
                    style={{
                      border: "0px",
                      fontVariant: "inherit",
                      fontFeatureSettings: "inherit",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      boxSizing: "border-box",
                      fontStretch: "inherit",
                      fontStyle: "inherit",
                      lineHeight: "inherit",
                      borderWidth: "initial",
                      borderStyle: "none",
                      borderImage: "initial",
                      borderColor: "inherit",
                      borderSpacing: "0px",
                      margin: "0px",
                      padding: "0px",
                      borderCollapse: "inherit",
                      fontWeight: "inherit",
                      height: "auto",
                      textAlign: "left",
                      verticalAlign: "inherit",
                      width: "auto",
                    }}
                  >
                    <th
                      className="table__header-cell table__header-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        verticalAlign: "inherit",
                        width: "auto",
                        padding: "10px 15px",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      <div
                        className="table__header-cell-text"
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
                          display: "inline-block",
                        }}
                      >
                        Username
                      </div>
                    </th>
                    <th
                      className="table__header-cell table__header-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        verticalAlign: "inherit",
                        width: "auto",
                        padding: "10px 15px",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      <div
                        className="table__header-cell-text"
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
                          display: "inline-block",
                        }}
                      >
                        Total
                      </div>
                    </th>
                    <th
                      className="table__header-cell table__header-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        verticalAlign: "inherit",
                        width: "auto",
                        padding: "10px 15px",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      <div
                        className="table__header-cell-text"
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
                          display: "inline-block",
                        }}
                      >
                        Deposit
                      </div>
                    </th>
                    <th
                      className="table__header-cell table__header-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        verticalAlign: "inherit",
                        width: "auto",
                        padding: "10px 15px",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      <div
                        className="table__header-cell-text"
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
                          display: "inline-block",
                        }}
                      >
                        Withdraw
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="table__body"
                  style={{
                    border: "0px",
                    fontVariant: "inherit",
                    fontFeatureSettings: "inherit",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    boxSizing: "border-box",
                    fontStretch: "inherit",
                    fontStyle: "inherit",
                    lineHeight: "inherit",
                    borderWidth: "initial",
                    borderStyle: "none",
                    borderImage: "initial",
                    borderColor: "inherit",
                    borderSpacing: "0px",
                    margin: "0px",
                    padding: "0px",
                    borderCollapse: "inherit",
                    fontWeight: "inherit",
                    height: "auto",
                    textAlign: "left",
                    verticalAlign: "inherit",
                    width: "auto",
                  }}
                >
                  <tr
                    className="table__body-row"
                    style={{
                      border: "0px",
                      fontVariant: "inherit",
                      fontFeatureSettings: "inherit",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      boxSizing: "border-box",
                      fontStretch: "inherit",
                      fontStyle: "inherit",
                      lineHeight: "inherit",
                      borderWidth: "initial",
                      borderStyle: "none",
                      borderImage: "initial",
                      borderColor: "inherit",
                      borderSpacing: "0px",
                      margin: "0px",
                      padding: "0px",
                      borderCollapse: "inherit",
                      fontWeight: "inherit",
                      height: "auto",
                      textAlign: "left",
                      verticalAlign: "inherit",
                      width: "auto",
                    }}
                  >
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      Total
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      -20.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      100.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      120.00
                    </td>
                  </tr>
                  <tr
                    className="table__body-row"
                    style={{
                      border: "0px",
                      fontVariant: "inherit",
                      fontFeatureSettings: "inherit",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      boxSizing: "border-box",
                      fontStretch: "inherit",
                      fontStyle: "inherit",
                      lineHeight: "inherit",
                      borderWidth: "initial",
                      borderStyle: "none",
                      borderImage: "initial",
                      borderColor: "inherit",
                      borderSpacing: "0px",
                      margin: "0px",
                      padding: "0px",
                      borderCollapse: "inherit",
                      fontWeight: "inherit",
                      height: "auto",
                      textAlign: "left",
                      verticalAlign: "inherit",
                      width: "auto",
                    }}
                  >
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      admin0011
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      0.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      0.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      0.00
                    </td>
                  </tr>
                  <tr
                    className="table__body-row"
                    style={{
                      border: "0px",
                      fontVariant: "inherit",
                      fontFeatureSettings: "inherit",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      boxSizing: "border-box",
                      fontStretch: "inherit",
                      fontStyle: "inherit",
                      lineHeight: "inherit",
                      borderWidth: "initial",
                      borderStyle: "none",
                      borderImage: "initial",
                      borderColor: "inherit",
                      borderSpacing: "0px",
                      margin: "0px",
                      padding: "0px",
                      borderCollapse: "inherit",
                      fontWeight: "inherit",
                      height: "auto",
                      textAlign: "left",
                      verticalAlign: "inherit",
                      width: "auto",
                    }}
                  >
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      lotfi001
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      0.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      0.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      0.00
                    </td>
                  </tr>
                  <tr
                    className="table__body-row"
                    style={{
                      border: "0px",
                      fontVariant: "inherit",
                      fontFeatureSettings: "inherit",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      boxSizing: "border-box",
                      fontStretch: "inherit",
                      fontStyle: "inherit",
                      lineHeight: "inherit",
                      borderWidth: "initial",
                      borderStyle: "none",
                      borderImage: "initial",
                      borderColor: "inherit",
                      borderSpacing: "0px",
                      margin: "0px",
                      padding: "0px",
                      borderCollapse: "inherit",
                      fontWeight: "inherit",
                      height: "auto",
                      textAlign: "left",
                      verticalAlign: "inherit",
                      width: "auto",
                    }}
                  >
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      admin777
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      -20.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      100.00
                    </td>
                    <td
                      className="table__body-cell table__body-cell_align_center"
                      style={{
                        border: "0px",
                        fontVariant: "inherit",
                        fontFeatureSettings: "inherit",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        boxSizing: "border-box",
                        fontStretch: "inherit",
                        fontStyle: "inherit",
                        lineHeight: "inherit",
                        borderWidth: "initial",
                        borderStyle: "none",
                        borderImage: "initial",
                        borderColor: "inherit",
                        borderSpacing: "0px",
                        margin: "0px",
                        borderCollapse: "inherit",
                        fontWeight: "inherit",
                        height: "auto",
                        width: "auto",
                        padding: "5px 15px",
                        overflowWrap: "break-word",
                        verticalAlign: "middle",
                        textAlign: "center",
                        minWidth: "auto",
                      }}
                    >
                      120.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul
              className="pagination table__pagination"
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

                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                alignItems: "center",
                display: "flex",
                padding: "10px",
                justifyContent: "flex-end",
              }}
            >
              <li
                className="pagination__item pagination__item_disabled pagination__item_icon"
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
                  borderRadius: "5px",
                  padding: "5px",
                  transition: "color 0.5s ease",
                  alignItems: "center",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "30px",
                  minWidth: "30px",
                  opacity: 0.5,
                  height: "100%",
                  marginRight: "0px",
                }}
              >
                <svg
                  className="icon pagination__icon"
                  height="32"
                  width="32"
                  fill="none"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transition: "color 0.5s ease",
                    color: "#fff",
                    height: "16px",
                    width: "16px",
                  }}
                >
                  <path
                    clipRule="evenodd"
                    d="M24.341 0.66947C25.2197 1.5621 25.2197 3.00933 24.341 3.90196L12.432 16L24.341 28.098C25.2197 28.9907 25.2197 30.4379 24.341 31.3305C23.4623 32.2232 22.0377 32.2232 21.159 31.3305L7.65901 17.6162C6.78033 16.7236 6.78033 15.2764 7.65901 14.3838L21.159 0.66947C22.0377 -0.223157 23.4623 -0.223157 24.341 0.66947Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </li>
              <ul
                className="pagination__items"
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
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <li
                  className="pagination__item pagination__item_active"
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
                    borderRadius: "5px",
                    padding: "5px",
                    transition: "color 0.5s ease",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: "30px",
                    minWidth: "30px",
                    border: "1px solid",
                    color: "#08af72",
                  }}
                >
                  1
                </li>
              </ul>
              <li
                className="pagination__item pagination__item_disabled pagination__item_icon"
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
                  borderRadius: "5px",
                  padding: "5px",
                  transition: "color 0.5s ease",
                  alignItems: "center",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "30px",
                  minWidth: "30px",
                  opacity: 0.5,
                  height: "100%",
                  marginRight: "0px",
                }}
              >
                <svg
                  className="icon pagination__icon"
                  height="32"
                  width="32"
                  fill="none"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transition: "color 0.5s ease",
                    color: "#fff",
                    height: "16px",
                    width: "16px",
                  }}
                >
                  <path
                    clipRule="evenodd"
                    d="M7.52689 0.66947C8.41952 -0.223157 9.86675 -0.223157 10.7594 0.66947L24.4737 14.3838C25.3663 15.2764 25.3663 16.7236 24.4737 17.6162L10.7594 31.3305C9.86675 32.2232 8.41952 32.2232 7.52689 31.3305C6.63427 30.4379 6.63427 28.9907 7.52689 28.098L19.6249 16L7.52689 3.90196C6.63427 3.00933 6.63427 1.5621 7.52689 0.66947Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

import React from "react";
import { useAppSelector } from "../context/hooks";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // @ts-ignore
  const username = useAppSelector(state => state.user.user.username)
  // @ts-ignore
  const balance = useAppSelector(state => state.user.user.balance.toFixed(2))
  return (
    <>
      <div
        className="sub-header authorized-template__sub-header"
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
          marginBottom: "2px",
          padding: "7px 15px",
          transition: "background-color 0.5s ease",
          alignItems: "center",
          backgroundColor: "#08af72",
          display: "flex",
          width: '100vw'
        }}
      >
        <div
          className="sub-header__title-container"
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
            marginRight: "10px",
          }}
        >
          <span
            className="sub-header__title"
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

              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              marginRight: "10px",
              textTransform: "uppercase",
            }}
          >
            {username}: {balance} TND
          </span>
        </div>
        <div
          className="sub-header__icons"
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
            marginLeft: "auto",
          }}
        >
          <svg
            className="icon sub-header__icon"
            height="32"
            width="32"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: "color 0.5s ease",
              color: "#fff",
              cursor: "pointer",
              height: "24px",
              width: "24px",
              marginRight: "10px",
            }}
            // @ts-ignore
            onClick={() => window.location.reload(false) } 
          >
            <path
              clipRule="evenodd"
              d="M2.74556 2.74556C4.73174 0.759369 7.70386 0 11.5349 0H20.4651C24.2961 0 27.2683 0.759369 29.2544 2.74556C31.2406 4.73174 32 7.70386 32 11.5349V20.4651C32 24.2961 31.2406 27.2683 29.2544 29.2544C27.2683 31.2406 24.2961 32 20.4651 32H11.5349C7.70386 32 4.73174 31.2406 2.74556 29.2544C0.759369 27.2683 0 24.2961 0 20.4651V11.5349C0 7.70386 0.759369 4.73174 2.74556 2.74556ZM4.32421 4.32421C2.96156 5.68686 2.23256 7.92405 2.23256 11.5349V20.4651C2.23256 24.0759 2.96156 26.3131 4.32421 27.6758C5.68686 29.0384 7.92405 29.7674 11.5349 29.7674H20.4651C24.0759 29.7674 26.3131 29.0384 27.6758 27.6758C29.0384 26.3131 29.7674 24.0759 29.7674 20.4651V11.5349C29.7674 7.92405 29.0384 5.68686 27.6758 4.32421C26.3131 2.96156 24.0759 2.23256 20.4651 2.23256H11.5349C7.92405 2.23256 5.68686 2.96156 4.32421 4.32421ZM16.3397 5.8406C16.805 5.43618 17.5101 5.48556 17.9145 5.95088L20.3752 8.78215C20.3877 8.79621 20.3999 8.81066 20.4118 8.8255C20.7872 9.29063 20.7297 9.97317 20.2749 10.3685C20.2407 10.3982 20.2052 10.4255 20.1686 10.4503L17.3141 12.5397C16.8166 12.9038 16.1182 12.7957 15.754 12.2982C15.3899 11.8008 15.498 11.1023 15.9955 10.7382L16.8526 10.1108C16.5794 10.0786 16.2958 10.061 16 10.061C12.5086 10.061 9.67442 12.8952 9.67442 16.3866C9.67442 19.878 12.5086 22.7122 16 22.7122C19.4914 22.7122 22.3256 19.878 22.3256 16.3866C22.3256 15.0829 21.9344 13.8819 21.261 12.8655C20.9206 12.3515 21.0612 11.6589 21.5751 11.3184C22.0891 10.9779 22.7817 11.1185 23.1222 11.6324C24.0265 12.9974 24.5581 14.6243 24.5581 16.3866C24.5581 21.111 20.7244 24.9448 16 24.9448C11.2756 24.9448 7.44186 21.111 7.44186 16.3866C7.44186 11.6622 11.2756 7.82849 16 7.82849C16.2062 7.82849 16.4078 7.83507 16.605 7.84754L16.2294 7.4154C15.825 6.95008 15.8744 6.24501 16.3397 5.8406Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Link to={'/'} >
          <svg
            className="icon sub-header__icon"
            height="32"
            width="32"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: "color 0.5s ease",
              color: "#fff",
              cursor: "pointer",
              height: "24px",
              width: "24px",
            }}
            >
            <path
              clipRule="evenodd"
              d="M6 32C2.68652 32 0 29.1814 0 25.705V14.1641C0 12.1825 0.889648 10.3168 2.40039 9.12826L12.4004 1.25947C14.5332 -0.419822 17.4668 -0.419822 19.5996 1.25947L29.5996 9.12826C31.1104 10.3168 32 12.1825 32 14.1641V25.705C32 29.1814 29.3135 32 26 32H6ZM30 14.1641V25.705C30 28.0226 28.209 29.9017 26 29.9017H22V21.5083C22 18.0319 19.3135 15.2132 16 15.2132C12.6865 15.2132 10 18.0319 10 21.5083V29.9017H6C3.79102 29.9017 2 28.0226 2 25.705V14.1641C2 12.8434 2.59277 11.5995 3.59961 10.8065L13.5996 2.93773C15.0225 1.81889 16.9775 1.81889 18.4004 2.93773L28.4004 10.8065C29.4072 11.5995 30 12.8434 30 14.1641ZM12 29.9017V21.5083C12 19.1907 13.791 17.3116 16 17.3116C18.209 17.3116 20 19.1907 20 21.5083V29.9017H12Z"
              fill="currentColor"
              fillRule="evenodd"
              />
          </svg>
              </Link>
        </div>
      </div>
     
    </>
  );
};

export default Header;

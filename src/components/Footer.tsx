import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../context/userRedux";

const Footer: React.FC = () => {
  const dispatch = useDispatch()
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
          fontFamily: '"Source Sans Pro", sans-serif',
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "16px",
          width: '100%'
        }}
      >
        Autre
      </div>
      <div
        className="menu-list menu-settings"
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
          transition: "background-color 0.5s ease",
          backgroundColor: "#181c23",
          width: '100%'
        }}
      >
        
        <div
          className="menu-item menu-item_clickable settings-item"
          style={{
            fontVariant: "inherit",
            margin: "0px",
            fontFeatureSettings: "inherit",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            boxSizing: "border-box",
            fontStretch: "inherit",
            fontStyle: "inherit",
            verticalAlign: "initial",
            border: "1px solid #fff",
            borderRadius: "5px",
            padding: "10px 20px",
            transition:
              "background-color 0.5s ease,border 0.5s ease,border-radius 0.5s ease,color 0.5s ease",
            backgroundColor: "#181c23",
            color: "#fff",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "16px",
            cursor: "pointer",
            alignItems: "center",
            display: "flex",
            transitionProperty: "background-color, color",
            marginTop: "5px",
            
           
          }}
         
        >
          <div
            className="settings-item__title"
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
            Changer le mot de passe
          </div>
          <svg
            className="icon settings-item__icon"
            height="32"
            width="32"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "22px", marginLeft: "auto", width: "22px" }}
          >
            <path
              clipRule="evenodd"
              d="M7.243 13.037V8.03292C7.243 5.87684 8.18582 3.82622 9.83513 2.32685C11.4819 0.829751 13.7007 0 16.0002 0C18.2997 0 20.5185 0.829751 22.1653 2.32685C23.8146 3.82622 24.7574 5.87684 24.7574 8.03292V13.037H26.7029C28.8526 13.037 30.5511 14.8305 30.5511 16.9877V28.0494C30.5511 30.2065 28.8526 32 26.7029 32H5.29644C3.1468 32 1.44824 30.2065 1.44824 28.0494V16.9877C1.44824 14.8305 3.1468 13.037 5.29644 13.037H7.243ZM10.8981 3.49613C12.2395 2.27665 14.0737 1.58025 16.0002 1.58025C17.9267 1.58025 19.7608 2.27665 21.1023 3.49613C22.4412 4.71334 23.1772 6.34718 23.1772 8.03292V13.037H8.82324V8.03292C8.82324 6.34718 9.55919 4.71334 10.8981 3.49613ZM5.29644 14.6173C4.06822 14.6173 3.02849 15.6538 3.02849 16.9877V28.0494C3.02849 29.3832 4.06822 30.4198 5.29644 30.4198H26.7029C27.9311 30.4198 28.9709 29.3832 28.9709 28.0494V16.9877C28.9709 15.6538 27.9311 14.6173 26.7029 14.6173H5.29644Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="menu-item menu-item_clickable settings-item"
          style={{
            fontVariant: "inherit",
            margin: "0px",
            fontFeatureSettings: "inherit",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            boxSizing: "border-box",
            fontStretch: "inherit",
            fontStyle: "inherit",
            verticalAlign: "initial",
            border: "1px solid #fff",
            borderRadius: "5px",
            padding: "10px 20px",
            transition:
              "background-color 0.5s ease,border 0.5s ease,border-radius 0.5s ease,color 0.5s ease",
            backgroundColor: "#181c23",
            color: "#fff",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "16px",
            cursor: "pointer",
            alignItems: "center",
            display: "flex",
            transitionProperty: "background-color, color",
            marginTop: "5px",
          
          }}
          onClick={()=> {
            dispatch(logoutUser())
          }}
        >
          <div
            className="settings-item__title"
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
            Me deconnecter
          </div>
          <svg
            className="icon settings-item__icon"
            height="32"
            width="32"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "22px", marginLeft: "auto", width: "22px" }}
          >
            <path
              clipRule="evenodd"
              d="M4.26667 1.82857C3.62004 1.82857 2.9999 2.08544 2.54267 2.54267C2.08544 2.9999 1.82857 3.62004 1.82857 4.26667V27.7333C1.82857 28.38 2.08544 29.0001 2.54267 29.4573C2.9999 29.9146 3.62004 30.1714 4.26667 30.1714H10.9714C11.4764 30.1714 11.8857 30.5808 11.8857 31.0857C11.8857 31.5907 11.4764 32 10.9714 32H4.26667C3.13508 32 2.04983 31.5505 1.24968 30.7503C0.449523 29.9502 0 28.8649 0 27.7333V4.26667C0 3.13508 0.449522 2.04983 1.24968 1.24968C2.04983 0.449522 3.13508 0 4.26667 0H10.9714C11.4764 0 11.8857 0.40934 11.8857 0.914286C11.8857 1.41923 11.4764 1.82857 10.9714 1.82857H4.26667ZM22.0583 6.97255C22.4153 6.6155 22.9942 6.6155 23.3513 6.97255L31.7322 15.3535C32.0893 15.7106 32.0893 16.2894 31.7322 16.6465L23.3513 25.0275C22.9942 25.3845 22.4153 25.3845 22.0583 25.0275C21.7012 24.6704 21.7012 24.0915 22.0583 23.7345L28.8784 16.9143H10.9714C10.4665 16.9143 10.0571 16.5049 10.0571 16C10.0571 15.4951 10.4665 15.0857 10.9714 15.0857H28.8784L22.0583 8.26554C21.7012 7.90849 21.7012 7.3296 22.0583 6.97255Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>


  );
}


export default Footer

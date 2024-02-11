import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BaseURL } from "../consts";
import { useAppSelector } from "../context/hooks";

const Body: React.FC = () => {

  return (
    <>
      <div
        className="authorized-template__content home-page"
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
          width: '100vw'
        }}
      >
        <div
          className="menu"
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
          <div
            className="section-header menu-header"
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
              backgroundColor: "#23272f",
              color: "#fff",

              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "16px",
            }}
          >
            Enregistreuse
          </div>
          <div
            className="menu-list"
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
            }}
          >
            <Link to={'/newuser'} >
            <div
              className="menu-item menu-item_clickable"
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

                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                cursor: "pointer",
              }}
            >
              Nouvel Utilisateur
            </div>
            </Link>
            <Link to={'/balances'} >
            <div
              className="menu-item menu-item_clickable"
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
                
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            >
              Solde des cartes d'agent
            </div>
            </Link>
            <Link to={'/transactions'} >
            <div
              className="menu-item menu-item_clickable"
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
                  
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "16px",
                  cursor: "pointer",
                  marginTop: "5px",
                }}
         
              >
              Mes Transactions
            </div>
              </Link>
            <div
              className="menu-item menu-item_clickable"
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

                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            >
              Historique Net des Joueurs
            </div>
            <div
              className="menu-item menu-item_clickable"
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

                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            >
              Arbre
            </div>
          </div>
        </div>
        <div
          className="menu"
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
          <div
            className="section-header menu-header"
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
              backgroundColor: "#23272f",
              color: "#fff",

              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "16px",
            }}
          >
            Les partenaires
          </div>
          <div
            className="menu-list"
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
            }}
          >
            <div
              className="menu-item menu-item_clickable"
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

                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "16px",
                cursor: "pointer",
              }}
            >
              Historique des transactions
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

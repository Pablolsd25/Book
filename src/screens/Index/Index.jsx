import React from "react";
import { Component } from "../../components/Component";
import { Estancias } from "../../components/Estancias";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <img
            className="img"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/ellipse-1.svg"
          />
          <img
            className="img"
            alt="Ellipse stroke"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/ellipse-1--stroke-.svg"
          />
          <img
            className="capa"
            alt="Capa"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/capa-1-1@2x.png"
          />
          <img
            className="XMLID"
            alt="Xmlid"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/xmlid-1-@2x.png"
          />
          <img
            className="react-logo"
            alt="React logo"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/react-logo.svg"
          />
          <img
            className="postgre-sql-logo"
            alt="Postgre sql logo"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/postgre-sql-logo.svg"
          />
          <img
            className="vector"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/vector.png"
          />
          <img
            className="vector-2"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/vector-1.svg"
          />
          <img
            className="next-logo"
            alt="Next logo"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/next-logo.svg"
          />
          <img
            className="XMLID-2"
            alt="Xmlid"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/xmlid-1--1@2x.png"
          />
          <img
            className="XMLID-3"
            alt="Xmlid"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/xmlid-1--2@2x.png"
          />
          <img
            className="git-logo"
            alt="Git logo"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/git-logo.svg"
          />
          <img
            className="github-logo"
            alt="Github logo"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/github-logo.svg"
          />
          <img
            className="figma-logo"
            alt="Figma logo"
            src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/figma-logo.svg"
          />
        </div>
        <img
          className="soy-un-apasionado"
          alt="Soy un apasionado"
          src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/soy-un-apasionado-desarrollador-web-full-stack-con-una-fuerte-in.svg"
        />
        <img
          className="bienvenido"
          alt="Bienvenido"
          src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/-bienvenido-.svg"
        />
        <img
          className="frame"
          alt="Frame"
          src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/frame-9.svg"
        />
        <img
          className="frame-2"
          alt="Frame"
          src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/frame-10.svg"
        />
        <img
          className="frame-3"
          alt="Frame"
          src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/frame-11.svg"
        />
        <div className="group">
          <div className="overlap-group">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/rectangle-1.svg"
            />
            <img
              className="frame-4"
              alt="Frame"
              src="https://cdn.animaapp.com/projects/64f937e0bd600670120c7fbb/releases/65182afc1d242f88c5810007/img/frame-8.svg"
            />
            <Component className="component-2" mailClassName="component-instance" property1="mail" />
            <Component
              className="component-2-instance"
              mailClassName="design-component-instance-node"
              property1="git-hub"
            />
            <Component className="component-3" property1="frame-13" />
          </div>
        </div>
        <Estancias
          buttonButtonClassName="estancias-3"
          buttonDivClassName="estancias-2"
          buttonText="Descarga mi CV"
          className="estancias-instance"
          default1="default"
        />
      </div>
    </div>
  );
};

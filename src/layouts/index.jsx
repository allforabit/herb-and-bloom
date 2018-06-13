// TODO use root component
// TODO add support for IE
// import "babel-polyfill";
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import { Logo } from "../components/logo";
import { Container } from "../components/container";
import { Textarea } from "../components/textarea";
import styled, { injectGlobal } from "styled-components";
import { withPrefix } from "gatsby-link";
import Obfuscate from "react-obfuscate";
import { Spring, animated } from "react-spring";

import homeBg from "../img/home-bg.png";
import hbIconImg from "../img/icon/icon-rgb-colour-no-background-small.png";
import pattern from "../img/patterns/06/f-small.png";

import {
  Root,
  Provider,
  Flex,
  Box,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  ButtonOutline,
  Pre,
  BlockLink,
  Image,
  BackgroundImage,
  Column,
  Row,
  Divider,
  Link,
  Select
} from "rebass";

import sys from "@allforabit/system-components";

import "./fonts.css";

injectGlobal`
body {
  margin: 0;
}
* {
  box-sizing: border-box
}
`;

export const breakpoints = [32, 48, 64, 80].map(n => n + "rem");

const theme = {
  fonts: {
    sans: 'ankeregular, "Avenir Next", Helvetica, sans-serif',
    heading: "italian_plate_no2_condensedLt"
  },
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 16, 24, 36, 48, 72],
  colors: {
    blue: "#021C72",
    purple: "#D900FF",
    grey: "#EFECE1"
  },
  textStyle: {
    footer: {
      fontFamily: "italian_plate_no2_condensedLt"
    }
  }
};

const TemplateWrapper = ({ children }) => (
  <Provider theme={theme}>
    <Root fontFamily="sans" bg="grey">
      <Helmet title="Herb & Bloom" />
      {children()}
    </Root>
  </Provider>
);


TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

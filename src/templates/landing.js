import Link from "gatsby-link";

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
  // Link,
  Select
} from "rebass";

import sys from "@allforabit/system-components";

const Title = styled(Heading)([]);
// TODO sort out header font
// TODO sort out general font

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    const { style, ...props } = this.props;
    const logoSizes = [12, 14, 16, 18].map(x => x * 16);
    return (
      <Box
          bg="blue"
        >
        <Banner
          style={{
            WebkitFontSmoothing: "antialiased"
          }}
          color="white"
          ratio={2 / 3}
          // backgroundSize="100px 100px"
        >
          <Box width={logoSizes} height={100}>
            <Logo size={logoSizes} color="white" />
            <Box mt={5} color="purple">
              <Text textAlign="center" fontSize={[2, null, 3]}>
                Grown in London.
              </Text>
              <Text textAlign="center" fontSize={[2, null, 3]}>
                For London.
              </Text>
            </Box>
          </Box>
        </Banner>
        <Banner
          bg="blue"
          bgImage={pattern}
          backgroundSize="auto"
          minHeight={[192, null, 256]}
        />
      </Box>
    );
  }
}

const StyledObfuscate = sys({
  is: Obfuscate,
  color: "purple",
  hover: {
    color: "black"
  }
  // fontWeight: "bold"
});

const BrandLink = () => (
  <Link href="https://herbandbloom.co.uk">Herb & Bloom</Link>
);

const StyledBrandLink = sys({
  is: Link,
  fontFamily: "heading",
  fontSize: 2,
  textDecoration: "overline"
});

const BelowHeader = props => (
  <Box
    style={{
      WebkitFontSmoothing: "antialiased"
    }}
    color="blue"
    pb={4}
    pt={4}
  >
    <Container flexWrap="wrap" width={1} maxWidth={640} fontSize={[1, null, 2]}>
      <Text textAlign="center" mb={[3, null, 4]}>
        Herb & Bloom is an innovative vertical farming business opening summer
        2018 in Battersea.
      </Text>
      <Text textAlign="center" mb={[3, null, 4]}>
        Developed by two hosptiality professionals and supported by the
        industrys leading indoor farming engineers, we will be delivering the
        freshest, premium culinary herbs & edible flowers to Londons restaurants
        and local communities.
      </Text>
      <Text textAlign="center" mb={[3, null, 4]}>
        We strive for an open door policy to all interested parties. If you'd
        like to come to our showcase, or have any other questions drop us a line
        at <StyledObfuscate email="info@herbandbloomlondon.co.uk" />
      </Text>
    </Container>
  </Box>
);

const HBIcon = () => {
  return <Image src={hbIconImg} width={96} />;
};

const Footer = props => (
  <Container>
    <Box color="black" mt={3} py={3} fontSize={1}>
      <Divider w={1} borderColor="white" />
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Root
            fontFamily="heading"
            style={{
              WebkitFontSmoothing: "antialiased"
            }}
          >
            <Text fontSize={[2, null, 3]} color="blue">
              © 2018 HERB AND BLOOM
            </Text>
          </Root>
        </Box>
        <Box>
          <HBIcon />
        </Box>
      </Flex>
    </Box>
  </Container>
);

export default class IndexPage extends React.Component {
  render() {

    const {data} = this.props;
    const {markdownRemark: {frontmatter: {title}}} = data;
    console.log(data);
    return <div>{title}</div>;

  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

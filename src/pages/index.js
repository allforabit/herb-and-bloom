import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { Container } from 'components/container';
import { Image, Box, Flex, Heading } from '../components/elements';
import { Text } from 'rebass';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import { Logo } from '../components/logo';
import { PrimaryHeading } from '../components/primary-heading';
import { ObfuscatedLink } from '../components/obfuscated-link';
import IO from 'components/io';
import mapboxgl from 'mapbox-gl';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'react-feather';
import { Carousel } from '../components/carousel';
import { Element } from 'react-scroll';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxsZm9yYWJpdCIsImEiOiJjamhhbXNoY3QwcGZhMzBxZ2o2cmt2YnpqIn0.FNihk7OBud6P4ZhrZzJ_8g';

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 17.0,
      center: [-0.14382, 51.47751],
    });
    this.map.on('dragstart', event => {
      if (
        !(
          event.originalEvent &&
          'touches' in event.originalEvent &&
          event.originalEvent.touches.length >= 2
        )
      ) {
        this.map.dragPan.disable();
        this.map.dragPan.enable();
      }
    });

    // this.map.on('load', function() {
    //   /* Image: An image is loaded and added to the map. */
    //   this.map.loadImage('https://i.imgur.com/MK4NUzI.png', (error, image) => {
    //     if (error) throw error;
    //     this.map.addImage('custom-marker', image);
    //     /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
    //     this.map.addLayer({
    //       id: 'markers',
    //       type: 'symbol',
    //       /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    //       source: {
    //         type: 'geojson',
    //         data: {
    //           type: 'FeatureCollection',
    //           features: [
    //             {
    //               type: 'Feature',
    //               geometry: {
    //                 type: 'Point',
    //                 coordinates: [-0.14382115182777966, 51.477614762057044],
    //               },
    //             },
    //           ],
    //         },
    //       },
    //       layout: {
    //         'icon-image': 'custom-marker',
    //       },
    //     });
    //   });
    // });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        ref={el => (this.mapContainer = el)}
      />
    );
  }
}

const TopBanner = ({ carouselData }) => {
  return (
    <IO rootMargin="-50px">
      {({ isVisible }) => (
        <Flex
          bg="blue"
          css={{
            height: '100vh',
          }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Carousel
            items={[
              <Box key="blank" />,
              ...carouselData.map(({ title, image }) => (
                <Box
                  key={image.childImageSharp.fluid}
                  width={1}
                  css={{ height: '100%' }}
                >
                  <Image
                    width={1}
                    fluid={image ? image.childImageSharp.fluid : {}}
                    alt={title}
                    style={{
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                  <Box
                    bg="black"
                    css={{
                      opacity: 0.25,
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  />
                </Box>
              )),
            ]}
          />
          <Box
            key="logo"
            mx="auto"
            mb={3}
            css={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              top: '50%',
              marginTop: '-150px',
            }}
          >
            <Box width={[200, 300]} mx="auto">
              <Logo color="white" width="100%" height="100%" />
            </Box>
            <Text
              textAlign="center"
              mt={4}
              color="purple"
              fontFamily="sans"
              fontSize={[4, 5]}
            >
              Grown in London. <br />
              For London
            </Text>
          </Box>
        </Flex>
      )}
    </IO>
  );
};

TopBanner.propTypes = {
  carouselData: PropTypes.array.isRequired,
};

const Index = ({ data, theme }) => (
  <Layout id="site-layout">
    <Element name="home">
      <TopBanner carouselData={data.homeJson.carousel} />
    </Element>
    <Element name="about">
      <Box bg="grey">
        <Container>
          <Text
            fontFamily="sans"
            py={4}
            px={[3, 4]}
            fontSize={2}
            lineHeight={1.25}
            letterSpacing={1.1}
            mb={[3, 4]}
          >
            <Text fontSize={4} mt={2}>
              Herb & Bloom is London’s most central vertical farm.
            </Text>
            <Text mt={[3, 4]}>
              Using state of the art hydroponic technology we grow the finest
              micro greens and micro herbs for our local London community.
            </Text>
            <Text mt={[3, 4]}>
              We grow our produce with quality at the forefront of our practise,
              and harvest our crops on the day of delivery. This means we can
              guarantee our customers have the freshest products exactly when
              they need them.
            </Text>
            <Text mt={2}>
              We promise to deliver quality, flavour and vibrancy with the
              absolute minimum of food miles attached.
            </Text>
            <Text mt={[3, 4]}>
              By putting technology at the forefront of our innovation and
              development, Herb & Bloom will continue to expand and grow a range
              fresh produce, from seed, right in the heart of the city.
            </Text>
          </Text>
        </Container>
      </Box>
    </Element>
    {/* <Box>
      <Container>
        <PrimaryHeading>Products</PrimaryHeading>
        <Gallery items={data.homeJson.gallery} />
      </Container>
    </Box> */}
    <Element name="contact">
      <Box bg="grey" key="contact-us">
        <Container bg="white">
          <PrimaryHeading>Contact Us</PrimaryHeading>
          <Flex flexWrap="wrap">
            <Box width={[1, 1 / 2]} px={[3, 4]} py={4}>
              <Text fontWeight="bold" mb={2} fontSize={[2, 3]}>
                Herb & Bloom
              </Text>
              <Text fontSize={[2, 3]}>
                Avro House - Unit 105
                <br />5 Havelock Terrace
                <br />
                London
                <br />
                SW8 4AS
                <br />
              </Text>
              <Box mt={3}>
                <Flex key="phone" mb={3} alignItems="center">
                  <Phone />
                  <Text ml={2} fontSize={[2, 3]}>
                    078 7611 6588
                  </Text>
                </Flex>
                <Flex key="email" alignItems="center">
                  <Mail />
                  <Text ml={2} fontSize={[2, 3]}>
                    <ObfuscatedLink email="info@herbandbloomlondon.co.uk" />
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box
              width={[1, 1 / 2]}
              css={{
                position: 'relative',
                minHeight: '50vh',
                // border: `1px solid ${theme.colors.grey}`,
              }}
            >
              <Map />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Element>
    <Box bg="blue" key="footer">
      <Container>
        <Flex justifyContent="space-around" p={3}>
          <Box>
            <Instagram color="white" />
          </Box>
          <Box>
            <Facebook color="white" />
          </Box>
          <Box>
            <Twitter color="white" />
          </Box>
        </Flex>
      </Container>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      carousel {
        title
        copy
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

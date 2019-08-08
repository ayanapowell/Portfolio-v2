import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteName from '../components/SiteName';
import HeaderNav from '../components/HeaderNav';

class Project extends Component {
  render() {
    // const { title } = this.props.data.contentfulWork;
    return (
      <div>
        <SiteName />
        <HeaderNav />
      </div>
    );
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      slug
      id
      projectUrl
      description
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Repository({ navigation }) {
  Repository.navigationOptions = () => ({
    title: navigation.getParam('repository').name,
  });

  Repository.propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  const repository = navigation.getParam('repository');

  return <Browser source={{ uri: repository.html_url }} />;
}

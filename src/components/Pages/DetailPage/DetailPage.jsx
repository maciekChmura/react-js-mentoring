import React, { Component } from 'react';
import { fetchById } from '../../../utils/dataLoaders';
import MovieDetails from '../../Detail/MovieDetails';
import Detail from './DetailPage.Styles';

class DetailPage extends Component {
  state = {
    movie: ''
  };

  componentDidMount = () => {
    fetchById(12).then(data => this.setState(state => ({ movie: data })));
  };

  render() {
    const { movie } = this.state;
    return (
      <Detail>
        {movie ? <MovieDetails details={movie} /> : <p>loading</p>}
      </Detail>
    );
  }
}

export default DetailPage;
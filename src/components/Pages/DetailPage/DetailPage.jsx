import React, { Component } from 'react';
import { fetchById } from '../../../utils/dataLoaders';
import MovieDetails from '../../Detail/MovieDetails';
import Detail from './DetailPage.Styles';

class DetailPage extends Component {
  state = {
    movie: ''
  };

  componentDidMount = () => {
    const { movieId } = this.props;
    fetchById(movieId).then(data => this.setState({ movie: data }));
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

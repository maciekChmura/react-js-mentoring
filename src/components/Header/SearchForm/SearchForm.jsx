import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearch } from '../../../redux/actions';
import {
  Wrapper,
  Display,
  InputWrapper,
  ButtonsWrapper,
  SearchButton
} from './SearchForm.Styles';
import OptionButton from '../../Helper/OptionButton/OptionButton';

const mapStateToProps = state => ({ searchOption: state.searchOption });

class SearchFormRedux extends Component {
  state = {
    searchValue: ''
  };

  handleInputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleFormSubmit();
    }
  };

  handleFormSubmit = () => {
    this.props.handleFormSubmit(this.state.searchValue);
  };

  changeSearch = text => {
    this.props.changeSearch(text);
  };

  render() {
    const { searchOption } = this.props;
    const { searchValue } = this.state;
    return (
      <Wrapper>
        <form onSubmit={this.handleFormSubmit}>
          <InputWrapper
            id="location"
            placeholder="type something"
            value={searchValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />

          <ButtonsWrapper>
            <Display>Search by: </Display>
            {['title', 'genres'].map(title => (
              <OptionButton
                text={title}
                changeOption={this.changeSearch}
                option={searchOption}
                key={title}
              />
            ))}
            <SearchButton onClick={this.handleFormSubmit} type="button">
              Search
            </SearchButton>
          </ButtonsWrapper>
        </form>
      </Wrapper>
    );
  }
}

const SearchForm = connect(
  mapStateToProps,
  { changeSearch }
)(SearchFormRedux);

export default SearchForm;

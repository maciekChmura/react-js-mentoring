import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearch, updateSearchValue } from '../../../redux/actions';
import {
  Wrapper,
  Display,
  InputWrapper,
  ButtonsWrapper,
  SearchButton
} from './SearchForm.Styles';
import OptionButton from '../../Helper/OptionButton/OptionButton';

const mapStateToProps = state => ({
  searchOption: state.searchOption,
  searchValue: state.searchValue
});

export class SearchForm extends Component {
  state = {
    stateSearchValue: ''
  };

  handleInputChange = event => {
    this.setState({ stateSearchValue: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.handleFormSubmit(this.state.stateSearchValue);
    }
  };

  render() {
    const {
      searchOption,
      searchValue,
      handleFormSubmit,
      changeSearch
    } = this.props;
    return (
      <Wrapper>
        <form onSubmit={() => handleFormSubmit(this.state.stateSearchValue)}>
          <InputWrapper
            id="location"
            placeholder="type something"
            value={this.state.stateSearchValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <ButtonsWrapper>
            <Display>Search by: </Display>
            {['title', 'genres'].map(title => (
              <OptionButton
                text={title}
                changeOption={() => changeSearch(title)}
                option={searchOption}
                key={title}
              />
            ))}
            <SearchButton
              onClick={() => handleFormSubmit(this.state.stateSearchValue)}
              type="button"
            >
              Search
            </SearchButton>
          </ButtonsWrapper>
        </form>
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  { changeSearch, updateSearchValue }
)(SearchForm);

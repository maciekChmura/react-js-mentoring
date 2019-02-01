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
    const { searchOption, handleFormSubmit, changeSearch } = this.props;
    const { stateSearchValue } = this.state;
    return (
      <Wrapper>
        <form onSubmit={() => handleFormSubmit(stateSearchValue)}>
          <InputWrapper
            id="location"
            placeholder="type something"
            value={stateSearchValue}
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
              onClick={() => handleFormSubmit(stateSearchValue)}
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

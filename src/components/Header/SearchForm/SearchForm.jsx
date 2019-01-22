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
  handleInputChange = event => {
    this.props.updateSearchValue(event.target.value);
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleFormSubmit();
    }
  };

  handleFormSubmit = () => {
    this.props.handleFormSubmit(this.props.searchValue);
  };

  changeSearch = text => {
    this.props.changeSearch(text);
  };

  render() {
    const { searchOption, searchValue } = this.props;
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

export default connect(
  mapStateToProps,
  { changeSearch, updateSearchValue }
)(SearchForm);

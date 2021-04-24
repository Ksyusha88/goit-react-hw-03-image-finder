import React, {Component} from 'react';
import style from './Searchbar.module.css';

class Searchbar extends Component {
    state ={
        query: ''
    };


handleChange =e => {
    this.setState({ query: e.currentTarget.value });
}  

hendleSubmit =e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: ''})
};



render() {
    return (
        <header className={style.Searchbar}>
        <form onSubmit={this.hendleSubmit}  className={style.SearchForm}>
            <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}>Search</span>
            </button>

            <input
            className={style.SearchForm_input}
            type="text"
            onChange = {this.handleChange}
            value ={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
        );
    }
}

export default Searchbar;
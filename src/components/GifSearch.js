import React from 'react';

export default class GifSearch extends React.Component {
  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Search:<input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}></input>
        </form>
      </div>
    );
  }
}
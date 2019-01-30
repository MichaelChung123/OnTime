import React from 'react';

export default class MentorCalculator extends React.Component {
  state = {}

    componentDidMount () {
    fetch('/api/employees')
      .then(res => res.json())
      .then(this.onLoad);
  }

  parseData (response) {
    return response.e;
  }

  onLoad = (employees) => {
    this.setState({
      es: this.parseData(e)
    });
  }

  render () {
    const { e } = this.state;

    return e ?
      this.renderData(e) :
      this.renderLoading()
  }

  renderData (employees) {
    if (e && e.length) {
      return (
        <div>
          {
            e.map(item => (
              <div key={e.name}>
                <a href={`mailto:${e.email}`}>{e.firstname}</a> {e.lastname}
              </div>
            ))
          }
        </div>
      );
    } else {
      return <div>No items found</div>
    }
  }

  renderLoading () {
    return <div>Loading...</div>
  }
}
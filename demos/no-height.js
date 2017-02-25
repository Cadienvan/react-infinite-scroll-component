import React from 'react';
import ReactDOM from 'react-dom';

import InfiniteScroll from '../app';

const divs = [
  <div key={1} style={{height: 250, background: 'cornsilk'}}>Big div no 1</div>,
  <div key={2} style={{height: 250, background: 'cornsilk'}}>Big div no 2</div>,
  <div key={3} style={{height: 250, background: 'cornsilk'}}>Big div no 3</div>,
  <div key={4} style={{height: 250, background: 'cornsilk'}}>Big div no 4</div>,
  <div key={5} style={{height: 250, background: 'cornsilk'}}>Big div no 5</div>,
  <div key={6} style={{height: 250, background: 'cornsilk'}}>Big div no 6</div>,
  <div key={7} style={{height: 250, background: 'cornsilk'}}>Big div no 7</div>,
  <div key={8} style={{height: 250, background: 'cornsilk'}}>Big div no 8</div>,
  <div key={9} style={{height: 250, background: 'cornsilk'}}>Big div no 9</div>,
];

const noHeightMessage = 'No height given to InfiniteScroll, free scroll like Facebook. Also try Pull Down to refresh! :P';

export default class NoHeight extends React.Component {
  constructor () {
    super();
    this.state = {
      divs: divs
    };
    this.generateDivs = this.generateDivs.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  generateDivs () {
    let moreDivs = [];
    let count = this.state.divs.length;
    for (let i = 0; i < 30; i++) {
      moreDivs.push(
        <div key={'div' + count++} style={{background: 'cornsilk', height: 100}}>
          Div no {count}
        </div>
      );
    }
    setTimeout(() => {
      this.setState({divs: this.state.divs.concat(moreDivs)});
    }, 500);
  }

  refresh () {
    this.setState({divs: []});
    setTimeout(() => {
      this.setState({divs});
    }, 3000);
  }

  render () {
    return (
      <div>
        <h3>{noHeightMessage}</h3>
        <InfiniteScroll
          pullDownToRefresh
          pullDownToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>}
          releaseToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>}
          refreshFunction={this.refresh}
          next={this.generateDivs}
          hasMore={true}
          loader={<h1>Loading...</h1>}>
          {this.state.divs}
        </InfiniteScroll>
      </div>
    );
  }
}
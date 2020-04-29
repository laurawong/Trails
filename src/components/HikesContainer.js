import React, { Component } from 'react';
import '../styles/HikesContainer.scss'
import '../styles/trails-patterns.scss';
import Hike from './Hike';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

class HikesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      trails: this.props.trails,
      hasMoreTrails: true,
      curStartIdx: 10,
      curEndIdx: 20
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.updateTrailData = this.updateTrailData.bind(this);
  }

  fetchMoreData = () => {
    if (this.state.items.length >= 49 || this.state.items.length >= this.state.trails.length) {
      this.setState({ hasMoreTrails: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.state.trails.slice(this.state.curStartIdx, this.state.curEndIdx)),
        curStartIdx: this.state.curStartIdx + 10,
        curEndIdx: this.state.curEndIdx + 10
      });
    }, 500);
  };

  updateTrailData = () => {
    this.setState({
      trails: this.props.trails,
      items: this.props.items,
      hasMoreTrails: true,
      curStartIdx: 10,
      curEndIdx: 20
    });
  }

  render() {
    return (
      <div class='hikes-container'>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMoreTrails}
          loader={<Loader/>}
          endMessage={
            <div class='end-text'>No more hikes...</div>
          }
        >
          {this.state.items.map((i) => (
            <Hike key={i.id} trail={i} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default HikesContainer;
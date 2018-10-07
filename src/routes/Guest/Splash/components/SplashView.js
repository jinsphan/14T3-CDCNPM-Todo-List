import React from 'react'
import {connect} from "react-redux";
import Snap from 'snapsvg-cjs';
import animateSvg from './path';
import styles from './styles.scss';
//libraries

class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      bees: true,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({
        bees: false,
      });
    }, 100000);

    const bee = Snap(document.getElementById('bee-svg'));
    bee.attr('width', window.innerWidth);
    bee.attr('height', window.innerHeight);
    bee.attr('viewBox', `0 0,${window.innerWidth},${window.innerHeight - 300}`);

    setTimeout(() => {
      animateSvg('bee-1', bee);
      animateSvg('bee-2', bee);
      animateSvg('bee-3', bee);
      animateSvg('bee-4', bee);
    }, 10);
  }

  render() {
    const { bees } = this.state;
    return (
      <div className={styles.splashScreen}>
        {bees && (
          <div className={styles.beesCollection}>
            <svg id="bee-svg" />
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
  })
}
export default connect(mapStateToProps, null)(Splash)

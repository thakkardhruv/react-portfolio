import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={200}/>
            <p className="introduction-text">
              Loves Javascript, Java and Games.
              Professional fifa game player.
              <b>Software Engineer</b>, currently living in Bangalore, India.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;

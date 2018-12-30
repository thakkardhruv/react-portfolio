import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.
              </span>
              <br/>
              <span className="quote-author">- Rich Cook</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;

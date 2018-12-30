import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };


    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };


    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                      <CardHeader title="Software Engineer" subtitle="Envestnet Yodlee"
                      actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          July	2017 - Current : <b>Full stack development</b>.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>React Js - Redux</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Java Spring boot</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>HTML 5</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>CSS</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Bootstrap</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Github</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Mongo</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>SQL</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Student" subtitle="L J Institue of Engineering and Technology(GTU)"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                        <b>CGPA: 9.41</b>
                        <br/>Favourite Subjects:
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Java</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Web development</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Database</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Computer Networks</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>C/C++</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;

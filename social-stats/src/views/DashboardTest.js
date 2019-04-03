import React, { Component } from 'react';
import GraphCard from '../components/GraphCard';
import StatsCard from '../components/StatsCard';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

class DashboardTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: true,
            fetchRes: null,
            statsCardData: [
                {
                    stat: 68,
                    title: '# favs'
                },
                {
                    stat: 32,
                    title: '# retweets'
                },
                {
                    stat: 34,
                    title: '# replies'
                },
                {
                    stat: 5,
                    title: 'new posts'
                },
                {
                    stat: 32,
                    title: '# mentions'
                },
                {
                    stat: 300,
                    title: 'total followers'
                },
            ]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/test/snapshots', {
            method: 'GET',
            'Content-Type': 'application/json'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ fetchRes: res.response })
            })
    }

    render() {
        return (
            <div className='dash-container'>
                <Container>
                    <Row className='mb-3'>

                        {this.state.statsCardData.map((s, i) => <Col md={2} xs={12}>
                            <StatsCard props={s} />
                        </Col>)}
                    </Row>
                    <Row>
                        <Col md={8} xs={12}>
                            <GraphCard props={{ chartData: this.state.fetchRes }}></GraphCard>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card>
                                <CardBody>
                                    <h3>Most retweeted</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DashboardTest;
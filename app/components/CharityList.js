import React from 'react';
import { connect } from 'react-redux';

import { queryCharities } from '../actions/charities';

import './charities.css';

class CharityList extends React.Component {

    componentDidMount() {
        this.props.queryCharities();
    }

    render() {
        const records = this.props.charities.idList.map(id => this.props.charities.records[id]);

        const charityNodes = records.map((charity, key) => {
            const id = charity.id;

            return (
                <div key={key}>
                    <div styleName="name">
                        {charity.name}
                    </div>
                    <div styleName="description">
                        {charity.description}
                    </div>
                </div>
            );
        });

        return (
            <div styleName="charities">
                Here are the charities:
                <div>
                    {charityNodes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        charities: state.charities
    };
};
export default connect(
    mapStateToProps,
    {queryCharities}
)(CharityList);


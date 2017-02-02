import React from 'react';
import { connect } from 'react-redux';

import { queryCharities } from '../actions/charities';

import charities from './charities.scss';

class CharityList extends React.Component {

    componentDidMount() {
        this.props.queryCharities();
    }

    render() {
        const records = this.props.charities.idList.map(id => this.props.charities.records[id]);

        const charityNodes = records.map((charity, key) => {
            return (
                <div key={key}>
                    <div className={charities.name}>
                        {charity.name}
                    </div>
                    <div className={charities.description}>
                        {charity.description}
                    </div>
                </div>
            );
        });

        return (
            <div className={charities.table}>
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


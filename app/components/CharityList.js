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
                <tr key={key}>
                    <td className={charities.name}>
                        {charity.name}
                    </td>
                    <td className={charities.description}>
                        {charity.description}
                    </td>
                </tr>
            );
        });

        return (
            <table className={charities.table}>
                    {charityNodes}
            </table>
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


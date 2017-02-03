import React from 'react';
import { connect } from 'react-redux';

import { queryDonations } from '../actions/donations';

import donations from './donations.scss';

class DonationList extends React.Component {

    componentDidMount() {
        this.props.queryDonations();
    }

    render() {
        const records = this.props.donations.idList.map(id => this.props.donations.records[id]);

        const donationNodes = records.map((donation, key) => {
            return (
                <tr key={key}>
                    <td className={donations.id}>
                        {donation.id}
                    </td>
                    <td className={donations.amount}>
                        {donation.amount}
                    </td>
                </tr>
            );
        });

        return (
            <table className={donations.table}>
                {donationNodes}
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        donations: state.donations
    };
};
export default connect(
    mapStateToProps,
    {queryDonations}
)(DonationList);


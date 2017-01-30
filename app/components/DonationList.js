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
            const id = donation.id;

            return (
                <div key={key}>
                    <div className={donations.id}>
                        {donation.id}
                    </div>
                    <div className={donations.amount}>
                        {donation.amount}
                    </div>
                </div>
            );
        });

        return (
            <div className={donations.table}>
                Here are the donations:
                <div>
                    {donationNodes}
                </div>
            </div>
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


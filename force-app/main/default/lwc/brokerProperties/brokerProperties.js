/* eslint-disable no-console */
import { LightningElement, api, track, wire } from 'lwc';
import getProperties from '@salesforce/apex/BrokerPropertyController.getProperties';

export default class brokerProperties extends LightningElement {
    @api recordId;
    @track props;
    @track broker;
    @track errorMsg;
    @track status;
    @track prelistProperties = [];
    @track listedProperties = [];
    @track underContractProperties = [];
    @track soldProperties = [];

    @wire(getProperties, {
        recordId: '$recordId'
    })
    wiredProps(value) {
        var i;
        var prop;

        console.log("hello");
        console.log("value error: " + JSON.stringify(value.error));
        console.log("value data" + JSON.stringify(value.data));

        if (value.error) {
            this.errorMsg = value.error;
            console.log("ERROR: ", this.errorMsg);

        } else if (value.data) {
            this.props = value.data;

            console.log("Inside else if state.");

            for (i = 0; i < this.props.length; i++) {
                prop = this.props[i];

                console.log("status: " + prop.Status__c);

                if (prop.Status__c === 'Pre-listing') {
                    this.prelistProperties.push(prop);
                } else if (prop.Status__c === 'Listed') {
                    this.listedProperties.push(prop);
                } else if (prop.Status__c === 'Under Contract') {
                    this.underContractProperties.push(prop);
                } else if (prop.Status__c === 'Sold') {
                    this.soldProperties.push(prop);
                }
            }
        }
    }
}
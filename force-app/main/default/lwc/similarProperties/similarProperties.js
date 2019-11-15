import { LightningElement, api, track, wire } from 'lwc';
import findProperties from '@salesforce/apex/SimilarPropertyController.findProperties';
import { getRecord } from 'lightning/uiRecordApi';

const fields = [
    'Broker__c.Name',
]

export default class similarProperties extends LightningElement {
    @api recordId;
    @track props;
    @track errorMsg;
    @track property;
    @track price;
    @track beds;

    @wire(findProperties, {
        recordId: '$recordId',
        priceRange: '100000',
        price: '$price',
        beds: '$beds'
    })
    wiredProps(value) {

        if (value.error) {
            this.errorMsg = value.error;
            console.log('ERROR: ', this.errorMsg);
        } else if (value.data) {
            this.props = value.data;
        }
    }

    @wire(getRecord, { recordId: '$recordId', fields })
    wiredProperty(value) {
        if (value.data) {
            this.property = value.data;
            this.price = this.property.fields.Price__c.value;
            this.beds = this.property.fields.Beds__c.value;
        } else if (value.error) {
            console.log('OOOPS: ', value.error)
        }
    }
}
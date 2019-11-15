public with sharing class BrokerProperties {
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getBrokerProperties(Id brokerId, String status) {
        system.debug('brokerId ' + brokerId);

        List<Property__c> properties = [
            SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c
            FROM Property__c WHERE Broker__c = :brokerId
        ];
        return properties;
    }
}
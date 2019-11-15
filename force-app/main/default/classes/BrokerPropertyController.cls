public class BrokerPropertyController {
    @AuraEnabled(cacheable=true)
    public static void getProperties(Id recordId) {
        
        System.debug('recordId ' + recordId);

       /*List<Property__c> properties = [
            SELECT Id, Name, Beds__c, Baths__c, Price__c, Status__c, Thumbnail__c
            FROM Property__c WHERE Broker__c = :recordId
        ];
        return properties;*/
     }
  
}

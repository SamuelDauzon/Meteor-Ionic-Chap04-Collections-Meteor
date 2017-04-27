import { Template } from 'meteor/templating';

Meteor.startup(() => {

    LocaleCollection = new Mongo.Collection(null);
    LocaleCollection.insert({nom: 'Jean', age: 29});
    LocaleCollection.insert({nom: 'Paul', age: 32});
    LocaleCollection.insert({nom: 'Marie', age: 36});
    var documents = LocaleCollection.find({age: {$gt: 30}}, {sort: {nom: "asc"}});
    documents.forEach(function(document){
      console.log(document);
    });

});

import { Template } from 'meteor/templating';

Meteor.startup(() => {
    ProduitsCollection.insert({
        nom: 'Sac de blé - 25 Kg',
        prix: 12,
        reference: '0738483926',
        categorie: 'Céréales',
        quantiteStock:8
    });
    ProduitsCollection.insert({
        nom: 'Mélange de graines - 50 Kg',
        prix: 29,
        reference: '0794762842',
        categorie: 'Céréales',
        quantiteStock:3
    });
    ProduitsCollection.insert({
        nom: 'Poulailler 6 poules',
        prix: 199,
        reference: '0798658495',
        categorie: 'Poulailler',
        quantiteStock:0
    });

    curseur = ProduitsCollection.find({ categorie: 'Céréales'});
    curseur.forEach(function(document){
      console.log(document);
    });

});

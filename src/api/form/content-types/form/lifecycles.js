// module.exports = {
//     async afterCreate(event) {    // Connected to "Save" button in admin panel
//         const { result } = event;

//         try {
//             // Récupérez l'adresse e-mail du client à partir des données de la commande
//             const clientEmail = result.email; // Assurez-vous d'ajuster cela en fonction de la structure de vos données
//             const cardInfoArray = result.cardinfo;

//             console.log('Result:', result);
//             console.log('CardInfo:', cardInfoArray);

//             // Assurez-vous que cardInfoArray est défini et n'est pas vide
//             if (Array.isArray(cardInfoArray) && cardInfoArray.length > 0) {
//                 // Construisez le texte de la commande en utilisant les données de chaque carte
//                 const orderDetailsText = cardInfoArray.map(cardInfo => `${cardInfo.name} (Quantity: ${cardInfo.quantity})`).join(', ');

//                 // Envoyez l'e-mail de confirmation au client
//                 await strapi.plugins['email'].services.email.send({
//                     to: clientEmail,
//                     from: 'zohaibadnan29.10@gmail.com',
//                     subject: 'Confirmation of your command',
//                     text: `Thx for your command: ${orderDetailsText}. We will recontact you as soon as possible`,
//                 });

//                 // Envoyez une notification par e-mail aux propriétaires du site
//                 await strapi.plugins['email'].services.email.send({
//                     to: 'zohaibadnan29.10@gmail.com', // Remplacez par l'adresse e-mail des propriétaires
//                     from: 'zohaibadnan29.10@gmail.com',
//                     subject: 'New command youhou',
//                     text: `New command received from ${clientEmail}. Details: ${orderDetailsText}`, 
//                 });

//                 console.log('E-mails envoyés avec succès');
//             } else {
//                 console.error('La propriété cardinfo ne contient pas les données attendues.');
//             }
//         } catch (err) {
//             console.error('Erreur lors de l\'envoi des e-mails :', err);
//         }
//     },
// };

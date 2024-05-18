import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import './App.css'; // Import CSS for styling

function AccordionTopic({ title, terms }) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul>
            {terms.map((term, index) => (
              <li key={index}>
                <strong>{term.french}</strong>: {term.english}
              </li>
            ))}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function App() {
  const topics = [
    {
      title: 'Cybersociété',
      terms: [
        { french: 'Un nombre croissant', english: 'A growing number' },
        { french: 'Sûr la toile', english: 'Online' },
        { french: "S'échapper", english: 'To escape' }
      ]
    },
    {
      title: 'Cinéma',
      terms: [
        { french: 'Dès maintenant', english: 'From now on' },
        { french: 'Se porte bien', english: 'Flourishing' },
        { french: 'Passer à la réflexion', english: 'To push one to think' },
        { french: 'Nombriliste', english: 'Inward-looking' },
        { french: 'Combler le fossé', english: 'To bridge the gap' },
        { french: 'Rentable', english: 'Profitable' },
        { french: 'Axé sur', english: 'Focused on' }
      ]
    },
    {
      title: 'Politique',
      terms: [
        { french: 'Je suis déçu qu\u0027ils s\u0027enfichent', english: 'I\u0027m disappointed that they don\u0027t care' },
        { french: 'Les frais universitaires', english: 'University fees' },
        { french: 'La dégradation du marché du travail', english: 'The worsening of the job market' },
        { french: 'Un chant de cygne', english: 'A swansong' },
        { french: 'Ils ont le vent en poupe', english: 'They have the wind in their sails' }
      ]
    },
    {
      title: 'Diversité',
      terms: [
        { french: 'Un ancêtre', english: 'An ancester' },
        { french: 'Une aubaine', english: 'A blessing' },
        { french: 'Une opportunité en or', english: 'A golden opportunity' },
        { french: 'Mon coloc', english: 'My shared accomodation' },
        { french: 'Sage comme une image', english: 'Good as gold' },
        { french: 'Ils se croient supérieurs', english: 'They feel superior' },
        { french: 'Remonter à', english: 'To hearken back to' },
        { french: 'De peur que', english: 'Out of fear that' },
        { french: 'Tout n\u0027est pas rose', english: 'It\u0027s not all rosy' },
        { french: 'Léguer', english: 'To hand down' },
        { french: 'Découler de', english: 'To stem from' },
        { french: 'Dans une mosaïque de minorités culturelles', english: 'In a mosaic of cultural minorities' },
        { french: 'Un creuset de haine', english: 'A melting pot of hatred' }
      ]
    },
    {
      title: 'Patrimoine',
      terms: [
        { french: 'Une gamme d\u0027activités', english: 'A range of activities' }
      ]
    },
    {
      title: 'Marginalisés',
      terms: [
        { french: 'Atteint de', english: 'Afflicted by' },
        { french: 'La toxicomanie', english: 'Drug addiction' },
        { french: 'Sceller', english: 'To seal' },
        { french: 'S\u0027endetter', english: 'To get into debt' },
        { french: 'Atténuer', english: 'To alleviate' },
        { french: 'La précarité', english: 'Financial instability' },
        { french: 'On a du tout', english: 'We have all sorts' },
        { french: 'Une campagne de sensibilisation', english: 'An awareness campaign' },
        { french: 'Donner un coup de main', english: 'To give a helping hand' },
        { french: 'Ça peut arriver (à n\u0027importe qui)', english: 'That can happen (to anyone)' },
        { french: 'Mieux vaut prévenir que guérir', english: 'Better to prevent it than to care for them' },
        { french: 'Venir en aide à quelqu\u0027un', english: 'To come to the aid of someone' },
        { french: 'Les moyens pour lutter quelque chose', english: 'The means to fight something' },
        { french: 'Une stratégie à plusieurs facettes', english: 'A multifacetted strategy' },
        { french: 'Il se peut que (+subj.)', english: 'It is possible that' },
        { french: 'Tisser des liens entre', english: 'To weave links between' },
        { french: 'Ce qui me saute aux yeux', english: 'What jumps out to me' },
        { french: 'Quelle que soit la raison', english: 'Whatever the reason' },
        { french: 'Le dialogue de sourds', english: 'The blind leading the blind' },
        { french: 'Ruisseler', english: 'To trickle' }
      ]
    },
    {
      title: 'Criminels',
      terms: [
        { french: "Ça dépend de", english: 'It depends on' },
        { french: "Un argument qui manque de poids", english: 'An argument lacking weight/substance' },
        { french: "La loi ne discrimine pas", english: 'The law doesn\'t discriminate' },
        { french: "On aurait dû y penser", english: 'One should\'ve thought of that' },
        { french: "Intrinséquement lié à", english: 'Intrinsically linked to' },
        { french: "La précarité", english: 'Financial instability' },
        { french: "La situation va de mal en pris", english: 'The situation goes from bad to worse' },
        { french: "S'attender sur", english: 'To dwell on' },
        { french: "Entourer les jeunes", english: 'To surround the young people' },
        { french: "Les facteurs sociaux", english: 'The social factors' },
        { french: "Le taux de récidive", english: 'The rate of re-offending' },
        { french: "Irascible", english: 'Annoyed/angry' },
        { french: "Le foyer", english: 'The home' },
        { french: "Il a été une question de longue date", english: 'It has been a longstanding question' },
        { french: "Façonner", english: 'To shape' },
        { french: "Porter plainte", english: 'To lodge a complaint' },
        { french: "Être livrés à eux", english: 'To be left to themselves' },
        { french: "La violence se banalise à la télé", english: 'Violence is commonplace on TV' },
        { french: "Flou", english: 'Vague' },
        { french: "Irascible", english: 'Annoyed' },
        { french: "La violence gratuite", english: 'Gratuitous violence' },
        { french: "Grimper en flèche", english: 'To climb like an arrow/to skyrocket' },
        { french: "Je me prime de quelque chose", english: 'I deprive myself of something' },
        { french: "Au sein du foyer", english: 'At the heart of the home' },
        { french: "Un dactylo", english: 'A typist' },
        { french: "Les fiscelles du mêtier", english: 'The tricks of the trade' },
        { french: "Amender", english: 'To atone' },
        { french: "Une croyance forte répandue", english: 'A widely-held belief' },
        { french: "Incarcérer le problème", english: 'To imprison the problem' },
        { french: "La densité carcerale", english: 'The prison (population) density' }
      ]
    },
    {
      title: 'La Haine',
      terms: [
        { french: "Je suis en train de (+inf.)", english: 'I am in the process of' },
        { french: "La péripétie", english: 'The incident' },
        { french: "Être dans la surenchère", english: 'To be/go over the top' },
        { french: "Se côtoyer avec", english: 'To rub shoulders with' },
        { french: "Coincé dans un engrenage de violence", english: 'Trapped in a spiral of violence' },
        { french: "S\u0027acheminer", english: 'To drive towards' }
      ]
    },
    {
      title: 'L\u0027immigration',
      terms: [
        { french: "Dans les plus brefs délais", english: 'As soon as possible' },
        { french: "Pointer du doigt", english: 'To point the finger' },
        { french: "La déception", english: 'Disappointment' },
        { french: "Quitte à...", english: 'Even if it means...' },
        { french: "La diabolisation des immigrés", english: 'The demonisation of immigrants' },
        { french: "Ce qui est chou", english: 'What\u0027s nice' },
        { french: "Les cabanes de fortune", english: 'Makeshift cabins' },
        { french: "Des conditions déplorables", english: 'Deplorable conditions' },
        { french: "Se faufiler entre", english: 'To weave in and out of' },
        { french: "Répérer quelqu'un", english: 'To locate someone' },
        { french: "Expulser vers leurs pays", english: 'To deport back to their countries' },
        { french: "Les passeurs", english: 'Smugglers' },
        { french: "La dédiabolisation de", english: 'The de-toxifying of' },
        { french: "Le champ politique", english: 'The political field' },
        { french: "Un bouc émissaire pour tous les maux de la société française", english: 'A scapegoat for all the evils of French society' },
        { french: "Freiner", english: 'To break/hurt' },
        { french: "Poser la candidature", english: 'To apply for a job' },
        { french: "C\u0027est une minorité/majorité qui soutiennent", english: 'It\u0027s a minority/majority who support' },
        { french: "Octroyer", english: 'To grant' },
        { french: "Assouplir", english: 'To relax' },
        { french: "Le travail frontalier", english: 'Work across the border' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Brittainisms</h1>
      <h3>All the extra bits of vocab/style from A-Level French 2022-24. This list will be kept up-to-date until June 2024.</h3>
      {topics.map((topic, index) => (
        <AccordionTopic key={index} title={topic.title} terms={topic.terms} />
      ))}
    </div>
  );
}

export default App;
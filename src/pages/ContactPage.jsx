import bgImage from '../assets/images/backgrounds/ContactPageImages/contactpage-bg.jpg'; // background image

import {
  PageStarter,
  InspirationSection,
  ContactForm,
  JoinCrewForm,
} from '../layout/ContactPage/';

const ContactPage = () => {
  return (
    <>
      <PageStarter title='projects' imgPath={bgImage} />
      <ContactForm />
      <JoinCrewForm />
      <InspirationSection quote='subscribe to our newsletter' />
    </>
  );
};

export default ContactPage;

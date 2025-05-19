import bgImage from '../assets/images/backgrounds/ContactPageImages/contactpage-bg.jpg'; // background image

import {
  PageStarter,
  ContactForm,
  JoinCrewForm,
  NewsletterForm,
} from '../layout/ContactPage/';

const ContactPage = () => {
  return (
    <>
      <PageStarter title='contact us' imgPath={bgImage} />
      <ContactForm />
      <JoinCrewForm />
      <NewsletterForm />
    </>
  );
};

export default ContactPage;

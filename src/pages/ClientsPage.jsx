import bgImage from '../assets/images/backgrounds/ClientsPageImages/clientspage-bg.jpg'; // background image

import {
  PageStarter,
  ContactsSection,
  InspirationSection,
  ClientLogos,
} from '../layout/ClientsPage/';

const ClientsPage = () => {
  return (
    <>
      <PageStarter title='clients' imgPath={bgImage} />
      <ClientLogos />
      <InspirationSection quote='PIONEERING WITH PURPOSE' />
      <ContactsSection />
    </>
  );
};

export default ClientsPage;

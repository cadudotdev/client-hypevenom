import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import { ContactContainer, ContactContent } from './styles';

const link = 'https://www.instagram.com/hypevenomrecords';

export function Contact() {
  return (
    <ContactContainer>
      <ContactContent>
        <div>
          <InstagramIcon />
          <a href={link} target="_brank">
            Instagram
          </a>
        </div>
        <div>
          <EmailIcon />
          <span>demo@hypevenom.com.br</span>
        </div>
      </ContactContent>
    </ContactContainer>
  );
}

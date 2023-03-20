import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem.jsx';
import { Wrapper } from './ContactList';
import { selectVisibleContacts } from 'redux/selector';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  
  return (
    <Wrapper>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={phone}
        ></ContactListItem>
      ))}
    </Wrapper>
  );
};

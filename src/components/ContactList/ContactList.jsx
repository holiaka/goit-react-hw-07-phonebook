import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem.jsx';
import { Wrapper } from './ContactList';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const findElements = useSelector(state => state.filter);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(findElements.toLowerCase())
    );
  };

  return (
    <Wrapper>
      {visibleContacts().map(({ id, name, phone }) => (
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

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      fetchContacts: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Flavia")
          .then((response) => response.json())
          .then((data) => setStore({ contacts: data }))
          .catch((err) => console.log(err));
      },
      addContact: (name, email, urlphoto, phone) => {
        fetch("https://playground.4geeks.com/apis/fake/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: urlphoto,
            agenda_slug: "Flavia",
            email: email,
            full_name: name,
            phone: phone,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            getActions().fetchContacts();
          })
          .catch((err) => console.log(err));
      },
      deleteContact: (id) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => {
            getActions().fetchContacts();
          })
          .catch((err) => console.log(err));
      },
      particularContact: async (id) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${id}`
          );
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;

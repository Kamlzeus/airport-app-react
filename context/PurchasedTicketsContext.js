import React, { createContext, useState, useContext } from "react";

const PurchasedTicketsContext = createContext();

export const PurchasedTicketsProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  return (
    <PurchasedTicketsContext.Provider value={{ tickets, addTicket }}>
      {children}
    </PurchasedTicketsContext.Provider>
  );
};

export const usePurchasedTickets = () => useContext(PurchasedTicketsContext);

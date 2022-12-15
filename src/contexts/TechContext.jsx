import { createContext, useEffect, useState } from "react";
import { api } from "./../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  async function postTech(data) {
    const response = await api.post("users/techs", data);
  }
  async function deleteTech(id) {
    const response = await api.delete(`/users/techs/${id}`);
  }

  return (
    <TechContext.Provider value={{ postTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

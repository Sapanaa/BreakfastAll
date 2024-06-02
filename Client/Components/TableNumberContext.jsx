// TableNumberContext.js
import React, { createContext, useState } from 'react';

const TableNumberContext = createContext();

export const TableNumberProvider = ({ children }) => {
  const [tableNumber, setTableNumber] = useState(null);

  return (
    <TableNumberContext.Provider value={{ tableNumber, setTableNumber }}>
      {children}
    </TableNumberContext.Provider>
  );
};

export default TableNumberContext;

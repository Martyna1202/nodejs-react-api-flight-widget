import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = () => {
  const [flights, setFlights] = useState(null);

  const getFlights = () => {
    fetch("http://localhost:8080/flights")
      //  WITH API - LIVE DATA FROM TORONTO
      .then((response) => response.json())
      .then((flights) => {
        setFlights(flights);
      })
      .catch((err) => console.log(err));

    //  OR WITH DATABASE:
    // .then((response) => response.json())
    // .then((flights) => setFlights(Object.values(flights.data)))
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;

import TableCell from "./TableCell";

const TableRow = ({ flight }) => {
  const wordsArray = Object.values(flight);
  const departures = wordsArray[1].toUpperCase();
  const remarks = wordsArray[0].toUpperCase();

  const words = [
    wordsArray[5],
    departures,
    wordsArray[3][0],
    wordsArray[7],
    remarks,
  ];

  return (
    <tr>
      <td>✈</td>
      {words?.map((word, _index) => (
        <TableCell key={_index} word={word} />
      ))}
    </tr>
  );
};

export default TableRow;

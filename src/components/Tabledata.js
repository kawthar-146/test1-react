function Table({ tableData }) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;
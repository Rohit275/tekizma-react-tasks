import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [fetchData, setFetchData] = useState(false);

  // useEffect(() => {
  //   if(fetchData) {

  //   }

  //   return () => {
  //     second
  //   }
  // }, [third])

  useEffect(() => {
    if (fetchData) {
      axios
        .get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
        });
    }
  }, [fetchData]);

  return (
    <div>
      {/* {product} */}
      <button className="btn btn-primary" onClick={() => setFetchData(true)}>
        {/* <button
        className="btn btn-primary"
        onClick={() =>
          axios
            .get(
              "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
            )
            .then((res) => {
              console.log(res.data);
              setProduct(res.data);
            })
        }
      > */}
        Fetch Data
      </button>
      # First Last Email Age ContactNumber DOB
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">ContactNumber</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>

        {product &&
          product.map((items) => {
            return (
              <tbody>
                <tr key={items.id}>
                  <th scope="row">{items.id}</th>
                  <td>{items.firstName}</td>
                  <td>{items.lastName}</td>
                  <td>{items.email}</td>
                  <td>{items.age}</td>
                  <td>{items.contactNumber}</td>
                  <td>{items.dob}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

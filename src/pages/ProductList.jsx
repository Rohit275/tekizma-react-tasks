import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (fetchData) {
      axios.get("http://localhost:8080/api/v1/employees").then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setFetchData(true);
        setProduct(res.data);
      });
    }
  }, [fetchData]);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <h2>Loading...</h2>
  //     </section>
  //   );
  // }

  async function handleFetch() {
    const response = await axios.get("http://localhost:8080/api/v1/employees");
    const data = await response.data;
    const status = response.status;

    console.log("Data fetched from DB:" + JSON.stringify(data));
    // var myJSON = ;
    console.log("Status from DB:" + status);
  }

  async function handleDelete(id) {
    console.log(id + " deleted");
    try {
      const res = await axios.delete(
        "http://localhost:8080/api/v1/employees/" + id
      );
      console.log(res.status);
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log(error.request);
      } else {
        // Error occurred while setting up the request
        console.log("Error", error.message);
      }
    }
  }

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  return (
    <div>
      {/* {product} */}
      {/* <button className="btn btn-primary" onClick={() => setFetchData(true)}> */}
      <button className="btn btn-primary" onClick={handleFetch}>
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

      <button
        className="btn btn-danger"
        style={{
          marginRight: "20px",
        }}
        onClick={() => {
          handleDelete(4);
        }}
      >
        Delete
      </button>
      <h3>Products list from API</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col"></th>
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
              <tbody key={items.id}>
                <tr>
                  <th scope="row">{items.id}</th>
                  <td>
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={items.imageUrl}
                      alt={items.id}
                    />
                  </td>
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

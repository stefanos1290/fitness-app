import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mockedData = {
  name: "stefanos",
  lastName: "oxinos",
};
const SingleBlog = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (typeof id !== "undefined") {
      setData(mockedData);
    }
  }, [id]);

  if (!id) {
    return <div>error</div>;
  }
  return (
    <>
      <h1>SINGLE BLOG {id}</h1>
      {data.name}
    </>
  );
};
export default SingleBlog;

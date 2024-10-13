import React, { useEffect, useState } from "react";
import { fetchProgramsPagination } from "../../Services/Service";
import { isValidArray } from "../../Services/Utils";
import PlanCard from "../../Components/PlanCard/PlanCard";
import Header from "../../Components/Header/Header";

export default function Home(props) {
  const [programs, setPrograms] = useState(
    localStorage.getItem("programs")
      ? JSON.parse(localStorage.getItem("programs"))
      : []
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      if (!loading) setLoading(true);
      const response = await fetchProgramsPagination(1, 8);

      setPrograms(response);
      localStorage.setItem("programs", JSON.stringify(response));

      setLoading(false);
    };

    if (!isValidArray(programs)) {
      fetchPrograms();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="inherit-parent-height inherit-parent-width  flex-direction-column overflow-hidden">
        <Header />
        <div
          style={{
            height: "calc(100% - 59px)",
            overflow: "scroll",
          }}
          className="padding-large hide-scrollbar"
        >
          {console.log(Array(12))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridColumnGap: "20px",
              gridRowGap: "20px",
              justifyContent: "space-evenly",
            }}
          >
            {loading &&
              [...Array(12).keys()].map((element) => (
                <div
                  style={{
                    borderRadius: "8px",
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                  }}
                  className=" shimmer"
                />
              ))}
            {!loading &&
              isValidArray(programs?.programs) &&
              programs?.programs.map((program) => (
                <PlanCard
                  data={program}
                  onClick={() => {
                    props.navigate(`plan/${program?._id}`);
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

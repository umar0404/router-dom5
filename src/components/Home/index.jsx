import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

export const Home = () => {
  const [students] = useState([
    { id: 1, name: "umar", description: "developer" },
    { id: 2, name: "doni", description: "teacher" },
    { id: 3, name: "qodir", description: "student" },
    { id: 4, name: "elbek", description: "accaunter" },
  ]);

  const [selected, setSelected] = useState({});

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>React Router Dom</h1>
        {students.map((value) => {
          return (
            <h1>
              {value.id}-{value.name}{" "}
              <button onClick={() => navigate(`/home/:${value.id}`)}>
                select
              </button>
            </h1>
          );
        })}
      </div>
      <div style={{ flex: 1 }}>
        <h1>selected</h1>
        <h1>
          {selected?.id} {selected?.name}
        </h1>
      </div>
    </div>
  );
};

export default Home;

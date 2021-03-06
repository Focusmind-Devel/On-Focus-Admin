import React, { useState, useEffect } from "react";
import apiCategories from "../../../api/apiCategories";

import RowCategories from "./Data/RowCategories";

import "../../../assets/styles/components/Table.scss";

const SideBar = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    apiCategories
      .getAllCategories()
      .then((res) => {
        SetData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="course__admin__inside">
      <table id="customers">
        <tbody>
          <tr>
          <th className="course__admin__inside__checkbox">
              <input type="checkbox" name="" id="" />
            </th>
            <th>Nombre</th>
            <th>Fecha de Creacion</th>
            <th>Estado</th>
            <th>Cursos</th>
            <th></th>
            <th></th>
          </tr>
          {Object.keys(data).map((index) => {
            return (
              <tr key={index}>
                <RowCategories
                  id={data[index]._id}
                  name={data[index].name}
                  creation_date={data[index].creation_date}
                  status={data[index].status}
                  coursesAssigned={"Lorem Ipsum"}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SideBar;

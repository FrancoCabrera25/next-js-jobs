import { useState, useContext, useEffect } from "react";
import styles from "../styles/CategoryFilter.module.css";

export default function CategoryFilter() {
  const [categorySelected, setCategorySelected] = useState("");

  const category = [
    {
      key: "ALL",
      description: "todos",
    },
    {
      key: "PROGRAMING",
      description: "programación",
    },
    {
      key: "SALES",
      description: "ventas",
    },
    {
      key: "MARKETING",
      description: "marketing",
    },
    {
      key: "DESIGN",
      description: "diseño",
    },
    {
      key: "ADM",
      description: "Administración",
    },

    {
      key: "OTHERS",
      description: "otros",
    },
  ];

  const handleCategory = (value) => {
    setCategorySelected(value);
  };

  return (
    <section className={styles.container}>
      {category.map((item) => (
        <div
          key={item.key}
          className={`${styles.filter}  ${
            categorySelected === item.key ? styles.filterChecked : ""
          }`}
          onClick={() => handleCategory(item.key)}
        >
          <span>{item.description}</span>
        </div>
      ))}
    </section>
  );
}

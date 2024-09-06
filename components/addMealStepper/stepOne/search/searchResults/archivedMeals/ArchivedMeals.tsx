import { MEALSINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import React from "react";

interface ARCHIVEDMEALSINTERFACE {
  meal: MEALSINTERFACE;
}

export default function ArchivedMeals(props: ARCHIVEDMEALSINTERFACE) {
  const {
    meal: { version, name },
  } = props;

  return (
    <li>
      a newer version {version} was found with name {name}
    </li>
  );
}

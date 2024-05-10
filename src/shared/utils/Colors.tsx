import { useState, useEffect } from "react";
import { getData } from "./storeData";

export const COLORS = {
  primary: "#0070D5",
  secondary: "#F8B808",
  contrat: "#FFFFFF",
  additional: "#000000",
  wrong: "#FF0033",
};

export const COLORSWEAK = {
  primary: "#7A7A7A",
  secondary: "#FFFFFF",
  contrat: "#FFFFFF",
  additional: "#000000",
  wrong: "#FF0033",
};

export const COLORSDALT = {
  primary: "#0070D5",
  secondary: "#50C878",
  contrat: "#FFFFFF",
  additional: "#000000",
  wrong: "#FF0033",
};

export const useColors = () => {
  const [colors, setColors] = useState(COLORS);
  const [viewId, setViewId] = useState("");

  useEffect(() => {
    const getViewId = async () => {
      const id = await getData("view");
      if (id) {
        setViewId(id);
      }
    };

    getViewId();
  }, []);

  useEffect(() => {
    switch (viewId) {
      case "2":
        setColors(COLORSWEAK);
        break;
      case "3":
        setColors(COLORSDALT);
        break;
      default:
        setColors(COLORS);
    }
  }, [viewId]);

  return colors;
};

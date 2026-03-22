import { toast, Bounce } from "react-toastify";

const getStoredApps = () => {
  const storedAppsSTR = localStorage.getItem("appList");

  if (storedAppsSTR) {
    try {
      return JSON.parse(storedAppsSTR);
    } catch (error) {
      console.error("LocalStorage parse error:", error);
      return [];
    }
  }
  return [];
};

const addToDB = (id, title) => {
  const storedAppData = getStoredApps();

  if (storedAppData.includes(id)) {
    toast.warn("This app is already marked", {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  } else {
    storedAppData.push(id);
    localStorage.setItem("appList", JSON.stringify(storedAppData));

    toast.success(`${title} added to your Saved Apps`, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  }
};

const removeFromDB = (id, title) => {
  const storedAppData = JSON.parse(localStorage.getItem("appList")) || [];
  const idStr = id.toString();

  if (storedAppData.includes(idStr)) {
    const updatedAppData = storedAppData.filter((appId) => appId !== idStr);
    localStorage.setItem("appList", JSON.stringify(updatedAppData));

    toast.success(`${title} removed from your Installed Apps`, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  } else {
    toast.warn(`${title} is not in your Installed Apps`, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  }
};

const sortByDownloads = (apps, order) => {
  if (!apps || apps.length === 0) return [];

  const sortedApps = [...apps];

  if (order === "high-to-low") {
    return sortedApps.sort((a, b) => b.downloads - a.downloads);
  }

  if (order === "low-to-high") {
    return sortedApps.sort((a, b) => a.downloads - b.downloads);
  }

  return apps;
};

export { getStoredApps, addToDB, removeFromDB, sortByDownloads };

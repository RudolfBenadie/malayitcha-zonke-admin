import React, { useEffect, useState } from "react";
import { RealtimeDataContext } from "../context/RealtimeDataContext";
import { database, onValue, ref, set, remove } from '../firebase';

function RealtimeDataProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesInService, setVehiclesInService] = useState([]);

  useEffect(() => {
    fetchAllVehicles();
    fetchVehiclesInService();
    const unsubscribe = Promise.resolve('onAuthStateChanged(auth, user => { setUser(user) });');
    setLoading(false);
    return unsubscribe;
  }, [])

  const fetchAllVehicles = () => {
    const vehiclesRef = ref(database, '/vehicles');
    onValue(vehiclesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let vehiclesArray = [];
        for (let vehicle of Object.entries(data)) {
          vehiclesArray.push(vehicle[1]);
        }
        setVehicles(vehiclesArray);
      } else {
        setVehicles([]);
      }
    });
  }

  const fetchVehiclesInService = () => {
    const vehiclesRef = ref(database, '/vehiclesInService');
    onValue(vehiclesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let vehiclesArray = [];
        for (let vehicle of Object.entries(data)) {
          vehiclesArray.push({ registration: vehicle[0], ...vehicle[1] });
        }
        setVehiclesInService(vehiclesArray);
      } else {
        setVehiclesInService([]);
      }
    });
  }

  const addVehicle = async (data) => {
    try {
      const ownerVehicleList = ref(database, `/users/${data.ownerId}/vehicles/${data.registration}`);
      set(ownerVehicleList, data.registration);
      const newVehicleReference = ref(database, `/vehicles/${data.registration}`);
      const result = await set(newVehicleReference, data);
      return result.key;
    } catch (error) {
      console.log('Error while adding a new vehicle', error);
    }
  }

  const updateVehicle = async (data) => {
    try {
      const updateVehicleReference = ref(database, `/vehicles/${data.registration}`);
      await set(updateVehicleReference, data);
      return updateVehicleReference.key;
    } catch (error) {
      console.log('Error while updating a new vehicle', error);
    }
  }

  const deleteVehicle = async (ownerId, vehicleRegistration) => {
    const vehicleReference = ref(database, `/vehicles/${vehicleRegistration}`);
    const ownerVehicleReference = ref(database, `/users/${ownerId}/vehicles/${vehicleRegistration}`);
    remove(ownerVehicleReference);
    remove(vehicleReference);
  }

  let value = { loading, vehicles, vehiclesInService, database, addVehicle, deleteVehicle, updateVehicle };

  return <RealtimeDataContext.Provider value={value}>
    {!loading && children}
  </RealtimeDataContext.Provider>;
}

export default RealtimeDataProvider;

import React, { useEffect, useState } from "react";
import { RealtimeDataContext } from "../context/RealtimeDataContext";
import { database, onValue, ref, set, remove } from '../firebase';

function RealtimeDataProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [crew, setCrew] = useState([]);
  const [owner, setOwner] = useState([]);
  const [vehiclesInService, setVehiclesInService] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({ latitude: -25.2465637, longitude: 28.1954947, place_id: null, zoom: 18 });

  useEffect(() => {
    fetchAllVehicles();
    fetchVehiclesInService();
    fetchAllOwner();
    fetchAllCrew();
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

  const setVehiclesInServiceLocation = (vehicle, location) => {
    const vehicleInServiceLatitudeReference = ref(database, `/vehiclesInService/${vehicle.registration}/latitude`);
    const vehicleInServiceLongitudeReference = ref(database, `/vehiclesInService/${vehicle.registration}/longitude`);
    set(vehicleInServiceLatitudeReference, location.latitude);
    set(vehicleInServiceLongitudeReference, location.longitude);
  }

  const addVehicle = async (data) => {
    try {
      const ownerVehicleList = ref(database, `/users/${data.ownerId}/vehicles/${data.registration}`);
      set(ownerVehicleList, data.registration);
      const newVehicleReference = ref(database, `/vehicles/${data.registration}`);
      await set(newVehicleReference, data);
      return newVehicleReference.key;
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
      console.log('Error while updating a vehicle', error);
    }
  }

  const deleteVehicle = async (ownerId, vehicleRegistration) => {
    const vehicleReference = ref(database, `/vehicles/${vehicleRegistration}`);
    const ownerVehicleReference = ref(database, `/users/${ownerId}/vehicles/${vehicleRegistration}`);
    const vehiclesInServiceReference = ref(database, `/vehiclesInService/${vehicleRegistration}`)
    remove(ownerVehicleReference);
    remove(vehicleReference);
    remove(vehiclesInServiceReference);
  }

  const disableVehicle = async (ownerId, vehicleData) => {
    const vehicleInServiceReference = ref(database, `/vehiclesInService/${vehicleData.registration}`);
    const vehicleReference = ref(database, `/vehicles/${vehicleData.registration}/lastLocation`);
    set(vehicleReference, vehicleData.lastLocation)
    remove(vehicleInServiceReference);
  }

  const fetchAllCrew = () => {
    const crewRef = ref(database, '/crew');
    onValue(crewRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let crewArray = [];
        for (let member of Object.entries(data)) {
          crewArray.push(member);
        }
        setCrew(crewArray);
      } else {
        setCrew([]);
      }
    });
  }

  const fetchAllOwner = () => {
    const ownerRef = ref(database, '/owner');
    onValue(ownerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let ownerArray = [];
        for (let member of Object.entries(data)) {
          ownerArray.push(member);
        }
        setOwner(ownerArray);
      } else {
        setOwner([]);
      }
    });
  }

  const enableVehicle = async (ownerId, vehicleData) => {
    const vehicleInServiceReference = ref(database, `/vehiclesInService/${vehicleData.registration}`);
    const vehicleReference = ref(database, `/vehicles/${vehicleData.registration}/lastLocation`);
    set(vehicleInServiceReference, { latitude: vehicleData.lastLocation.latitude, longitude: vehicleData.lastLocation.longitude })
    remove(vehicleReference);
  }

  const addCrew = async (user) => {
    try {
      const newCrewReference = ref(database, `/crew/${user.uid}`);
      await set(newCrewReference, { enabled: false, name: user.email });
      return newCrewReference.key;
    } catch (error) {
      console.log('Error while adding a new crew member', error);
    }
  }

  const updateCrew = async (data) => {
    try {
      const updateCrewReference = ref(database, `/crew/${data.uid}`);
      await set(updateCrewReference, data);
      return updateCrewReference.key;
    } catch (error) {
      console.log('Error while updating a crew member', error);
    }
  }

  const deleteCrew = async (user) => {
    const deleteCrewReference = ref(database, `/crew/${user.uid}`);
    remove(deleteCrewReference);
  }

  const disableCrew = async (uid) => {
    const crewReference = ref(database, `/crew/${uid}/enabled`);
    set(crewReference, false)
  }

  const enableCrew = async (uid) => {
    const crewReference = ref(database, `/crew/${uid}/enabled`);
    set(crewReference, true)
  }

  const addOwner = async (user) => {
    try {
      const newOwnerReference = ref(database, `/owner/${user.uid}`);
      await set(newOwnerReference, { enabled: false, name: user.email });
      return newOwnerReference.key;
    } catch (error) {
      console.log('Error while adding a new owner', error);
    }
  }

  const updateOwner = async (data) => {
    try {
      const updateOwnerReference = ref(database, `/owner/${data.uid}`);
      await set(updateOwnerReference, data);
      return updateOwnerReference.key;
    } catch (error) {
      console.log('Error while updating an owner', error);
    }
  }

  const deleteOwner = async (user) => {
    const deleteOwnerReference = ref(database, `/owner/${user.uid}`);
    remove(deleteOwnerReference);
  }

  const disableOwner = async (uid) => {
    const ownerReference = ref(database, `/owner/${uid}/enabled`);
    set(ownerReference, false)
  }

  const enableOwner = async (uid) => {
    const ownerReference = ref(database, `/owner/${uid}/enabled`);
    set(ownerReference, true)
  }

  const linkCrewToOwner = async (ownerToLinkTo, crewToLink) => {
    const ownerReference = ref(database, `/owner/${ownerToLinkTo.id}/crew`);
    const crewReference = ref(database, `/crew/${crewToLink[0]}/owner`);
    const ownerIndex = owner.findIndex(item => item[0] === ownerToLinkTo.id);
    let updatedCrew;
    if (!owner[ownerIndex][1].crew)
      updatedCrew = [crewToLink[0]]
    else
      updatedCrew = [...owner[ownerIndex][1].crew, crewToLink[0]];
    set(ownerReference, updatedCrew);
    set(crewReference, ownerToLinkTo.id);
  }

  const unlinkCrewFromOwner = async (linkedOwner, linkedCrew) => {
    const ownerIndex = owner.findIndex(item => item[0] === linkedOwner.id);
    const currentOwner = { id: owner[ownerIndex][0], ...owner[ownerIndex][1] }
    const ownerReference = ref(database, `/owner/${linkedOwner.id}/crew`);
    const crewReference = ref(database, `/crew/${linkedCrew[0]}/owner`);
    remove(crewReference);
    let updatedCrew = [];
    if (currentOwner.crew.length > 0) {
      updatedCrew = currentOwner.crew.filter(item => {
        return item !== linkedCrew[0]
      });
    }
    set(ownerReference, updatedCrew);
  }

  let value = {
    loading,
    database,

    vehicles,
    addVehicle,
    deleteVehicle,
    updateVehicle,
    disableVehicle,
    enableVehicle,

    selectedLocation,
    setSelectedLocation,

    vehiclesInService,
    setVehiclesInServiceLocation,

    crew,
    fetchAllCrew,
    addCrew,
    updateCrew,
    deleteCrew,
    enableCrew,
    disableCrew,
    linkCrewToOwner,
    unlinkCrewFromOwner,

    owner,
    fetchAllOwner,
    addOwner,
    updateOwner,
    deleteOwner,
    enableOwner,
    disableOwner,
  };

  return <RealtimeDataContext.Provider value={value}>
    {!loading && children}
  </RealtimeDataContext.Provider>;
}

export default RealtimeDataProvider;

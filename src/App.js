import React, { useState } from "react";
import ServiceList from "./components/serviceList.js";
import AddServiceForm from "./components/AddServiceForm";

function App() {
  const [services, setServices] = useState([
    { name: "Consultation", description: "Basic consultation", price: 50 },
    { name: "X-Ray", description: "Dental X-Ray", price: 100 },
  ]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const editService = (index) => {
    const updatedServices = [...services];
    const service = updatedServices[index];
    const updated = prompt(`Update ${service.name} details:`, `${service.name}, ${service.description}, ${service.price}`);
    if (updated) {
      const [name, description, price] = updated.split(',');
      updatedServices[index] = { name, description, price: Number(price) };
      setServices(updatedServices);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Healthcare Services</h1>
      <AddServiceForm addService={addService} />
      <ServiceList services={services} onDelete={deleteService} onEdit={editService} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && description && price) {
        addService({ name, description, price });
        setName('');
        setDescription('');
        setPrice('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Service Name" className="input"/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="input"/>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="input"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Service</button>
      </form>
    );
  };
  export default AddServiceForm;
  
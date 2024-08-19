import React, { useState, useEffect } from 'react';
import BeneficiaryCard from './BeneficiaryCard'; // Import the new BeneficiaryCard component
import './Beneficiaries.css';

function AddBeneficiary() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [inventoryNeeds, setInventoryNeeds] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    // Fetch existing beneficiaries when the component mounts
    fetch('https://automated-donation-platform-backend-15.onrender.com/charities')
      .then((response) => response.json())
      .then((data) => setBeneficiaries(data))
      .catch((error) => console.error('Error fetching beneficiaries:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newBeneficiary = {
      name,
      description,
      inventory_needs: inventoryNeeds,
    };

    try {
      const response = await fetch('https://automated-donation-platform-backend-15.onrender.com/charities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBeneficiary),
      });

      if (response.ok) {
        const data = await response.json();
        setName('');
        setDescription('');
        setInventoryNeeds('');
        
        // Update beneficiaries list
        setBeneficiaries((prevBeneficiaries) => [...prevBeneficiaries, data]);
      } else {
        console.error('Failed to add beneficiary.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="beneficiary-container">
      <h2 className="beneficiary-form-title">Add Beneficiary</h2>
      <form className="beneficiary-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input 
            className="form-input"
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <input 
            className="form-input"
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Inventory Needs:</label>
          <input 
            className="form-input"
            type="text" 
            value={inventoryNeeds} 
            onChange={(e) => setInventoryNeeds(e.target.value)} 
            required 
          />
        </div>
        <button className="form-submit-button" type="submit">Add Beneficiary</button>
      </form>

      <section className="beneficiary-list">
        <h2 className="beneficiary-list-title">Existing Beneficiaries</h2>
        <div className="beneficiary-cards">
          {beneficiaries.map((beneficiary) => (
            <BeneficiaryCard key={beneficiary.id} beneficiary={beneficiary} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AddBeneficiary;

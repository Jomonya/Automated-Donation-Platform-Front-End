import React from 'react';
import './BeneficiaryCard.css'; 

const BeneficiaryCard = ({ beneficiary }) => {
  return (
    <div className="beneficiaryCard">
      <h3 className="beneficiaryCard__name">{beneficiary.name}</h3>
      <p className="beneficiaryCard__description">{beneficiary.description}</p>
      <p className="beneficiaryCard__inventory"><strong>Inventory Needs:</strong> {beneficiary.inventory_needs}</p>
    </div>
  );
};

export default BeneficiaryCard;

"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import AddWineForm from "./AddWineForm";

const AddWineButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Wine
      </button>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-xl font-bold text-center mb-4">Add a New Wine</h2>
        <AddWineForm />
      </Modal>
    </div>
  );
};

export default AddWineButton;

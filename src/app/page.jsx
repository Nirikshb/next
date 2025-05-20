"use client";
import { Button } from "@/components/ui/button";
import Modal from "./components/common/Modal";
import { useState } from "react";
import Dropdown from "./components/common/Dropdown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(false);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>

      <Button onClick={() => setIsOpen(true)} className="mb-4 cursor-pointer">
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        title="Welcome"
        description="This is a modal example."
      >
        <p className="text-gray-700">This is the content of the modal.</p>

        <Button className="mt-4 cursor-pointer" onClick={handleButtonClick}>
          Click Me
        </Button>
      </Modal>

      {/*  */}
      <div className="mt-4">
        <Dropdown />
      </div>

    </div>
  );
}
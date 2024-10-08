"use client";
import React from 'react';
import { DisplayWalkProps } from "@/app/lib/definitions";

const DisplayWalk = ({
  dogName,
  walkerName,
  scheduledTime,
  duration,
  address,
  notes,
} : DisplayWalkProps ) => {
  return (
    <div>
      <div className="max-w mx-12 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white text-xl font-bold p-4">
            <div className='flex justify-between'>
                <div><span className='mr-56'>{dogName}</span></div>
                <div className='text-lg'><span>Date:</span> {new Date(scheduledTime).toLocaleDateString()}</div>
            </div>
          
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="font-semibold">Walker:</span> {walkerName}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Duration:</span> {duration} <span>minutes</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Location:</span> {address}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Time:</span> {new Date(scheduledTime).toLocaleTimeString()}
          </div>
          {notes && (
            <div className="mt-2 p-2 bg-gray-100 rounded">
              <span className="font-semibold">Notes:</span> {notes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayWalk;
'use client';
import React, { useState, useRef } from 'react';
import useOutsideClick from '../../../../../hooks/useOutsideClick';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

export default function HoverDropdown({ label, options, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="relative w-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="w-full bg-gray-100 border-b border-gray-300 px-4 py-2 flex justify-between items-center text-sm cursor-pointer"
        onClick={() => setOpen(prev => !prev)}
      >
        <span>{label}</span>
        {open ? <ChevronUpIcon className="w-4 h-4 text-gray-600" /> : <ChevronDownIcon className="w-4 h-4 text-gray-600" />}
      </button>
      {open && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow z-10">
          {options.map(opt => (
            <li
              key={opt.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => { onSelect(opt.value); setOpen(false); }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
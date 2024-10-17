import React, { useState } from 'react';
import { LocationInputProps } from '../types/PropsTypes';
const LocationInput: React.FC<LocationInputProps> = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim() === '') {
      setError('Location cannot be empty');
      return;
    }
    onSubmit(location);
    setLocation('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
          placeholder="Enter location"
          required
          aria-label="Location input"
        />
        <button type="submit">Get Weather</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LocationInput;


import React, { useState } from 'react';
import './Dashboard.css'; // Importing the CSS for Dashboard

const Dashboard = ({ updateBannerData }) => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [countdownTime, setCountdownTime] = useState(0);
  const [visible, setVisible] = useState(false);

  const saveSettings = async () => {
    const response = await fetch('http://localhost:5000/api/banner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, link, countdown_time: countdownTime, visible }),
    });

    if (response.ok) {
      updateBannerData(); // Trigger the banner update after saving settings
    } else {
      console.error('Failed to save settings');
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Banner Description"
      />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Banner Link"
      />
      <input
        type="number"
        value={countdownTime}
        onChange={(e) => setCountdownTime(Number(e.target.value))}
        placeholder="Countdown Time (seconds)"
      />
      <div>
        <input
          type="checkbox"
          checked={visible}
          onChange={(e) => setVisible(e.target.checked)}
        />
        <label>Show Banner</label>
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
};

export default Dashboard;

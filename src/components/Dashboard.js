import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
    const allTopics = data.map(item => item.topic);
    setTopics([...new Set(allTopics)]);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilterChange = (e) => {
    const selectedTopic = e.target.value;
    if (selectedTopic === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.topic === selectedTopic);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <select onChange={handleFilterChange}>
        <option value="All">All Topics</option>
        {topics.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      <Bar
        data={{
          labels: filteredData.map(item => item.topic),
          datasets: [{
            label: 'Intensity',
            data: filteredData.map(item => item.intensity),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          }]
        }}
      />
    </div>
  );
};

export default Dashboard;

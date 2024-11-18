// src/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});
// Example API response
[
  {
    productId: 1,
    stockLevel: 100,
    dateRecorded: "2024-01-15"
  },
  // ...more entries
]
export default api;

const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/banner');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/banner', bannerRoutes);

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

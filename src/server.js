require('dotenv').config();
const app = require('./app');
const logger = require('./utils/logger'); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger
    ? logger.info(`Server is running on port ${PORT}`)
    : console.log(`Server is running on port ${PORT}`);
});

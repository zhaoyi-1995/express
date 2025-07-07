const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use('/api', router)

app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is run at http://localhost:${PORT}`)
})
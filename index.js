const cors = require("cors");
const express = require('express');
const bodyparser = require('body-parser')
const { success, error } = require("consola");
const { connect } = require('mongoose')

const { DB, PORT } = require('./config')

const app = express()

app.use(cors())
app.use(bodyparser.json())

app.use("/api/employee-manage" , require("./routes/employee-manage"))
app.use("/api/attandance-manage" , require("./routes/attandance-manage"))
app.use("/api/salary-manage" , require("./routes/salary-manage"))
app.use("/api/department-manage" , require("./routes/department-manage"))
app.use("/api/position-manage" , require("./routes/position-manage"))
app.use("/api/duty_duration-manage" , require("./routes/duty_duration-manage"))
app.use("/api/leave-manage" , require("./routes/leave-manage"))
app.use("/api/payroll-manage" , require("./routes/payroll-manage"))
app.use("/api/bankaccount-manage" , require("./routes/bankaccount-manage"))

const startApp = async () => {
    try {
        await connect(DB);
        success({
            message: `Successfully connected with the Database ${DB}`,
            badge: true
        })

        app.listen(PORT, () => success({ message: `Server started on PORT ${PORT}`, badge: true }))
    } catch (err) {
        
        error({
            message: `Unable to connect with the Database ${DB}`,
            badge: true
        })
        startApp();
    }


}

startApp();

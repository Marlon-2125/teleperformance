const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExtraHoursSchema = new Schema({
    document: String,
    fullname: String,
    contract_date_start: String,
    contract_date_ends: String,
    work_time_starts: String,
    work_time_ends: String,
    extra_time_starts: String,
    extra_time_ends: String,
    extra_time_comments: String
});

module.exports = mongoose.model(name = 'ExtraHours', ExtraHoursSchema, collection = 'hours');
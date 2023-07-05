const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const getCoursebyID = async (id) => {
    try{ 
        course = courseSchema.findById(id)
        return course
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getCoursebyID
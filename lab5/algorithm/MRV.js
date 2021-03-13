import {data_teachers_map} from "../data/data_teacher.js";
import {data_auditory_map} from "../data/data_auditory.js";
import {data_map_disciplines, data_plurals, fillDisciplines, fillPluralsForDiscipline} from "./algorithm.js";
import {Lesson} from "../plurals/Lesson.js";
import {data_course_arr} from "../data/data_course.js";

'use strict'

/**
 * @param {Discipline} discipline
 * @param {} plural
 */
function isSuitableForSchedule(discipline, plural) {
    /**
     * @param {[]} teacherTools
     * @param {[]} auditoryTools
     * @returns {boolean}
     */
    function isAllToolsAvailable(teacherTools, auditoryTools) {
        for (let i = 0; i < teacherTools.length; i++)
            if (!auditoryTools.includes(teacherTools[i]))
                return false
        return true
    }

    function isSizeRequire(groupSize, auditorySize) {
        return auditorySize >= groupSize
    }

    function isCorrectAuditoryType(disciplineType, auditoryType) {
        return auditoryType === "l|p" ? true : auditoryType === disciplineType
    }

    function isCorrectDay(teacherAvailableDays, day) {
        return teacherAvailableDays[day].length > 0
    }

    function isFreePair(teacherAvailablePair, day, auditoryPair) {
        return teacherAvailablePair[day].includes(auditoryPair)
    }

    let disciplineType = discipline.getDisciplineType

    let teacherName = discipline.getDisciplineTeacher

    let teacherRules = data_teachers_map[teacherName].getTeacherRules //new Rules
    let teacherTools = disciplineType === "l" ? teacherRules.getRuleTeacherToolsForLecture : teacherRules.getRuleTeacherToolsForPractice
    let teachersAvailableDays = teacherRules.getRuleCanWork
    // console.log(teachersAvailableDays)


    let auditoryName = plural[0]
    let auditory = data_auditory_map[auditoryName]
    let auditoryDay = plural[1]
    let auditoryPair = plural[2]
    let auditoryTools = auditory.getAuditoryTools
    let auditorySize = auditory.getAuditoryCapacity

    let groupSize = discipline.getDisciplineGroup.getStudentGroupSize

    let tools = isAllToolsAvailable(teacherTools, auditoryTools)
    let size = isSizeRequire(groupSize, auditorySize)
    let type = isCorrectAuditoryType(disciplineType, auditory.getAuditoryType)
    let day = isCorrectDay(teachersAvailableDays, auditoryDay)
    let pair = isFreePair(teachersAvailableDays, auditoryDay, auditoryPair)

    return (tools && size && type && day && pair)
}

function countConstraints(map_disciplines, data_plural) {
    function analyzeInMapDisciplines(value, key, map) {
        let discipline = key
        let constraintsList = [] // [] or value if value -> duplicate audit-day-pair

        function analyzePluralsElements(value, key, map) {
            if (value === true) {
                if (isSuitableForSchedule(discipline, key)) {
                    constraintsList.push(key)
                }
            }
        }

        data_plural.forEach(analyzePluralsElements)
        map_disciplines.set(discipline, constraintsList)
    }

    map_disciplines.forEach(analyzeInMapDisciplines)
    return map_disciplines
}

function sortByConstraints(data_map_disciplines) {
    data_map_disciplines[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1].length - b[1].length);
    }
    return data_map_disciplines
}

function getElemByIndexInMap(map, index) {
    return Array.from(map)[index]
}

/**
 * @param {Discipline} d1
 * @param {Discipline} d2
 */
function compare2Disciplines(d1, d2) {
    return d1.getDisciplineGroup === d2.getDisciplineGroup
}

/**
 *
 * @param {[]} schedule
 * @param {Map} data_plurals
 * @param {Map} copyDisciplinesMap
 * @param {Map} originDisciplinesMap
 * @returns {*}
 */

let queueOfDeletedOperation = []
let countWhenScheduleAdd = 0

function solveSchedule(schedule, data_plurals, copyMap, originDisciplinesMap) {
    if (originDisciplinesMap.size === schedule.length) return true // ??? maybe true or schedule
    if (copyMap.size === 0) return true // xz true or false
    // завжди беремо перший елемент із всіх дисциплінн тому що цей 1 елем має найбільше обмежень
    let item = getElemByIndexInMap(copyMap, 0)
    let dis = item[0]
    let variablesList = item[1]
    if (variablesList.length === 0) return false

    // for (let i = 0; i < variablesList.length; i++) {
    let variant = variablesList[0]
    data_plurals.set(variant, false)


    // console.log("countWhenScheduleAdd :: " + countWhenScheduleAdd++)
    schedule.push(new Lesson(dis, variant[0], variant[1], variant[2]))

    queueOfDeletedOperation.push(dis)
    copyMap.delete(dis)

    //видаляємо [аудит-день-пара] із можливого списку кожної дисципліни тому що вона вже зайнята

    copyMap = countConstraints(copyMap, data_plurals)
    copyMap = sortByConstraints(copyMap)

    if (originDisciplinesMap.length === schedule.length) {
        return true
    }
    if (getElemByIndexInMap(copyMap, 0) === undefined) {
        // console.log("cant solve do step back")
        return false
    } else {
        solveSchedule(schedule, data_plurals, copyMap, originDisciplinesMap)
    }
    // }
    return true
}

function solveSchedulePRO(schedule, data_plurals, copyMap, originDisciplinesMap) {
    if (copyMap.size === 0) return true
    if (schedule.length === originDisciplinesMap.size) return true

    let delQueue = []
    while (schedule.length !== originDisciplinesMap.size) {
        let item = getElemByIndexInMap(copyMap, 0)
        let dis = item[0]
        let disList = item[1]

        for (let i = 0; i < disList.length; i++) {
            let firstVar = disList[i]
            data_plurals.set(firstVar, false)
            let newLesson = new Lesson(dis, disList[i][0], disList[i][1], disList[i][2])
            delQueue.push(newLesson)
            schedule.push(newLesson)
            copyMap.delete(dis)
            copyMap = countConstraints(copyMap, data_plurals)
            copyMap = sortByConstraints(copyMap)

            if (copyMap.size === 0) return true
            if (getElemByIndexInMap(copyMap, 0)[1].length === 0) {
                schedule.pop()
                data_plurals[firstVar] = true
                copyMap.set(dis, disList)
                delQueue.pop()
            } else if (getElemByIndexInMap(copyMap, 0)[1].length === 0 && (i + 1) === disList.length) {
                schedule.pop()
                data_plurals[firstVar] = true
                copyMap.set(dis, disList.slice(1))
                delQueue.pop()
                break; // to finish cycle
            } else {
                break // to finish cycle | another way is do i to big for instance := i+= disList.length
            }
        }
    }
    return true
}

function main() {
    fillDisciplines()
    fillPluralsForDiscipline()

    countConstraints(data_map_disciplines, data_plurals)
    sortByConstraints(data_map_disciplines)
    let firstIndexFromMap = getElemByIndexInMap(data_map_disciplines, 0)[0]
    let plurals_with_most_constraints = getElemByIndexInMap(data_map_disciplines, 0)[1]
    let schedule = []
    let copyMap = new Map(data_map_disciplines)
    solveSchedulePRO(schedule, data_plurals, copyMap, data_map_disciplines)
    // console.log(solveSchedulePRO(schedule, data_plurals, copyMap, data_map_disciplines));
    // console.log(schedule);

    printSchedule(schedule)
}

function getDay(num) {
    switch (num) {
        case 0 :
            return "Monday"
        case 1 :
            return "Tuesday"
        case 2 :
            return "Wednesday"
        case 3 :
            return "Thursday"
        case 4 :
            return "Friday"
        case 5 :
            return "Saturday"
    }
}

function getPair(num) {
    switch (num) {
        case 1 :
            return "Para 1"
        case 2 :
            return "Para 2"
        case 3 :
            return "Para 3"
        case 4 :
            return "Para 4"
        case 5 :
            return "Para 5"
        case 6 :
            return "Para 6"
        case 7 :
            return "Para 7"
    }
}

function printSchedule(schedule){
    for (let course = 0; course < data_course_arr.length; course++) {
        console.log( "\n" + data_course_arr[course].getCourseName)
        for (let day = 0; day < 6; day++) {
            console.log(getDay(day))
            for (let pair = 0; pair < 7; pair++) {

                let auditory = "~~~"
                let discipline = "~~~"
                for (let lesson = 0; lesson < schedule.length ; lesson++){
                    let l1 = schedule[lesson].getLessonDiscipline
                    let l2 = schedule[lesson].getLessonDiscipline.getDisciplineGroup
                    let l3 = schedule[lesson].getLessonDiscipline.getDisciplineGroup.getStudentGroupName

                    if (schedule[lesson].getLessonDiscipline.getDisciplineGroup.getStudentGroupCourseName === data_course_arr[course].getCourseName) {
                        if (schedule[lesson].getLessonDay === day){
                            if (schedule[lesson].getLessonPair === pair){
                                auditory = schedule[lesson].getLessonAuditory
                                discipline = schedule[lesson].getLessonDiscipline.getDisciplineGroup
                                console.log(getPair(pair) + " | Auditory :: " + auditory + "\t| Discipline :: " + discipline)
                            }
                        }
                    }
                }
            }
        }
    }
}

main()



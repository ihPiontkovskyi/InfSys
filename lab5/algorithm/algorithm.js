import {data_course_arr} from "../data/data_course.js";
import {Discipline} from "../plurals/Discipline.js";
import {StudentsGroup} from "../plurals/StudentsGroup.js";
import {data_auditory_arr} from "../data/data_auditory.js";
import {data_teachers_arr} from "../data/data_teacher.js";

'use strict'

const GROUP_PRACTICE_SIZE = 10
export let data_map_disciplines = new Map() // (new Discipline, []) | list of available plurals
export let data_plurals = new Map()

/**
 * тут я буду щось по типу графів (як і карта із АВСТРАЛІЄЮ, де вершиною графа було місто + множина можливих дій)
 * у мене ж вершиною графі є дисципліна, і кожна вершина пов'язана із іншою вершиною
 */
export function fillDisciplines() {
    for (let i = 0; i < data_course_arr.length; i++) {

        for (let j = 0; j < data_course_arr[i].getCourseDisciplines.length; j++) {

            let disciplineName = data_course_arr[i].getCourseDisciplines[j]
            let disciplineType = 'l'
            let disciplineTeacher = getTeacher(disciplineName, disciplineType)
            let studentGroupName = disciplineName + " - " + " ( L )"
            let studentGroupCourseName = data_course_arr[i].getCourseName
            let studentGroupSubject = disciplineName
            let studentGroupSize = data_course_arr[i].getCourseSize

            let disciplineGroup = new StudentsGroup(studentGroupName, studentGroupCourseName, studentGroupSubject, studentGroupSize)
            let newDiscipline = new Discipline(disciplineName, disciplineType, disciplineTeacher, disciplineGroup)
            data_map_disciplines.set(newDiscipline, [])

            for (let k = 0; k < Math.round(data_course_arr[i].getCourseSize / GROUP_PRACTICE_SIZE); k++) {
                let type = 'p'
                let name = disciplineName + " - " + k + " ( P )"
                let group = new StudentsGroup(name, studentGroupCourseName, studentGroupSubject, GROUP_PRACTICE_SIZE)
                let newDis = new Discipline(disciplineName, type, disciplineTeacher, group)
                data_map_disciplines.set(newDis, [])
            }
        }
    }
}


function getTeacher(disciplineName, disciplineType) {
    for (let i = 0; i < data_teachers_arr.length; i++) {
        let pos = disciplineType === 'l' ? 0 : 1
        if (data_teachers_arr[i].getTeacherSubjects.has(disciplineName)                 // чи вчитель містить дисципліну яку ми шукаємо
            && data_teachers_arr[i].getTeacherSubjects.get(disciplineName)[pos] > 0) {  // чи вчитель містить той тип уроку що ми пропонуємо (практика чи лекція)
            return data_teachers_arr[i].getTeacherName
        }
    }
}

/**
 * Тут я заповнюю множину всіх можливих значеть для дисциплін
 * воно має вигляд
 *              key              -      value
 * (аудиторія, день, номер пари) - (вільна чи не вільна)
 */
export function fillPluralsForDiscipline() {
    for (let auditory = 0; auditory < data_auditory_arr.length; auditory++) {
        for (let day = 0; day < 6; day++) {
            for (let pair = 1; pair <= 7; pair++) {
                let auditoryName = data_auditory_arr[auditory].getAuditoryName
                data_plurals.set([auditoryName, day, pair], true)
            }
        }
    }
}


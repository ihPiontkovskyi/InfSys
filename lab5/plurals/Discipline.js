import {StudentsGroup} from "./StudentsGroup.js";

export class Discipline {
    _disciplineName         = ""
    _disciplineType         = ""
    _disciplineTeacher      = ""
    _disciplineGroup        = new StudentsGroup()

    constructor(disciplineName="", disciplineType="", teacherName="", groupName = new StudentsGroup()) {
        this._disciplineName        = disciplineName
        this._disciplineType        = disciplineType
        this._disciplineTeacher     = teacherName
        this._disciplineGroup       = groupName
    }

    get getDisciplineName()       {return this._disciplineName}
    get getDisciplineType()             {return this._disciplineType}
    get getDisciplineGroup()            {return this._disciplineGroup}
    get getDisciplineTeacher()          {return this._disciplineTeacher}

    toShow(){return this._disciplineName + "\t" +  this._disciplineType  + "\t" + this._disciplineTeacher + "\t" + this._disciplineGroup}

}

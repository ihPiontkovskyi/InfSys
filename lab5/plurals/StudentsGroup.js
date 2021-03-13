export class StudentsGroup {

    _studentGroupName       = ""
    _studentGroupCourseName = ""
    _studentGroupSubject    = ""
    _studentGroupSize       = ""

    constructor(name="", courseName="", subject="", size=0) {
        this._studentGroupName          = name;
        this._studentGroupCourseName    = courseName
        this._studentGroupSubject       = subject
        this._studentGroupSize          = size;
    }

    get getStudentGroupName()       {return this._studentGroupName}
    get getStudentGroupCourseName() {return this._studentGroupCourseName}
    get getStudentGroupSubject()    {return this._studentGroupSubject}
    get getStudentGroupSize()       {return this._studentGroupSize}

    toShow(){return this._studentGroupName+"\t"+this._studentGroupCourseName+"\t"+this._studentGroupSubject+"\t"+this._studentGroupSize}

}

export class Course {

    _courseName         = ""
    _courseSize         = 0
    _courseDisciplines  = []

    constructor(name ="", size=0, disciplines=[]) {
        this._courseName        = name;
        this._courseSize        = size;
        this._courseDisciplines = disciplines
    }

    get getCourseName()         {return this._courseName}
    get getCourseSize()         {return this._courseSize}
    get getCourseDisciplines()  {return this._courseDisciplines}

    set setCourseName(name)                 {this._courseName = name}
    set setCourseSize(size)                 {this._courseSize = size;}
    set setCourseDisciplines(disciplines)   {this._courseDisciplines = disciplines}

    toShow(){return this._courseName + "\t" + this._courseSize+ "\t"+this._courseDisciplines}
}

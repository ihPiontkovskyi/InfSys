export class Schedule {

    _scheduleLessons = []

    constructor(lessons=[]) {
        this._scheduleLessons = lessons
    }

    get getScheduleLessons()        {return this._scheduleLessons}

    setScheduleLessons(lessons)     {this._scheduleLessons = lessons}

    toShow(){return this._scheduleLessons}

}

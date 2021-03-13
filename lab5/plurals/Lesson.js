import {Discipline} from "./Discipline.js";

export class Lesson {

    _discipline         = new Discipline()
    _lessonAuditory     = ""
    _lessonDay          = 0
    _lessonPair         = 0

    constructor(discipline, auditoryName = 0, day = 0, pair = 0) {
        this._discipline        = discipline
        this._lessonAuditory    = auditoryName
        this._lessonDay         = day
        this._lessonPair        = pair
    }

    get getLessonDiscipline()       {return this._discipline}
    get getLessonAuditory()         {return this._lessonAuditory}
    get getLessonDay()              {return this._lessonDay}
    get getLessonPair()             {return this._lessonPair}

    toShow(){return this._discipline + "\t" + this._lessonAuditory+ "\t" + this._lessonDay+ "\t" + this._lessonPair}


}

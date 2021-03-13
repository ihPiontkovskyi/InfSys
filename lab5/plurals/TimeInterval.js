export class TimeInterval {

    _weekNum        = 0
    _weekDay        = 0
    _maxDayLessons  = 0

    constructor(weekNum =0, weekDay=0, maxDayLessons=0) {
        this._weekNum       = weekNum
        this._weekDay       = weekDay
        this._maxDayLessons = maxDayLessons
    }

    get getWeekNum()        {return this._weekNum}
    get getWeekDay()        {return this._weekDay}
    get getMaxDayLessons()  {return this._maxDayLessons}

    set setWeekNum(weekNum)     {this._weekNum = weekNum}
    set setWeekDay(dayNum)      {this._weekDay = dayNum}
    set setMaxDayLessons(num)   {this._maxDayLessons = num}

    toShow(){return this._weekNum+"\t"+this._weekDay+"\t"+this._maxDayLessons}

}

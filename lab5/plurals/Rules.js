export class Rules {

    _ruleToolsForLecture    = []
    _ruleToolsForPractice   = []
    // _ruleCanWord = [ [1,2,3,5,6,7], [],[]....] --- it means that in monday can work from 1-6 pair ; tuesday and wednesday can not work
    _ruleCanWork            = []
    _ruleCanNotWork           = []


    constructor(toolsForLecture= [], toolsForPractice = [], canWork= [], canNotWork = []) {
        this._ruleToolsForLecture   = toolsForLecture
        this._ruleToolsForPractice  = toolsForPractice
        this._ruleCanWork           = canWork
        this._ruleCanNotWork        = canNotWork
    }

    get getRuleTeacherToolsForLecture()     {return this._ruleToolsForLecture}
    get getRuleTeacherToolsForPractice()    {return this._ruleToolsForPractice}
    get getRuleCanWork()                    {return this._ruleCanWork}
    get getRuleCanNotWork()                   {return this._ruleCanNotWork}

    toShow(){return this._ruleToolsForLecture+ "\t" + this._ruleToolsForPractice+ "\t" + this._ruleCanWork+"\t"+this._ruleCanNotWork}

}

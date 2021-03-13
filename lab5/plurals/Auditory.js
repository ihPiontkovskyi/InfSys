export class Auditory {

    _auditoryBuild      = ""
    _auditoryName       = ""
    _auditoryCapacity   = 0
    _auditoryType       = ""
    _auditoryTools      = []

    constructor(auditoryBuild =0, auditoryName="", auditoryCapacity=0, auditoryType="", auditoryTools=[]) {
        this._auditoryBuild     = auditoryBuild
        this._auditoryName      = auditoryName;
        this._auditoryCapacity  = auditoryCapacity;
        this._auditoryType      = auditoryType
        this._auditoryTools     = auditoryTools
    }

    get getAuditoryBuild()      {return this._auditoryBuild}
    get getAuditoryName()       {return this._auditoryName}
    get getAuditoryType()       {return this._auditoryType}
    get getAuditoryCapacity()   {return this._auditoryCapacity}
    get getAuditoryTools()      {return this._auditoryTools}

    setAuditoryBuild(build)         {this._auditoryBuild = build}
    setAuditoryName(name)           {this._auditoryName = name}
    setAuditoryCapacity(capacity)   {this._auditoryCapacity = capacity}
    setAuditoryType(type)           {this._auditoryType = type}
    setAuditoryTools(tools)         {this._auditoryTools = tools}

    toShow() {return this._auditoryBuild + "\t" + this._auditoryName+"\t"+this._auditoryCapacity + "\t"+this._auditoryType+"\t"+this._auditoryTools}

}

%Facts
man('Ivan').
man('Sasha').
man('Bohdan').
man('Sam').
man('Dima').
man('Max').
man('Taras').
man('Tom').
woman('Anya').
woman('Oksana').
woman('Kate').
woman('Ira').
woman('Inna').
woman('Diana').
woman('Marina').
parent('Anya','Ivan').
parent('Anya','Sasha').
parent('Bohdan','Ivan').
parent('Bohdan','Sasha').
parent('Ivan', 'Kate').
parent('Oksana', 'Kate').
parent('Inna','Oksana').
parent('Inna','Ira').
parent('Ira','Max').
parent('Dima','Oksana').
parent('Dima','Ira').
parent('Ivan','Sam').
parent('Oksana','Sam').
parent('Dima','Oksana').
parent('Tom','Diana').
parent('Diana','Marina').
parent('Max','Marina').
parent('Taras','Max').
marriage('Oksana','Ivan').
marriage('Anya','Bohdan').
marriage('Inna','Dima').
marriage('Diana','Max').
marriage('Ira','Taras').

%Rules
father(X,Y):-man(X), parent(X,Y).
mother(X,Y):-woman(X),parent(X,Y).
husband_mother(X,Y):-mother(X,Z),marriage(Y,Z),woman(Y).
wife_mother(X,Y):-mother(X,Z),marriage(Y,Z),man(Y).
brother(X,Y):-man(X),parent(Z,X),parent(Z,Y),not(X=Y).
sister(X,Y):-woman(X),parent(Z,X),parent(Z,Y),not(X=Y).
uncle(X,Y):-man(X),brother(X,Z),parent(Z,Y).
aunt(X,Y):-woman(X),sister(X,Z),parent(Z,Y).
grandpa(X,Y):-man(X),parent(X,Z),parent(Z,Y). 
grandma(X,Y):-woman(X),parent(X,Z),parent(Z,Y).
bro_or_sis(X,Y):-parent(Z,X),parent(Z,Y),not(X=Y).
cousin(X,Y):-parent(Z,X),parent(A,Y),bro_or_sis(Z,A).
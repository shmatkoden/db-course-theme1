# Проєктування бази даних

## Mодель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    entity User
    
    entity Survey
    entity Question
    entity Answer

    
    User "1,1"--"0,*" Answer
    User "1,1"--"0,*" Survey
    Survey "1,1"*--"0,*" Question
    Answer "0,*"--*"1,1" Question
    

    entity User.id
    entity User.nickname
    entity User.email
    entity User.password
    


    

    entity Survey.id
    entity Survey.title
    entity Survey.description
    entity Survey.createdAt

    entity Question.id
    entity Question.text
    entity Question.true

    entity Answer.id
    entity Answer.text

    


    User.id --* User
    User.nickname --* User
    User.email --* User
    User.password --* User




    Survey *-- Survey.id
    Survey *-- Survey.title
    Survey *-- Survey.description
    Survey *-- Survey.createdAt

    Question *-- Question.id
    Question *-- Question.text
    Question *-- Question.true

    Answer *-- Answer.id
    Answer *-- Answer.text



@enduml

</center>

## ER-модель
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

@startuml

    package UserControl {
        entity User
        {
            id: INT
            nickname: TEXT
            email: TEXT
            password: TEXT
        }
    }
   
    
    package SurveyControl {
        entity Survey
        {
        id: INT
        title: TEXT
        description: TEXT
        created: DATE
        }

        entity Answer
        {
            id: INT
            text: TEXT
        }
 
        entity Question
        {
            id: INT
            text: TEXT
            true: TEXT
        }
    
        
    }
    
    User "1,1"--"0,*" Answer
    User "1,1"--"0,*" Survey
    Survey "1,1"*--"0,*" Question
    Answer "0,*"--*"1,1" Question

@enduml

</center>

## Реляційна схема
![relation-diagram](./images/version2.png)
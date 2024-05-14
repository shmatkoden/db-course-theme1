# Проєктування бази даних



## Модель бізнес-об'єктів 


@startuml

  entity User 
  entity User.nickname 
  entity User.password 
  entity User.email 
  entity User.id 

  entity Skill  
  entity Skill.id 
  entity Skill.level 

  entity Specialty 
  entity Specialty.id 
  entity Specialty.name 

  entity Grant 
  entity Grant.id 
  entity Grant.create_time 

  entity Role  
  entity Role.id 
  entity Role.name 
  

  entity Survey 
  entity Survey.id 
  entity Survey.title 
  entity Survey.description 
  entity Survey.createdAt 

  entity Question 
  entity Question.id 
  entity Question.true 
  entity Question.text 

  entity Answer  
  entity Answer.id 
  entity Answer.text 
  
  entity Action 
  entity Action.id 
  entity Action.date 
  
  entity State  
  entity State.id 
  entity State.name 
  entity State.type

  User.nickname -d-* User 
  User.password -d-* User
  User.email -d-* User
  User.id -d-* User
  

  User "1,1" -- "0,*" Grant
  User "1,1" -- "0,*" Skill

  Grant.id --* Grant
  Grant.create_time --* Grant 

  Grant "0,*" -- "1,1" Role

  Skill.id -u-* Skill
  Skill.level -u-* Skill

  Skill "0,*" -- "1,1" Specialty

  Specialty.id -u-* Specialty
  Specialty.name -u-* Specialty

  Role.id -u-* Role
  Role.name -u-* Role

  Survey "0,1" -u- "0,*" Grant
  
  Survey.id -u-* Survey
  Survey.title -u-* Survey
  Survey.description -u-* Survey
  Survey.createdAt -u-* Survey

  Question "0,*" -u-* "1,1" Survey:Survey
  
  Question.id -u-* Question
  Question.true -u-* Question 
  Question.text -u-* Question

  Question "1,1" -u- "0,*" Answer

  Answer.id -u-* Answer
  Answer.text -u-* Answer
  
  Answer "0,1" -u- "0,*" Grant
  
  Action.id -u-* Action
  Action.date -u-* Action
  
  Action "0,*" -u- "1,1" Survey
  Action "0,*" -u- "1,1" Grant
  
  State.id -u-* State
  State.name -u-* State
  State.type -u-* State
  
  State "1,1" -u- "0,*" Action
  

@enduml

## ER-модель

@startuml 
 
  entity User <<ENTITY>> { 
    id:INT 
    password:TEXT 
    nickname:TEXT 
    email:TEXT
    
  }

  entity Grant <<ENTITY>> { 
    id:INT 
    create_time:Date 
  } 

  entity Role <<ENTITY>> { 
    id:INT 
    name:TEXT
  }

  entity Specialty <<ENTITY>> { 
    id:INT 
    name:TEXT 
  } 

  entity Skill <<ENTITY>>{ 
    id:INT 
    level:INT
  }

  entity Answer <<ENTITY>> { 
    id:INT 
    text:TEXT 
  }

  entity Survey <<ENTITY>>{ 
    id:INT 
    title:TEXT 
    description:TEXT 
    createdAt: DATETIME
  } 

  entity Question <<ENTITY>>{ 
    id:INT 
    true:TEXT 
    text:TEXT 
  }

  entity Action <<ENTITY>>{ 
    id:INT 
    date:Date 
  }

  entity State <<ENTITY>>{ 
    id:INT 
    type:TEXT 
    text:TEXT 
  }
  
  

  Skill "0,*" -l-> "1,1" User 
  Skill "0,*" -r-> "1,1" Specialty 
    
  Grant "0,*" -u-> "1,1" User 
  Grant "0,*" -r-> "1,1" Role 
  Grant "0,*" -l-> "0,1" Answer 
  Grant "0,*" -l-> "0,1" Survey
  Question "0,*" -d-> "1,1" Survey: pool 
  Answer "0,*" -l-> "1,1" Question 
  Action "0,*" -u-> "1,1" Survey
  Action "0,*" -u-> "1,1" Grant
  Action "0,*" -r-> "1,1" State
  


@enduml

## Реляційна схема
![relation-diagram](./images/version7.png)
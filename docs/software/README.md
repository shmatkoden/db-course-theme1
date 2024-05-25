# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

``` sql


SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema survey_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS survey_db DEFAULT CHARACTER SET utf8;
USE survey_db;

-- -----------------------------------------------------
-- Table survey_db.Users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(64) NOT NULL UNIQUE,
  nickname VARCHAR(64) NOT NULL UNIQUE,
  level INT NOT NULL,
  password VARCHAR(32) NOT NULL,
  speciality_id INT,
  PRIMARY KEY (id),
  INDEX fk_Users_Speciality_idx (speciality_id ASC),
  CONSTRAINT fk_Users_Speciality
    FOREIGN KEY (speciality_id)
    REFERENCES survey_db.Speciality (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table survey_db.Speciality
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Speciality (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table survey_db.Survey
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Survey (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(32) NOT NULL,
  description TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_Survey_User_idx (user_id ASC),
  CONSTRAINT fk_Survey_User
    FOREIGN KEY (user_id)
    REFERENCES survey_db.Users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table survey_db.Question
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Question (
  id INT NOT NULL AUTO_INCREMENT,
  text TEXT NOT NULL,
  survey_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_Question_Survey_idx (survey_id ASC),
  CONSTRAINT fk_Question_Survey
    FOREIGN KEY (survey_id)
    REFERENCES survey_db.Survey (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table survey_db.Answer
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Answer (
  id INT NOT NULL AUTO_INCREMENT,
  text TEXT NOT NULL,
  question_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_Answer_Question_idx (question_id ASC),
  CONSTRAINT fk_Answer_Question
    FOREIGN KEY (question_id)
    REFERENCES survey_db.Question (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table survey_db.Grant
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Grant (
  id INT NOT NULL AUTO_INCREMENT,
  create_time DATETIME NOT NULL,
  role_id INT NOT NULL,
  user_id INT NOT NULL,
  answer_id INT,
  survey_id INT,
  PRIMARY KEY (id),
  INDEX fk_Grant_User_idx (user_id ASC),
  INDEX fk_Grant_Role_idx (role_id ASC),
  INDEX fk_Grant_Answer_idx (answer_id ASC),
  INDEX fk_Grant_Survey_idx (survey_id ASC),
  CONSTRAINT fk_Grant_User
    FOREIGN KEY (user_id)
    REFERENCES survey_db.Users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Grant_Role
    FOREIGN KEY (role_id)
    REFERENCES survey_db.Role (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Grant_Answer
    FOREIGN KEY (answer_id)
    REFERENCES survey_db.Answer (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Grant_Survey
    FOREIGN KEY (survey_id)
    REFERENCES survey_db.Survey (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table survey_db.Role
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.Role (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table survey_db.State
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS survey_db.State (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS survey_db.Action (
  id INT NOT NULL AUTO_INCREMENT,
  date DATE ,
  grant_id INT,
  state_id INT,
  PRIMARY KEY (id),
  INDEX fk_Action_Grant_idx (grant_id ASC),
  INDEX fk_Action_State_idx (state_id ASC),
  CONSTRAINT fk_Action_Grant
      FOREIGN KEY (grant_id)
      REFERENCES survey_db.Grant (id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  CONSTRAINT fk_Action_State
      FOREIGN KEY (state_id)
      REFERENCES survey_db.State (id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  ) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS survey_db.Skill (
  id INT NOT NULL AUTO_INCREMENT,
  level INT,
  speciality_id INT,
  user_id INT,
  PRIMARY KEY (id),
  INDEX fk_Skill_Speciality_idx (speciality_id ASC),
  INDEX fk_Skill_User_idx (user_id ASC),

  CONSTRAINT fk_Action_Speciality
        FOREIGN KEY (speciality_id)
        REFERENCES survey_db.Speciality (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
  CONSTRAINT fk_Action_User
        FOREIGN KEY (user_id)
        REFERENCES survey_db.Users (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
  ) ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```
## RESTfull сервіс для управління даними

- Для локального запуску нашої програми використовуємо технологію OpenServer, що створює локальний сервер для нашої прогарми


- Для зв'язку з базою даних використовуємо файл db.php

```
<?php

return mysqli_connect('localhost','root','','survey_db');

```

- Для реєстрації використовуємо файл registration.php в якому дані відправляються в базу даних в таблицю Users

```

<?php

if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $db = require_once 'db.php';
    $data = json_decode(file_get_contents('php://input'),true);

    $nick = $data['nick'];
    $mail = $data['mail'];
    $password = $data['password'];


    $query = "INSERT INTO survey_db.Users (nickname, email, password,speciality_id,level) 
                     VALUES ('$nick', '$mail', '$password', 1, 2)";

    $res = mysqli_query($db,$query);


    if (!empty($res))
    {
        echo json_encode("Registry");
    }
}
else{
    echo json_encode('Not Found');
}
```

- Для авторизації використовуємо файл login.php в якому порівнюється nickname та password

```
<?php

if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $db = require_once 'db.php';
    $data = json_decode(file_get_contents('php://input'),true);

    $nick = $data['nick'];
    $password = $data['password'];


    $query = "SELECT * FROM Users WHERE nickname = '$nick' LIMIT 1";

    $res = mysqli_query($db,$query);

    $result = mysqli_fetch_assoc($res);

    $userPassword = $result['password'];

    if (!empty($result))
    {
        if ($userPassword == $password){
            echo json_encode('You have successfully completed the authorization');
        }
    }
    echo json_encode("Authorization failed");
}
else{
    echo json_encode('Not Found');
}
```

- Для пошуку опитування за id використовуємо файл findsurvey.php

```
<?php

if($_SERVER['REQUEST_METHOD'] == "GET")
{
    $db = require_once 'db.php';
    $surveyId = $_GET['id'];

    $query = "SELECT * FROM Survey WHERE id = $surveyId";

    $res = mysqli_query($db,$query);

    $result = mysqli_fetch_assoc($res);

    echo json_encode($result);
}
else{
    echo json_encode('Не знайдено');
}
```

- Для редагування опитування використовуємо файл editsurvey.php

```
<?php
if($_SERVER['REQUEST_METHOD'] == "PUT")
{
    $db = require_once 'db.php';
    $data = json_decode(file_get_contents('php://input'),true);

    $id = $data['id'];
    $title = $data['title'];
    $description = $data['description'];


    $query = "UPDATE Survey 
             SET title = '$title', description = '$description' 
             WHERE id = $id";

    $res = mysqli_query($db,$query);


    echo json_encode('Edit was ok');
}
else{
    echo json_encode('Not Found');
}
```

- Для перегляду всіх опитувань використовуємо файл findallsurvey.php

```
<?php

if($_SERVER['REQUEST_METHOD'] == "GET")
{
    $db = require_once 'db.php';

    $query = "SELECT * FROM Survey";

    $res = mysqli_query($db,$query);
    for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);

    echo json_encode($data);
}
else{
    echo json_encode('Not Found');
}
```
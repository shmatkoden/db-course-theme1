# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

``` sql
-- Створення таблиці "User" (Пользователь)
CREATE TABLE User (
    id INT PRIMARY KEY,
    email TEXT(64),
    nickname TEXT(64),
    password TEXT(32)
);

-- Створення таблиці "Answer" (Ответ)
CREATE TABLE Answer (
    id INT PRIMARY KEY,
    text TEXT(255),
    question_id INT,
    user_id INT
);

-- Створення таблиці "Question" (Вопрос)
CREATE TABLE Question (
    id INT PRIMARY KEY,
    text TEXT(255),
    true TEXT(255),
    survey_id INT
);

-- Створення таблиці "Survey" (Опрос)
CREATE TABLE Survey (
    id INT PRIMARY KEY,
    title TEXT(32),
    description TEXT(255),
    createdAt DATETIME,
    user_id INT
);

-- Додавання зовнішніх ключів
ALTER TABLE Answer
ADD FOREIGN KEY (question_id) REFERENCES Question(id),
ADD FOREIGN KEY (user_id) REFERENCES User(id);

ALTER TABLE Question
ADD FOREIGN KEY (survey_id) REFERENCES Survey(id);

ALTER TABLE Survey
ADD FOREIGN KEY (user_id) REFERENCES User(id);

```
- RESTfull сервіс для управління даними


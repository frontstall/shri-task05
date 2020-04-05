# shri-task05

### node version: 10.18.1 (для сервера)
### npm version: 6.13.4


## Установка проекта:

```
make install
```

## Запуск проекта в production-mode (в браузере открыть http://localhost:3001/):

```
make build
make start
```

## Запуск проекта в development-mode (для разработки фронта):

```
make develop
```

## В проекте есть сталгайд, посмотреть:

```
make styleguide
```

## Важно:

Проект работает с репозиториями на Github и полагается на наличие ssh-ключей в ssh-agent для клонирования репозиториев. При задании настроек репозитория необходимо указывать адрес в формате `user-name/repo-name`, который будет преобразован в `git@github.com:username/repository-name.git`. 

# calculator

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<h1>Задание</h1>

Реализовать калькулятор в соответствии с макетом. В верхней части отображается
текущий буфер ввода, с указанием операций ввода. Ниже отображается результат
вычислений для данного буфера

Кнопка “С” сбрасывает буфер и обнуляет результат вычислений
Кнопка “=” сбрасывает буфер, затем переносит результат вычисления в буфер сверху

Кнопка “=” должна вызывать асинхронные вычисления (т.е. представим, что расчет этот
делается на сервере и длится 2 секунды, на время расчета остальной ввод блокируется)

Символы, не помещающиеся по ширине, скрываем (обрезаем) слева
#### 1. 为什么离开现在的工作？
poi

#### 2. 除了JS及JS的框架，最擅长的三种语言或技术依次是？
- C
- C++/
- 嵌入式技术

#### 3. 最满意和最不满意的任务/项目，为什么？
- 满意：iGWB项目，流程规范，项目组以代码质量为第一优先级，转测零缺陷
- 不满意：关山月项目，流程不规范，需求没有经过评审，上下游没有文档输出，上下游需求无法对齐，随意变更deadline

#### 4. Please write a function which takes three numbers as arguments and returns the sum of two larger numbers. (Write as elegant as possible, DO NOT use predefined method)
```js
// arr数组的长度为3
function sum (arr) {
  let res = []
  if (arr[0] < arr[1]) {
    res.push(arr[1])
    if (arr[0] < arr[2]) {
      res.push(arr[2])
    } else {
      res.push(arr[0])
    }
  } else {
    res.push(arr[0])
    if (arr[1] < arr[2]) {
      res.push(arr[2])
    } else {
      res.push(arr[1])
    }
  }
  let sum = res[0] + res[1]
  return sum
}
```

#### 5.Please write two functions to do following actions for this data set.
- return an array contains all data that (age > a given certain value)
- return an object shows the average scores group by ’lesson’ and ‘sex’

```js
const orgData = [
{ name: 'abc', age: 30, score: 90, sex: 1, lesson: 'math' },
{ name: 'def', age: 31, score: 80, sex: 1, lesson: 'math' },
{ name: 'lmn', age: 27, score: 70, sex: 0, lesson: 'math' },
{ name: 'xyz', age: 30, score: 80, sex: 1, lesson: 'english' }
];
```
--------------
```js
function getAgeLarger (orgData, age) {
  let resData = []
  for (let i = 0; i < orgData.length; i++) {
    if (orgData[i].age > age) {
      resData.push(orgData[i])
    }
  }
  return resData
}

function getAverageScore (orgData, sex, lesson) {
  let scores = []
  for (let i = 0; i < orgData.length; i++) {
    if (orgData[i].lesson === lesson
        && orgData[i].sex === sex) {
      scores.push(orgData[i].score)
    }
  }
  let sum = 0
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]
  }
  let averageScores = sum / (scores.length)
  return {
    averageScore: averageScores,
    sex: sex,
    lesson: lesson
  }
}
```
#### 6. 简单讲讲git的多人工作协作流程。当多人对多个模块有改动的时候，如何解决冲突？另外，如何避免这种冲突出现？

gitflow工作流共有5种分支
- Master
- Hotfix
- Release
- Develop
- Feature

当开发新功能时从Develop创建分支Feature；当新功能完成时，将Feature合并到Develop分支

解决冲突：根据`git status`修改冲突文件，合入自己的代码,修改完成后`git add`, `git rebase --continue`, 没有冲突后，`git push`

避免冲突：需求分析和分配任务时尽量做到模块解耦，模块之间以接口进行通信

#### 7. 最喜欢的ES6（ECMAScript 6）的三个改变？为什么？比ES5简单多少？
1. 箭头函数，在异步调用接口和定时器中再也不用担心获取不到你想要的this了，比如：Vue实例。
2. `let`和`const`，`var`的变量提升还是很容易忽略的，在多人协作时也有可能重复定义
3. 继承，使用了类JAVA的语法糖，对我这种有OOP基础的会在阅读代码的过程中更亲切

相对ES5来说，感觉更有利于有OOP基础的人学习这门语言，同时修改了一些特性从而使代码更加健壮了。

#### 8. 有没有用过ReactJS/Redux框架？若有，简单描述一下和AngularJS相比的优缺点？若没有，你觉得在一点的指导下（不是完全手把手指导，但提供一个git project），你能多久上手ReactJS/Redux？简单讲讲你的学习计划


- 语法：react是JSX语法，设计思想是‘All in JS’，HTML和CSS都可以嵌入到JS中，好处是CSS可以直接使用变量来展现表现层，html直接嵌入JS中也方便直接阅读业务逻辑；AngularJS则是使用了模版语法，本质上还是由AngularJS把html解释成了JS，AngularJS实现CSS的控制则是通过属性绑定来控制的
- 使用场景：AngularJS用于企业应用这种大型项目较多，定位为全家桶，命令行开箱即用，版本升级也是全家桶一起，不需要开发者操心；react是一个渐进式的框架，creat-react-app的默认模版只提供了最基本的一些库，更适合小团队和个人开发者根据需要自己加入需要的库，因此大版本升级需要考虑各个库的兼容问题
- license：AngularJS完全开源，react在法务上有风险

我是有react基础的，理论上直接干活也没问题😊，当然能有大牛的指导，成长会更快，可以写出更健壮和优美的代码

学习计划
1. 首先阅读README.md，然后根据package.json判断涉及到哪些库，从宏观上有个认识，判断自己哪些库是需要看文档的，哪些是需要看教程补充知识点的
2. 打开commit阅读源码，观察这个项目建立起来的轨迹，对需要了解的特性重点去看
3. 在阅读源码的过程中，把自己的思考和知识点总结成文档，并输出（由于我有VueJS／Vuex实际项目经验，所以我更倾向于通过源码理解知识点）

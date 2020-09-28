// 策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
// 一个基于策略模式的程序至少由两部分组成。
// 第一个部分是一组策略类，策略类封装了具体 的算法，并负责具体的计算过程。
// 第二个部分是环境类 Context，Context 接受客户的请求，随后 把请求委托给某一个策略类。要做到这点，说明 Context 中要维持对某个策略对象的引用。


// 面向对象式的封装
var performanceS = function () {};
performanceS.prototype.calculate = function (salary) {
  return salary * 4;
};
var performanceA = function () {};
performanceA.prototype.calculate = function (salary) {
  return salary * 3;
};
var performanceB = function () {};
performanceB.prototype.calculate = function (salary) {
  return salary * 2;
};
var Bonus = function(){ 
  this.salary = null; 
  this.strategy = null; 
};

Bonus.prototype.setSalary = function( salary ){
  this.salary = salary; // 设置员工的原始工资 
};
Bonus.prototype.setStrategy = function( strategy ){
  this.strategy = strategy; // 设置员工绩效等级对应的策略对象 
}; 
Bonus.prototype.getBonus = function(){ 
  // 取得奖金数额
  return this.strategy.calculate( this.salary ); // 把计算奖金的操作委托给对应的策略对象 
};
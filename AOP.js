// AOP面向切面编程主要是把一些核心逻辑模块功能抽离出来。
// 例如，日志统计、安全控制、异常处理等。
// 装饰器也可以实现AOP
Function.prototype.before = function( beforefn ){ 
  var __self = this; // 保存原函数的引用 
  return function(){ 
    // 返回包含了原函数和新函数的"代理"函数 
    beforefn.apply( this, arguments ); 
    // 执行新函数，修正 this
    return __self.apply( this, arguments ); 
  }
};

Function.prototype.after = function( afterfn ){
  var __self = this; 
  return function(){ 
    var ret = __self.apply( this, arguments );
    afterfn.apply( this, arguments );
    return ret; 
  }
};

var func = function(){ console.log( 2 ); };

func = func.before(
  function(){ console.log( 1 ); }
).after(function(){
  console.log( 3 ); 
});

func();


// 装饰器实现LOG
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);
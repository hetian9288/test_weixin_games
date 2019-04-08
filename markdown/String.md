# String相关属性和方法整理

#### String全局对象是一个用于字符串或一个字符串序列的构造函数。

#### 语法：

```javascript

	// 字符串字面量形式
	'string text' / "中文、汉语"

	// String函数转换或生成
	String(thing);
	new String(thing);

	// 参数
	thing // 任何可以被转换成字符串的值。

	// 从ECMAScript 2015开始，字符串字面量也可以称为模板字面量
	`hello world` `hello ${who}`;

```

#### 有特殊功能的字符可以通过转义字符的形式放入字符串中：

|code|output|
|:-:|:-:|
|`\0`|空字符|
|`\'`|单引号|
|`\"`|双引号|
|`\\`|反斜杠|
|`\n`|换行|
|`\r`|回车|
|`\v`|垂直制表符|
|`\t`|水平制表符|
|`\b`|退格|
|`\f`|换页|
|`\uXXXX`|unicode码|
|`\xXX`|Latin-1字符(x小写)|

##### 和其他语言不同，JavaScript的字符串不区分单引号和双引号。

#### 对于长字符串，为了避免一行无限延长或者被编辑器折叠，可以写成多行。

```javascript

	//使用+运算符将多个字符串连接起来
	let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
    //可以在每行末尾使用反斜杠字符("\")，以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进；否则反斜杠将不会工作。
    let longString1 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

	console.log(longString===longString1);//true

```

#### 基本字符串和字符串对象的区别

##### 字符串字面量（通过单引号或双引号定义）和直接调用String方法（没有通过new生成字符串对象示例）的字符串都是基本字符串。

##### 当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候（基本字符串是没有这些方法的），JavaScript会自动将基本字符串转化为字符串对象并调用相应的方法或者执行查询。

```javascript

	let str = 'abc';
	let str_string = String('abc');
	let str_obj = new String('abc');

	console.log(str);//abc
	console.log(str_string);//abc
	console.log(str_obj);
	/*String{'abc'} 
	0:'a'
	1:'b'
	2:'c'
	length:3
	__proto__:String
	[[PrimitiveValue]]: "abc"*/

	console.log(str === str_obj);//false
	console.log(str === str_string);//true
	console.log(str == str_obj);//true

```

##### 当使用eval时，基本字符串和字符串对象也会产生不同的结果。eval会将基本字符串作为源代码处理；而字符串对象则被看作对象处理，返回对象。

```javascript

	let s1 = '2+2';
	let s2 = new String('2+2');

	console.log(eval(s1));//4
	console.log(eval(s2));
	/*String {"2+2"}
	0: "2"
	1: "+"
	2: "2"
	length: 3
	__proto__: String
	[[PrimitiveValue]]: "2+2"*/

```

##### 利用valueOf方法可以将字符串对象转换为其对应的基本字符串。

---

### 属性（构造函数里的属性，可理解为私有属性，只能通过String.属性名访问）

>#### String.prototype属性表示String原型对象。

#### String.prototype属性的属性特性：

|String.prototype属性的属性特性|
|:-:|:-:|
|writable|false|
|enumerable|false|
|configurable|false|

##### 所有的String实例都继承自String.prototype。

---

### 方法（构造函数里的方法，可理解为私有方法，只能通过String.方法名访问）

>#### String.fromCharCode()，返回使用指定的Unicode值序列创建的字符串。

```javascript

	String.fromCharCode(num1,...,numN);

	// 参数
	num1,...,numN; //一组序列数字，表示Unicode值。

	// 返回值：一个字符串而不是一个String对象

```

##### 由于该方法是String的静态方法，所以应该像这样使用：String.formCharCode()，而不是作为创建的String对象实例的方法。

```javascript

	console.log(String.fromCharCode(65,66,67));//ABC

```

##### 尽管绝大部分常用的Unicode值可以用一个16-bit数字表示（正如JavaScript标准化过程早期），并且对于绝大部分值fromCharCode()返回一个字符（即对于绝大部分字符UCS-2值是UTF-16的子集），但是为了处理所有的Unicode值（至21bits），只用fromCharCode()是不足的。由于高位编码字符是用两个低位编码表示形成的一个字符，因此String.fromCodePoint()被用来返回这样一对低位编码，从而可以完成表示这些高位编码字符。

>#### String.fromCodePoint()，返回使用指定的代码点序列创建的字符串，此方法也是一个静态方法。

#### 语法：

```javascript

	String.fromCodePoint(num1[,...[,numN]]);

	// 参数
	num1,...,numN // 一串Unicode编码位置，即“代码点”

	// 返回值：使用指定的Unicode编码位置创建的字符串，不是一个String对象

```

##### 如果传入无效的Unicode编码，将会抛出一个RangeError。

#### 示例：

```javascript

	console.log(String.fromCodePoint(65,66,67));//ABC
	console.log(String.fromCodePoint(42));//*
	console.log(String.fromCodePoint(0x404));//Є
	console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307));//𝌆a𝌇		
	console.log(String.fromCodePoint(0x2F804));//你
	console.log(String.fromCodePoint('-'));//Uncaught RangeError: Invalid code point NaN

```

>#### String.raw()，是一个模板字符串的标签函数，它的作用类似于Python中的字符串前缀r和C#中的字符串前缀@，是用来获取一个模板字符串的原始字面量值的。

#### 语法：

```javascript

	String.raw(callSite,...substitutions);
	String.raw`templateString`;

	// 参数
	callSite //一个模板字符串的“调用点对象”。类似{raw:['foo','bar','baz']}

	...substitutions // 任意个可选的参数，表示任意个内插表达式对应的值。

	templateString //模板字符串

	// 返回值：给定模板字符串的原始字面量值。

```

##### 如果第一个参数没有传入一个格式良好的调用点对象，则会抛出TypeError对象。

##### 像所有的标签函数一样，通常不需要把它看成一个普通函数，只需要把它放在模板字符串前面就可以了，而不是在它后面加个括号和一堆参数来调用它，引擎会去调用它。

##### String.raw() 是唯一一个内置的模板字符串标签函数，因为它太常用了。不过它并没有什么特殊能力，你自己也可以实现一个和它功能一模一样的标签函数。

#### 示例：

```javascript

	console.log(`Hi\n!`);// Hi [换行] ！
	console.log(String.raw `Hi\n!`);//Hi\n!
	console.log(`Hi\u000A!`);// Hi [换行] ！
	console.log(String.raw `Hi\u000A!`);//Hi\u000A!
	// 任何类型的转义形式都会失效，保留原样输出

	let name = 'Bob';
	console.log(`Hi\n${name}!`);// Hi [换行] Bob!
	console.log(String.raw `Hi\n${name}!`);//Hi\nBob!
	// 内插表达式还可以正常运行

	console.log(String.raw({raw: "test"}, 0, 1, 2)); //t0e1s2t，不理解，应该也没什么用

```

### String原型对象的属性

>#### String.prototype.constructor 用于创造对象的原型对象的特定的函数。

```javascript

	let str = 'abc';
	console.dir(str.constructor);//String()

```

>#### String.prototype.length 属性表示一个字符串的长度。

##### 该属性返回字符串中字符编码单元的数量。JavaScript使用UTF-16编码，该编码使用一个16比特的编码单元来表示大部分常见的字符，使用两个代码单元表示不常用的字符。因此length返回值可能与字符串中实际的字符数量不相同。

##### 空字符串的length为0

##### 静态属性String.length返回1。

>#### N，用于访问第N个位置的字符，其中N是小于length和0之间的正整数。这些属性都是“只读”性质，不能编辑。

```javascript

	let str = 'abc';
	console.dir(str[0]);//a

```

---

### String原型对象的方法

##### 这里的方法其实是最常用的，我将他们按照功能或操作分成以下几类，分别整理

>#### 1、返回指定位置字符：`charAt/charCodeAt/codePointAt/slice/substr/substring`




























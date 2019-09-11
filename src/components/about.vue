<template>
  <div class="about">
    <h3>Q: 10000的阶乘 ?</h3>
    <section>
      <p>首先，出场的是我们的<strong>递推</strong>阶乘的js实现：</p>
      <pre>
        <code>
          (function(n){
            if (!n && n !== 0) {
              throw "No parameter exists";
            }
            if (n && isNaN(n)) {
              throw "parameter is not a number!";
            }
            if (n&lt;=0) {
              throw "parameter is not a positive integer!";
            }
            var res = 1;
            for(let i= 1;i&lt;= n;i++){
              res = res * i;
            }
            return res;
          })(10000)
          // Infinity
        </code>
      </pre>
      <p>what!? 结果竟然是<strong>Infinity</strong>， 这是为什么呢?</p>
      <strong>
        原来，在js语言中，一旦计算返回的数值超出了Number.MAX_VALUE（约等于1.7*10<sup>308</sup>），就会返回Infinity(一个数值，表示无穷大)。
        Number.MAX_VALUE是 64 bit 能存储的最大的数。但是并不是MAX_VALUE之内的数都是准确的，因为存在精度的问题。js有着最大安全整数的概念，可以认为，在安全整数的范围内的数值才是准确的。
        以下是关于最大安全整数的定义
      </strong>
      <blockquote>
        MAX_SAFE_INTEGER 是一个值为 9007199254740991的常量。因为Javascript的数字存储使用了IEEE 754中规定的双精度浮点数数据类型，
        而这一数据类型能够安全存储 -(2<sup>53</sup> - 1) 到 2<sup>53</sup> - 1 之间的数值（包含边界值）。
        <p style="text-align:right">-- MDN</p>
      </blockquote>
    </section>
    <h3>JavaScript 精度问题</h3>
    <section>
      <p>和其它语言不同，JavaScript 中所有数字包括整数和小数都只有一种类型 — Number。在 JavaScript 中所有数值都以 IEEE-754 标准的 64 bit 双精度浮点数进行存储的。先来了解下 IEEE-754 标准下的双精度浮点数：</p>
      <img :src="img" alt="">
      <p>可以从图中看到 IEEE-754 标准下双精度浮点数由三部分组成，分别如下：</p>
      <ol>
        <li>sign(符号): 占 1 bit, 表示正负;</li>
        <li>exponent(指数): 占 11 bit，表示范围;</li>
        <li>mantissa(尾数): 占 52 bit，表示精度，多出的末尾如果是 1 需要进位;</li>
      </ol>
    </section>
    <h3>JavaScript 的最大安全数</h3>
    <section>
      <span>为什么最大安全整数是2<sup>53</sup>-1？前面说到了JavaScript浮点数存储是52位尾数位，但是因为科学计数法小数点左侧的1会在存储时省去，所以是52位尾数+省去的1位=53个可表示的位数
        。而安全数的意思是在 -(2<sup>53</sup> - 1) 到 2<sup>53</sup> - 1 内的整数(包括边界)与唯一的双精度浮点数互相对应。举个例子比较好理解：</span>
      <pre>
        <code>
          2^53 转二进制 =====>
          100000000000000000000000000000000000000000000000000000(53个0)
          转为科学计数法 =====> 
          1.00000000000000000000000000000000000000000000000000000(53个0)
          存入计算机 =====> 尾数位只有52位所以截掉末尾的0只能存52个0

          2^53+1 转二进制 =====>
          100000000000000000000000000000000000000000000000000001(52个0)
          转为科学计数法 =====> 
          1.00000000000000000000000000000000000000000000000000001(52个0)
          存入计算机 =====> 尾数位只有52位所以截掉末尾的1只能存52个0
        </code>
      </pre>
      <span>而这个在数学上的错误的，因此，只有在安全数的范围内，我们才认为是准确的。</span>
    </section>
    <h3>解决方案</h3>
    <section>
      <h4>1. bigInt</h4>
      <blockquote>
        BigInt 是一种内置对象，可以表示大于 2<sup>53</sup> 的整数。而在Javascript中，
        Number 基本类型可以精确表示的最大整数是 2<sup>53</sup>。BigInt 可以表示任意大的整数。
        BigInt 现在处在 ECMAScript 标准化过程中的 第三阶段 。
        <p style="text-align:right">-- MDN</p>
      </blockquote>
      <span>如何使用</span>
      <pre>
        <code>
          BigInt(value);
        </code>
      </pre>
      <h4>2. 转换为string，计算时转换为数组来处理</h4>
    </section>
  </div>
</template>

<script>
import img from '@/assets/js.jpg'
export default {
  props: {
  },
  data() {
    return {
      img
    }
  }
}
</script>
<style>
</style>
<template>
  <div class="second">
    <h3>code</h3>
    <section>
      <pre>
        <code>
          function factorial(n){
            if (!n && n !== 0) {
              throw "No parameter exists";
            }
            if (n && isNaN(n)) {
              throw "parameter is not a number!";
            }
            if (n<=0) {
              throw "parameter is not a positive integer!";
            }
            if (n === 1) {
              return BigInt(1);
            }
            const num = BigInt(n);
            return num * factorial(n - 1);
          }
        </code>
      </pre>      
    </section>
    <h3>复杂度</h3>
    <section>
      O(n)
    </section>
    <h3>平均运行时间</h3>
    <section>
      64ms
    </section>
    <h3>运行</h3>
    <section class="run">
       <el-input-number v-model="num" :min="1"></el-input-number>
       <el-button type="primary" @click="calc">calc</el-button>
       <span>耗时(ms)：{{time}}</span>
       <el-input
          type="textarea"
          :rows="6"
          readonly
          v-model="result">
        </el-input>
    </section>
    <h3>注意!</h3>
    <section>
      使用递归时，非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。此时可以使用尾递归来做优化。
      当我们输入较大的数（10000）时，如果发生了栈溢出，我们可以先输入一个较小的数，譬如5000，计算之后再计算10000，此时不会发生栈溢出。
      可以看出，chrome内部帮我们做了优化，当栈溢出时，当前的js线程会<strong>申请更多的内存空间</strong>，防止下一次计算时再次溢出。
    </section>
    <h3>尾递归</h3>
    <section>
      <p>函数调用会在内存形成一个"调用记录"，又称"调用帧"（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，
      那么在A的调用记录上方，还会形成一个B的调用记录。等到B运行结束，将结果返回到A，B的调用记录才会消失。如果函数B内部还调用函数C，
      那就还有一个C的调用记录栈，以此类推。所有的调用记录，就形成一个"调用栈"</p>
      <p>尾递归由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，
      因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了</p>
      <p>ES6标准规定了 尾调用不会创建额外的调用帧</p>
    </section>
    <h3>code</h3>
    <section>
      <pre>
        <code>
          function factorial(n){
            if (!n && n !== 0) {
              throw "No parameter exists";
            }
            if (n && isNaN(n)) {
              throw "parameter is not a number!";
            }
            if (n<=0) {
              throw "parameter is not a positive integer!";
            }
            if (n === 1) return total; 
            return factorial(n - 1, BigInt(n) * BigInt(total));
          }
        </code>
      </pre>      
    </section>
    <h3>复杂度</h3>
    <section>
      O(n)
    </section>
    <h3>注意!</h3>
    <section>
      <p>Chrome下使用尾递归写法的方法依旧出现调用栈溢出，原因在于：</p>
      <ol>
        <li>浏览器没部署尾调用优化: <a href="https://v8.dev/blog/modern-javascript">https://v8.dev/blog/modern-javascript</a></li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 10000,
      result: '',
      time: '0'
    }
  },
  methods: {
    factorial(n){
      if (!n && n !== 0) {
        throw "No parameter exists";
      }
      if (n && isNaN(n)) {
        throw "parameter is not a number!";
      }
      if (n<=0) {
        throw "parameter is not a positive integer!";
      }
      if (n === 1) {
        return BigInt(1);
      }
      const num = BigInt(n);
      return num * this.factorial(n - 1);
    },
    calc() {
      try {
        const start = (new Date()).getTime();
        console.time('2')
        const res = this.factorial(this.num);
        console.timeEnd('2')
        const end = (new Date()).getTime();
        this.time = end - start;
        this.result = res.toString();
      } catch (e) {
        this.result = e;
      }
    }
  }
}
</script>


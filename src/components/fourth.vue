<template>
  <div class="fourth">
    <h3>尾递归</h3>
    <section>
      <p>函数调用会在内存形成一个"调用记录"，又称"调用帧"（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，
      那么在A的调用记录上方，还会形成一个B的调用记录。等到B运行结束，将结果返回到A，B的调用记录才会消失。如果函数B内部还调用函数C，
      那就还有一个C的调用记录栈，以此类推。所有的调用记录，就形成一个"调用栈"</p>
      <p>尾递归由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，
      因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了</p>
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
    <h3>平均运行时间</h3>
    <section>
      270ms
    </section>
    <h3>运行</h3>
    <section class="run">
       <el-input-number v-model="num" :min="1"></el-input-number>
       <el-button type="primary" @click="calc">calc</el-button>
       <span>耗时(ms)：{{time}}</span>
       <el-input
          type="textarea"
          :rows="4"
          v-model="result">
        </el-input>
    </section>
    <h3>注意!</h3>
    <section>
      <p>Chrome下使用尾递归写法的方法依旧出现调用栈溢出，原因在于：</p>
      <ol>
        <li>各大浏览器（除了safari）根本就没部署尾调用优化</li>
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
    factorial(n, total = 1){
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
      return this.factorial(n - 1, BigInt(n) * BigInt(total));
    },
    calc() {
      const start = (new Date()).getTime();
      console.time('1')
      const res = this.factorial(this.num);
      console.timeEnd('1')
      const end = (new Date()).getTime();
      this.time = end - start;
      this.result = res.toString();
    }
  }
}
</script>


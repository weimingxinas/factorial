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
            return num * this.factorial(n - 1);
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
      使用递归时，非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。
      当我们输入10000时，确实是发生了栈溢出。而当我们先输入一个较小的数，譬如5000，计算之后再己算10000，此时不会发生堆栈溢出。
      可以看出，chrome内部帮我们做了优化，将部分调用帧保留在内存中，当发生类似的计算时，直接使用，提高了计算效率。
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5000,
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
      const start = (new Date()).getTime();
      console.time('2')
      const res = this.factorial(this.num);
      console.timeEnd('2')
      const end = (new Date()).getTime();
      this.time = end - start + 1;
      this.result = res.toString();
    }
  }
}
</script>


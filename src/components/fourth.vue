<template>
  <div class="fourth">
    <h3>说明</h3>
    <section>
      <p>使用数组保存数字的每一位，并实现乘法运算</p>
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
            if (n < 0) {
              throw "parameter is not a positive integer!";
            }
            let arr = [1]; 
            for (let i = 1; i <= n; i++) { 
                for (let j = 0, highPosition = 0; j < arr.length || highPosition != 0; j++) { 
                    let temporaryRes = (j < arr.length) ? (i * arr[j] + highPosition) : highPosition; 
                    arr[j] = temporaryRes % 10; 
                    highPosition = (temporaryRes - arr[j]) / 10;
                } 
            }
            return arr.reverse().join("");
          }
          factorial(10000)
        </code>
      </pre>      
    </section>
    <h3>复杂度</h3>
    <section>
      O(n<sup>2</sup>)
    </section>
    <h3>平均运行时间</h3>
    <section>
      2406ms(系统: win10, chrome版本:76, 内存: 16g, cpu: i5)
    </section>
    <h3>运行</h3>
    <section class="run">
       <el-input-number v-model="num" :min="0" :max="12000"></el-input-number>
       <el-button type="primary" @click="calc">calc</el-button>
       <span>耗时(ms)：{{time}}</span>
       <el-input
          type="textarea"
          :rows="6"
          readonly
          v-model="result">
        </el-input>
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
      let arr = [1]; 
      for (let i = 1; i <= n; i++) { 
          for (let j = 0, highPosition = 0; j < arr.length || highPosition != 0; j++) { 
              let temporaryRes = (j < arr.length) ? (i * arr[j] + highPosition) : highPosition; 
              arr[j] = temporaryRes % 10; 
              highPosition = (temporaryRes - arr[j]) / 10;
          } 
      }
      return arr.reverse().join("");
    },
    calc() {
      try {
        const start = (new Date()).getTime();
        console.time('3')
        const res = this.factorial(this.num);
        console.timeEnd('3')
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


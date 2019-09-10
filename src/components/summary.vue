<template>
  <div class="summary">
    <chart :options="option"></chart>
    <h2>优化</h2>
    <h3>1. 使用worker并行执行</h3>
    <section>
      <p>Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，
      将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。
      这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程就会很流畅，
      不会被阻塞或拖慢。</p>
      <p>鉴于阶乘的特殊性，可以拆分为多个子问题。我们这里将10000拆解为5000!乘以(5001 * ... * 10000)。
        主线程和worker线程分别计算后相乘。</p>
      <div class="run">
        <el-input-number v-model="num" :min="1"></el-input-number>
        <el-button type="primary" @click="calc">calc</el-button>
        <div>
          <p>worker耗时(ms)：{{workerTime}}</p>
          <p>主线程耗时(ms)：{{mainTime}}</p>          
        </div>
        <el-input
            type="textarea"
            :rows="6"
            readonly
            v-model="result">
          </el-input>
      </div>
    </section>
    <h3>2. 此page的其他优化</h3>
    <section>
      <h4>网络</h4>
      <h4>渲染</h4>
      <h4>应用</h4>
      <h4>存储</h4>
    </section>
  </div>
</template>
<script>
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
  const num = BigInt(n);
  let res = BigInt(1);
  for(let i= BigInt(1);i<= num;i++){
    res = res * i;
  }
  return res;
}
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import chart from 'vue-echarts';
export default {
  name: 'Summary',
  components: {
    chart
  },
  data() {
    return {
      worker: null,
      num: 10000,
      workerTime: 0,
      mainTime: 0,
      result: '',
      option: {
        grid:{
          left: '17%'
        },
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {},
        series: [{
            data: [],
            type: 'line',
            smooth: true
        }]
      }
    }
  },
  mounted() {
    for(let i = 1;i <= 15; i++) {
      this.option.xAxis.data.push(i);
      this.option.series[0].data.push(Number(factorial(i)))
    }
    this.worker = new Worker('worker.js');
    this.worker.onerror = (event) =>{
       this.$message('worker.js:'+event.message);
    };
  },
  methods: {
    factorialA(n){
      if (!n && n !== 0) {
        throw "No parameter exists";
      }
      if (n && isNaN(n)) {
        throw "parameter is not a number!";
      }
      if (n<=0) {
        throw "parameter is not a positive integer!";
      }
      const end = BigInt(Math.floor(n/2));
      let res = BigInt(1);
      for(let i= BigInt(1);i<= end;i++){
        res = res * i;
      }
      return res;
    },
    calcCycle() {
      const startTime = (new Date()).getTime();
      const resA = this.factorialA(this.num);
      const endTime = (new Date()).getTime();
      this.mainTime = endTime - startTime;
      this.worker.postMessage({method: 'factorialA', args: this.num});
      this.worker.onmessage = (event) => {
        const {res, time} = event.data;
        this.result = (res * resA).toString();
        this.workerTime = time;
      }
    },
    factorialB (m) {
      if (!m && m !== 0) {
        throw "No parameter exists";
      }
      if (m && isNaN(m)) {
        throw "parameter is not a number!";
      }
      if (m<=0) {
        throw "parameter is not a positive integer!";
      }
      function recursive(n) {
        if (n === (Math.floor(m/2) + 1)) {
          return BigInt((Math.floor(m/2) + 1));
        }
        const num = BigInt(n);
        return num * recursive(n - 1);    
      }
      return recursive(m)
    },
    calcRecursive() {
      const startTime = (new Date()).getTime();
      const resA = this.factorialB(this.num);
      const endTime = (new Date()).getTime();
      this.mainTime = endTime - startTime;
      this.worker.postMessage({method: 'factorialB', args: this.num});
      this.worker.onmessage = (event) => {
        const {res, time} = event.data;
        this.result = (res * resA).toString();
        this.workerTime = time;
      }
    },
    calc() {
      try {
        this.calcRecursive();
        // this.calcCycle();
      } catch(e){
        this.$message(e.message);
      }
    }
  }
}
</script>

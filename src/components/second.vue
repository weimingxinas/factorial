<template>
  <div class="second">
    <template v-if="!supportBigint">
      <div>
        请使用支持BigInt类型的浏览器打开！鉴于使用BigInt比使用数组来计算，计算时间快了20倍左右，所以以下方式是使用BigInt实现的。
        <img :src="supportBigintImg">
      </div>
    </template>
    <template>
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
              const num = BigInt(n);
              let res = BigInt(1);
              for(let i= BigInt(1);i<= num;i++){
                res = res * i;
              }
              return res;
            }
            factorial(10000)
          </code>
        </pre>      
      </section>
      <h3>复杂度</h3>
      <section>
        O(n)
      </section>
      <h3>平均运行时间</h3>
      <section>
        76ms(系统: win10, chrome版本:76, 内存: 16g, cpu: i5)
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
    </template>
  </div>
</template>

<script>
import supportBigintImg from '@/assets/support-bigint.png';
export default {
  data() {
    return {
      num: 10000,
      result: '',
      time: '0',
      supportBigint: !!window.BigInt,
      supportBigintImg
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
      if (n<0) {
        throw "parameter is not a positive integer!";
      }
      const num = BigInt(n);
      let res = BigInt(1);
      for(let i= BigInt(1);i<= num;i++){
        res = res * i;
      }
      return res;
    },
    calc() {
      try {
        const start = (new Date()).getTime();
        console.time('1')
        const res = this.factorial(this.num);
        console.timeEnd('1')
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


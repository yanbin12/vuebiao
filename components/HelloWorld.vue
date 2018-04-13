<template>
  <div class="hello">
<el-table
    :data="tableData"
    stripe
    style="width: 100%">
            <el-table-column
      prop="state"
      label="课程表 "
      width="60">
    </el-table-column>
         <el-table-column
      prop="xingqi"
      label="星期 "
      width="60">
    </el-table-column>
    <el-table-column
      prop="yi"
      label="第一节"
      width="60">
    </el-table-column>
    <el-table-column
      prop="er"
      label="第二节"
      width="60">
    </el-table-column>
    <el-table-column
      prop="san"
      label="第三节"
      width="60">
    </el-table-column>
       <el-table-column
      prop="si"
      label="第四节"
      width="60">
    </el-table-column>
       <el-table-column
      prop="wu"
      label="第五节"
      width="60">
    </el-table-column>
       <el-table-column
      prop="liu"
      label="第六节"
      width="60">
    </el-table-column>
       <el-table-column
      prop="qi"
      label="第七节"
      width="60">
    </el-table-column>
      <el-table-column
      prop="ba"
      label="第八节"
      width="60">
    </el-table-column>  

  </el-table>

  
  </div>
</template>

<script>
export default {
      data() {
      return {
        tableData: []
      }
    },created(){
        this.$http.post('http://localhost:8000/huo',{},
                     {emulateJSON:true})
                     .then(e=> this.tableData=e.body)

    }
}
</script>

<style scoped>

</style>

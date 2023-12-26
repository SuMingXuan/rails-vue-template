<template>
  <div class="container p-[16px]">
    <div class="flex">
      <div @click="dialogVisible = true" class="rounded-full bg-[#409EFF] text-white px-[30px] py-[8px] cursor-pointer">
        新建
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="新建"
      width="30%"
      :before-close="handleClose"
    >
    <el-form :model="pageForm" label-width="100px">
        <el-form-item label="title" prop="title">
          <el-input v-model="pageForm.title"></el-input>
        </el-form-item>
        <el-form-item label="description" prop="description">
          <el-input v-model="pageForm.description"></el-input>
        </el-form-item>
        <el-form-item label="content" prop="content">
          <el-input v-model="pageForm.content"></el-input>
        </el-form-item>
        <el-form-item label="user_id" prop="user_id">
          <el-input v-model="pageForm.user_id"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="submitForm">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
    <div class="flex">
      <el-table :data="JSON.parse(props.pages)" style="width: 100%">
        <el-table-column prop="title" label="title" width="180" />
        <el-table-column prop="description" label="description" width="180" />
        <el-table-column prop="content" label="content" width="180" />
        <el-table-column prop="user_id" label="user_id" width="180" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    pages: String,
  })
  console.log(props.pages);
  const dialogVisible = ref(false)
  const pageForm = ref({
    title: '',
    description: '',
    content: '',
    user_id: '',
  })

  const submitForm = () => {
    console.log('comming');
    fetch('/pages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-CSRF-Token": csrf_token,
      },
      body: JSON.stringify(pageForm.value),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dialogVisible.value = false
          window.location.reload()
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

</script>

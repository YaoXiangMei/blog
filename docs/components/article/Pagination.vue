<template>
  <div class="flex justify-center py-2">
    <el-pagination
      background
      :page-size="pageSize"
      :hide-on-single-page="hideOnSinglePage"
      layout="prev, pager, next"
      :page-count="pageCount"
      :current-page="currentPage"
      @current-change="currentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData, useRouter } from 'vitepress'
import { ElPagination } from 'element-plus'
const { theme } = useData()

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  href: {
    type: Function,
    required: true,
  },
})
const pageSize = theme.value.pageSize
const pageCount = computed(() => props.pageCount)
const hideOnSinglePage = pageCount.value <= 1
const router = useRouter()
const currentChange = function (currentPage) {
  router.go(props.href(currentPage))
}

</script>

<style scoped>
.pagination {
    margin-top: 16px;
    display: flex;
    justify-content: center;
}
.link {
    display: inline-block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border: 1px var(--c-divider-light) solid;
    border-right: none;
}
.link.active {
    background: var(--c-brand);
    color: #fff;
    border: 1px solid var(--c-brand) !important;
}
.link:first-child {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
}
.link:last-child {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    border-right: 1px var(--c-divider-light) solid;
}
</style>

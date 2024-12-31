<template>
  <div id="viewQuestionView">
    <a-row :gutter="[24, 24]">
      <a-col :md="12" :xs="24">
        <a-tabs default-active-key="question">
          <a-tab-pane key="question" title="题目">
            <a-card v-if="question" :title="question.title">
              <a-descriptions
                title="判题条件"
                :column="{ xs: 1, md: 2, lg: 3 }"
              >
                <a-descriptions-item label="时间限制(ms)">
                  {{ question.judgeConfig.timeLimit ?? 0 }}
                </a-descriptions-item>
                <a-descriptions-item label="内存限制(KB)">
                  {{ question.judgeConfig.memoryLimit ?? 0 }}
                </a-descriptions-item>
              </a-descriptions>
              <MdViewer :value="question.content || ''" />
              <a-descriptions title="基础框架代码 (复制到编辑栏)">
                <a-descriptions-item label="">
                  {{ question.baseCode ?? 0 }}
                </a-descriptions-item>
              </a-descriptions>
              <template #extra>
                <a-space wrap>
                  <a-tag
                    v-for="(tag, index) of question.tags"
                    :key="index"
                    color="green"
                    >{{ tag }}
                  </a-tag>
                </a-space>
              </template>
            </a-card>
          </a-tab-pane>
          <a-tab-pane key="comment" title="评论" disabled> 评论区</a-tab-pane>
          <a-tab-pane key="answer" title="答案"> 暂时无法查看答案</a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :md="12" :xs="24">
        <a-form :model="form" layout="inline">
          <a-form-item
            field="language"
            label="编程语言"
            style="min-width: 240px"
          >
            <a-select
              v-model="form.language"
              :style="{ width: '320px' }"
              placeholder="选择编程语言"
            >
              <a-option>java</a-option>
              <a-option>cpp</a-option>
              <a-option>go</a-option>
              <a-option>c</a-option>
              <a-option>python</a-option>
            </a-select>
          </a-form-item>
        </a-form>
        <CodeEditor
          :value="form.submittedCode"
          :language="form.language"
          :handle-change="changeCode"
        />
        <a-divider size="0" />
        <a-button type="primary" style="min-width: 200px" @click="doSubmit">
          提交代码
        </a-button>
        <!-- 显示提交结果 -->
        <a-divider size="0" />
        <a-card
          v-if="result && result.data.message"
          :title="result.data.message"
        >
          <a-descriptions title="运行结果" :column="{ xs: 1, md: 2, lg: 3 }">
            <a-descriptions-item label="运行时间(ms)">
              {{ result.data.time }}
            </a-descriptions-item>
            <a-descriptions-item label="运行内存(KB)">
              {{ result.data.memory }}
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
        <a-card
          v-else-if="result && result.data.exception"
          :title="result.data.exception"
        >
          <a-descriptions title="运行异常" :column="{ xs: 1, md: 2, lg: 3 }">
            <a-descriptions-item label="异常信息">
              <span class="errorText">
                {{ result.data.exception }}
              </span>
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, withDefaults, defineProps } from "vue";
import message from "@arco-design/web-vue/es/message";
import CodeEditor from "@/components/CodeEditor.vue";
import MdViewer from "@/components/MdViewer.vue";
import {
  QuestionControllerService,
  QuestionSubmitAddRequest,
  QuestionVO,
} from "../../../generated";

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => "",
});

const question = ref<QuestionVO>();

const result = ref<any>();

const loadData = async () => {
  const res = await QuestionControllerService.getQuestionVoByIdUsingGet(
    props.id as any
  );
  if (res.code === 0) {
    question.value = res.data;
    console.log(res.data);
  } else {
    message.error("加载失败，" + res.message);
  }
};

const form = ref<QuestionSubmitAddRequest>({
  language: "java",
});

/**
 * 提交代码
 */
const doSubmit = async () => {
  if (!question.value?.id) {
    return;
  }

  const res = await QuestionControllerService.doQuestionSubmitUsingPost({
    ...form.value,
    questionId: question.value.id,
  });
  if (res.code === 0) {
    message.success("提交成功");
    result.value = res;
  } else {
    message.error("提交失败," + res.message);
    result.value = res;
  }
};

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

const changeCode = (value: string) => {
  form.value.submittedCode = value;
};
</script>

<style>
#viewQuestionView {
  max-width: 1400px;
  margin: 0 auto;
}

.errorText {
  color: red;
}
</style>

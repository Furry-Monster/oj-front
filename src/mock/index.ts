import Mock from "mockjs";

// 设置延迟时间
Mock.setup({
  timeout: "200-600",
});

// 题目列表数据
Mock.mock(/\/api\/questions/, "get", {
  code: 0,
  data: {
    "records|10": [
      {
        "id|+1": 1,
        title: "@ctitle(10, 20)",
        content: "@cparagraph(2, 4)",
        "tags|1-3": ["@ctitle(2, 4)"],
        "difficulty|1": ["简单", "中等", "困难"],
        "acceptedNum|0-1000": 0,
        "submitNum|100-2000": 0,
        createTime: "@datetime",
      },
    ],
    "total|100-200": 100,
    size: 10,
    current: 1,
  },
  message: "ok",
});

// 题目详情数据
Mock.mock(/\/api\/questions\/\d+/, "get", {
  code: 0,
  data: {
    "id|1-100": 1,
    title: "@ctitle(10, 20)",
    content: "@cparagraph(10, 20)",
    "tags|2-4": ["@ctitle(2, 4)"],
    "difficulty|1": ["简单", "中等", "困难"],
    "acceptedNum|0-1000": 0,
    "submitNum|100-2000": 0,
    "samples|2-3": [
      {
        input: "@sentence",
        output: "@sentence",
      },
    ],
    judgeConfig: {
      timeLimit: 1000,
      memoryLimit: 256,
      stackLimit: 128,
    },
    createTime: "@datetime",
  },
  message: "ok",
});

// 提交记录数据
Mock.mock(/\/api\/submissions/, "get", {
  code: 0,
  data: {
    "records|10": [
      {
        "id|+1": 1,
        "questionId|1-100": 1,
        "userId|1-100": 1,
        "language|1": ["Java", "Python", "C++", "JavaScript"],
        code: "@paragraph",
        "status|1": [
          "Accepted",
          "Wrong Answer",
          "Time Limit Exceeded",
          "Runtime Error",
        ],
        judgeInfo: {
          "time|1-1000": 1,
          "memory|1-256": 1,
          message: "@sentence",
        },
        createTime: "@datetime",
      },
    ],
    "total|100-200": 100,
    size: 10,
    current: 1,
  },
  message: "ok",
});

// 获取当前登录用户
Mock.mock(/\/api\/user\/get\/login/, "get", {
  code: 0,
  data: {
    id: "@id",
    userName: "@cname",
    userAccount: "@string(5,10)",
    userAvatar: "@image('100x100')",
    userRole: "admin",
    createTime: "@datetime",
    updateTime: "@datetime",
  },
  message: "ok",
});

// 用户注册
Mock.mock(/\/api\/user\/register/, "post", {
  code: 0,
  data: "@integer(1, 100)",
  message: "ok",
});

// 用户登录
Mock.mock(/\/api\/user\/login/, "post", {
  code: 0,
  data: {
    id: "@id",
    userName: "@cname",
    userAccount: "@string(5,10)",
    userAvatar: "@image('100x100')",
    userRole: "admin",
    createTime: "@datetime",
    updateTime: "@datetime",
  },
  message: "ok",
});

// 创建题目
Mock.mock(/\/api\/question\/add/, "post", {
  code: 0,
  data: "@integer(1, 100)",
  message: "ok",
});

// 删除题目
Mock.mock(/\/api\/question\/delete/, "post", {
  code: 0,
  data: true,
  message: "ok",
});

// 更新题目
Mock.mock(/\/api\/question\/update/, "post", {
  code: 0,
  data: true,
  message: "ok",
});

// 分页获取题目列表
Mock.mock(/\/api\/question\/list\/page/, "post", {
  code: 0,
  data: {
    "records|10": [
      {
        id: "@id",
        title: "@ctitle(10, 20)",
        content: "@cparagraph(2, 4)",
        "tags|1-3": ["@ctitle(2, 4)"],
        answer: "@cparagraph(2, 4)",
        "submitNum|0-1000": 0,
        "acceptedNum|0-1000": 0,
        judgeConfig: {
          timeLimit: "@integer(1000, 5000)",
          memoryLimit: "@integer(128, 512)",
          stackLimit: "@integer(128, 256)",
        },
        "judgeCase|2-5": [
          {
            input: "@sentence",
            output: "@sentence",
          },
        ],
        userId: "@id",
        createTime: "@datetime",
        updateTime: "@datetime",
      },
    ],
    "total|100-200": 100,
    size: 10,
    current: 1,
  },
  message: "ok",
});

// 根据 id 获取题目
Mock.mock(/\/api\/question\/get\/\d+/, "get", {
  code: 0,
  data: {
    id: "@id",
    title: "@ctitle(10, 20)",
    content: "@cparagraph(2, 4)",
    "tags|1-3": ["@ctitle(2, 4)"],
    answer: "@cparagraph(2, 4)",
    "submitNum|0-1000": 0,
    "acceptedNum|0-1000": 0,
    judgeConfig: {
      timeLimit: "@integer(1000, 5000)",
      memoryLimit: "@integer(128, 512)",
      stackLimit: "@integer(128, 256)",
    },
    "judgeCase|2-5": [
      {
        input: "@sentence",
        output: "@sentence",
      },
    ],
    userId: "@id",
    createTime: "@datetime",
    updateTime: "@datetime",
  },
  message: "ok",
});

// 提交题目
Mock.mock(/\/api\/question_submit\/submit/, "post", {
  code: 0,
  data: "@integer(1, 100)",
  message: "ok",
});

// 分页获取题目提交列表
Mock.mock(/\/api\/question_submit\/list\/page/, "post", {
  code: 0,
  data: {
    "records|10": [
      {
        id: "@id",
        questionId: "@id",
        userId: "@id",
        "language|1": ["Java", "Python", "C++", "JavaScript"],
        code: "@paragraph",
        "status|1": [
          "Accepted",
          "Wrong Answer",
          "Time Limit Exceeded",
          "Runtime Error",
        ],
        judgeInfo: {
          "time|1-1000": 1,
          "memory|1-256": 1,
          message: "@sentence",
        },
        createTime: "@datetime",
        updateTime: "@datetime",
      },
    ],
    "total|100-200": 100,
    size: 10,
    current: 1,
  },
  message: "ok",
});

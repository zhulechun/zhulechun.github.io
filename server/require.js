const axios = require("axios");
axios
  .post(
    "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8c99cf61-bece-47d7-b326-18c6d4efdbbd",
    {
      msgtype: "markdown",
      markdown: {
        content:
          '### IT服务中心截止至22:00单据统计:\n>同事1：今日单量:<font color="info">X</font>单，\n >同事2：今日单量:<font color="info">X</font>单； ',
        /*  \n代表换行 不能直接换行 会报错
               > 表示引用文字
          */
      },
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
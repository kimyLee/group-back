# group-app 接口文档
>维护人员：**kimmy and katherine**  
>创建时间：2017-06-07

## 接口简介
处理group-app 各个接口

##接口统一返回说明
```javascript
{
	"success": true, // 请求状态
    "code":  0，  // 错误码， 0代表成功，其他代表失败
    "data":  { // 返回数据，如有
        "id": 307,
        "real_name": "Tevin",
        "mobile": "暂无"
    },
    "message": "成功"
}
```

## 接口详情

检查登录
/api/user/checkLogin

 请求类型
GET

 请求参数
无

返回示例
```javascript
{
 ...
    "data": {
        "isLogin": true,  
        "userName": "admin001",  
        "userId": 1
    }
}
```
 备注说明
无
<hr>
登录
/api/user/signIn

 请求类型
POST

 请求参数
| 参数名 | 类型 | 必填 | 描述 | 默认值 | 参考值 |

| userName| string| 是 | 客户名 | --- | --- |
| password| string | 是| 密码 | --- | --- |

返回示例
无
 备注说明
无
<hr>
注册
/api/user/signUp

 请求类型
POST

 请求参数
| 参数名 | 类型 | 必填 | 描述 | 默认值 | 参考值 |
| --- | --- | --- | --- | --- | --- |
| userName| string| 是 | 客户名 | - | - |
| email| string | 是| 邮箱| - | - |
| password| string | 是| 密码 | - | - |
| confirmPassword| string | 是| 确认密码 | - | - |

返回示例
无
 备注说明
无
<hr>
获取任务面板卡片
/api/task/getTask

 请求类型
GET

 请求参数
无

返回示例
```javascript
{
  "data": {
    "0": [
      {
        "id": 1, // 任务id
        "step": 0, // 任务流程
        "title": "第一个项目", // 任务标题
        "priority": null,  // 优先级
        "createtime": "1496846546337", // 创建时间
        "comment": "", // 备注
        "creator": null, // 创建人
        "deadline": null, // 截止时间
        "member": null, // 成员 多个逗号隔开
        "stepname": "待规划" // 流程名
      },
      {
        "id": 2,
        "step": 0,
        "title": "第2个项目",
        "priority": null,
        "createtime": null,
        "comment": "",
        "creator": null,
        "deadline": null,
        "member": null,
        "stepname": "待规划"
      },
      {
        "id": 5,
        "step": 0,
        "title": "fghjkhgh",
        "priority": null,
        "createtime": "1496844786748",
        "comment": "",
        "creator": null,
        "deadline": null,
        "member": null,
        "stepname": "待规划"
      },
      {
        "id": 6,
        "step": 0,
        "title": "45453",
        "priority": null,
        "createtime": "1496845895277",
        "comment": "",
        "creator": null,
        "deadline": null,
        "member": null,
        "stepname": "待规划"
      }
    ],
    "1": [
      {
        "id": 3,
        "step": 1,
        "title": "3个测试你",
        "priority": null,
        "createtime": null,
        "comment": null,
        "creator": null,
        "deadline": null,
        "member": "kath,kimmy",
        "stepname": "开发中"
      }
    ],
    "2": [
      {
        "id": 4,
        "step": 2,
        "title": "4个测试",
        "priority": null,
        "createtime": null,
        "comment": null,
        "creator": null,
        "deadline": null,
        "member": "许泽珊啦啦啦",
        "stepname": "待测试"
      }
    ]
  },
  "success": true,
  "message": "获取成功",
  "code": 0
}
```
 备注说明
无

<hr>
获取流程
/api/task/getfFow

 请求类型
GET

 请求参数
无

返回示例
```javascript
{
  "data": [
    {
      "stepname": "待规划",
      "step": 0
    },
    {
      "stepname": "开发中",
      "step": 1
    },
    {
      "stepname": "待测试",
      "step": 2
    },
    {
      "stepname": "已完成",
      "step": 3
    }
  ],
  "success": true,
  "message": "获取成功",
  "code": 0
}
```
 备注说明
无

<hr>
添加任务
/api/task/addTask

 请求类型
POST

 请求参数
| 参数名 | 类型 | 必填 | 描述 | 默认值 | 参考值 |
| --- | :---: | :---: | --- | --- | --- |
| title| string| 是 | 任务标题 | - | '一则标题’ |
| step| int| 否| 任务流程| 0 | 0 |
| member| string | 否| 参与成员，多个用逗号隔开 | - | ‘kath' |
| priority| int| 否| 任务优先级 0 不紧急 1 正常 2 紧急 3 非常紧急 | - | 1 |
| comment| string | 否| 项目备注 | - | - |
| deadline| string | 否| 项目截止时间 | - | ‘2017-06-07’ |

返回示例
无
 备注说明
无

<hr>
修改任务
/api/task/updateTask

 请求类型
POST

 请求参数
| 参数名 | 类型 | 必填 | 描述 | 默认值 | 参考值 |
| --- | :---: | :---: | --- | --- | --- |
| id| int| 是 | 任务id | - | 1 |
| title| string| 是 | 任务标题 | - | '一则标题’ |
| step| int| 否| 任务流程| 0 | 0 |
| member| string | 否| 参与成员，多个用逗号隔开 | - | ‘kath' |
| priority| int| 否| 任务优先级 0 不紧急 1 正常 2 紧急 3 非常紧急 | - | 1 |
| comment| string | 否| 项目备注 | - | - |
| deadline| string | 否| 项目截止时间 | - | ‘2017-06-07’ |

返回示例
无
 备注说明
无










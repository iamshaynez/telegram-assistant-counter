# TA - Counter 打卡小助手

基于 Cloudflare Worker 和 Cloudflare Worker AI 的翻译小助手。集成与[TG-Assistant](https://github.com/iamshaynez/telegram-assistant)架构下。

## 说明

数据存储与 Cloudflare D1 数据库，实现了打卡计数相关的一些命令。

### 命令

```
- 打卡 [名词] {备注}
- 重置打卡 [名词]
- 删除打卡 [名词]
- 查询打卡 [名词] -> 查询当前打了几次
- 查询打卡历史 [名词] -> 查询过去 30 次打卡明细
- 设置打卡目标 [名词] [目标数字] [备注]
```


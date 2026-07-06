# WOWTOO 网站外网发布

## 当前结论

这个仓库已经是纯静态网站，入口文件是 `index.html`，静态资源使用相对路径引用，适合直接发布到 Pages 类静态托管服务。

截至 2026-07-06，Gitee Pages 已公开下线/不可用，因此无法只靠 Gitee Pages 完成外网访问。建议使用 GitHub Pages、Cloudflare Pages、Vercel、Netlify 或国内云厂商对象存储静态网站托管。

## GitHub Pages 发布

发布步骤：

1. 推送代码到 GitHub 的 `main` 分支。
2. 打开 GitHub 仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 中选择 `Source: Deploy from a branch`。
4. `Branch` 选择 `main`，目录选择 `/(root)`。
5. 点击 `Save`，等待 Pages 自动发布。
6. 访问 `https://djloveml.github.io/wowtoo/`。

## Gitee 代码同步

如果仍希望在 Gitee 保存一份代码，可以添加 Gitee 远程仓库：

```powershell
git remote add gitee https://gitee.com/<你的Gitee用户名>/wowtoo.git
git push gitee main
```

但这只会同步代码，不会恢复 Gitee Pages 的静态网站访问能力。

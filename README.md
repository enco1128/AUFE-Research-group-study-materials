# 课题组科研入门

深度学习 / 计算机视觉 / 医学影像 AI · **网页自学 + Overleaf 论文式手册 + 分阶段资源** 三端对齐。

仓库：https://github.com/enco1128/Research-group-study-materials

| 入口 | 说明 |
|------|------|
| **学习网页** | [`docs/`](docs/)（VitePress，结构参考[智科全家桶](https://njuis-students.github.io/)） |
| **Overleaf 手册** | [`latex/main.tex`](latex/main.tex) · XeLaTeX · 论文体例全流程 |
| **分阶段资源** | [`resources/`](resources/) · 与网页/手册同编号 |
| **个人模板** | [`templates/`](templates/) |

---

## 快速开始

### 1. 读网页（推荐）

```bash
git clone https://github.com/enco1128/Research-group-study-materials.git
cd Research-group-study-materials
npm install
npm run docs:dev
```

浏览器打开本地提示的地址。也可直接在 GitHub 浏览 `docs/**/*.md`。

若已开启 GitHub Pages：`https://enco1128.github.io/Research-group-study-materials/`（私有仓需账号有权限）。

启用 Pages：仓库 **Settings → Pages → Source = GitHub Actions**；本地已有工作流文件 [`.github/workflows/pages.yml`](.github/workflows/pages.yml)，若尚未出现在远程，请先执行 `gh auth refresh -s workflow` 后将该文件推送。

### 2. Overleaf 编辑手册

1. Overleaf → **Import from GitHub** → 选本仓库  
2. 主文件：`latex/main.tex`  
3. 编译器：**XeLaTeX**

### 3. 八周路线

详见 [`docs/7-路线图/1-八周学习路径.md`](docs/7-路线图/1-八周学习路径.md)，个人表复制 [`templates/learning_plan.md`](templates/learning_plan.md)。

| 周 | 重点 | 网页 | 资源 |
|----|------|------|------|
| 1 | 环境 + PyTorch | `docs/3-代码/`、`docs/1-导论/` | `resources/03-coding/` |
| 2–3 | 文献方法与综述 | `docs/2-文献/` | `resources/02-literature/` |
| 4–5 | 经典模型 + 读代码 | `docs/4-实验/`、`docs/3-代码/` | `resources/04-experiment/` |
| 6 | 课题拆解 | `docs/6-课题范式/` | `resources/06-domain/` |
| 7 | 汇报 | `docs/5-写作/` | `resources/05-writing/` |
| 8 | roadmap | `docs/7-路线图/` | `templates/` |

---

## 三端编号对照

| ID | 论文式章节（LaTeX） | 网页 | 资源 |
|----|---------------------|------|------|
| 01 | Introduction | `docs/1-导论/` | `resources/01-mindset/` |
| 02 | Related Work | `docs/2-文献/` | `resources/02-literature/` |
| 03 | Method | `docs/3-代码/` | `resources/03-coding/` |
| 04 | Experiments | `docs/4-实验/` | `resources/04-experiment/` |
| 05 | Writing | `docs/5-写作/` | `resources/05-writing/` |
| 06 | Case Study | `docs/6-课题范式/` | `resources/06-domain/` |
| 07 | Conclusion | `docs/7-路线图/` | `templates/` |
| A | Appendix | `docs/8-附录/` | `resources/08-links/` |

```
├── docs/           # VitePress 学习网页
├── latex/          # Overleaf 论文式手册
├── resources/      # 按阶段归档的模板与范例
├── templates/      # 学习计划等通用模板
└── README.md       # 本入口
```

## 贡献

修正失效链接或补充经验：Issue / PR。勿提交隐私数据与账号密码。

## 许可

见 [LICENSE](LICENSE)（CC BY 4.0）。

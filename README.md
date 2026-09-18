# 课题组科研入门手册

深度学习 / 计算机视觉 / 医学影像 AI 方向的**新人入门材料**：GitHub 上按路径自学，Overleaf 上协作编辑 LaTeX 正文。

| 你想… | 去哪里 |
|--------|--------|
| 按周学习 | 下文「8 周学习路径」 |
| 读完整手册 PDF | 编译 [`latex/main.tex`](latex/main.tex)，或在 Overleaf 打开本仓库 |
| 改手册内容 | Overleaf ↔ GitHub 同步（见下） |
| 填文献/数据/周报 | [`templates/`](templates/) |
| 看清单范例 | [`assets/reading-list/`](assets/reading-list/) |

---

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/<YOUR_ORG_OR_USER>/lab-onboarding.git
cd lab-onboarding
```

（推送成功后，将上方 URL 换成真实仓库地址。）

### 2. 在 Overleaf 中编辑（推荐）

1. 打开 [Overleaf](https://www.overleaf.com/) → **New Project** → **Import from GitHub**
2. 授权并选择本仓库
3. **Menu → Settings → Main document** 设为 `latex/main.tex`
4. **Menu → Compiler** 选择 **XeLaTeX**
5. 编译生成 PDF；修改后用 Overleaf 的 Git 同步推回 GitHub

本地编译（可选）：

```bash
cd latex
xelatex main.tex
xelatex main.tex
```

### 3. 手册章节导航

| 章 | 文件 | 内容 |
|----|------|------|
| 1 | `latex/chapters/01-welcome.tex` | 导读与能力目标 |
| 2 | `02-mindset.tex` | 心态、误区、选题与拒稿 |
| 3 | `03-literature.tex` | 查文献、精读、周汇报 |
| 4 | `04-coding.tex` | PyTorch、工程结构、Claude Code |
| 5 | `05-idea-experiment.tex` | Idea、实验、精读清单 |
| 6 | `06-writing-tools.tex` | 写作与工具箱 |
| 7 | `07-domain.tex` | 医学影像 AI 问题拆解范式 |
| 8 | `08-resources.tex` | 链接总表 |

---

## 8 周学习路径

> 可复制 [`templates/learning_plan.md`](templates/learning_plan.md) 做成个人计划。

| 周 | 目标 | 必做 | 产出 |
|----|------|------|------|
| 1 | 环境与框架 | 读第 1、4 章；完成 [PyTorch 60-min](https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html)；浏览 Claude Code 入门链接 | 环境可跑 + 学习笔记 |
| 2 | 文献方法 | 读第 3 章；配置 Zotero；用 `templates/literature_list.csv` 建 list | ≥10 条文献记录 |
| 3 | 综述精读 | 精读 1 篇领域综述；对照「三个一定」写笔记 | 综述笔记 |
| 4 | 经典模型 | 精读 ResNet 或 Transformer；参考 [mli/paper-reading](https://github.com/mli/paper-reading) | 精读笔记 |
| 5 | 读代码 | 读第 4 章目录规范；精读 1 个开源仓库入口 | 架构对照笔记 |
| 6 | 课题对齐 | 读第 7 章；把课题拆成子问题；数据摸底 | 1 页问题拆解 |
| 7 | 第一次汇报 | 用周报/论文汇报 checklist；参考 `assets/examples/` | 组会 PPT + 周报 |
| 8 | 巩固 | 小复现或 baseline；读第 5–6 章；定下阶段 roadmap | 下阶段计划 |

组内录像/网盘链接见手册第 8 章（若失效请联系管理员）。

---

## 仓库结构

```
lab-onboarding/
├── README.md                 # 本学习门户
├── LICENSE
├── latex/                    # Overleaf 主工程
│   ├── main.tex
│   ├── preamble.tex
│   ├── chapters/
│   └── figures/
├── assets/
│   ├── tips/                 # 查文献与汇报要点 PDF
│   ├── examples/             # 周报结构范例
│   └── reading-list/         # 文献/数据集清单范例
└── templates/                # 可复制模板
```

**未纳入仓库的材料**（体积或敏感信息）：超大论文 PDF、原始项目进展报告、Overleaf 官方长教程 PDF 等。需要时向组内索取，勿直接公开未脱敏内容。

---

## 贡献

- 修正失效链接、补充经验：欢迎 Issue / Pull Request
- 大改章节前建议先开 Issue 对齐结构
- 请勿提交含隐私数据、未授权数据集或账号密码的文件

## 许可

见 [LICENSE](LICENSE)（CC BY 4.0：允许分享与改编，需署名）。

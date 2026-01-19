# XML 对比分析报告

生成时间: 2026/1/16 16:37:50

---

## 📊 总体概况

- **总文件数**: 3012
- **通过**: 523 (17.4%)
- **失败**: 2489 (82.6%)
- **错误**: 0 (0.0%)
- **仅在源目录**: 0
- **仅在目标目录**: 0

## 📑 元数据类型概览

| 元数据类型 | 总数 | 通过 | 失败 | 错误 | 通过率 |
|-----------|------|------|------|------|--------|
| AppForm | 381 | 0 | 381 | 0 | 0.0% |
| AppGrid | 611 | 0 | 611 | 0 | 0.0% |
| Entity | 580 | 0 | 580 | 0 | 0.0% |
| FunctionPage | 831 | 0 | 831 | 0 | 0.0% |
| MetadataRelationship | 480 | 480 | 0 | 0 | 100.0% |
| MyApplication | 1 | 0 | 1 | 0 | 0.0% |
| MyFunction | 34 | 0 | 34 | 0 | 0.0% |
| Param | 80 | 29 | 51 | 0 | 36.3% |
| ParamType | 14 | 14 | 0 | 0 | 100.0% |

## 🔍 详细分析

### AppForm

**统计信息**：
- 总文件数: 381
- 通过: 0 (0.0%)
- 失败: 381 (100.0%)
- 错误: 0 (0.0%)

#### 🔴 差异模式分类统计（按频率排序）

| 差异分类 | 出现次数 | 影响的文件数占比 |
|---------|----------|-----------------|
| 【布局】规则表达式差异 | 1543 | 405.0% |
| 【控件】其他控件属性差异 | 629 | 165.1% |
| 【数据源】可用字段配置差异 | 577 | 151.4% |
| 【元数据】扩展属性差异 | 372 | 97.6% |
| 【脚本】代码配置差异 | 336 | 88.2% |
| 【数据源】字段类型定义差异 | 307 | 80.6% |
| 【显示】名称/标题差异 | 287 | 75.3% |
| 【数据源】其他配置差异 | 267 | 70.1% |
| 【类型】数组与对象类型不匹配 | 143 | 37.5% |
| 【其他】未分类差异 | 99 | 26.0% |
| 【布局】区域/分组结构差异 | 58 | 15.2% |
| 【数据源】关系图配置差异 | 29 | 7.6% |
| 【布局】工具栏配置差异 | 20 | 5.2% |
| 【控件】文本框配置差异 | 13 | 3.4% |

#### ⚠️ 缺失字段统计（目录B中缺失）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| form.datasource.command._ | 376 | 98.7% |
| form.components.component[*].label.fieldTips | 27 | 7.1% |
| form.components.component[*].column.textbox | 24 | 6.3% |
| form.components.component[*].column.spinner | 15 | 3.9% |
| form.components.component[*].column.radiobuttonlist | 14 | 3.7% |
| form.components.component[*].column.dataSourceType | 13 | 3.4% |
| form.components.component[*].column.subgrid | 13 | 3.4% |
| form.components.component[*].column.combobox | 9 | 2.4% |
| form.components.component[*].column.datepicker | 7 | 1.8% |
| form.components.component[*].column.textarea | 3 | 0.8% |
| form.components.component[*].column.treeselect | 3 | 0.8% |
| form.components.component[*].column.subcontrolformula | 3 | 0.8% |
| form.components.component[*].column.checkboxlist | 2 | 0.5% |
| form.components.component[*].column.tips | 2 | 0.5% |
| form.components.component[*].column.subtreegrid | 2 | 0.5% |
| form.components.component[*].column.fileupload | 2 | 0.5% |
| form.components.component[*].column.businesscomponent | 2 | 0.5% |
| form.pageClientType | 1 | 0.3% |
| form.components.component[*].column.textboxlist | 1 | 0.3% |
| form.components.component[*].column.toggleswitch | 1 | 0.3% |

*注: 仅显示前20个高频缺失字段，共有 21 种不同的缺失字段*

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| form.layout.regions.region.groups.group[*].tips | 490 | 128.6% |
| form.layout.regions.region.groups.group[*].rows.row[*].cells.cell[*].column.enableAI | 448 | 117.6% |
| form.layout.toolbars.toolbar.groups.group[*].items.item[*].iconClass | 443 | 116.3% |
| form.layout.regions.region.groups.group[*].groupId | 426 | 111.8% |
| form.layout.toolbars.toolbar.groups.group[*].items.item[*].iconClassUrl | 414 | 108.7% |
| form.dependentresources | 288 | 75.6% |
| form.workflow | 269 | 70.6% |
| form.layout.regions.region.groups.group[*].rows.row[*].cells.cell[*].column.textbox.showMaxLength | 264 | 69.3% |
| form.layout.regions.region.groups.group[*].rows.row[*].cells.cell[*].column.disableUserHide | 244 | 64.0% |
| form.layout.regions.region.groups.group[*].rows.row[*].cells.cell.column.enableAI | 219 | 57.5% |
| form.layout.hiddens.hidden[*].customprops | 206 | 54.1% |
| form.layout.hiddens.hidden[*].events | 206 | 54.1% |
| form.layout.regions.region.groups.group.tips | 197 | 51.7% |
| form.datasource.performanceoptimizehints | 195 | 51.2% |
| form.layout.regions.region.groups.group[*].rows.row[*].cells.cell[*].column.spinner.showMagnitudeTooltip | 183 | 48.0% |
| form.layout.regions.region.groups.group.rows.row[*].cells.cell.column.enableAI | 173 | 45.4% |
| form.layout.regions.region.groups.group.groupId | 166 | 43.6% |
| form.layout.regions.region.groups.group[*].rows.row[*].cells.cell.column.disableUserHide | 124 | 32.5% |
| form.layout.regions.region.groups.group.rows.row[*].cells.cell.column.disableUserHide | 105 | 27.6% |
| form.layout.regions.region.groups.group.rows.row[*].cells.cell[*].column.enableAI | 104 | 27.3% |

*注: 仅显示前20个高频多余字段，共有 227 种不同的多余字段*

---

### AppGrid

**统计信息**：
- 总文件数: 611
- 通过: 0 (0.0%)
- 失败: 611 (100.0%)
- 错误: 0 (0.0%)

#### 🔴 差异模式分类统计（按频率排序）

| 差异分类 | 出现次数 | 影响的文件数占比 |
|---------|----------|-----------------|
| 【布局】其他布局配置差异 | 2586 | 423.2% |
| 【数据源】其他配置差异 | 2388 | 390.8% |
| 【数据源】关系图配置差异 | 1663 | 272.2% |
| 【布局】规则表达式差异 | 606 | 99.2% |
| 【元数据】扩展属性差异 | 603 | 98.7% |
| 【脚本】代码配置差异 | 386 | 63.2% |
| 【布局】工具栏配置差异 | 374 | 61.2% |
| 【数据源】字段类型定义差异 | 320 | 52.4% |
| 【数据源】可用字段配置差异 | 297 | 48.6% |
| 【布局】区域/分组结构差异 | 263 | 43.0% |
| 【控件】其他控件属性差异 | 103 | 16.9% |
| 【类型】数组与对象类型不匹配 | 73 | 11.9% |
| 【依赖】依赖资源配置差异 | 1 | 0.2% |

#### ⚠️ 缺失字段统计（目录B中缺失）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| grid.extendgrid | 251 | 41.1% |
| grid.layout.filter.conditions.condition[*].isCurrent | 15 | 2.5% |
| grid.layout.views.view.layout.summarylayout.xsi:nil | 6 | 1.0% |
| grid.layout.filter.conditions.condition[*].label | 2 | 0.3% |
| grid.layout.toolbars.toolbar[*].groups.group[*].items.item.behavior.dataselectrule.dataselectfields.dataselectfield[*].mapField | 2 | 0.3% |
| grid.layout.toolbars.toolbar[*].groups.group[*].items.item.behavior.dataselectrule.dataselectfields.dataselectfield[*].dataType | 2 | 0.3% |
| grid.layout.filter.conditions.condition[*].combobox | 1 | 0.2% |
| grid.layout.filter.conditions.condition[*].textbox | 1 | 0.2% |
| grid.layout.views.view.datasource.diagrams.diagram[*].iscurrent | 1 | 0.2% |
| grid.layout.filter.conditions.condition.isCurrent | 1 | 0.2% |
| grid.layout.filter.components.component[*].combobox | 1 | 0.2% |
| grid.layout.filter.components.component[*].search | 1 | 0.2% |

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| grid.layout.views.view.layout.columns.column[*].enableAI | 1224 | 200.3% |
| grid.layout.permanentfilter | 603 | 98.7% |
| grid.layout.views.view.layout.columns.column[*].textbox.showMaxLength | 574 | 93.9% |
| grid.layout.secondProjectFilterLabel | 500 | 81.8% |
| grid.layout.views.view.layout.hiddens.hidden[*].customprops | 460 | 75.3% |
| grid.layout.views.view.layout.hiddens.hidden[*].events | 460 | 75.3% |
| grid.dependentresources | 409 | 66.9% |
| grid.layout.totalCountingMode | 409 | 66.9% |
| grid.layout.views.view.layout.columns.column[*].spinner.showMagnitudeTooltip | 386 | 63.2% |
| grid.layout.views.view[*].layout.columns.column[*].enableAI | 323 | 52.9% |
| grid.layout.projectFilterLabel | 291 | 47.6% |
| grid.layout.views.view.datasource.performanceoptimizehints | 281 | 46.0% |
| grid.layout.views.view[*].layout.columns.column[*].spinner.showMagnitudeTooltip | 232 | 38.0% |
| grid.layout.filter.enableMemory | 195 | 31.9% |
| grid.enableUserSettings | 180 | 29.5% |
| grid.layout.views.view.datasource.fields.field[*].fields | 145 | 23.7% |
| grid.layout.filter.components.component[*].label.tips | 131 | 21.4% |
| grid.layout.views.view[*].layout.columns.column[*].textbox.showMaxLength | 130 | 21.3% |
| grid.layout.views.view.layout.columns.combine[*].rows.row[*].columns.column.enableAI | 112 | 18.3% |
| grid.layout.views.view[*].layout.columns.combine[*].rows.row[*].columns.column.enableAI | 95 | 15.5% |

*注: 仅显示前20个高频多余字段，共有 277 种不同的多余字段*

---

### Entity

**统计信息**：
- 总文件数: 580
- 通过: 0 (0.0%)
- 失败: 580 (100.0%)
- 错误: 0 (0.0%)

#### 🔴 差异模式分类统计（按频率排序）

| 差异分类 | 出现次数 | 影响的文件数占比 |
|---------|----------|-----------------|
| 【实体】实体属性定义差异 | 580 | 100.0% |

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| metadataentity.enableFieldAttribute | 316 | 54.5% |
| metadataentity.Scope | 128 | 22.1% |
| metadataentity.relationships | 128 | 22.1% |

---

### FunctionPage

**统计信息**：
- 总文件数: 831
- 通过: 0 (0.0%)
- 失败: 831 (100.0%)
- 错误: 0 (0.0%)

#### 🔴 差异模式分类统计（按频率排序）

| 差异分类 | 出现次数 | 影响的文件数占比 |
|---------|----------|-----------------|
| 【功能页】页面布局配置差异 | 1321 | 159.0% |
| 【布局】其他布局配置差异 | 1022 | 123.0% |
| 【元数据】扩展属性差异 | 825 | 99.3% |
| 【脚本】代码配置差异 | 701 | 84.4% |
| 【数据源】可用字段配置差异 | 162 | 19.5% |
| 【布局】区域/分组结构差异 | 80 | 9.6% |
| 【数据源】字段类型定义差异 | 62 | 7.5% |
| 【布局】工具栏配置差异 | 10 | 1.2% |
| 【布局】规则表达式差异 | 4 | 0.5% |

#### ⚠️ 缺失字段统计（目录B中缺失）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| functionpage.extendfunctionpage | 372 | 44.8% |
| functionpage.components.component[*].datasource.diagrams.diagram[*].iscurrent | 4 | 0.5% |

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| functionpage.components.component[*].formulas | 164 | 19.7% |
| functionpage.inheritscope.controlopeninfos | 85 | 10.2% |
| functionpage.components.component[*].datasource.fields.field[*].fields | 80 | 9.6% |
| functionpage.components.component[*].hiddenfields.hiddenfield[*].customprops | 79 | 9.5% |
| functionpage.components.component[*].hiddenfields.hiddenfield[*].events | 79 | 9.5% |
| functionpage.components.component[*].apppage.emptyDataStyle | 63 | 7.6% |
| functionpage.components.component[*].datasource.performanceoptimizehints | 52 | 6.3% |
| functionpage.components.component[*].tabitem.enableIndicatorExtend | 51 | 6.1% |
| functionpage.components.component[*].textarea.heightType | 50 | 6.0% |
| functionpage.components.component[*].textarea.rows | 50 | 6.0% |
| functionpage.components.component[*].datasource.fixedsortings | 44 | 5.3% |
| functionpage.components.component[*].datasource.summaries | 44 | 5.3% |
| functionpage.pagelayout.cells.cell.cells.cell[*].infoprofile.indicatorfields.indicatorfield[*].numberfieldconfig.decimalPlacesType | 43 | 5.2% |
| functionpage.components.component[*].formats | 41 | 4.9% |
| functionpage.pagelayout.cells.cell.cells.cell[*].infoprofile.datasource.performanceoptimizehints | 35 | 4.2% |
| functionpage.components.component[*].appgrid.showloadedtext | 32 | 3.9% |
| functionpage.components.component[*].formats.format[*].optionformat.multiple | 28 | 3.4% |
| functionpage.components.component[*].popup.optionsource.optionsdatasource.datasource.fields.field[*].fields | 28 | 3.4% |
| functionpage.components.component[*].combobox.optionsource.optionsdatasource.datasource.fields.field[*].fields | 26 | 3.1% |
| functionpage.components.component[*].formats.format[*].numberformat.decimalDigitType | 22 | 2.6% |

*注: 仅显示前20个高频多余字段，共有 132 种不同的多余字段*

---

### MetadataRelationship

**统计信息**：
- 总文件数: 480
- 通过: 480 (100.0%)
- 失败: 0 (0.0%)
- 错误: 0 (0.0%)

✅ **所有文件对比通过，无差异！**

---

### MyApplication

**统计信息**：
- 总文件数: 1
- 通过: 0 (0.0%)
- 失败: 1 (100.0%)
- 错误: 0 (0.0%)

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| myapplication.isAi | 1 | 100.0% |

---

### MyFunction

**统计信息**：
- 总文件数: 34
- 通过: 0 (0.0%)
- 失败: 34 (100.0%)
- 错误: 0 (0.0%)

#### 🔴 差异模式分类统计（按频率排序）

| 差异分类 | 出现次数 | 影响的文件数占比 |
|---------|----------|-----------------|
| 【标识】ID/GUID差异 | 42 | 123.5% |
| 【元数据】扩展属性差异 | 34 | 100.0% |

#### ⚠️ 缺失字段统计（目录B中缺失）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| myfunction.extendmyfunction.xsi:nil | 12 | 35.3% |

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| myfunction.extendmyfunction.extendVersion | 12 | 35.3% |
| myfunction.actiongroups | 2 | 5.9% |
| myfunction.rights | 2 | 5.9% |
| myfunction.apirightrules | 2 | 5.9% |
| myfunction.homepages | 2 | 5.9% |
| myfunction.homepages.homepage.source | 1 | 2.9% |

---

### Param

**统计信息**：
- 总文件数: 80
- 通过: 29 (36.3%)
- 失败: 51 (63.7%)
- 错误: 0 (0.0%)

#### 🔴 差异模式分类统计（按频率排序）

| 差异分类 | 出现次数 | 影响的文件数占比 |
|---------|----------|-----------------|
| 【其他】未分类差异 | 27 | 33.8% |
| 【顺序】排序/索引差异 | 27 | 33.8% |

#### ➕ 多余字段统计（目录B中多出）

| 字段路径模式 | 出现次数 | 影响率 |
|------------|----------|--------|
| param.unittextsystemparam | 43 | 53.8% |
| param.customizeLoadDataApi | 20 | 25.0% |
| param.customizedConfigUrl | 20 | 25.0% |
| param.templates.template.text | 5 | 6.3% |
| param.customizedUrl | 4 | 5.0% |
| param.templates.template.order | 3 | 3.8% |

---

### ParamType

**统计信息**：
- 总文件数: 14
- 通过: 14 (100.0%)
- 失败: 0 (0.0%)
- 错误: 0 (0.0%)

✅ **所有文件对比通过，无差异！**

---

## 💡 分析建议

### AppForm

⚠️ **警告**: 通过率仅为 0.0%，需要重点关注！

🔍 **高频差异分类**: "【布局】规则表达式差异"
   - 出现次数: 1543
   - 影响文件占比: 405.0%
   - 建议: 优先排查此类差异的根本原因

📊 **差异分类排名**:
   1. 【布局】规则表达式差异: 1543次 (405.0%)
   2. 【控件】其他控件属性差异: 629次 (165.1%)
   3. 【数据源】可用字段配置差异: 577次 (151.4%)

---

### AppGrid

⚠️ **警告**: 通过率仅为 0.0%，需要重点关注！

🔍 **高频差异分类**: "【布局】其他布局配置差异"
   - 出现次数: 2586
   - 影响文件占比: 423.2%
   - 建议: 优先排查此类差异的根本原因

📊 **差异分类排名**:
   1. 【布局】其他布局配置差异: 2586次 (423.2%)
   2. 【数据源】其他配置差异: 2388次 (390.8%)
   3. 【数据源】关系图配置差异: 1663次 (272.2%)

---

### Entity

⚠️ **警告**: 通过率仅为 0.0%，需要重点关注！

🔍 **高频差异分类**: "【实体】实体属性定义差异"
   - 出现次数: 580
   - 影响文件占比: 100.0%
   - 建议: 优先排查此类差异的根本原因

---

### FunctionPage

⚠️ **警告**: 通过率仅为 0.0%，需要重点关注！

🔍 **高频差异分类**: "【功能页】页面布局配置差异"
   - 出现次数: 1321
   - 影响文件占比: 159.0%
   - 建议: 优先排查此类差异的根本原因

📊 **差异分类排名**:
   1. 【功能页】页面布局配置差异: 1321次 (159.0%)
   2. 【布局】其他布局配置差异: 1022次 (123.0%)
   3. 【元数据】扩展属性差异: 825次 (99.3%)

---

### MyApplication

⚠️ **警告**: 通过率仅为 0.0%，需要重点关注！

---

### MyFunction

⚠️ **警告**: 通过率仅为 0.0%，需要重点关注！

🔍 **高频差异分类**: "【标识】ID/GUID差异"
   - 出现次数: 42
   - 影响文件占比: 123.5%
   - 建议: 优先排查此类差异的根本原因

📊 **差异分类排名**:
   1. 【标识】ID/GUID差异: 42次 (123.5%)
   2. 【元数据】扩展属性差异: 34次 (100.0%)

---

### Param

⚠️ **警告**: 通过率仅为 36.3%，需要重点关注！

🔍 **高频差异分类**: "【其他】未分类差异"
   - 出现次数: 27
   - 影响文件占比: 33.8%
   - 建议: 优先排查此类差异的根本原因

📊 **差异分类排名**:
   1. 【其他】未分类差异: 27次 (33.8%)
   2. 【顺序】排序/索引差异: 27次 (33.8%)

---

## 📝 总结

✅ **完全通过的类型** (2/9):
   - MetadataRelationship
   - ParamType

❌ **存在差异的类型** (7/9):
   - AppForm (通过率: 0.0%, 失败: 381个)
   - AppGrid (通过率: 0.0%, 失败: 611个)
   - Entity (通过率: 0.0%, 失败: 580个)
   - FunctionPage (通过率: 0.0%, 失败: 831个)
   - MyApplication (通过率: 0.0%, 失败: 1个)
   - MyFunction (通过率: 0.0%, 失败: 34个)
   - Param (通过率: 36.3%, 失败: 51个)

⚠️ **需要处理的问题文件总数**: 2489

**处理建议**:
1. 按照上述差异分类统计，优先处理高频差异问题
2. 关注通过率低于80%的元数据类型
3. 对于系统性差异（如元数据扩展属性、控件配置等），可能需要统一的解决方案
4. 查看HTML报告中的具体差异详情，了解差异的实际值

---

*报告由批量XML对比工具自动生成*
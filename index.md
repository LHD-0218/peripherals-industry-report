---
layout: default
title: 鼠标与键盘市场情报平台 - 每日追踪新品、价格、品牌动向与渠道趋势
---

<!-- Hero Section -->
<div class="hero-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="hero-content">
                    <h1>鼠标与键盘市场情报平台</h1>
                    <p>每日追踪新品发布、价格波动、品牌动态与渠道趋势，为决策提供数据支撑</p>
                    <div class="btn-container d-flex gap-3">
                        <a href="/reports/daily/" class="btn btn-primary">查看今日日报</a>
                        <a href="#intelligence-overview" class="btn btn-outline-light">进入情报总览</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <!-- Intelligence Overview Panel -->
                <div class="intelligence-panel">
                    <h3 class="panel-title">今日情报总览</h3>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div>
                            <div class="metric-value">127</div>
                            <div class="metric-label">今日新增动态</div>
                        </div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-tag"></i>
                        </div>
                        <div>
                            <div class="metric-value">8</div>
                            <div class="metric-label">新品数量</div>
                        </div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div>
                            <div class="metric-value">23</div>
                            <div class="metric-label">价格异动</div>
                        </div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div>
                            <div class="metric-value">Keychron</div>
                            <div class="metric-label">热门品牌</div>
                        </div>
                    </div>
                    <div style="background: rgba(0, 0, 0, 0.3); border-radius: 12px; padding: 1.25rem; margin-top: 1.5rem; text-align: center; font-size: 0.95rem; color: var(--text-secondary);">
                        <small>📈 过去7天热度趋势<br><em>数据更新: 2026-03-31 09:00</em></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- KPI Section -->
<div class="kpi-section" id="intelligence-overview">
    <div class="container">
        <div class="section-title">
            <h2>行业数据概览</h2>
            <p>专业KPI指标，实时监控市场动态</p>
        </div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-3">
                <div class="kpi-card">
                    <div class="kpi-icon">
                        <i class="fas fa-keyboard"></i>
                    </div>
                    <div class="kpi-value">¥586</div>
                    <div class="kpi-label">机械键盘均价</div>
                    <span class="kpi-badge">
                        <i class="fas fa-arrow-up"></i> 较昨日 +2.1%
                    </span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="kpi-card">
                    <div class="kpi-icon">
                        <i class="fas fa-mouse"></i>
                    </div>
                    <div class="kpi-value">63%</div>
                    <div class="kpi-label">无线鼠标占比</div>
                    <span class="kpi-badge" style="background: rgba(6, 182, 212, 0.2); color: #06b6d4;">
                        <i class="fas fa-chart-line"></i> 近30天新高
                    </span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="kpi-card">
                    <div class="kpi-icon">
                        <i class="fas fa-tv"></i>
                    </div>
                    <div class="kpi-value">240Hz</div>
                    <div class="kpi-label">高刷电竞显示器</div>
                    <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.25rem; flex-wrap: wrap;">
                        <span style="padding: 0.35rem 0.85rem; border-radius: 16px; font-size: 0.85rem; background: rgba(99, 102, 241, 0.2); color: var(--primary); font-weight: 600;">高刷</span>
                        <span style="padding: 0.35rem 0.85rem; border-radius: 16px; font-size: 0.85rem; background: rgba(99, 102, 241, 0.2); color: var(--primary); font-weight: 600;">低延迟</span>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="kpi-card">
                    <div class="kpi-icon">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <div class="kpi-value">15.3%</div>
                    <div class="kpi-label">市场增长率</div>
                    <span class="kpi-badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">
                        <i class="fas fa-arrow-up"></i> 季度趋势向上
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Report Tabs -->
<div class="report-tabs">
    <div class="container">
        <div class="section-title">
            <h2>情报报告中心</h2>
            <p>多维度深度分析报告</p>
        </div>
        
        <ul class="nav nav-tabs" id="reportTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="daily-tab" data-bs-toggle="tab" data-bs-target="#daily" type="button" role="tab">日报</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="weekly-tab" data-bs-toggle="tab" data-bs-target="#weekly" type="button" role="tab">周报</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab">月报</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab">总结</button>
            </li>
        </ul>
        
        <div class="tab-content" id="reportTabContent">
            <!-- Daily Tab -->
            <div class="tab-pane fade show active" id="daily" role="tabpanel">
                <div class="row g-4">
                    {% assign daily_reports = site.posts | where_exp: "post", "post.tags contains '日报'" | reverse %}
                    {% for post in daily_reports limit:3 %}
                    <div class="col-md-6 col-lg-4">
                        <div class="report-card">
                            <div class="report-header" style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.25rem; gap: 1rem;">
                                <span class="report-type">日报</span>
                                <span class="report-date" style="color: var(--text-secondary); font-size: 0.95rem; align-self: center;">{{ post.date | date: "%m/%d" }}</span>
                            </div>
                            <h4 class="report-title">{{ post.title | replace: "2026年", "" | replace: "外设行业日报", "" }}</h4>
                            <p class="report-excerpt" style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.75rem; font-size: 1.05rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                            <div style="display: flex; align-items: center; justify-content: between; margin-top: 1rem;">
                                <span style="padding: 0.35rem 0.85rem; border-radius: 16px; font-size: 0.85rem; background: rgba(99, 102, 241, 0.3); color: var(--primary); font-weight: 600;">Keychron</span>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">重要性: 高</span>
                            </div>
                            <a href="{{ post.url | relative_url }}" class="read-more mt-3">查看详情 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
            
            <!-- Weekly Tab -->
            <div class="tab-pane fade" id="weekly" role="tabpanel">
                <div class="row">
                    <div class="col-md-6">
                        <h4 style="margin-bottom: 1rem; color: var(--text-primary);">一周趋势分析</h4>
                        <p class="text-muted mb-3" style="color: var(--text-secondary);">重点品牌表现与市场趋势</p>
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); color: var(--text-secondary); line-height: 1.6;">
                                <span style="color: var(--primary); margin-right: 0.5rem;">•</span> Keychron (+12%) - 新品Q5 Pro发布带动增长
                            </li>
                            <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); color: var(--text-secondary); line-height: 1.6;">
                                <span style="color: var(--primary); margin-right: 0.5rem;">•</span> VGN (+8%) - 国产电竞鼠标持续热销
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
---
layout: default
title: 鼠标与键盘市场情报平台 - 每日追踪新品、价格、品牌动向与渠道趋势
---

{% include data-loader.html %}

<!-- Hero Section -->
<div class="hero-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="hero-content">
                    <h1>鼠标与键盘市场情报平台</h1>
                    <p>每日追踪新品发布、价格波动、品牌动态与渠道趋势，为决策提供数据支撑</p>
                    <div class="btn-container d-flex gap-5">
                        <a href="/reports/daily/" class="btn btn-primary">查看今日日报</a>
                        <a href="#intelligence-overview" class="btn btn-outline-light">进入情报总览</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <!-- Intelligence Overview Panel -->
                <div class="intelligence-panel">
                    <h3 class="panel-title"><i class="fas fa-chart-line"></i> 今日情报面板</h3>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div>
                            <div class="metric-value">{{ overview_data.metrics.dailyDynamics }}</div>
                            <div class="metric-label">今日新增动态</div>
                        </div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-tag"></i>
                        </div>
                        <div>
                            <div class="metric-value">{{ overview_data.metrics.newProducts }}</div>
                            <div class="metric-label">新品数量</div>
                        </div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div>
                            <div class="metric-value">{{ overview_data.metrics.priceFluctuations }}</div>
                            <div class="metric-label">价格异动</div>
                        </div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-icon">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div>
                            <div class="metric-value">{{ overview_data.metrics.hotBrand }}</div>
                            <div class="metric-label">热门品牌</div>
                        </div>
                    </div>
                    <div class="trend-chart">
                        <small>{{ overview_data.trendChart.title }}<br><em>数据更新: {{ overview_data.lastUpdated | date: "%Y-%m-%d %H:%M" }} | 来源: {{ overview_data.dataSource }}</em></small>
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
        <div class="row g-6">
            {% for kpi in kpis_data.kpis %}
            <div class="col-md-6 col-lg-3">
                <div class="kpi-card">
                    <div class="kpi-icon">
                        {% if kpi.id == "keyboard-price" %}
                        <i class="fas fa-keyboard"></i>
                        {% elsif kpi.id == "wireless-mouse" %}
                        <i class="fas fa-mouse"></i>
                        {% elsif kpi.id == "high-refresh-display" %}
                        <i class="fas fa-tv"></i>
                        {% elsif kpi.id == "market-growth" %}
                        <i class="fas fa-chart-bar"></i>
                        {% endif %}
                    </div>
                    <div class="kpi-value">{{ kpi.value }}</div>
                    <div class="kpi-label">{{ kpi.title }}</div>
                    {% if kpi.trendType == "up" %}
                    <span class="kpi-badge">
                        <i class="fas fa-arrow-up"></i> {{ kpi.trend }}
                    </span>
                    {% elsif kpi.trendType == "record" %}
                    <span class="kpi-badge info" style="background: rgba(6, 182, 212, 0.32); color: #06b6d4; border-color: rgba(6, 182, 212, 0.4);">
                        <i class="fas fa-chart-line"></i> {{ kpi.trend }}
                    </span>
                    {% elsif kpi.trendType == "down" %}
                    <span class="kpi-badge warning" style="background: rgba(245, 158, 11, 0.32); color: #f59e0b; border-color: rgba(245, 158, 11, 0.4);">
                        <i class="fas fa-arrow-down"></i> {{ kpi.trend }}
                    </span>
                    {% else %}
                    <span class="kpi-badge">
                        {{ kpi.trend }}
                    </span>
                    {% endif %}
                    {% if kpi.miniTrend %}
                    <div class="mini-trend">
                        <div class="mini-trend-bar"></div>
                    </div>
                    {% endif %}
                    <div class="kpi-source">
                        <small>时间范围: {{ kpi.timeRange }} | 来源: {{ kpi.dataSource }}</small>
                    </div>
                </div>
            </div>
            {% endfor %}
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
                <div class="row g-6">
                    {% assign daily_reports = site.posts | where: "categories", "daily" | reverse %}
                    {% for post in daily_reports limit:3 %}
                    <div class="col-md-6 col-lg-4">
                        <div class="report-card">
                            <div class="report-header">
                                <span class="report-type">日报</span>
                                <span class="report-date">{{ post.date | date: "%m/%d" }}</span>
                            </div>
                            <h4 class="report-title">{{ post.title | replace: "2026年", "" | replace: "外设行业日报", "" }}</h4>
                            <p class="report-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                            <div class="report-meta">
                                {% for brand in post.brands limit:1 %}
                                <span class="brand-tag">{{ brand }}</span>
                                {% endfor %}
                                <span class="importance-badge {% if post.importance == 'high' %}high{% elsif post.importance == 'critical' %}critical{% endif %}">重要性: {% if post.importance == 'high' %}高{% elsif post.importance == 'critical' %}极高{% else %}中{% endif %}</span>
                            </div>
                            <a href="{{ post.url | relative_url }}" class="read-more">查看详情 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
            
            <!-- Weekly Tab -->
            <div class="tab-pane fade" id="weekly" role="tabpanel">
                <div class="row g-6">
                    {% assign weekly_reports = site.posts | where: "categories", "weekly" | reverse %}
                    {% for post in weekly_reports limit:3 %}
                    <div class="col-md-6 col-lg-4">
                        <div class="report-card">
                            <div class="report-header">
                                <span class="report-type" style="background: linear-gradient(135deg, var(--primary), #f72585);">周报</span>
                                <span class="report-date">{{ post.date | date: "%m/%d" }}</span>
                            </div>
                            <h4 class="report-title">{{ post.title | replace: "2026年", "" | replace: "外设市场周报", "" }}</h4>
                            <p class="report-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                            <div class="report-meta">
                                {% for brand in post.brands limit:1 %}
                                <span class="brand-tag" style="background: rgba(247, 37, 133, 0.32); color: #f72585; border-color: rgba(247, 37, 133, 0.4);">{{ brand }}</span>
                                {% endfor %}
                                <span class="importance-badge {% if post.importance == 'high' %}high{% elsif post.importance == 'critical' %}critical{% endif %}">重要性: {% if post.importance == 'high' %}高{% elsif post.importance == 'critical' %}极高{% else %}中{% endif %}</span>
                            </div>
                            <a href="{{ post.url | relative_url }}" class="read-more">查看详情 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
            
            <!-- Monthly Tab -->
            <div class="tab-pane fade" id="monthly" role="tabpanel">
                <div class="row g-6">
                    {% assign monthly_reports = site.posts | where: "categories", "monthly" | reverse %}
                    {% for post in monthly_reports limit:3 %}
                    <div class="col-md-6 col-lg-4">
                        <div class="report-card">
                            <div class="report-header">
                                <span class="report-type" style="background: linear-gradient(135deg, var(--primary), #7209b7);">月报</span>
                                <span class="report-date">{{ post.date | date: "%m/%d" }}</span>
                            </div>
                            <h4 class="report-title">{{ post.title | replace: "2026年", "" | replace: "外设市场月报", "" }}</h4>
                            <p class="report-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                            <div class="report-meta">
                                {% for brand in post.brands limit:1 %}
                                <span class="brand-tag" style="background: rgba(114, 9, 183, 0.32); color: #7209b7; border-color: rgba(114, 9, 183, 0.4);">{{ brand }}</span>
                                {% endfor %}
                                <span class="importance-badge {% if post.importance == 'high' %}high{% elsif post.importance == 'critical' %}critical{% endif %}">重要性: {% if post.importance == 'high' %}高{% elsif post.importance == 'critical' %}极高{% else %}中{% endif %}</span>
                            </div>
                            <a href="{{ post.url | relative_url }}" class="read-more">查看详情 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
            
            <!-- Summary Tab -->
            <div class="tab-pane fade" id="summary" role="tabpanel">
                <div class="row g-6">
                    {% assign summary_reports = site.posts | where: "categories", "summary" | reverse %}
                    {% for post in summary_reports limit:3 %}
                    <div class="col-md-6 col-lg-4">
                        <div class="report-card">
                            <div class="report-header">
                                <span class="report-type" style="background: linear-gradient(135deg, var(--primary), #06d6a0);">总结</span>
                                <span class="report-date">{{ post.date | date: "%m/%d" }}</span>
                            </div>
                            <h4 class="report-title">{{ post.title }}</h4>
                            <p class="report-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                            <div class="report-meta">
                                {% for brand in post.brands limit:1 %}
                                <span class="brand-tag" style="background: rgba(6, 214, 160, 0.32); color: #06d6a0; border-color: rgba(6, 214, 160, 0.4);">{{ brand }}</span>
                                {% endfor %}
                                <span class="importance-badge {% if post.importance == 'high' %}high{% elsif post.importance == 'critical' %}critical{% endif %}">重要性: {% if post.importance == 'high' %}高{% elsif post.importance == 'critical' %}极高{% else %}中{% endif %}</span>
                            </div>
                            <a href="{{ post.url | relative_url }}" class="read-more">查看详情 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</div>
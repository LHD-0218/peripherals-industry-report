---
layout: default
title: 外设行业报告 - 专业洞察，数据驱动
---

<!-- Hero Section -->
<div class="hero-section">
    <div class="container text-center">
        <h1 class="display-4 fw-bold">外设行业报告</h1>
        <p class="lead">专业的外设市场分析平台，提供日报、周报、月报和深度总结</p>
        <a href="/reports/daily/" class="btn btn-light btn-lg mt-3">查看最新日报</a>
    </div>
</div>

<div class="container py-5">
    <!-- Report Types Navigation -->
    <div class="row mb-5">
        <div class="col-12">
            <ul class="nav nav-pills justify-content-center report-type-nav" id="reportTabs" role="tablist">
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
        </div>
    </div>

    <!-- Report Content Tabs -->
    <div class="tab-content" id="reportTabContent">
        <!-- Daily Reports -->
        <div class="tab-pane fade show active" id="daily" role="tabpanel">
            <div class="row g-4">
                {% assign daily_reports = site.posts | where_exp: "post", "post.tags contains '日报'" | reverse %}
                {% for post in daily_reports limit:3 %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            <span class="category-badge mb-2">日报</span>
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 80 }}</p>
                            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
                {% if daily_reports.size > 3 %}
                <div class="col-12 text-center">
                    <a href="/reports/daily/" class="btn btn-primary">查看更多日报</a>
                </div>
                {% endif %}
            </div>
        </div>

        <!-- Weekly Reports -->
        <div class="tab-pane fade" id="weekly" role="tabpanel">
            <div class="row g-4">
                {% assign weekly_reports = site.posts | where_exp: "post", "post.tags contains '周报'" | reverse %}
                {% for post in weekly_reports limit:3 %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #f72585);">周报</span>
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 80 }}</p>
                            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
                {% if weekly_reports.size > 3 %}
                <div class="col-12 text-center">
                    <a href="/reports/weekly/" class="btn btn-primary">查看更多周报</a>
                </div>
                {% endif %}
            </div>
        </div>

        <!-- Monthly Reports -->
        <div class="tab-pane fade" id="monthly" role="tabpanel">
            <div class="row g-4">
                {% assign monthly_reports = site.posts | where_exp: "post", "post.tags contains '月报'" | reverse %}
                {% for post in monthly_reports limit:3 %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #7209b7);">月报</span>
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 80 }}</p>
                            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
                {% if monthly_reports.size > 3 %}
                <div class="col-12 text-center">
                    <a href="/reports/monthly/" class="btn btn-primary">查看更多月报</a>
                </div>
                {% endif %}
            </div>
        </div>

        <!-- Summary Reports -->
        <div class="tab-pane fade" id="summary" role="tabpanel">
            <div class="row g-4">
                {% assign summary_reports = site.posts | where_exp: "post", "post.tags contains '总结'" | reverse %}
                {% for post in summary_reports limit:3 %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #06d6a0);">总结报告</span>
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 80 }}</p>
                            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
                {% if summary_reports.size > 3 %}
                <div class="col-12 text-center">
                    <a href="/reports/summary/" class="btn btn-primary">查看更多总结</a>
                </div>
                {% endif %}
            </div>
        </div>
    </div>

    <!-- Stats Section -->
    <div class="row mt-5">
        <div class="col-12">
            <h2 class="text-center mb-4">行业数据概览</h2>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="stats-card text-center">
                        <i class="fas fa-keyboard fa-2x text-primary mb-3"></i>
                        <h3>¥586</h3>
                        <p class="text-muted">机械键盘均价</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stats-card text-center">
                        <i class="fas fa-mouse fa-2x text-primary mb-3"></i>
                        <h3>63%</h3>
                        <p class="text-muted">无线鼠标占比</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stats-card text-center">
                        <i class="fas fa-tv fa-2x text-primary mb-3"></i>
                        <h3>240Hz</h3>
                        <p class="text-muted">最高刷新率</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stats-card text-center">
                        <i class="fas fa-chart-bar fa-2x text-primary mb-3"></i>
                        <h3>15.3%</h3>
                        <p class="text-muted">市场增长率</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
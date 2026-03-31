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
    <!-- Latest Daily Report -->
    <div class="row mb-5">
        <div class="col-12">
            <h2 class="text-center mb-4">最新日报</h2>
            {% assign latest_daily = site.posts | where_exp: "post", "post.tags contains '日报'" | reverse | first %}
            {% if latest_daily %}
            <div class="card report-card">
                <div class="card-body">
                    <span class="category-badge mb-2">日报</span>
                    <h3 class="card-title">{{ latest_daily.title }}</h3>
                    <p class="card-text text-muted small">{{ latest_daily.date | date: "%Y年%m月%d日" }}</p>
                    <p class="card-text">{{ latest_daily.content | strip_html | truncate: 200 }}</p>
                    <a href="{{ latest_daily.url | relative_url }}" class="btn btn-primary">阅读详情</a>
                </div>
            </div>
            {% else %}
            <div class="text-center py-5">
                <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
                <h4>暂无日报内容</h4>
                <p class="text-muted">敬请期待最新的外设行业日报！</p>
            </div>
            {% endif %}
        </div>
    </div>

    <!-- All Report Types -->
    <div class="row mb-5">
        <div class="col-12">
            <h2 class="text-center mb-4">报告分类</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card text-center h-100">
                        <div class="card-body d-flex flex-column">
                            <i class="fas fa-sun fa-2x text-primary mb-3"></i>
                            <h5 class="card-title">日报</h5>
                            <p class="card-text flex-grow-1">每日市场动态和新品发布</p>
                            <a href="/reports/daily/" class="btn btn-outline-primary mt-auto">查看日报</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card text-center h-100">
                        <div class="card-body d-flex flex-column">
                            <i class="fas fa-calendar-week fa-2x text-primary mb-3"></i>
                            <h5 class="card-title">周报</h5>
                            <p class="card-text flex-grow-1">每周趋势汇总和深度分析</p>
                            <a href="/reports/weekly/" class="btn btn-outline-primary mt-auto">查看周报</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card text-center h-100">
                        <div class="card-body d-flex flex-column">
                            <i class="fas fa-calendar-alt fa-2x text-primary mb-3"></i>
                            <h5 class="card-title">月报</h5>
                            <p class="card-text flex-grow-1">每月市场数据和战略洞察</p>
                            <a href="/reports/monthly/" class="btn btn-outline-primary mt-auto">查看月报</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card text-center h-100">
                        <div class="card-body d-flex flex-column">
                            <i class="fas fa-chart-line fa-2x text-primary mb-3"></i>
                            <h5 class="card-title">总结报告</h5>
                            <p class="card-text flex-grow-1">季度年度综合研究报告</p>
                            <a href="/reports/summary/" class="btn btn-outline-primary mt-auto">查看总结</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Reports -->
    <div class="row mb-5">
        <div class="col-12">
            <h2 class="text-center mb-4">近期报告</h2>
            <div class="row g-4">
                {% assign recent_reports = site.posts | reverse | limit:6 %}
                {% for post in recent_reports %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            {% if post.tags contains "日报" %}
                            <span class="category-badge mb-2">日报</span>
                            {% elsif post.tags contains "周报" %}
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #f72585);">周报</span>
                            {% elsif post.tags contains "月报" %}
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #7209b7);">月报</span>
                            {% elsif post.tags contains "总结" %}
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #06d6a0);">总结报告</span>
                            {% endif %}
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 80 }}</p>
                            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>

    <!-- Stats Section -->
    <div class="row">
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